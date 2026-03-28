import { useState, useEffect } from 'react';
import siteContent from '../../content/site.json';

export default function ProcessSteps() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => setIsVisible(true), []);
  const p = siteContent.process;
  const steps = p.steps || [];

  return (
    <section id="process" className="py-24 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className={`text-center mb-20 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
          <div className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">{p.label}</div>
          <h2 className="text-4xl md:text-5xl font-bold text-ink mb-8 max-w-4xl mx-auto leading-tight">{p.title}</h2>
          <p className="text-xl md:text-2xl text-muted max-w-3xl mx-auto leading-relaxed">{p.subtitle}</p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-2 bg-gradient-to-r from-primary via-accent to-primary transform -translate-y-1/2 rounded-full opacity-30 shadow-lg" />

          <div className="grid lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative ${isVisible ? 'fade-in' : 'opacity-0'}`}
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <div className="bg-white rounded-2xl shadow-xl p-8 h-full hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-blue-700 text-white rounded-full font-bold text-xl mx-auto mb-6 shadow-xl">
                    {index + 1}
                  </div>
                  <div className="text-center">
                    <h3 className="text-lg font-bold text-ink mb-4 leading-tight">{step.title}</h3>
                    <p className="text-muted leading-relaxed text-sm">{step.description}</p>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center mt-8">
                    <div className="w-10 h-10 bg-gradient-to-br from-accent to-green-600 rounded-full flex items-center justify-center shadow-lg">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
