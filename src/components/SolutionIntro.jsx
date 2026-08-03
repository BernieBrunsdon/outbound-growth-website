import siteContent from '../../content/site.json';

export function SolutionIntro() {
  const solution = siteContent.solution;

  return (
    <section id="solution" className="relative">
      <div className="relative text-left md:text-center pt-16 md:pt-24 pb-12 md:pb-16 px-6 max-w-4xl mx-auto">
        <div className="text-section-label">{solution.label}</div>
        <h2 className="font-display text-3xl md:text-5xl font-semibold text-ink mb-4 leading-tight">
          {solution.title}
        </h2>
        <p className="text-lg md:text-xl text-slate-200 leading-relaxed">{solution.subtitle}</p>
      </div>
    </section>
  );
}
