import SeoPageHero from '../components/SeoPageHero';
import FaqSection from '../components/FaqSection';
import SeoCtaSection from '../components/SeoCtaSection';
import InternalLinks from '../components/InternalLinks';
import Link from 'next/link';

const faqs = [
  {
    q: 'What does B2B sales outsourcing include?',
    a: 'A dedicated SDR team handles the full outbound cycle: ICP research, list building, prospecting, cold calling, LinkedIn outreach, email sequences, lead qualification, and meeting booking. You also get live reporting through OG Pulse.',
  },
  {
    q: 'How is outsourced sales different from hiring in-house?',
    a: 'You skip the 3-6 month ramp of recruiting, training, and tooling. With Outbound-Growth, you get an experienced SDR on day one with calling software, data tools, email infrastructure, and a proven process already in place.',
  },
  {
    q: 'How quickly can an outsourced SDR start booking meetings?',
    a: 'Most campaigns begin outreach within the first two weeks. The initial period is spent on ICP alignment, messaging, and building targeted prospect lists so every conversation is relevant.',
  },
  {
    q: 'Do I keep control of messaging and targeting?',
    a: 'Yes. We build your ICP, call scripts, and email sequences collaboratively. You approve everything before outreach starts, and you can adjust targeting or messaging at any time.',
  },
  {
    q: 'What does reporting look like?',
    a: 'OG Pulse gives you live visibility into calls made, conversations logged, emails sent, LinkedIn touches, and meetings booked. You can review call recordings and pipeline data whenever you want, not just in monthly reports.',
  },
  {
    q: 'How long is the minimum commitment?',
    a: 'We offer a 90-day pilot. That gives enough time to validate targeting, refine messaging, and build real pipeline before you decide on a longer engagement.',
  },
  {
    q: 'Can you work alongside our existing sales team?',
    a: 'Absolutely. Many clients use Outbound-Growth to add outbound capacity on top of their in-house team. We integrate with your CRM and follow your qualification criteria so handoffs are seamless.',
  },
  {
    q: 'Why are your SDRs based in South Africa?',
    a: 'South Africa produces highly skilled, English-fluent sales professionals who work in European and US time zones. You get top-tier talent at a fraction of the cost of hiring locally in the UK or US.',
  },
];

