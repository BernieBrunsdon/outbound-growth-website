import siteContent from '../../content/site.json';

export default function WhySouthAfrica() {
  const c = siteContent.whySouthAfrica;

  return (
    <section id="why-sa" className="section-padding bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="text-section-label">{c.label}</div>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink mb-4 leading-tight">
              {c.title}
            </h2>
            <p className="text-lg text-muted leading-relaxed">{c.subtitle}</p>
          </div>

          <div className="lg:col-span-7">
            <ul className="divide-y divide-slate-200 border-t border-b border-slate-200">
              {c.points.map((p, i) => (
                <li key={p.title} className="py-6 flex gap-5 md:gap-8">
                  <span className="font-display text-sm font-semibold text-primary tabular-nums pt-1 w-8 shrink-0">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-ink mb-1.5">{p.title}</h3>
                    <p className="text-muted leading-relaxed">{p.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
