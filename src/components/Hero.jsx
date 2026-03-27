import { useState, useEffect } from 'react';
import siteContent from '../../content/site.json';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const hero = siteContent.hero;

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-white pt-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className={`space-y-8 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
            <div className="space-y-6">
              <p className="text-sm font-semibold text-primary uppercase tracking-wider">
                Outbound SDR-as-a-Service · US &amp; UK SaaS
              </p>
              <h1 className="text-4xl font-bold text-ink leading-tight">{hero.headline}</h1>
              <p className="text-xl md:text-2xl text-muted leading-relaxed max-w-2xl">{hero.subheadline}</p>
            </div>

            <ul className="space-y-3 text-ink">
              {(hero.bullets || []).map((b, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-accent flex-shrink-0" aria-hidden />
                  <span className="font-medium">{b}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-6 pt-2">
              <a
                href={hero.primary_cta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white px-10 py-5 rounded-xl font-bold text-lg text-center hover:bg-blue-700 transition-all duration-200 btn-hover shadow-xl"
              >
                {hero.primary_cta.label}
              </a>
              <a
                href={hero.secondary_cta.href}
                className="border-2 border-primary text-primary px-10 py-5 rounded-xl font-bold text-lg text-center hover:bg-primary hover:text-white transition-all duration-200 btn-hover"
              >
                {hero.secondary_cta.label}
              </a>
            </div>
          </div>

          <div className={`relative ${isVisible ? 'fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl transform rotate-3" />
              <div className="relative bg-white rounded-2xl shadow-2xl p-8 transform -rotate-1">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-ink">SDR activity · your accounts</h3>
                    <div className="w-3 h-3 bg-green-500 rounded-full" aria-hidden />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-primary">—</div>
                      <div className="text-sm text-muted">Calls / week</div>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-accent">—</div>
                      <div className="text-sm text-muted">Meetings booked</div>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-purple-600">—</div>
                      <div className="text-sm text-muted">Replies</div>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-orange-600">—</div>
                      <div className="text-sm text-muted">Touches</div>
                    </div>
                  </div>
                  <p className="text-xs text-muted">
                    Reporting tailored to your cadence—so leadership sees activity and pipeline, not black boxes.
                  </p>
                </div>
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
