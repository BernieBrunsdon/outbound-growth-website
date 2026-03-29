import { useState } from 'react';
import siteContent from '../../content/site.json';
import { submitContactLead } from '../lib/contactSubmit';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
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
      const response = await submitContactLead({
        ...formData,
        type: 'contact_section',
        service: 'Contact form (page footer)',
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          company: '',
          message: '',
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="text-section-label mb-4">Contact</div>
          <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
            Ready to Transform Your Sales?
          </h2>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            Book a consultation or request the pilot pack. We support teams across sectors and regions with flexible
            engagement options.
          </p>
          {siteContent.finalCta?.launch_phase_note ? (
            <p className="text-sm text-muted mt-4 max-w-2xl mx-auto leading-relaxed">
              {siteContent.finalCta.launch_phase_note}
            </p>
          ) : null}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="card p-8">
            <h3 className="text-2xl font-semibold text-ink mb-6">Get in Touch</h3>

            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
                Thank you! Your message has been sent successfully. We&apos;ll get back to you soon.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
                Sorry, there was an error sending your message. Please try again or contact us directly.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-ink mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Your company name"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Tell us about your sales challenges and goals..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 btn-hover disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Book a Discovery Call'}
              </button>
            </form>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-ink mb-6">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-ink">Email</div>
                  <a href={`mailto:${siteContent.site.email}`} className="text-primary hover:underline break-all">
                    {siteContent.site.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div className="space-y-3">
                  <div className="font-semibold text-ink">Phone</div>
                  <div>
                    <div className="text-xs font-medium text-muted uppercase tracking-wide mb-0.5">
                      {siteContent.site.phoneUk.label}
                    </div>
                    <a href={`tel:${siteContent.site.phoneUk.tel}`} className="text-primary hover:underline">
                      {siteContent.site.phoneUk.display}
                    </a>
                  </div>
                  <div>
                    <div className="text-xs font-medium text-muted uppercase tracking-wide mb-0.5">
                      {siteContent.site.phoneUs.label}
                    </div>
                    <a href={`tel:${siteContent.site.phoneUs.tel}`} className="text-primary hover:underline">
                      {siteContent.site.phoneUs.display}
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
