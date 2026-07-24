import { useState } from 'react';
import siteContent from '../../content/site.json';
import { submitContactLead } from '../lib/contactSubmit';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await submitContactLead({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        message: formData.message,
      });
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const fieldClass =
    'w-full px-4 py-3 border border-slate-300 rounded-lg bg-white focus:ring-2 focus:ring-primary focus:border-transparent';

  return (
    <section id="contact" className="section-padding bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <div className="text-section-label">Contact</div>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink mb-4 leading-tight">
            Book a discovery call
          </h2>
          <p className="text-lg text-muted leading-relaxed">
            Tell us about your ICP and capacity goals. We will reply with next steps for a pilot conversation.
          </p>
          {siteContent.finalCta?.launch_phase_note ? (
            <p className="text-sm text-muted mt-4 leading-relaxed">{siteContent.finalCta.launch_phase_note}</p>
          ) : null}
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-7 border border-slate-200 bg-white p-6 md:p-8">
            <h3 className="font-display text-xl font-semibold text-ink mb-6">Send a message</h3>

            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
                Thanks—your message was sent. We will get back to you soon.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
                Something went wrong. Please try again or email us directly.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-ink mb-2">
                    Full name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={fieldClass}
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-ink mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={fieldClass}
                    placeholder="you@company.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-ink mb-2">
                  Phone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className={fieldClass}
                  placeholder="+27 … or your best number"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-ink mb-2">
                  Company *
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  className={fieldClass}
                  placeholder="Company name"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-ink mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className={fieldClass}
                  placeholder="ICP, markets, and what you want from a pilot…"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-white py-3.5 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending…' : 'Book a Discovery Call'}
              </button>
            </form>
          </div>

          <div className="lg:col-span-5">
            <h3 className="font-display text-xl font-semibold text-ink mb-6">Direct contact</h3>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-ink mb-2">Email</div>
                  <div className="space-y-3">
                    <div>
                      <span className="text-sm text-muted">Admin</span>
                      <br />
                      <a href={`mailto:${siteContent.site.email}`} className="text-primary hover:underline break-all">
                        {siteContent.site.email}
                      </a>
                    </div>
                    <div>
                      <span className="text-sm text-muted">Enquiries</span>
                      <br />
                      <a
                        href={`mailto:${siteContent.site.emailEnquiries}`}
                        className="text-primary hover:underline break-all"
                      >
                        {siteContent.site.emailEnquiries}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-ink">Location</div>
                  <div className="text-muted">Cape Town, South Africa</div>
                  <div className="text-sm text-muted">Remote-first</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
