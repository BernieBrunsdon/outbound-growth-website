import siteContent from '../../content/site.json';

export default function ProcessSteps() {
  return (
    <section id="process" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="text-section-label mb-4">{siteContent.process.title}</div>
          <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
            {siteContent.process.subtitle}
          </h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-primary transform -translate-y-1/2"></div>

          <div className="grid lg:grid-cols-5 gap-8">
            {siteContent.process.steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step number */}
                <div className="flex items-center justify-center w-16 h-16 bg-primary text-white rounded-full font-bold text-xl mx-auto mb-6 relative z-10">
                  {index + 1}
                </div>

                {/* Step content */}
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-ink mb-3">{step.title}</h3>
                  <p className="text-muted leading-relaxed">{step.description}</p>
                </div>

                {/* Arrow for mobile */}
                {index < siteContent.process.steps.length - 1 && (
                  <div className="lg:hidden flex justify-center mt-8">
                    <svg className="w-6 h-6 text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Book a 30-minute consultation to explore your business and get a personalized recommendation.
            </p>
            <a
              href="https://calendly.com/outbound-growth/consult"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 btn-hover"
            >
              Schedule Your Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
