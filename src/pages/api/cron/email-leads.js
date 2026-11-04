// GET /api/cron/email-leads?key=<CRON_SECRET>
// Checks the Hostinger inbox (bernie@) over IMAP for new emails sent to the lead aliases
// and posts each one to Slack. Hit every 5 min by UptimeRobot (which also keeps Render awake).
// Env: IMAP_USER, IMAP_PASSWORD, CRON_SECRET, SLACK_LEADS_WEBHOOK_URL
import { ImapFlow } from 'imapflow';
import { simpleParser } from 'mailparser';
import { notifyLead } from '../../../lib/notifyLead';

// Emails delivered to these aliases count as leads. Spelling must match the real aliases.
const LEAD_ALIASES = ['enquiries@outbound-growth.com', 'admin@outbound-growth.com'];

// Senders to ignore: autoreplies, own team, Calendly (handled by the website embed), tool/billing mail
const IGNORE_SENDERS = [
  'outbound-growth.com',
  'noreply', 'no-reply', 'mailer-daemon', 'postmaster', 'notifications@', 'billing@',
  'calendly.com', 'google.com', 'emailjs',
  'vercel.com', 'supabase', 'brevo', 'sendinblue', 'apollo.io', 'justcall', 'render.com',
  'uptimerobot', 'paypal', 'stripe', 'github.com', 'hostinger', 'firebase',
];

const FREEMAIL = ['gmail.com', 'outlook.com', 'hotmail.com', 'yahoo.com', 'icloud.com', 'live.com'];
const LOGGED_FLAG = '$LeadLogged'; // custom IMAP keyword so each email is only checked once

export default async function handler(req, res) {
  const key = req.query.key || (req.headers.authorization || '').replace(/^Bearer\s+/i, '');
  if (!process.env.CRON_SECRET || key !== process.env.CRON_SECRET) {
    return res.status(401).json({ error: 'unauthorized' });
  }

  const client = new ImapFlow({
    host: 'imap.hostinger.com',
    port: 993,
    secure: true,
    auth: { user: process.env.IMAP_USER, pass: process.env.IMAP_PASSWORD },
    logger: false,
  });

  let posted = 0;
  let skipped = 0;

  try {
    await client.connect();
    const lock = await client.getMailboxLock('INBOX');
    try {
      const mb = client.mailbox;
      if (mb && mb.permanentFlags && !mb.permanentFlags.has('\\*')) {
        throw new Error('Mailbox does not support custom flags; switch to DB-based dedupe');
      }

      const since = new Date(Date.now() - 24 * 60 * 60 * 1000);
      const uids = (await client.search({ since, unKeyword: LOGGED_FLAG }, { uid: true })) || [];
      if (!uids.length) return res.status(200).json({ ok: true, posted, skipped });

      // Collect first (imapflow can't run other commands while a fetch iterator is open)
      const messages = [];
      for await (const m of client.fetch(uids, { source: true }, { uid: true })) {
        if (m.source) messages.push({ uid: m.uid, source: m.source });
      }

      const done = [];
      for (const { uid, source } of messages) {
        const headerBlock = source.toString('utf8').split(/\r?\n\r?\n/)[0].toLowerCase();
        const toAlias = LEAD_ALIASES.some((a) => headerBlock.includes(a));

        const parsed = await simpleParser(source);
        const from = (parsed.from && parsed.from.value && parsed.from.value[0]) || {};
        const fromAddr = (from.address || '').toLowerCase();
        const ignored = IGNORE_SENDERS.some((s) => fromAddr.includes(s));
        const isAutoReply = /auto-?(reply|submitted|generated)|out of office/i.test(
          `${parsed.headers.get('auto-submitted') || ''} ${parsed.subject || ''}`
        );

        if (toAlias && !ignored && !isAutoReply) {
          const domain = fromAddr.split('@')[1] || '';
          const body = (parsed.text || '').split(/\n\s*On .+wrote:/)[0].trim().slice(0, 1500);
          await notifyLead({
            source: 'Email',
            name: from.name || undefined,
            email: from.address,
            website: domain && !FREEMAIL.includes(domain) ? domain : undefined,
            message: `Subject: ${parsed.subject || '-'}\n\n${body}`,
          });
          posted++;
        } else {
          skipped++;
        }
        done.push(uid);
      }

      if (done.length) await client.messageFlagsAdd(done, [LOGGED_FLAG], { uid: true });
    } finally {
      lock.release();
    }
    await client.logout();
    return res.status(200).json({ ok: true, posted, skipped });
  } catch (err) {
    console.error('[email-leads]', err);
    try { await client.logout(); } catch {}
    // 500 makes UptimeRobot alert you if the check breaks
    return res.status(500).json({ ok: false, error: String((err && err.message) || err) });
  }
}
