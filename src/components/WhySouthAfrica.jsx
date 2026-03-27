import { useState, useEffect } from 'react';
import siteContent from '../../content/site.json';

export default function WhySouthAfrica() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => setIsVisible(true), []);
  const c = siteContent.whySouthAfrica;

  return (
    <section id="why-sa" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
          <div className="text-section-label mb-4">{c.label}</div>
          <h2 className="text-3xl md:text-5xl font-bold text-ink mb-6 max-w-4xl mx-auto">{c.title}</h2>
          <p className="text-xl text-muted max-w-3xl mx-auto leading-relaxed">{c.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {c.points.map((p, i) => (
            <div
              key={i}
              className={`rounded-2xl bg-gray-50 p-8 border border-gray-100 ${isVisible ? 'fade-in' : 'opacity-0'}`}
              style={{ animationDelay: `${0.06 * i}s` }}
            >
              <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-ink mb-2">{p.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
