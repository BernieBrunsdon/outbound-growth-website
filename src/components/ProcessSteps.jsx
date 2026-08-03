import { useBookDemoModal } from '../context/BookDemoModalContext';

export default function ProcessSteps() {
  const { openModal } = useBookDemoModal();

  return (
    <section id="process" className="py-20 md:py-24">
      <div id="pricing" aria-hidden="true" className="relative -top-24" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl">
          <div className="text-section-label">Engagement</div>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink leading-tight">
            A dedicated seat. Stack included.
          </h2>
          <p className="text-lg text-muted mt-4 leading-relaxed">
            Managed outbound capacity for less than the fully loaded cost of building the same seat in-house.
            Tell us about your ICP and we will come back with a clear quote.
          </p>
        </div>

        <div className="mt-12 grid lg:grid-cols-12 border border-white/10 bg-surface/70 backdrop-blur-sm overflow-hidden">
          <div className="lg:col-span-7 p-8 md:p-12">
            <h3 className="font-display text-xl font-semibold text-ink">Dedicated SDR service</h3>
            <p className="text-muted mt-3 text-lg leading-relaxed max-w-xl">
              A managed, South Africa-based SDR seat embedded in your go-to-market motion.
            </p>

            <ul className="mt-8 space-y-4">
              {[
                '1 dedicated SDR (native English, US/UK timezone overlap)',
                'Full omnichannel tech stack included (Apollo, CRM, sending infrastructure)',
                'Campaign management, strategy, and QA',
                '24/7 access to OG Pulse',
                'Focus on qualified show-up rates',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-accent mt-1.5 flex-shrink-0" aria-hidden>
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.2}
                        d="M5 12l5 5L20 7"
                      />
                    </svg>
                  </span>
                  <span className="text-ink font-medium leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5 p-8 md:p-12 bg-panel/80 border-t lg:border-t-0 lg:border-l border-white/10 flex flex-col">
            <p className="text-sm font-semibold text-muted mb-3">Next step</p>
            <h3 className="font-display text-2xl font-semibold text-ink leading-tight">
              Get a quote for your seat
            </h3>
            <p className="text-sm text-muted mt-4 leading-relaxed">
              Share your market, volume goals, and timeline. We will reply with fit, scope, and pricing for a pilot.
            </p>

            <p className="text-sm text-muted mt-6 leading-relaxed">
              No setup fees. No long-term lock-in. Cancel anytime after the initial 90-day pilot.
            </p>

            <button
              type="button"
              onClick={() => openModal()}
              className="w-full mt-8 bg-primary text-white font-semibold rounded-lg py-3.5 hover:bg-primary-dark transition-colors"
            >
              Get a Quote
            </button>

            <div className="mt-8 pt-8 border-t border-white/10">
              <p className="text-xs uppercase tracking-wide text-muted font-semibold mb-3">Replaces</p>
              <div className="space-y-2 text-sm text-slate-200">
                <div>Hiring and managing internal SDR talent</div>
                <div>Separate outbound software subscriptions</div>
                <div>Campaign strategy, QA, and reporting overhead</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
