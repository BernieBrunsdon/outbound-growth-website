import SeoPageHero from '../components/SeoPageHero';
import FaqSection from '../components/FaqSection';
import SeoCtaSection from '../components/SeoCtaSection';
import InternalLinks from '../components/InternalLinks';
import Link from 'next/link';

const faqs = [
  {
    q: 'How quickly can an outsourced SDR team start generating pipeline?',
    a: 'Most engagements move from signed agreement to first outreach within two to three weeks. That includes ICP alignment, list building, messaging approval, and tech setup. Meaningful pipeline activity typically starts in month two once sequences are live and we have enough data to refine targeting.',
  },
  {
    q: 'Do I lose control of messaging and brand voice?',
    a: 'No. You approve every sequence, script, and LinkedIn message template before it goes live. Your SDR team works from your playbook, and you can review call recordings and outreach logs in real time through OG Pulse.',
  },
  {
    q: 'What tools and technology are included?',
    a: 'Each seat includes the full outbound stack: sales engagement platform, intent and contact data subscriptions, LinkedIn Sales Navigator, calling infrastructure, and CRM pipeline management. There are no additional tool costs on your side.',
  },
  {
    q: 'Can I scale up or down after the pilot?',
    a: 'Yes. After the initial 90-day pilot, engagements run month to month. You can add or reduce seats based on pipeline targets and budget.',
  },
  {
    q: 'How is an outsourced SDR different from a lead generation agency?',
    a: 'A lead generation agency typically sells you a list of contacts or runs campaigns on your behalf with limited transparency. An outsourced SDR sits inside your pipeline, books meetings directly into your AEs\' calendars, updates your CRM, and reports to you daily. They function as an extension of your sales team, not a vendor delivering a CSV.',
  },
  {
    q: 'What happens to leads that are not ready for a meeting?',
    a: 'Prospects who show interest but are not ready to meet are tagged, logged, and placed into nurture sequences. Your team has full visibility into these contacts through OG Pulse and your CRM, so nothing falls through the cracks.',
  },
  {
    q: 'What size companies do you typically work with?',
    a: 'We work with B2B companies across a range of sizes, from funded startups building their first outbound motion to established mid-market firms adding capacity without growing internal headcount. The common thread is a need for consistent, repeatable pipeline.',
  },
  {
    q: 'Why South Africa specifically?',
    a: 'South African SDRs are native English speakers with neutral accents and strong commercial awareness. The timezone overlaps with both UK/European and US East Coast business hours, which means your reps are calling during prime selling windows. And the cost structure lets you get dedicated, full-time reps at a fraction of US or UK salaries.',
  },
];

