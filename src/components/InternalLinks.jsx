import Link from 'next/link';

const ALL_SERVICES = [
  { href: '/sdr-outsourcing', label: 'SDR Outsourcing Services' },
  { href: '/sdr-as-a-service', label: 'SDR as a Service' },
  { href: '/sales-outsourcing', label: 'B2B Sales Outsourcing' },
  { href: '/lead-generation', label: 'B2B Lead Generation' },
  { href: '/cold-calling', label: 'B2B Cold Calling Services' },
  { href: '/south-african-sdrs', label: 'South African SDRs' },
];

export default function InternalLinks({ exclude }) {
  const links = ALL_SERVICES.filter((s) => s.href !== exclude);

  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="font-display text-2xl md:text-3xl font-semibold text-ink mb-8">
          Related services
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group border border-white/10 bg-surface/70 backdrop-blur-sm p-5 hover:border-primary/40 transition-colors duration-200"
            >
              <span className="font-display text-lg font-semibold text-ink group-hover:text-primary transition-colors duration-200">
                {link.label}
              </span>
              <span className="block mt-1 text-sm text-muted">Learn more &rarr;</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
