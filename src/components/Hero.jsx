import { useState, useEffect } from 'react';
import Image from 'next/image';
import siteContent from '../../content/site.json';
import { useBookDemoModal } from '../context/BookDemoModalContext';

export default function Hero() {
  const { openModal } = useBookDemoModal();
  const [isVisible, setIsVisible] = useState(false);
  const hero = siteContent.hero;

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="hero" className="bg-white pt-28 md:pt-32 lg:pt-28 pb-24 lg:pb-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <div className={`space-y-8 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
            <div>
              <p className="text-sm font-semibold tracking-wider text-blue-600 uppercase mb-4">
                Outbound-Growth · Global Outbound Teams · Multi-Industry
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-[3.6rem] font-extrabold tracking-tight text-slate-900 leading-[0.98] max-w-3xl">
                {hero.headline}
              </h1>
              <p className="text-lg lg:text-xl text-slate-600 mt-4 leading-relaxed max-w-2xl">
                {hero.subheadline}
              </p>
            </div>

            <ul className="space-y-4">
              {(hero.bullets || []).map((b, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-0.5 text-[#06A77D] flex-shrink-0" aria-hidden>
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </span>
                  <span className="font-medium text-slate-800">
                    {b}
                  </span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-6 pt-2">
              <button
                type="button"
                onClick={() => openModal()}
                className="bg-[#0B63D6] text-white px-8 py-4 rounded-lg font-semibold text-lg text-center hover:bg-blue-700 transition-all duration-200 shadow-lg"
              >
                {hero.primary_cta.label}
              </button>
              <a
                href={hero.secondary_cta.href}
                className="bg-white text-slate-700 border border-slate-300 px-8 py-4 rounded-lg font-semibold text-lg text-center hover:bg-slate-50 transition-all duration-200 shadow-sm"
              >
                {hero.secondary_cta.label}
              </a>
            </div>
          </div>

          <div className={`relative ${isVisible ? 'fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            <div className="relative rounded-2xl border border-slate-200 bg-white p-3 md:p-4 shadow-[0_30px_80px_rgba(15,23,36,0.18)]">
              <div className="overflow-hidden rounded-2xl">
                <Image
                  src="/images/og-pulse-dashboard-preview.png"
                  alt="OG Pulse outbound dashboard preview"
                  width={1280}
                  height={768}
                  className="w-full h-auto object-cover scale-[1.24] -translate-x-5 -translate-y-5"
                  priority
                />
              </div>
              <div className="px-2 pt-5 pb-2">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#06A77D]" aria-hidden />
                  <p className="text-sm font-semibold tracking-wide text-slate-900 uppercase">
                    Live Engine
                  </p>
                </div>
                <p className="text-base text-slate-600 leading-relaxed">
                  Real-time visibility into activity, meetings, and execution quality through OG Pulse.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
