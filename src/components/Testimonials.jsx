import siteContent from '../../content/site.json';
import AppLinkText from './AppLinkText';
import { useBookDemoModal } from '../context/BookDemoModalContext';

export default function Testimonials() {
  const { openModal } = useBookDemoModal();
  return (
    <section id="testimonials" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="text-section-label mb-4">Testimonials</div>
          <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">What clients say</h2>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            Teams selling into the US and UK—from SaaS scale-ups to revenue leaders.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {siteContent.testimonials.map((testimonial, index) => (
            <div key={index} className="card p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start mb-6">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold mr-4 flex-shrink-0"
                  style={{ backgroundColor: testimonial.color }}
                >
                  {testimonial.initials}
                </div>
                <div>
                  <div className="font-semibold text-ink">{testimonial.author}</div>
                  <div className="text-sm text-muted">{testimonial.title}</div>
                </div>
              </div>
              <blockquote className="text-lg text-ink leading-relaxed mb-6">
                &ldquo;
                <AppLinkText>{testimonial.quote}</AppLinkText>
                &rdquo;
              </blockquote>
              <div className="flex text-accent">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <button
            type="button"
            onClick={() => openModal()}
            className="inline-block bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 btn-hover"
          >
            Book a Discovery Call
          </button>
        </div>
      </div>
    </section>
  );
}
