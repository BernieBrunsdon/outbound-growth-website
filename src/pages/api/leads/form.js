// POST /api/leads/form  - called by contactSubmit.js alongside EmailJS.
import { notifyLead } from '../../../lib/notifyLead';

const clean = (v, max = 500) => (typeof v === 'string' ? v.trim().slice(0, max) : '');

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ message: 'Method not allowed' });

  const body = req.body || {};
  const email = clean(body.email, 200);
  // Basic spam guard: require a plausible email; `website_url` is a hidden honeypot field if ever added
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || clean(body.website_url)) {
    return res.status(200).json({ ok: true });
  }

  await notifyLead({
    source: body.source === 'Demo request' ? 'Demo request' : 'Form',
    name: clean(body.name, 200),
    email,
    company: clean(body.company, 200),
    phone: clean(body.phone, 50),
    message: clean(body.message, 3000),
  });

  return res.status(200).json({ ok: true });
}
