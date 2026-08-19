import Head from 'next/head';
import Link from 'next/link';
import Hero from '../components/Hero';
import { SolutionIntro, SolutionChapters } from '../components/SolutionSection';
import ProcessSteps from '../components/ProcessSteps';
import WhySouthAfrica from '../components/WhySouthAfrica';
import BookCall from '../components/BookCall';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import StickyVideoZone from '../components/StickyVideoZone';

const SERVICE_LINKS = [
  { href: '/sdr-outsourcing', title: 'SDR Outsourcing', desc: 'Dedicated SDR teams that handle prospecting, outreach, and meeting booking.' },
  { href: '/sdr-as-a-service', title: 'SDR as a Service', desc: 'A fully managed sales development function for your business.' },
  { href: '/sales-outsourcing', title: 'B2B Sales Outsourcing', desc: 'Outsource your outbound sales to build qualified pipeline.' },
  { href: '/lead-generation', title: 'Lead Generation', desc: 'Qualified B2B opportunities, not just contact lists.' },
  { href: '/cold-calling', title: 'Cold Calling', desc: 'Professional SDR-led cold calling into US and UK markets.' },
  { href: '/south-african-sdrs', title: 'South African SDRs', desc: 'English-fluent, timezone-compatible SDR talent.' },
];

const ORG_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Outbound-Growth',
  url: 'https://outbound-growth.com',
  description: 'Managed SDR services and outbound sales teams for B2B companies. Dedicated South African SDRs with full tech stack and live pipeline visibility.',
  areaServed: ['US', 'UK', 'Europe'],
  serviceType: ['SDR Outsourcing', 'B2B Lead Generation', 'Sales Outsourcing', 'Cold Calling', 'Appointment Setting'],
};

export default function Home() {
  return (
    <>
      <Head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_SCHEMA) }} />
      </Head>
      <StickyVideoZone
        src="/videos/hero-loop.mp4"
        opacity={0.4}
        cover="fixed"
        alwaysOn
        overlayClassName="bg-gradient-to-b from-navy/70 via-navy/55 to-navy/70"
      >
        {/* Hero video on top, masked soft at the bottom */}
        <StickyVideoZone
          src="/videos/why-sa-loop.mp4"
          opacity={0.35}
          priority
          fadeOutBottom
          overlayClassName="bg-gradient-to-r from-navy/95 via-navy/88 to-navy/70"
        >
          <Hero />
        </StickyVideoZone>

        <SolutionIntro />
        <SolutionChapters />
        <ProcessSteps />
        <WhySouthAfrica />

        <section className="section-padding">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-section-label">Services</div>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink mb-4 leading-tight">
              Managed outbound sales and SDR outsourcing
            </h2>
            <p className="text-lg text-slate-200 leading-relaxed max-w-2xl mb-10">
              From appointment setting and lead generation to full SDR team management, we run the outbound function so your sales team can focus on closing.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {SERVICE_LINKS.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="group border border-white/10 bg-surface/70 backdrop-blur-sm p-5 hover:border-primary/40 transition-colors duration-200"
                >
                  <span className="font-display text-lg font-semibold text-ink group-hover:text-primary transition-colors duration-200">
                    {s.title}
                  </span>
                  <span className="block mt-1.5 text-sm text-muted leading-relaxed">{s.desc}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <BookCall />
        <ContactForm />
        <Footer />
      </StickyVideoZone>
    </>
  );
}
