import CalendlyEmbed from './CalendlyEmbed';
import { CALENDLY_URL, CALENDLY_EMBED_URL } from '../lib/calendly';

const POINTS = [
  {
    title: '30 minutes, no pitch deck',
    description: 'We walk your ICP, current outbound motion, and where pipeline is actually stalling.',
  },
  {
    title: 'Straight answer on fit',
    description: 'If a dedicated SDR seat is not the right call for your stage, we will tell you on the call.',
  },
  {
    title: 'Scope and timing',
    description: 'Leave with a clear view of ramp time, what we run, and what a pilot looks like.',
  },
];

export default function BookCall() {
  return (
    <section id="book" className="section-padding">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <div className="text-section-label">Book a call</div>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink mb-4 leading-tight">
              Pick a time that works for you.
            </h2>
            <p className="text-lg text-slate-200 leading-relaxed">
              Grab a 30 minute discovery call directly on the calendar. You will get a confirmation and a
              calendar invite straight away.
            </p>

            <ul className="mt-10 space-y-6">
              {POINTS.map((point) => (
                <li key={point.title} className="flex items-start gap-4">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" aria-hidden />
                  <div>
                    <h3 className="font-display text-lg font-semibold text-ink mb-1.5">{point.title}</h3>
                    <p className="text-slate-200 leading-relaxed">{point.description}</p>
                  </div>
                </li>
              ))}
            </ul>

            <p className="text-sm text-muted mt-10 leading-relaxed">
              Prefer email?{' '}
              <a href="#contact" className="text-primary hover:underline">
                Send us a message
              </a>{' '}
              or{' '}
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                open the booking page in a new tab
              </a>
              .
            </p>
          </div>

          <div className="lg:col-span-7">
            <CalendlyEmbed url={CALENDLY_EMBED_URL} />
          </div>
        </div>
      </div>
    </section>
  );
}
