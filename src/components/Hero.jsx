import { useState, useEffect } from 'react';
import Image from 'next/image';
import siteContent from '../../content/site.json';
import AppLinkText from './AppLinkText';
import { useBookDemoModal } from '../context/BookDemoModalContext';

export default function Hero() {
  const { openModal } = useBookDemoModal();
  const [isVisible, setIsVisible] = useState(false);
  const [activeVisual, setActiveVisual] = useState(0);
  const hero = siteContent.hero;
  const visuals = [
    {
      src: '/images/og-pulse-dashboard-preview.png',
      alt: 'OG Pulse dashboard preview on a laptop',
      caption: 'Real visibility into daily SDR activity and meetings, so you can track execution without guesswork.',
    },
    {
      src: '/images/og-pulse-multidevice-preview.png',
      alt: 'OG Pulse dashboard shown on tablet and mobile devices',
      caption: 'Monitor the same performance view across desktop, tablet, and mobile.',
    },
  ];
  const backgroundVisual = visuals[(activeVisual + 1) % visuals.length];
  const activeVisualData = visuals[activeVisual];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveVisual((current) => (current + 1) % visuals.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [visuals.length]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-white pt-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className={`space-y-8 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
            <div className="space-y-6">
              <p className="text-sm font-semibold text-primary uppercase tracking-wider">
                Outbound-Growth · Global Outbound Teams · Multi-Industry
              </p>
              <h1 className="text-4xl font-bold text-ink leading-tight">{hero.headline}</h1>
              <p className="text-xl md:text-2xl text-muted leading-relaxed max-w-2xl">
                <AppLinkText>{hero.subheadline}</AppLinkText>
              </p>
            </div>

            <ul className="space-y-3 text-ink">
              {(hero.bullets || []).map((b, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-accent flex-shrink-0" aria-hidden />
                  <span className="font-medium">
                    <AppLinkText>{b}</AppLinkText>
                  </span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-6 pt-2">
              <button
                type="button"
                onClick={() => openModal()}
                className="bg-primary text-white px-10 py-5 rounded-xl font-bold text-lg text-center hover:bg-blue-700 transition-all duration-200 btn-hover shadow-xl"
              >
                {hero.primary_cta.label}
              </button>
              <a
                href={hero.secondary_cta.href}
                className="border-2 border-primary text-primary px-10 py-5 rounded-xl font-bold text-lg text-center hover:bg-primary hover:text-white transition-all duration-200 btn-hover"
              >
                {hero.secondary_cta.label}
              </a>
            </div>
          </div>

          <div className={`relative ${isVisible ? 'fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            <div className="relative pb-12">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl transform rotate-3" />

              <div className="absolute inset-0 translate-x-3 translate-y-3 md:translate-x-4 md:translate-y-4 scale-[0.97] opacity-75 pointer-events-none">
                <div className="h-full bg-white rounded-2xl shadow-xl p-4 md:p-5 border border-gray-100">
                  <div className="overflow-hidden rounded-xl h-full">
                    <Image
                      src={backgroundVisual.src}
                      alt=""
                      width={1280}
                      height={768}
                      className="w-full h-full object-cover scale-[1.2] -translate-x-4 -translate-y-4"
                    />
                  </div>
                </div>
              </div>

              <div className="relative bg-white rounded-2xl shadow-2xl p-4 md:p-5 transform -rotate-1 border border-gray-100">
                <div className="overflow-hidden rounded-xl">
                  <Image
                    src={activeVisualData.src}
                    alt={activeVisualData.alt}
                    width={1280}
                    height={768}
                    className="w-full h-auto object-cover scale-[1.2] -translate-x-4 -translate-y-4"
                    priority
                  />
                </div>
                <div className="pt-4 px-1">
                  <p className="text-sm font-semibold text-ink">
                    Live Engine: <AppLinkText>OG Pulse Dashboard</AppLinkText>
                  </p>
                  <p className="text-xs text-muted mt-1">
                    {activeVisualData.caption}
                  </p>
                </div>
              </div>

              <div className="absolute left-1/2 -bottom-2 -translate-x-1/2 flex items-center gap-3 bg-white/95 border border-gray-100 rounded-full px-3 py-2 shadow-lg">
                <button
                  type="button"
                  onClick={() => setActiveVisual((current) => (current - 1 + visuals.length) % visuals.length)}
                  className="w-8 h-8 rounded-full border border-gray-200 text-ink hover:bg-gray-50 transition-colors"
                  aria-label="Show previous preview"
                >
                  <span aria-hidden>&larr;</span>
                </button>
                <div className="flex items-center gap-2">
                  {visuals.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setActiveVisual(i)}
                      aria-label={`Show preview ${i + 1}`}
                      className={`h-2.5 rounded-full transition-all ${
                        i === activeVisual ? 'w-6 bg-primary' : 'w-2.5 bg-gray-300 hover:bg-gray-400'
                      }`}
                    />
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => setActiveVisual((current) => (current + 1) % visuals.length)}
                  className="w-8 h-8 rounded-full border border-gray-200 text-ink hover:bg-gray-50 transition-colors"
                  aria-label="Show next preview"
                >
                  <span aria-hidden>&rarr;</span>
                </button>
              </div>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent rounded-full animate-pulse" aria-hidden />
              <div
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary rounded-full animate-pulse"
                style={{ animationDelay: '1s' }}
                aria-hidden
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-muted rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
