import SeoPageHero from '../components/SeoPageHero';
import FaqSection from '../components/FaqSection';
import SeoCtaSection from '../components/SeoCtaSection';
import InternalLinks from '../components/InternalLinks';
import Link from 'next/link';

const faqs = [
  {
    q: 'Why do US and UK companies hire South African SDRs?',
    a: 'South Africa combines native-level English fluency, strong timezone overlap with both UK and US East Coast hours, and a significantly lower cost of living. That means you get experienced, articulate reps at a fraction of what you would pay domestically.',
  },
  {
    q: 'What timezone do South African SDRs work in?',
    a: 'South Africa is GMT+2 (SAST). That lines up almost perfectly with UK business hours and overlaps comfortably with US East Coast mornings (EST/CST). Your SDRs are calling prospects during peak hours, not off-shift.',
  },
  {
    q: 'How does Outbound-Growth manage the SDR team?',
    a: 'We handle everything: hiring, onboarding, daily management, technology (dialler, CRM, email tooling, LinkedIn), call coaching, and live reporting through OG Pulse. You get a fully managed outbound function without building internal ops.',
  },
  {
    q: 'Do South African SDRs sound local to UK and US prospects?',
    a: 'Yes. South African English is neutral and clear. Prospects in the UK and US rarely notice any accent difference, and our SDRs are trained specifically for B2B conversations in those markets.',
  },
  {
    q: 'What channels do your SDRs use?',
    a: 'Cold calling, LinkedIn outreach, and targeted email sequences. We build multi-channel cadences tailored to your ICP and market.',
  },
  {
    q: 'How quickly can you get SDRs ramped?',
    a: 'Most clients have their dedicated SDR making calls within two weeks of kickoff. We handle ICP research, messaging, and tech setup during that ramp period.',
  },
  {
    q: 'What does the pricing look like?',
    a: 'We charge a flat monthly retainer of $3,490 / £2,790 per dedicated SDR seat. No setup fees, no commissions, no hidden costs. Every pilot starts with a 90-day commitment.',
  },
  {
    q: 'Can I listen to my SDR calls?',
    a: 'Absolutely. OG Pulse, our live ops dashboard, gives you access to call recordings, activity logs, and a Meeting Vault with every booked meeting. No waiting for monthly reports.',
  },
];

