import { useState, useEffect } from 'react';
import siteContent from '../../content/site.json';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-white pt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className={`space-y-8 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
            <div className="space-y-8">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-ink leading-tight">
                {siteContent.hero.headline}
              </h1>
              <p className="text-xl md:text-2xl text-muted leading-relaxed max-w-2xl">
                {siteContent.hero.subheadline}
              </p>
            </div>

            {/* Feature highlights */}
            <div className="flex flex-wrap gap-6 text-sm text-muted">
              <span className="bg-white px-6 py-3 rounded-full border shadow-sm font-medium">Dashboard access</span>
              <span className="bg-white px-6 py-3 rounded-full border shadow-sm font-medium">Monthly reports</span>
              <span className="bg-white px-6 py-3 rounded-full border shadow-sm font-medium">Full transparency</span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-6">
              <a
                href={siteContent.hero.primary_cta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white px-10 py-5 rounded-xl font-bold text-lg text-center hover:bg-blue-700 transition-all duration-200 btn-hover shadow-xl"
              >
                {siteContent.hero.primary_cta.label}
              </a>
              <a
                href={siteContent.hero.secondary_cta.href}
                className="border-2 border-primary text-primary px-10 py-5 rounded-xl font-bold text-lg text-center hover:bg-primary hover:text-white transition-all duration-200 btn-hover"
              >
                {siteContent.hero.secondary_cta.label}
              </a>
            </div>
          </div>

          {/* Right Content - Dashboard Mockup */}
          <div className={`relative ${isVisible ? 'fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl transform rotate-3"></div>
              
              {/* Dashboard Card */}
              <div className="relative bg-white rounded-2xl shadow-2xl p-8 transform -rotate-1">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-ink">SDR Performance Dashboard</h3>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  
                  {/* Metrics Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-primary">47</div>
                      <div className="text-sm text-muted">Calls Today</div>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-accent">12</div>
                      <div className="text-sm text-muted">Meetings Booked</div>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-purple-600">8</div>
                      <div className="text-sm text-muted">Demos Scheduled</div>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-orange-600">23%</div>
                      <div className="text-sm text-muted">Conversion Rate</div>
                    </div>
                  </div>

                  {/* Activity Chart Placeholder */}
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="h-20 bg-gradient-to-r from-primary/20 to-accent/20 rounded flex items-end space-x-1">
                      {[...Array(7)].map((_, i) => (
                        <div
                          key={i}
                          className="bg-primary rounded-t"
                          style={{
                            height: `${Math.random() * 60 + 20}%`,
                            width: '12px'
                          }}
                        ></div>
                      ))}
                    </div>
                    <div className="text-xs text-muted mt-2">Weekly Activity Trend</div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-muted rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}
