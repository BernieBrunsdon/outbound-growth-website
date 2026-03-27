import { useState, useEffect } from 'react';
import siteContent from '../../content/site.json';

export default function SolutionSection() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => setIsVisible(true), []);
  const c = siteContent.solution;

  return (
    <section id="solution" className="py-24 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className={`text-center mb-16 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
          <div className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">{c.label}</div>
          <h2 className="text-4xl md:text-5xl font-bold text-ink mb-6 max-w-4xl mx-auto">{c.title}</h2>
          <p className="text-xl text-muted max-w-3xl mx-auto leading-relaxed">{c.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {c.points.map((point, i) => (
            <div
              key={i}
              className={`bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300 ${isVisible ? 'fade-in' : 'opacity-0'}`}
              style={{ animationDelay: `${0.08 * i}s` }}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <span className="text-primary font-bold text-lg">{i + 1}</span>
              </div>
              <h3 className="text-xl font-bold text-ink mb-3">{point.title}</h3>
              <p className="text-muted leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>

        <div className={`mt-14 text-center ${isVisible ? 'fade-in' : 'opacity-0'}`}>
          <a
            href={siteContent.calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all duration-200 btn-hover shadow-xl"
          >
            Book a Discovery Call
          </a>
        </div>
      </div>
    </section>
  );
}
