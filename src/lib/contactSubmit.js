import emailjs from 'emailjs-com';

const SERVICE_ID = 'service_7ldexr4';
const TEMPLATE_ID = 'template_uqw2nqh';

/**
 * Send contact / discovery lead via EmailJS (client-side only).
 * Requires `emailjs.init(publicKey)` to have run (see `pages/_app.js`).
 * Template variables: name, email, phone, company, message
 * Also posts the lead to Slack via /api/leads/form.
 */
export async function submitContactLead({ name, email, phone, company, message, source = 'Form' }) {
  // Slack alert via our own API. Fire-and-forget: never blocks or breaks the form.
  try {
    fetch('/api/leads/form', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, phone, company, message, source }),
      keepalive: true,
    }).catch(() => {});
  } catch {}

  const templateParams = {
    name,
    email,
    phone: phone ?? '',
    company,
    message,
  };

  return emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams);
}
