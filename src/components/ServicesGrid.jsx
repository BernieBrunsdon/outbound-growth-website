import Image from 'next/image';
import siteContent from '../../content/site.json';
import AppLinkText from './AppLinkText';
import { useBookDemoModal } from '../context/BookDemoModalContext';

export default function ServicesGrid() {
  const { openModal } = useBookDemoModal();
  const s = siteContent.services;

  return (
    <section id="services" className="py-20 md:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <div className="text-section-label">{s.label}</div>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink mb-4">{s.title}</h2>
          <p className="text-lg text-muted leading-relaxed">{s.subtitle}</p>
        </div>

        <ul className="grid sm:grid-cols-2 gap-x-10 gap-y-3 max-w-3xl mb-10">
          {(s.activities || []).map((item) => (
            <li key={item} className="flex items-start gap-3 border-t border-slate-200 pt-3">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" aria-hidden />
              <span className="font-medium text-ink leading-snug">
                <AppLinkText>{item}</AppLinkText>
              </span>
            </li>
          ))}
        </ul>

        <p className="text-muted text-lg mb-10 max-w-2xl">
          <AppLinkText>{s.closingLine}</AppLinkText>
        </p>

        <div className="mb-10 max-w-4xl border border-slate-200 overflow-hidden bg-white">
          <Image
            src="/images/og-pulse-multidevice-preview.png"
            alt="OG Pulse dashboard preview shown on tablet and mobile devices"
            width={1280}
            height={768}
            className="w-full h-auto object-cover"
          />
        </div>

        <button
          type="button"
          onClick={() => openModal()}
          className="inline-block bg-primary text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
        >
          {s.cta.label}
        </button>
      </div>
    </section>
  );
}
