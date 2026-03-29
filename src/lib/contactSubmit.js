/**
 * POST /api/contact — shared by page form and Book a demo modal.
 */
export async function submitContactLead({
  name,
  email,
  company,
  message,
  type = 'discovery_request',
  service = 'Book a demo / discovery request',
}) {
  return fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name,
      email,
      company,
      service,
      message,
      type,
      bookConsultation: false,
    }),
  });
}
