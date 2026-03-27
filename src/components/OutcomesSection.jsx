import { useState, useEffect } from 'react';
import siteContent from '../../content/site.json';

export default function OutcomesSection() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => setIsVisible(true), []);
  const c = siteContent.outcomes;

  return (
    <section id="outcomes" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
          <div className="text-section-label mb-4">{c.label}</div>
          <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4 max-w-3xl mx-auto">{c.title}</h2>
          <p className="text-xl text-muted max-w-3xl mx-auto leading-relaxed">{c.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {c.items.map((item, i) => (
            <div key={i} className={`card p-8 ${isVisible ? 'fade-in' : 'opacity-0'}`} style={{ animationDelay: `${0.08 * i}s` }}>
              <h3 className="text-xl font-bold text-ink mb-3">{item.title}</h3>
              <p className="text-muted leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        <div className={`mt-12 text-center ${isVisible ? 'fade-in' : 'opacity-0'}`}>
          <a
            href={siteContent.calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 btn-hover"
          >
            Book a Discovery Call
          </a>
        </div>
      </div>
    </section>
  );
}
