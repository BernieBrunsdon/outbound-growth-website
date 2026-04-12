import emailjs from 'emailjs-com';

const SERVICE_ID = 'service_7ldexr4';
const TEMPLATE_ID = 'template_uqw2nqh';

/**
 * Send contact / discovery lead via EmailJS (client-side only).
 * Requires `emailjs.init(publicKey)` to have run (see `pages/_app.js`).
 * Template variables: name, email, phone, company, message
 */
export async function submitContactLead({ name, email, phone, company, message }) {
  const templateParams = {
    name,
    email,
    phone: phone ?? '',
    company,
    message,
  };

  return emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams);
}
