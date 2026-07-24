import Image from 'next/image';
import siteContent from '../../content/site.json';
import { useBookDemoModal } from '../context/BookDemoModalContext';

export default function Hero() {
  const { openModal } = useBookDemoModal();
  const hero = siteContent.hero;

  return (
    <section id="hero" className="relative isolate overflow-hidden bg-ink text-white">
      <div className="absolute inset-0" aria-hidden>
        <Image
          src="/images/og-pulse-dashboard-preview.png"
          alt=""
          fill
          priority
          className="object-cover object-left scale-105 opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/92 to-ink/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/40" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 md:py-28 lg:py-32 min-h-[78vh] flex items-end md:items-center">
        <div className="max-w-3xl animate-hero-rise">
          <p className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-5 tracking-tight">
            Outbound-Growth
          </p>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-semibold leading-[1.08] text-white max-w-2xl">
            {hero.headline}
          </h1>
          <p className="mt-5 text-lg md:text-xl text-slate-200 leading-relaxed max-w-xl animate-hero-fade">
            {hero.subheadline}
          </p>
          <div className="mt-9 flex flex-col sm:flex-row gap-3 sm:gap-4 animate-hero-fade">
            <button
              type="button"
              onClick={() => openModal()}
              className="bg-primary text-white px-7 py-3.5 rounded-lg font-semibold text-base text-center hover:bg-blue-700 transition-colors duration-200"
            >
              {hero.primary_cta.label}
            </button>
            <a
              href={hero.secondary_cta.href}
              className="bg-white/10 text-white border border-white/30 px-7 py-3.5 rounded-lg font-semibold text-base text-center hover:bg-white/15 transition-colors duration-200 backdrop-blur-sm"
            >
              {hero.secondary_cta.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
