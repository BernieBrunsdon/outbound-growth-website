import SeoPageHero from '../components/SeoPageHero';
import FaqSection from '../components/FaqSection';
import SeoCtaSection from '../components/SeoCtaSection';
import InternalLinks from '../components/InternalLinks';
import Link from 'next/link';

const faqs = [
  {
    q: 'How quickly can an SDR start booking meetings?',
    a: 'Most dedicated SDRs are ramped and actively prospecting within two weeks. The first qualified meetings typically land in weeks three to four, depending on your ICP complexity and list readiness.',
  },
  {
    q: 'Do I get a dedicated SDR or a shared resource?',
    a: 'Every seat is a dedicated, full-time SDR assigned exclusively to your account. They learn your product, your ICP, and your messaging. No round-robin, no split attention.',
  },
  {
    q: 'What tools and technology are included?',
    a: 'The full outbound stack is included in your retainer: CRM licenses, email infrastructure, LinkedIn outreach tooling, dialler, data enrichment, and OG Pulse for live reporting. You do not need to procure anything separately.',
  },
  {
    q: 'Can I scale up or down?',
    a: 'Yes. After the initial 90-day pilot you can add or remove seats on a monthly cycle. Adding a seat takes roughly two weeks to recruit, onboard, and ramp.',
  },
  {
    q: 'How is performance tracked?',
    a: 'Through OG Pulse, our live ops dashboard. You see calls logged, emails sent, LinkedIn touches, meetings booked, and pipeline value in real time. No waiting for monthly PDF reports.',
  },
  {
    q: 'Where are your SDRs based?',
    a: 'Our SDRs are based in South Africa. They work in your target timezone, speak native-level English, and operate at a fraction of US or UK salary benchmarks. Learn more about our South African SDR team.',
  },
  {
    q: 'What happens during the 90-day pilot?',
    a: 'The pilot is a full engagement, not a trial. Your SDR runs real outbound campaigns from day one. At the end of 90 days we review pipeline metrics together and decide whether to continue, scale, or adjust.',
  },
  {
    q: 'How is this different from hiring an in-house SDR?',
    a: 'You skip recruiting, training, tool procurement, and ongoing management. We handle all of that. If an SDR leaves, we replace them. You get the output without the overhead.',
  },
];

