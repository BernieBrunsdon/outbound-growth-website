import { useState, useEffect } from 'react';
import siteContent from '../../content/site.json';

export default function ServicesGrid() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => setIsVisible(true), []);
  const s = siteContent.services;

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className={`text-center mb-16 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
          <div className="text-section-label mb-4">{s.label}</div>
          <h2 className="text-4xl md:text-5xl font-bold text-ink mb-6">{s.title}</h2>
          <p className="text-xl text-muted max-w-3xl mx-auto leading-relaxed">{s.subtitle}</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div
            className={`bg-gradient-to-br from-primary to-blue-700 rounded-2xl p-10 md:p-12 text-white shadow-xl mb-10 ${isVisible ? 'fade-in' : 'opacity-0'}`}
          >
            <ul className="grid sm:grid-cols-2 gap-4">
              {(s.activities || []).map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1 w-5 h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span className="font-medium leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <p
            className={`text-center text-muted text-lg mb-10 max-w-2xl mx-auto ${isVisible ? 'fade-in' : 'opacity-0'}`}
          >
            {s.closingLine}
          </p>

          <div className={`text-center ${isVisible ? 'fade-in' : 'opacity-0'}`}>
            <a
              href={s.cta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all duration-200 btn-hover shadow-xl"
            >
              {s.cta.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
