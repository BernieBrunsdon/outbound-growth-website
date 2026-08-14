import siteContent from '../../content/site.json';

export default function Hero() {
  const hero = siteContent.hero;

  return (
    <section id="hero" className="relative text-white">
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
            <a
              href="#book"
              className="bg-primary text-white px-7 py-3.5 rounded-lg font-semibold text-base text-center hover:bg-primary-dark transition-colors duration-200"
            >
              {hero.primary_cta.label}
            </a>
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
