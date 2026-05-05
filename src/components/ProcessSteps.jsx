import { useState, useEffect } from 'react';
import { useBookDemoModal } from '../context/BookDemoModalContext';

export default function ProcessSteps() {
  const { openModal } = useBookDemoModal();
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => setIsVisible(true), []);

  return (
    <section id="process" className="py-24 bg-slate-50">
      <div id="pricing" aria-hidden="true" className="relative -top-24" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className={`text-center ${isVisible ? 'fade-in' : 'opacity-0'}`}>
          <div className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">Pricing</div>
          <h2 className="text-4xl font-extrabold text-slate-900 max-w-4xl mx-auto leading-tight">
            One predictable retainer. Zero hidden tech fees.
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mt-4 leading-relaxed">
            The output of an entire internal outbound department, for less than the base salary of an entry-level hire.
          </p>
        </div>

        <div
          className={`max-w-5xl mx-auto mt-12 ${isVisible ? 'fade-in' : 'opacity-0'}`}
          style={{ animationDelay: '0.15s' }}
        >
          <div className="bg-white shadow-2xl rounded-3xl border border-slate-200 overflow-hidden">
            <div className="grid lg:grid-cols-12">
              <div className="lg:col-span-7 p-10 lg:p-12 bg-white">
                <h3 className="text-2xl font-bold text-slate-900">Dedicated SDR Service</h3>
                <p className="text-slate-600 mt-3 text-lg leading-relaxed max-w-2xl">
                  A fully managed, South African-based SDR team embedded in your go-to-market motion.
                </p>

                <ul className="mt-8 space-y-5">
                  {[
                    '1 Dedicated SDR (Native English, US/UK Timezone)',
                    'Full Omnichannel Tech Stack Included (Apollo, CRM, Sending IPs)',
                    'Complete Campaign Management, Strategy & QA',
                    '24/7 Access to the OG Pulse Transparency Dashboard',
                    'Focus on Qualified Show-Up Rates, not just bookings',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-4">
                      <span className="text-[#06A77D] mt-0.5 flex-shrink-0" aria-hidden>
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.2}
                            d="M5 12l5 5L20 7"
                          />
                        </svg>
                      </span>
                      <span className="text-slate-800 font-medium leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="lg:col-span-5 p-10 lg:p-12 bg-blue-50/50 border-t lg:border-t-0 lg:border-l border-slate-200">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-white text-primary text-xs font-semibold uppercase tracking-wide border border-slate-200">
                  Flat monthly retainer
                </div>
                <div className="mt-6">
                  <div className="text-5xl font-extrabold text-slate-900">$3,490 / £2,790</div>
                  <div className="text-sm text-slate-500 font-medium mt-2">per month, flat rate</div>
                </div>

                <p className="text-sm text-slate-600 mt-6 leading-relaxed">
                  No setup fees. No long-term lock-in. Cancel anytime after the initial 90-day pilot.
                </p>

                <button
                  type="button"
                  onClick={() => openModal()}
                  className="w-full mt-8 bg-[#0B63D6] text-white font-bold rounded-xl py-4 hover:bg-blue-700 transition shadow-lg"
                >
                  Book a Discovery Call
                </button>

                <div className="mt-8 pt-8 border-t border-slate-200">
                  <div className="text-xs uppercase tracking-wide text-slate-500 font-semibold mb-3">What this replaces</div>
                  <div className="space-y-2 text-sm text-slate-700">
                    <div>Hiring and managing internal SDR talent</div>
                    <div>Separate outbound software subscriptions</div>
                    <div>Campaign strategy, QA, and reporting overhead</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
