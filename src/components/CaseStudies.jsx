import siteContent from '../../content/site.json';

export default function CaseStudies() {
  return (
    <section id="case-studies" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="text-section-label mb-4">Success Stories</div>
          <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
            Real, anonymized client results
          </h2>
            <p className="text-xl text-muted max-w-3xl mx-auto">
              See how we&apos;ve helped companies across different industries achieve remarkable growth
            </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteContent.caseStudies.map((study, index) => (
            <div key={index} className="card p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-ink mb-3">{study.title}</h3>
                <div className="text-2xl font-bold text-primary mb-2">{study.results}</div>
                <div className="text-sm text-muted">Additional Revenue Generated</div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm text-muted">
                  <svg className="w-4 h-4 text-accent mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Qualified lead generation
                </div>
                <div className="flex items-center text-sm text-muted">
                  <svg className="w-4 h-4 text-accent mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Full dashboard transparency
                </div>
                <div className="flex items-center text-sm text-muted">
                  <svg className="w-4 h-4 text-accent mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Scalable SDR team
                </div>
              </div>

              <a
                href="https://calendly.com/outbound-growth/consult"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-primary text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 btn-hover"
              >
                See More Results
              </a>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gray-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-ink mb-4">Ready to Join Our Success Stories?</h3>
            <p className="text-muted mb-6">
              Book a consultation to discuss how we can help your company achieve similar results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://calendly.com/outbound-growth/consult"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 btn-hover"
              >
                Book Consultation
              </a>
              <a
                href="mailto:bernie@outbound-growth.com"
                className="border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors duration-200 btn-hover"
              >
                Request Case Study
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
