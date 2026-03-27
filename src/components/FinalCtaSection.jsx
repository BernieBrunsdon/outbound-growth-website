import siteContent from '../../content/site.json';

export default function FinalCtaSection() {
  const c = siteContent.finalCta;

  return (
    <section id="book-call" className="py-20 bg-ink text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">{c.title}</h2>
        <p className="text-lg text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto">{c.subtitle}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={siteContent.calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-blue-600 transition-all duration-200 btn-hover shadow-lg"
          >
            {c.primary_label}
          </a>
          <a
            href={c.secondary_href}
            className="border-2 border-white text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-white hover:text-ink transition-all duration-200 btn-hover"
          >
            {c.secondary_label}
          </a>
        </div>
      </div>
    </section>
  );
}
