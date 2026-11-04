// POST /api/leads/calendly  - called by CalendlyEmbed when someone books on the website.
// Works on Calendly's free plan (no webhooks needed): the browser sends the invitee URI,
// the server looks up the booking details with a Calendly Personal Access Token.
// Env: CALENDLY_TOKEN (Calendly > Integrations > API & Webhooks > Personal Access Token)
import { notifyLead } from '../../../lib/notifyLead';

const INVITEE_RE = /^https:\/\/api\.calendly\.com\/scheduled_events\/[A-Za-z0-9-]+\/invitees\/[A-Za-z0-9-]+$/;

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ message: 'Method not allowed' });

  const inviteeUri = req.body && req.body.inviteeUri;
  if (typeof inviteeUri !== 'string' || !INVITEE_RE.test(inviteeUri)) {
    return res.status(400).json({ message: 'Invalid invitee' });
  }

  const token = process.env.CALENDLY_TOKEN;
  if (!token) {
    await notifyLead({ source: 'Calendar', message: 'New website booking. Check Calendly for details (CALENDLY_TOKEN not set).' });
    return res.status(200).json({ ok: true });
  }

  try {
    const headers = { Authorization: `Bearer ${token}` };
    const invRes = await fetch(inviteeUri, { headers });
    if (!invRes.ok) throw new Error(`invitee ${invRes.status}`);
    const inv = (await invRes.json()).resource || {};

    let start;
    if (inv.event) {
      const evRes = await fetch(inv.event, { headers });
      if (evRes.ok) start = ((await evRes.json()).resource || {}).start_time;
    }

    const qa = inv.questions_and_answers || [];
    const find = (re) => (qa.find((q) => re.test(q.question)) || {}).answer;

    await notifyLead({
      source: 'Calendar',
      name: inv.name,
      email: inv.email,
      company: find(/company|organi[sz]ation|business/i),
      phone: inv.text_reminder_number || find(/phone|mobile|number/i),
      website: find(/website|url|domain/i),
      message: qa.map((q) => `${q.question}: ${q.answer}`).join('\n') || undefined,
      meetingTime: start,
    });
  } catch (err) {
    console.error('[calendly lead]', err);
    await notifyLead({ source: 'Calendar', message: 'New website booking. Details lookup failed, check Calendly.' });
  }

  return res.status(200).json({ ok: true });
}
