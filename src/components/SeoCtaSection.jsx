import Link from 'next/link';
import CalendlyEmbed from './CalendlyEmbed';
import { CALENDLY_URL, CALENDLY_EMBED_URL } from '../lib/calendly';

export default function SeoCtaSection({ heading, text }) {
  return (
    <section id="book" className="section-padding">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink mb-4 leading-tight">
              {heading || 'Ready to build your outbound pipeline?'}
            </h2>
            <p className="text-lg text-slate-200 leading-relaxed">
              {text || 'Book a 30-minute discovery call. We will walk through your ICP, outbound goals, and whether a dedicated SDR seat is the right fit.'}
            </p>
            <p className="text-sm text-muted mt-8 leading-relaxed">
              Prefer email?{' '}
              <Link href="/#contact" className="text-primary hover:underline">
                Send us a message
              </Link>{' '}
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