export default function SouthAfricanSdrs() {
  return (
    <div className="bg-bg">
      <SeoPageHero
        label="South African SDRs"
        h1="South African SDRs for US and UK Companies"
        subtitle="Dedicated, English-fluent SDRs based in South Africa, fully managed by Outbound-Growth with the technology, coaching, and reporting built in."
      />

      {/* Why companies hire South African SDRs */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink">
            Why companies hire South African SDRs
          </h2>
          <div className="mt-6 space-y-5 text-slate-200 leading-relaxed max-w-3xl">
            <p>
              Building an internal SDR team in the US or UK is expensive and slow. Between base
              salaries, benefits, tooling, and management overhead, a single SDR seat in New York
              or London can cost well over six figures a year before they book a single meeting.
            </p>
            <p>
              South Africa offers a practical alternative. The country has a deep pool of
              educated, English-speaking sales talent, a cost of living that is significantly
              lower than the US or UK, and a timezone that works for both markets. That
              combination is why a growing number of B2B companies are building their outbound
              function with South African reps rather than hiring locally.
            </p>
          </div>
        </div>
      </section>

      {/* English fluency */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink">
            English fluency that sounds natural
          </h2>
          <div className="mt-6 space-y-5 text-slate-200 leading-relaxed max-w-3xl">
            <p>
              English is one of South Africa’s official languages and the primary language of
              business. South African SDRs speak with a neutral, clear accent that UK and US
              prospects find easy to understand. There is no &quot;offshore&quot; communication gap. Your
              reps sound like they belong on your team because, functionally, they do.
            </p>
            <p>
              This matters for cold calling especially. The first few seconds of a call determine
              whether a prospect stays on the line. Fluency and confidence in spoken English are
              not optional, and South African reps deliver both.
            </p>
          </div>
        </div>
      </section>

      {/* Timezone compatibility */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink">
            Timezone overlap with the UK and US
          </h2>
          <div className="mt-6 space-y-5 text-slate-200 leading-relaxed max-w-3xl">
            <h3 className="font-display text-xl md:text-2xl font-semibold text-ink">
              UK markets
            </h3>
            <p>
              South Africa sits at GMT+2, just one or two hours ahead of the UK depending on
              daylight saving. In practice, South African SDRs work the same business hours as
              their UK prospects. Standups, handoffs, and live coaching happen in real time, not
              across an eight-hour gap.
            </p>
            <h3 className="font-display text-xl md:text-2xl font-semibold text-ink">
              US markets
            </h3>
            <p>
              For US East Coast companies, the overlap is strong in the morning. A South African
              SDR finishing their afternoon is calling into a prospect’s mid-morning. That window
              covers the highest-connect-rate hours for most B2B verticals. West Coast coverage
              requires adjusted schedules, but EST and CST territories work naturally.
            </p>
          </div>
        </div>
      </section>

      {/* Cost advantages */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink">
            Real cost advantages, not just cheaper rates
          </h2>
          <div className="mt-6 space-y-5 text-slate-200 leading-relaxed max-w-3xl">
            <p>
              The cost of living in South Africa is significantly lower than in the US or UK.
              That means competitive local salaries for experienced sales professionals still
              come in at a fraction of what you would pay a domestic hire. You are not getting
              discount labour. You are accessing a market where the economics work differently.
            </p>
            <p>
              With Outbound-Growth, the savings go further. Our flat retainer covers the SDR,
              their manager, the full tech stack (dialler, CRM, email, LinkedIn tooling), and
              live reporting. There is no separate line item for software, no recruiter fees, and
              no ramp-period payroll while a new hire gets up to speed.
            </p>
          </div>
        </div>
      </section>

      {/* Sales talent pool */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink">
            A strong and growing sales talent pool
          </h2>
          <div className="mt-6 space-y-5 text-slate-200 leading-relaxed max-w-3xl">
            <p>
              South Africa’s BPO and tech sectors have expanded steadily over the past decade,
              producing a generation of professionals who understand structured sales processes,
              CRM hygiene, and multi-channel outreach. Many have experience selling into US and
              UK markets specifically.
            </p>
            <p>
              We hire for coachability, communication skills, and resilience. Every SDR at
              Outbound-Growth goes through our internal training programme before they ever
              pick up the phone for a client. That means consistent call quality from day one.
            </p>
          </div>
        </div>
      </section>

      {/* What Outbound-Growth manages */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink">
            What Outbound-Growth manages
          </h2>
          <div className="mt-6 space-y-5 text-slate-200 leading-relaxed max-w-3xl">
            <p>
              When you work with us, you are not just hiring a rep. You are getting a complete
              outbound function:
            </p>
            <ol className="list-decimal pl-6 space-y-3">
              <li>
                <strong className="text-ink">Dedicated SDRs</strong> matched to your ICP
                and market. They work exclusively on your account.
              </li>
              <li>
                <strong className="text-ink">SDR management</strong> including daily
                standups, call coaching, and performance reviews.
              </li>
              <li>
                <strong className="text-ink">Cold calling</strong> with a managed dialler,
                local caller IDs, and structured talk tracks.
              </li>
              <li>
                <strong className="text-ink">LinkedIn outreach</strong> with
                profile-optimised messaging and connection sequences.
              </li>
              <li>
                <strong className="text-ink">Email sequences</strong> built around your
                value props and targeting criteria.
              </li>
              <li>
                <strong className="text-ink">Technology</strong> including CRM, dialler,
                email tooling, and LinkedIn tooling. All included.
              </li>
              <li>
                <strong className="text-ink">Live reporting via OG Pulse</strong>, our ops
                dashboard. Call recordings, activity logs, and a Meeting Vault with every
                booked meeting. No monthly PDF reports.
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* Why outsource the entire SDR function */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink">
            Why outsourcing the full SDR function works
          </h2>
          <div className="mt-6 space-y-5 text-slate-200 leading-relaxed max-w-3xl">
            <p>
              Most companies that try to build outbound internally underestimate the operational
              load. Hiring SDRs is only the start. You also need a manager, a tech stack, calling
              infrastructure, data sources, and a process to keep it all running. Each of those
              is a separate project with its own cost and learning curve.
            </p>
            <p>
              Outsourcing the entire function to Outbound-Growth means you skip all of that. We
              have the infrastructure, the playbooks, and the management layer already built.
              Your SDRs are productive faster, and your leadership team stays focused on closing
              deals instead of debugging diallers.
            </p>
            <p>
              Learn more about our approach to{' '}
              <Link href="/sdr-outsourcing" className="text-accent underline underline-offset-2 hover:text-primary">
                SDR outsourcing
              </Link>{' '}
              and how{' '}
              <Link href="/sdr-as-a-service" className="text-accent underline underline-offset-2 hover:text-primary">
                SDR-as-a-Service
              </Link>{' '}
              works in practice.
            </p>
          </div>
        </div>
      </section>

      {/* SA SDRs vs internal hires */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink">
            South African SDRs vs hiring internally
          </h2>
          <div className="mt-6 text-slate-200 leading-relaxed max-w-3xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="py-3 pr-6 font-display font-semibold text-ink" />
                    <th className="py-3 pr-6 font-display font-semibold text-ink">
                      Internal SDR (US/UK)
                    </th>
                    <th className="py-3 font-display font-semibold text-ink">
                      Outbound-Growth (SA)
                    </th>
                  </tr>
                </thead>
                <tbody className="text-slate-200">
                  <tr className="border-b border-white/10">
                    <td className="py-3 pr-6 font-semibold text-ink">All-in monthly cost</td>
                    <td className="py-3 pr-6">High (salary + benefits + tools + management)</td>
                    <td className="py-3">Flat retainer, everything included</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-3 pr-6 font-semibold text-ink">Ramp time</td>
                    <td className="py-3 pr-6">2-4 months typical</td>
                    <td className="py-3">Calling within 2 weeks</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-3 pr-6 font-semibold text-ink">Management</td>
                    <td className="py-3 pr-6">You hire and manage</td>
                    <td className="py-3">Included (daily coaching, standups)</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-3 pr-6 font-semibold text-ink">Technology</td>
                    <td className="py-3 pr-6">You source and configure</td>
                    <td className="py-3">Full stack included</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-3 pr-6 font-semibold text-ink">Reporting</td>
                    <td className="py-3 pr-6">Build your own</td>
                    <td className="py-3">OG Pulse (live dashboard)</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-6 font-semibold text-ink">Timezone fit (UK)</td>
                    <td className="py-3 pr-6">Same zone</td>
                    <td className="py-3">1-2 hours difference</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-6">
              The comparison is not just about cost. It is about operational speed and focus.
              With Outbound-Growth, your outbound function is running in weeks, not quarters.
              See how this fits into a broader{' '}
              <Link href="/sales-outsourcing" className="text-accent underline underline-offset-2 hover:text-primary">
                sales outsourcing
              </Link>{' '}
              strategy.
            </p>
          </div>
        </div>
      </section>

      <InternalLinks exclude="/south-african-sdrs" />

      <FaqSection faqs={faqs} />

      <SeoCtaSection />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'South African SDR Teams',
          provider: { '@type': 'Organization', name: 'Outbound-Growth', url: 'https://outbound-growth.com' },
          description: 'Dedicated South African SDR teams for US and UK B2B companies. English-fluent, timezone-compatible, fully managed.',
          areaServed: ['US', 'UK', 'Europe'],
          serviceType: 'SDR Outsourcing',
        }) }}
      />
    </div>
  );
}

SouthAfricanSdrs.seo = {
  title: 'South African SDRs for US & UK Companies | Outbound-Growth',
  description:
    'Hire dedicated South African SDRs for your US or UK sales team. English-fluent, timezone-compatible, and managed by Outbound-Growth with full tech stack and live reporting.',
  canonical: 'https://outbound-growth.com/south-african-sdrs',
  ogTitle: 'South African SDRs for US & UK Companies | Outbound-Growth',
  ogDescription:
    'Dedicated South African SDR teams for US and UK B2B companies.',
};
