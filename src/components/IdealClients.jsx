import { useState, useEffect } from 'react';
import siteContent from '../../content/site.json';

export default function IdealClients() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => setIsVisible(true), []);
  const c = siteContent.idealClients;

  return (
    <section id="clients" className="py-24 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className={`text-center mb-14 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
          <div className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">{c.label}</div>
          <h2 className="text-4xl md:text-5xl font-bold text-ink mb-6">{c.title}</h2>
          <p className="text-xl text-muted max-w-3xl mx-auto leading-relaxed">{c.subtitle}</p>
        </div>

        <div className={`max-w-4xl mx-auto ${isVisible ? 'fade-in' : 'opacity-0'}`}>
          <div className="bg-white rounded-2xl shadow-xl p-10 border border-gray-100 mb-10">
            <h3 className="text-lg font-bold text-ink mb-4">Primary audience</h3>
            <ul className="space-y-2 mb-8">
              {c.audience.map((a, i) => (
                <li key={i} className="flex items-center text-muted">
                  <span className="w-2 h-2 rounded-full bg-primary mr-3 flex-shrink-0" />
                  {a}
                </li>
              ))}
            </ul>
            <p className="text-muted leading-relaxed border-t border-gray-100 pt-6">{c.companyProfile}</p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-ink mb-4 text-center">Industries we fit well</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {c.industries.map((ind, i) => (
                <span
                  key={i}
                  className="bg-white px-6 py-3 rounded-full border shadow-sm font-semibold text-sm text-ink"
                >
                  {ind}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
