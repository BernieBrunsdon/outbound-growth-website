// Server-only: posts a new inbound lead to the #inbound-leads Slack channel.
// Env: SLACK_LEADS_WEBHOOK_URL (Slack Incoming Webhook URL). Never import this in client code.

const ICON = {
  Form: ':large_green_circle:',
  'Demo request': ':large_green_circle:',
  Calendar: ':calendar:',
  Email: ':envelope:',
};

function formatMeetingTime(iso) {
  if (!iso) return undefined;
  try {
    return (
      new Date(iso).toLocaleString('en-ZA', {
        timeZone: 'Africa/Johannesburg',
        dateStyle: 'medium',
        timeStyle: 'short',
      }) + ' SAST'
    );
  } catch {
    return iso;
  }
}

/**
 * @param {{ source: string, name?: string, email?: string, company?: string, phone?: string,
 *           website?: string, message?: string, meetingTime?: string }} lead
 */
export async function notifyLead(lead) {
  const url = process.env.SLACK_LEADS_WEBHOOK_URL;
  if (!url) {
    console.error('[notifyLead] SLACK_LEADS_WEBHOOK_URL not set');
    return false;
  }

  const fields = [
    ['Name', lead.name],
    ['Email', lead.email],
    ['Company', lead.company],
    ['Phone', lead.phone],
    ['Website', lead.website],
    ['Meeting', formatMeetingTime(lead.meetingTime)],
  ]
    .filter(([, v]) => v && String(v).trim() !== '')
    .map(([k, v]) => ({ type: 'mrkdwn', text: `*${k}:*\n${String(v).slice(0, 300)}` }));

  const headline = `${ICON[lead.source] || ':bell:'} New ${lead.source.toUpperCase()} lead: ${
    lead.name || lead.email || 'Unknown'
  }`;

  const blocks = [{ type: 'header', text: { type: 'plain_text', text: headline.slice(0, 150), emoji: true } }];
  if (fields.length) blocks.push({ type: 'section', fields: fields.slice(0, 10) });
  if (lead.message) {
    blocks.push({
      type: 'section',
      text: { type: 'mrkdwn', text: `*Message:*\n>${String(lead.message).slice(0, 2500).replace(/\n/g, '\n>')}` },
    });
  }

  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: headline, blocks }), // `text` = phone push preview
    });
    if (!res.ok) {
      console.error('[notifyLead] Slack error', res.status, await res.text());
      return false;
    }
    return true;
  } catch (err) {
    console.error('[notifyLead] failed', err);
    return false;
  }
}