export default function SdrOutsourcing() {
  return (
    <div className="bg-bg">
      <SeoPageHero
        label="SDR outsourcing"
        h1="SDR Outsourcing Services That Build Your B2B Pipeline"
        subtitle="Dedicated South African SDR teams that prospect, qualify, and book meetings on your behalf. Full tech stack included, flat monthly retainer, and live visibility through OG Pulse."
      />

      {/* What is SDR outsourcing */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink mb-6">
              What is SDR outsourcing?
            </h2>
            <p className="text-slate-200 leading-relaxed mb-4">
              SDR outsourcing means hiring an external team of Sales Development Representatives to handle your outbound prospecting. Instead of recruiting, training, and managing SDRs internally, you partner with a company that provides dedicated reps who work exclusively on your account.
            </p>
            <p className="text-slate-200 leading-relaxed mb-4">
              These are not freelancers picking up tasks between projects. An outsourced SDR is a full-time representative who learns your product, speaks in your brand voice, and operates inside your sales process. The difference between outsourcing and hiring is operational: you get the output (qualified meetings, pipeline) without carrying the overhead (recruitment, onboarding, tooling, management).
            </p>
            <p className="text-slate-200 leading-relaxed">
              At Outbound-Growth, each{' '}
              <Link href="/sdr-as-a-service" className="text-primary hover:underline">
                SDR seat
              </Link>{' '}
              comes with the full outbound technology stack, a dedicated team lead, and real-time reporting through our ops dashboard, OG Pulse. You pay a flat monthly retainer of $3,490 / £2,790 per seat with no setup fees.
            </p>
          </div>
        </div>
      </section>

      {/* Why companies outsource */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink mb-6">
              Why companies outsource their SDR teams
            </h2>
            <p className="text-slate-200 leading-relaxed mb-6">
              The decision to outsource usually comes down to three things: cost, speed, and focus.
            </p>
            <ol className="space-y-5 text-slate-200 leading-relaxed list-decimal list-inside">
              <li>
                <span className="font-display font-semibold text-ink">Cost.</span>{' '}
                Hiring an SDR in the US or UK means salary, benefits, tools, and management time. An outsourced seat bundles everything into one predictable line item. With{' '}
                <Link href="/south-african-sdrs" className="text-primary hover:underline">
                  South African SDRs
                </Link>, you get native English speakers at a significantly lower cost than domestic hires.
              </li>
              <li>
                <span className="font-display font-semibold text-ink">Speed.</span>{' '}
                Internal SDR hiring takes weeks of sourcing, interviewing, and onboarding, and there is no guarantee the rep will work out. An outsourced team can be prospecting within two to three weeks of signing.
              </li>
              <li>
                <span className="font-display font-semibold text-ink">Focus.</span>{' '}
                Your sales leaders should be closing deals, not managing junior reps, debugging email deliverability, or sourcing contact data. Outsourcing moves those operational burdens off your plate entirely.
              </li>
            </ol>
            <p className="text-slate-200 leading-relaxed mt-6">
              There are other reasons too. Some companies outsource to test a new market before committing to a full-time hire. Others use it to supplement an existing team during a push quarter. The model is flexible enough to serve both scenarios.
            </p>
          </div>
        </div>
      </section>

      {/* What we manage */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink mb-6">
              What Outbound-Growth manages for you
            </h2>
            <p className="text-slate-200 leading-relaxed mb-6">
              When you outsource your SDR function to us, we handle every moving part of outbound. Here is what each seat covers:
            </p>
            <ol className="space-y-4 text-slate-200 leading-relaxed list-decimal list-inside">
              <li>
                <span className="font-display font-semibold text-ink">Prospect research and list building.</span>{' '}
                We identify companies and contacts that match your ICP using intent data, firmographic filters, and manual research. No purchased lists with stale data.
              </li>
              <li>
                <span className="font-display font-semibold text-ink">Cold calling.</span>{' '}
                Your SDR picks up the phone and has real conversations with decision-makers. Every call is logged and available for review in OG Pulse. Learn more about our{' '}
                <Link href="/cold-calling" className="text-primary hover:underline">
                  cold calling approach
                </Link>.
              </li>
              <li>
                <span className="font-display font-semibold text-ink">LinkedIn outreach.</span>{' '}
                Connection requests, follow-ups, and conversations on LinkedIn, managed by your SDR under your brand.
              </li>
              <li>
                <span className="font-display font-semibold text-ink">Email sequences.</span>{' '}
                Multi-step, personalised email campaigns built around your value proposition and sent from your domain.
              </li>
              <li>
                <span className="font-display font-semibold text-ink">Lead qualification.</span>{' '}
                Every prospect is qualified against your criteria before a meeting is booked. Your AEs only speak to people who match the profile and have expressed genuine interest.
              </li>
              <li>
                <span className="font-display font-semibold text-ink">Meeting booking.</span>{' '}
                Qualified meetings are booked directly into your AEs&apos; calendars with context notes so they can prepare without chasing the SDR for details.
              </li>
              <li>
                <span className="font-display font-semibold text-ink">CRM and pipeline management.</span>{' '}
                Your CRM stays clean and current. Every touchpoint, disposition, and next step is logged as it happens.
              </li>
              <li>
                <span className="font-display font-semibold text-ink">SDR management and reporting.</span>{' '}
                We handle day-to-day coaching, performance tracking, and process optimization. You see results in OG Pulse without managing the reps yourself.
              </li>
            </ol>
            <p className="text-slate-200 leading-relaxed mt-6">
              This is the full scope of a{' '}
              <Link href="/sales-outsourcing" className="text-primary hover:underline">
                B2B sales outsourcing
              </Link>{' '}
              engagement. You are not buying leads or a list. You are getting an operational sales function that runs alongside your internal team.
            </p>
          </div>
        </div>
      </section>

      {/* Why South African SDRs */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink mb-6">
              Why South African SDRs?
            </h2>
            <p className="text-slate-200 leading-relaxed mb-4">
              South Africa has a deep bench of commercially sharp, English-fluent sales talent. The accent is neutral and easy for US, UK, and European prospects to understand. That matters when your SDR is cold calling a VP of Sales at a mid-market SaaS company.
            </p>
            <p className="text-slate-200 leading-relaxed mb-4">
              The timezone is another practical advantage. South Africa (GMT+2) overlaps comfortably with UK and European business hours and catches the US East Coast from late morning. Your SDR is calling during the windows when prospects actually pick up.
            </p>
            <p className="text-slate-200 leading-relaxed">
              And the economics are straightforward. The cost of a dedicated, full-time SDR in South Africa is a fraction of the equivalent hire in London or New York, without any trade-off in communication quality or work ethic. Read more about{' '}
              <Link href="/south-african-sdrs" className="text-primary hover:underline">
                why companies are hiring South African SDRs
              </Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Outsourced vs internal */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink mb-6">
              Outsourced SDR vs hiring internally
            </h2>
            <p className="text-slate-200 leading-relaxed mb-4">
              Both models work. The right choice depends on where your company is and what constraints you are operating under. Here is an honest comparison.
            </p>
            <div className="border border-white/10 bg-surface/70 backdrop-blur-sm p-6 mb-4">
              <h3 className="font-display text-xl md:text-2xl font-semibold text-ink mb-4">
                When outsourcing makes more sense
              </h3>
              <ul className="space-y-2 text-slate-200 leading-relaxed">
                <li>You need pipeline now and cannot wait 3-6 months to hire and ramp.</li>
                <li>You do not have a sales ops layer to manage tools, data, and deliverability.</li>
                <li>You want to test outbound in a new market or vertical before building internal capacity.</li>
                <li>Your budget does not support a full-time US/UK SDR with benefits, tooling, and management overhead.</li>
              </ul>
            </div>
            <div className="border border-white/10 bg-surface/70 backdrop-blur-sm p-6">
              <h3 className="font-display text-xl md:text-2xl font-semibold text-ink mb-4">
                When hiring internally makes more sense
              </h3>
              <ul className="space-y-2 text-slate-200 leading-relaxed">
                <li>Your product requires deep technical knowledge that takes months to develop.</li>
                <li>You already have the infrastructure: sales ops, tool stack, training programme, and front-line management.</li>
                <li>You want SDRs to eventually promote into AE roles as part of a career path.</li>
              </ul>
            </div>
            <p className="text-slate-200 leading-relaxed mt-4">
              Many of our clients run a hybrid model: outsourced SDRs handle volume prospecting while an internal rep focuses on strategic accounts. The two approaches complement each other.
            </p>
          </div>
        </div>
      </section>

      {/* How the engagement works */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink mb-6">
              How the engagement works
            </h2>
            <ol className="space-y-6 text-slate-200 leading-relaxed list-decimal list-inside">
              <li>
                <span className="font-display font-semibold text-ink">Discovery call.</span>{' '}
                We spend 30 minutes understanding your ICP, sales process, and pipeline goals. This is where we figure out if we are the right fit for each other.
              </li>
              <li>
                <span className="font-display font-semibold text-ink">Onboarding and setup (week 1-2).</span>{' '}
                We align on messaging, build your prospect lists, configure the tech stack, and set up your OG Pulse dashboard. You approve all scripts and sequences before anything goes live.
              </li>
              <li>
                <span className="font-display font-semibold text-ink">90-day pilot.</span>{' '}
                Your dedicated SDR begins outreach. You have full visibility into activity, calls, and pipeline through OG Pulse. We review performance together on a regular cadence and adjust targeting and messaging as we learn what works.
              </li>
              <li>
                <span className="font-display font-semibold text-ink">Ongoing engagement.</span>{' '}
                After the pilot, the engagement continues month to month. Most clients stay because the pipeline is consistent and the model is working. You can scale seats up or down as your needs change.
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* Who we work with */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink mb-6">
              Who we work with
            </h2>
            <p className="text-slate-200 leading-relaxed mb-4">
              Our clients are B2B companies that sell to other businesses and need a steady flow of qualified meetings to feed their sales team. The most common profiles include:
            </p>
            <ul className="space-y-2 text-slate-200 leading-relaxed list-disc list-inside">
              <li>SaaS companies looking to build or scale outbound without growing headcount.</li>
              <li>Professional services firms (consulting, staffing, managed services) that rely on relationship-driven sales.</li>
              <li>Technology and IT services companies selling into mid-market and enterprise accounts.</li>
              <li>Funded startups that have product-market fit and need to accelerate{' '}
                <Link href="/lead-generation" className="text-primary hover:underline">
                  B2B lead generation
                </Link>.
              </li>
            </ul>
            <p className="text-slate-200 leading-relaxed mt-4">
              If your sales cycle involves a conversation before a purchase, and your AEs need more at-bats, SDR outsourcing is likely a fit.
            </p>
          </div>
        </div>
      </section>

      <InternalLinks exclude="/sdr-outsourcing" />

      <FaqSection faqs={faqs} />

      <SeoCtaSection />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'SDR Outsourcing Services',
            provider: {
              '@type': 'Organization',
              name: 'Outbound-Growth',
              url: 'https://outbound-growth.com',
            },
            description:
              'Outsource your SDR team to Outbound-Growth. Dedicated South African reps, full tech stack included, and live pipeline visibility through OG Pulse.',
            areaServed: ['US', 'UK', 'Europe'],
            serviceType: 'SDR Outsourcing',
          }),
        }}
      />
    </div>
  );
}

SdrOutsourcing.seo = {
  title: 'SDR Outsourcing Services | Dedicated SDR Teams | Outbound-Growth',
  description:
    'Outsource your SDR team to Outbound-Growth. Dedicated South African reps, full tech stack included, and live pipeline visibility through OG Pulse. Book a discovery call.',
  canonical: 'https://outbound-growth.com/sdr-outsourcing',
  ogTitle: 'SDR Outsourcing Services | Outbound-Growth',
  ogDescription:
    'Dedicated South African SDR teams with full tech stack and live pipeline visibility.',
};