export default function SalesOutsourcing() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'B2B Sales Outsourcing',
    provider: {
      '@type': 'Organization',
      name: 'Outbound-Growth',
      url: 'https://outbound-growth.com',
    },
    description:
      'Outsourced B2B sales development including dedicated SDR teams, prospecting, cold calling, LinkedIn outreach, email sequences, and qualified meeting booking.',
    areaServed: ['GB', 'US', 'ZA'],
    serviceType: 'Sales Outsourcing',
  };

  return (
    <div className="bg-bg">
      <SeoPageHero
        label="Sales outsourcing"
        h1="B2B Sales Outsourcing That Creates Qualified Pipeline"
        subtitle="Outsource your outbound sales to a dedicated SDR team. We handle prospecting, cold calling, LinkedIn, email, and meeting booking so your closers spend their time on qualified opportunities."
      />

      {/* What sales outsourcing means */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink">
            What is B2B sales outsourcing?
          </h2>
          <div className="mt-6 max-w-3xl space-y-4">
            <p className="text-slate-200 leading-relaxed">
              Sales outsourcing means handing part or all of your outbound sales process to a
              specialist partner. Instead of recruiting, training, and managing SDRs in-house, you
              get a team that already knows how to find prospects, start conversations, and book
              qualified meetings.
            </p>
            <p className="text-slate-200 leading-relaxed">
              At Outbound-Growth, outsourced sales is not a call centre reading a script. Each
              client gets a dedicated SDR who learns your product, speaks to your ICP daily, and
              becomes an extension of your revenue team. The full outbound stack (calling software,
              data tools, email infrastructure, CRM integration) is included in a flat monthly
              retainer.
            </p>
          </div>
        </div>
      </section>

      {/* Why companies outsource outbound sales */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink">
            Why companies outsource outbound sales
          </h2>
          <div className="mt-6 max-w-3xl space-y-4">
            <p className="text-slate-200 leading-relaxed">
              Building an in-house SDR function takes time. There is a hiring cycle, a ramp period,
              tool procurement, and ongoing management overhead. For companies that need pipeline
              now, or want to test new markets without committing to headcount, outsourcing removes
              the delay.
            </p>
            <ul className="space-y-3 mt-4">
              {[
                'Speed to market: outreach can start within two weeks, not two quarters.',
                'Lower fixed cost: no salaries, benefits, or software licenses to carry.',
                'Predictable spend: a flat retainer replaces variable hiring and tooling costs.',
                'Focus: your AEs and leadership stay on closing, not managing top-of-funnel.',
                'Flexibility: scale seats up or down as pipeline targets change.',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-200 leading-relaxed">
                  <span
                    className="mt-2 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Building an outbound sales process */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink">
            How we build your outbound sales process
          </h2>
          <p className="mt-6 max-w-3xl text-slate-200 leading-relaxed">
            Every engagement starts with the fundamentals: who you sell to, how to reach them, and
            what a qualified meeting looks like. From there, we execute across every outbound
            channel.
          </p>

          <div className="mt-10 grid md:grid-cols-2 gap-x-12 gap-y-10 max-w-5xl">
            <div>
              <h3 className="font-display text-xl md:text-2xl font-semibold text-ink">
                ICP definition and targeting
              </h3>
              <p className="mt-3 text-slate-200 leading-relaxed">
                We work with you to define your ideal customer profile: company size, industry,
                geography, tech stack, and buying signals. This becomes the foundation for every list
                we build and every message we write.
              </p>
            </div>

            <div>
              <h3 className="font-display text-xl md:text-2xl font-semibold text-ink">
                Prospecting and list building
              </h3>
              <p className="mt-3 text-slate-200 leading-relaxed">
                Your SDR uses multiple data sources to build targeted prospect lists. Every contact
                is verified before outreach begins, so time is spent on real conversations, not
                bounced emails and wrong numbers.
              </p>
            </div>

            <div>
              <h3 className="font-display text-xl md:text-2xl font-semibold text-ink">
                <Link href="/cold-calling" className="hover:text-primary transition-colors duration-200">
                  Cold calling
                </Link>
              </h3>
              <p className="mt-3 text-slate-200 leading-relaxed">
                Phone remains the fastest way to start a real conversation with a decision-maker.
                Your SDR makes calls daily using professional dialling software, with every call
                logged and recorded in OG Pulse.
              </p>
            </div>

            <div>
              <h3 className="font-display text-xl md:text-2xl font-semibold text-ink">
                LinkedIn outreach
              </h3>
              <p className="mt-3 text-slate-200 leading-relaxed">
                Connection requests and messages are sent from your brand or the SDR’s profile,
                depending on what fits your market. Sequences are personalised to the prospect’s role
                and company, not templated in bulk.
              </p>
            </div>

            <div>
              <h3 className="font-display text-xl md:text-2xl font-semibold text-ink">
                Email sequences
              </h3>
              <p className="mt-3 text-slate-200 leading-relaxed">
                Multi-touch email campaigns run alongside calls and LinkedIn to increase reply rates.
                We handle domain setup, warm-up, deliverability monitoring, and copy iteration so
                your emails land in the inbox.
              </p>
            </div>

            <div>
              <h3 className="font-display text-xl md:text-2xl font-semibold text-ink">
                Qualification and meeting booking
              </h3>
              <p className="mt-3 text-slate-200 leading-relaxed">
                Every lead is qualified against your criteria before a meeting is booked. Your
                calendar only gets prospects who match your ICP and have expressed genuine interest
                in a conversation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reporting and pipeline management */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink">
            Reporting and pipeline management
          </h2>
          <div className="mt-6 max-w-3xl space-y-4">
            <p className="text-slate-200 leading-relaxed">
              Outsourcing sales should not mean losing visibility. OG Pulse, our live operations
              dashboard, gives you access to every metric that matters: calls made, conversations
              logged, emails sent, LinkedIn activity, and meetings booked.
            </p>
            <p className="text-slate-200 leading-relaxed">
              Call recordings are stored in the Meeting Vault, so you can listen to how your product
              is being positioned. Pipeline data syncs to your CRM, and you can check results any
              time you want, not just when a monthly report lands.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits of outsourced sales */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink">
            Benefits of outsourcing your sales development
          </h2>
          <ul className="mt-6 max-w-3xl space-y-3">
            {[
              'No recruitment or onboarding delays. Your SDR is experienced and ready.',
              'Full outbound stack included: dialler, data tools, email infrastructure, CRM integration.',
              'Live reporting through OG Pulse replaces static monthly slide decks.',
              'Flat retainer pricing with no hidden fees or per-lead charges.',
              'Proven outbound methodology built over thousands of campaigns.',
              '90-day pilot so you can evaluate results before a long-term commitment.',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-slate-200 leading-relaxed">
                <span
                  className="mt-2 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0"
                  aria-hidden="true"
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* South African sales talent */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink">
            South African sales talent
          </h2>
          <div className="mt-6 max-w-3xl space-y-4">
            <p className="text-slate-200 leading-relaxed">
              Every Outbound-Growth SDR is based in South Africa. The country has a deep talent pool
              of English-fluent, commercially aware sales professionals who work comfortably in UK
              and US time zones.
            </p>
            <p className="text-slate-200 leading-relaxed">
              The cost advantage is real, but it is not the only reason we hire here. South African
              SDRs bring strong communication skills, cultural affinity with Western markets, and a
              work ethic that makes them some of the best outbound reps we have worked with.
            </p>
            <p className="text-slate-200 leading-relaxed">
              <Link
                href="/south-african-sdrs"
                className="text-primary hover:underline"
              >
                Learn more about our South African SDR team
              </Link>
            </p>
          </div>
        </div>
      </section>

      <InternalLinks exclude="/sales-outsourcing" />

      <FaqSection faqs={faqs} />

      <SeoCtaSection />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </div>
  );
}

SalesOutsourcing.seo = {
  title: 'B2B Sales Outsourcing Services | Outbound-Growth',
  description:
    'Outsource your B2B sales development to Outbound-Growth. Dedicated SDR teams handle prospecting, cold calling, LinkedIn, email, and meeting booking. Full stack included.',
  canonical: 'https://outbound-growth.com/sales-outsourcing',
  ogTitle: 'B2B Sales Outsourcing Services | Outbound-Growth',
  ogDescription: 'Outsourced B2B sales teams that build qualified pipeline.',
};
