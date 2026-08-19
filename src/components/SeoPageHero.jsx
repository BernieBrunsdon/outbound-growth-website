import Link from 'next/link';

export default function SeoPageHero({ label, h1, subtitle }) {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl">
          {label && <div className="text-section-label mb-4">{label}</div>}
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-ink leading-[1.1]">
            {h1}
          </h1>
          {subtitle && (
            <p className="mt-5 text-lg md:text-xl text-slate-200 leading-relaxed max-w-2xl">
              {subtitle}
            </p>
          )}
          <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href="#book"
              className="bg-primary text-white px-7 py-3.5 rounded-lg font-semibold text-base text-center hover:bg-primary-dark transition-colors duration-200"
            >
              Book a Discovery Call
            </a>
            <Link
              href="/#contact"
              className="bg-white/10 text-white border border-white/30 px-7 py-3.5 rounded-lg font-semibold text-base text-center hover:bg-white/15 transition-colors duration-200 backdrop-blur-sm"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