export default function SdrAsAService() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'SDR as a Service',
    provider: {
      '@type': 'Organization',
      name: 'Outbound-Growth',
      url: 'https://outbound-growth.com',
    },
    description:
      'Dedicated South African SDR teams as a managed service. Includes full outbound stack, SDR management, prospecting, cold calling, LinkedIn outreach, email sequences, qualification, appointment setting, and live reporting through OG Pulse.',
    areaServed: 'Worldwide',
    serviceType: 'Sales Development',
  };

  return (
    <div className="bg-bg">
      <SeoPageHero
        label="SDR as a Service"
        h1="SDR as a Service for B2B Companies"
        subtitle="A dedicated SDR, fully managed outbound stack, and live reporting through OG Pulse. One flat monthly retainer, no hiring, no tool procurement, no surprises."
      />

      {/* What SDR as a Service means */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink mb-6">
            What SDR as a Service actually means
          </h2>
          <div className="max-w-3xl space-y-5">
            <p className="text-lg text-slate-200 leading-relaxed">
              SDR as a Service is a managed outbound model. Instead of hiring, training, and
              equipping your own sales development reps, you buy a fully operational SDR seat
              from a specialist provider. The SDR works exclusively on your account, uses your
              messaging, and targets your ICP. But the provider handles recruiting, onboarding,
              tooling, management, and replacement if someone leaves.
            </p>
            <p className="text-lg text-slate-200 leading-relaxed">
              At Outbound-Growth, each seat comes with a dedicated{' '}
              <Link href="/south-african-sdrs" className="text-primary hover:underline">
                South African SDR
              </Link>
              , a team lead, the full outbound technology stack, and real-time visibility into
              every activity through OG Pulse. The retainer is flat: $3,490 / £2,790 per month,
              no setup fees, 90-day pilot to start.
            </p>
            <p className="text-lg text-slate-200 leading-relaxed">
              The goal is simple. You get booked meetings and qualified pipeline without building
              or managing the machine that produces them. Think of it as{' '}
              <Link href="/sdr-outsourcing" className="text-primary hover:underline">
                SDR outsourcing
              </Link>{' '}
              with full operational ownership on our side.
            </p>
          </div>
        </div>
      </section>

      {/* What is included */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink mb-6">
            What is included in every seat
          </h2>
          <p className="text-lg text-slate-200 leading-relaxed max-w-3xl mb-8">
            Each SDR seat is a complete outbound function. Here is what you get for one flat
            monthly retainer:
          </p>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-4 max-w-4xl">
            {[
              ['Dedicated SDR', 'A full-time rep assigned only to your account, working your timezone and learning your product.'],
              ['SDR management', 'A team lead handles coaching, call reviews, and day-to-day performance management.'],
              ['Prospecting and list building', 'We research, source, and enrich contact lists matched to your ICP using multiple data providers.'],
              ['Cold calling', 'Direct phone outreach to decision-makers. Your SDR averages 60-80 dials per day.'],
              ['LinkedIn outreach', 'Connection requests, profile views, and personalised messages through LinkedIn.'],
              ['Email sequences', 'Multi-step email campaigns built, sent, and optimised by your SDR and our ops team.'],
              ['Lead qualification', 'Every prospect is qualified against your criteria before a meeting is set.'],
              ['Appointment setting', 'Confirmed meetings booked directly into your calendar with context notes attached.'],
              ['Live reporting via OG Pulse', 'Calls, emails, LinkedIn touches, meetings, and pipeline value visible in real time.'],
              ['Full technology stack', 'CRM, dialler, email infrastructure, enrichment tools, and LinkedIn tooling. All included.'],
            ].map(([title, desc]) => (
              <div key={title} className="flex gap-3 py-2">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" aria-hidden="true" />
                <div>
                  <h3 className="font-display text-lg font-semibold text-ink">{title}</h3>
                  <p className="text-slate-200 leading-relaxed mt-1">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scaling the team */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink mb-6">
            Scaling your SDR team
          </h2>
          <div className="max-w-3xl space-y-5">
            <p className="text-lg text-slate-200 leading-relaxed">
              Most companies start with one seat. Once the playbook is working and meetings are
              flowing, adding a second or third SDR is straightforward. Each new seat follows the
              same model: dedicated rep, same tooling, same management layer, same OG Pulse
              visibility.
            </p>
            <p className="text-lg text-slate-200 leading-relaxed">
              Adding a seat takes roughly two weeks. We recruit from our existing bench of
              trained South African SDRs, brief them on your ICP and messaging, and ramp them
              with support from your existing rep and team lead. You can also scale back after
              the initial 90-day pilot, adjusting month to month as pipeline needs change.
            </p>
            <p className="text-lg text-slate-200 leading-relaxed">
              This flexibility is one of the core advantages of{' '}
              <Link href="/sales-outsourcing" className="text-primary hover:underline">
                sales outsourcing
              </Link>
              . You match SDR capacity to pipeline demand without carrying fixed headcount
              through slow quarters.
            </p>
          </div>
        </div>
      </section>

      {/* SDR as a Service vs hiring */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink mb-6">
            SDR as a Service vs hiring an in-house SDR
          </h2>
          <p className="text-lg text-slate-200 leading-relaxed max-w-3xl mb-8">
            Both approaches can work. The right choice depends on your stage, budget, and how
            much operational overhead you want to carry.
          </p>
          <div className="max-w-4xl border border-white/10 bg-surface/70 backdrop-blur-sm overflow-hidden">
            <div className="grid grid-cols-3 text-sm font-display font-semibold text-ink border-b border-white/10">
              <div className="p-4" />
              <div className="p-4 border-l border-white/10">SDR as a Service</div>
              <div className="p-4 border-l border-white/10">In-house SDR</div>
            </div>
            {[
              ['Time to first meeting', '3-4 weeks', '2-4 months (hiring + ramp)'],
              ['Monthly cost', 'Flat retainer, all-in', 'Salary + benefits + tools + management time'],
              ['Technology stack', 'Included', 'You procure and maintain'],
              ['Management', 'Handled by provider', 'Your sales leader manages'],
              ['Replacement if rep leaves', 'Provider replaces at no extra cost', 'You restart the hiring cycle'],
              ['Scaling up', 'Add a seat in ~2 weeks', 'New hire cycle each time'],
              ['Scaling down', 'Month-to-month after pilot', 'Severance and notice periods'],
              ['Product knowledge depth', 'Good, improves over time', 'Potentially deeper long-term'],
              ['Cultural integration', 'Partial (dedicated but external)', 'Full team member'],
            ].map(([label, sdr, inhouse], i) => (
              <div
                key={label}
                className={`grid grid-cols-3 text-sm ${
                  i % 2 === 0 ? '' : 'bg-white/[0.02]'
                }`}
              >
                <div className="p-4 font-semibold text-ink">{label}</div>
                <div className="p-4 text-slate-200 border-l border-white/10">{sdr}</div>
                <div className="p-4 text-slate-200 border-l border-white/10">{inhouse}</div>
              </div>
            ))}
          </div>
          <p className="text-slate-200 leading-relaxed max-w-3xl mt-6">
            For most B2B companies that need pipeline now and want to test outbound before
            committing to full-time headcount, SDR as a Service is the faster, lower-risk path.
            If you already have a mature sales org and want deep product expertise embedded in
            your team, an in-house hire may make more sense long-term.
          </p>
        </div>
      </section>

      <InternalLinks exclude="/sdr-as-a-service" />

      <FaqSection faqs={faqs} />

      <SeoCtaSection />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </div>
  );
}

SdrAsAService.seo = {
  title: 'SDR as a Service | Dedicated B2B Sales Development | Outbound-Growth',
  description:
    'SDR as a Service from Outbound-Growth. Dedicated South African SDR teams, full outbound stack, and live reporting through OG Pulse. Scale your pipeline without hiring.',
  canonical: 'https://outbound-growth.com/sdr-as-a-service',
  ogTitle: 'SDR as a Service | Outbound-Growth',
  ogDescription:
    'Dedicated SDR teams as a managed service. Full outbound stack included.',
};
