import { useState } from 'react';

function FaqItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-white/10">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full py-5 flex items-start justify-between gap-4 text-left"
        aria-expanded={open}
      >
        <span className="font-display text-lg font-semibold text-ink leading-snug">{question}</span>
        <span className="text-primary flex-shrink-0 mt-0.5" aria-hidden>
          <svg className={`w-5 h-5 transition-transform duration-200 ${open ? 'rotate-45' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </span>
      </button>
      {open && (
        <div className="pb-5 text-slate-200 leading-relaxed pr-8">
          {answer}
        </div>
      )}
    </div>
  );
}

export default function FaqSection({ faqs }) {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };

  return (
    <section className="section-padding">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink mb-8">
          Frequently asked questions
        </h2>
        <div className="border-t border-white/10">
          {faqs.map((faq) => (
            <FaqItem key={faq.q} question={faq.q} answer={faq.a} />
          ))}
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </section>
  );
}
