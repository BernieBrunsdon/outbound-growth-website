import SeoPageHero from '../components/SeoPageHero';
import FaqSection from '../components/FaqSection';
import SeoCtaSection from '../components/SeoCtaSection';
import InternalLinks from '../components/InternalLinks';
import Link from 'next/link';

const faqs = [
  {
    q: 'What counts as a qualified lead?',
    a: 'A qualified lead is a decision-maker who matches your ICP, has expressed interest during a live conversation, and has agreed to a meeting or next step. We don\'t count raw contact records or unverified email addresses.',
  },
  {
    q: 'How do you build our prospect lists?',
    a: 'We start with your ICP criteria (industry, company size, job titles, geography) and cross-reference multiple data sources to build verified lists. Every contact is checked for accuracy before outreach begins.',
  },
  {
    q: 'What outreach channels do you use?',
    a: 'Cold calling is the backbone, supported by LinkedIn engagement and targeted email sequences. The exact mix depends on your market. We test and adjust the weighting throughout the campaign.',
  },
  {
    q: 'How quickly can a campaign launch?',
    a: 'Most campaigns go live within two weeks. That covers ICP workshops, list building, script development, and SDR onboarding. Complex markets with niche targeting may take a few extra days.',
  },
  {
    q: 'Do we get visibility into what the SDRs are doing?',
    a: 'Yes. OG Pulse gives you a live dashboard with call recordings, conversation logs, pipeline status, and the Meeting Vault where every booked meeting is logged with context and next steps.',
  },
  {
    q: 'What if leads don\'t convert to meetings?',
    a: 'We review call recordings, messaging, and objection patterns weekly. If conversion rates drop, we adjust scripts, targeting, or channel mix. You\'re never waiting until end-of-month to find out something isn\'t working.',
  },
  {
    q: 'Is this suitable for early-stage SaaS companies?',
    a: 'Yes, as long as you have a clear product, a defined target buyer, and enough budget for a 90-day pilot. We\'ve helped SaaS companies from Series A through to enterprise-level generate pipeline consistently.',
  },
  {
    q: 'What does a 90-day pilot look like?',
    a: 'Month one focuses on ICP refinement, list building, and initial outreach. Months two and three are about scaling what works and tuning messaging. By the end of the pilot you have a repeatable outbound process and clear data on cost-per-meeting.',
  },
];

export default function LeadGeneration() {
  return (
    <div className="bg-bg">
      <SeoPageHero
        label="Lead generation"
        h1="B2B Lead Generation That Puts Qualified Opportunities in Your Pipeline"
        subtitle="Most lead gen services sell you a spreadsheet. We deliver booked meetings with decision-makers who match your ICP, through dedicated SDR teams running calls, LinkedIn, and email every day."
      />

      {/* Lead lists vs qualified opportunities */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink">
            Lead lists are not lead generation
          </h2>
          <div className="mt-6 max-w-3xl space-y-4 text-slate-200 leading-relaxed">
            <p>
              A CSV with 5,000 names and email addresses is a contact list. It tells you nothing about whether
              those people need your product, have budget, or would take a call. Real lead generation starts
              after the list is built. It means reaching out, having conversations, handling objections, and
              qualifying whether there is a genuine opportunity worth your sales team’s time.
            </p>
            <p>
              That distinction matters because most B2B companies don’t struggle to find names. They struggle to
              turn those names into pipeline. Our lead generation service covers the full path from research to
              booked meeting so your closers spend their time on conversations that can actually close.
            </p>
          </div>
        </div>
      </section>

      {/* ICP definition and prospect research */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink">
            ICP definition and prospect research
          </h2>
          <div className="mt-6 max-w-3xl space-y-4 text-slate-200 leading-relaxed">
            <p>
              Every campaign starts with an ICP workshop. We work with your team to pin down the companies and
              job titles that represent your best-fit buyers. That means industry, revenue range, headcount,
              technology stack, geography, and any deal-breaker criteria that would disqualify a prospect before
              outreach.
            </p>
            <p>
              From there, our research team builds targeted prospect lists using multiple data sources. Each
              contact is verified for accuracy: correct company, current role, working phone number, and
              validated email. This front-loaded research keeps connect rates high and wasted dials low.
            </p>
          </div>
        </div>
      </section>

      {/* Contact discovery */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink">
            Contact discovery
          </h2>
          <div className="mt-6 max-w-3xl space-y-4 text-slate-200 leading-relaxed">
            <p>
              Finding the right person inside a target account is often the hardest part. Our SDRs use a
              combination of LinkedIn research, company website mapping, and direct-dial databases to identify
              and verify decision-makers. We look for the people who own the problem your product solves, not
              just whoever has the most senior title.
            </p>
            <p>
              When direct contact details aren’t available through standard sources, we use multi-step research
              workflows to find alternate paths in: referrals within the org, identifying adjacent stakeholders,
              or working through gatekeepers with a clear value proposition.
            </p>
          </div>
        </div>
      </section>

      {/* Multi-channel outreach */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink">
            Multi-channel outreach: calls, LinkedIn, and email
          </h2>
          <div className="mt-6 max-w-3xl space-y-4 text-slate-200 leading-relaxed">
            <p>
              Cold calling is our primary channel. Phone conversations let SDRs qualify in real time, handle
              objections, and book meetings on the spot. Every call is recorded and logged in{' '}
              <Link href="/#og-pulse" className="text-accent hover:underline">OG Pulse</Link> so
              you can listen back and see exactly how your value prop lands.
            </p>
            <p>
              LinkedIn outreach adds a second touchpoint. Connection requests, profile views, and direct
              messages warm up prospects before or after a call attempt. Email sequences fill the gaps,
              following up with contacts who didn’t pick up or asked to be reached later.
            </p>
            <p>
              The weighting across channels depends on your market. We test different sequences during the
              first few weeks and double down on what produces the highest connect and conversion rates.
            </p>
          </div>
        </div>
      </section>

      {/* Qualification and appointment setting */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink">
            Qualification and appointment setting
          </h2>
          <div className="mt-6 max-w-3xl space-y-4 text-slate-200 leading-relaxed">
            <p>
              A meeting with the wrong person wastes everyone’s time. Our SDRs qualify every conversation
              against criteria you define: budget authority, timeline, current solution, and pain points. Only
              prospects who clear those hurdles get booked onto your calendar.
            </p>
            <p>
              When a meeting is set, it goes into the Meeting Vault inside OG Pulse with full context: who the
              prospect is, what was discussed, what objections came up, and what they expect from the call. Your
              AEs walk in prepared instead of spending the first ten minutes figuring out why the meeting exists.
            </p>
            <ul className="space-y-3 mt-4">
              {[
                'Decision-maker confirmation before booking',
                'Qualification notes attached to every meeting',
                'Calendar invites sent and confirmed with the prospect',
                'No-show follow-up handled by the SDR team',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Reporting */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink">
            Reporting and visibility
          </h2>
          <div className="mt-6 max-w-3xl space-y-4 text-slate-200 leading-relaxed">
            <p>
              You shouldn’t have to wait for a monthly PDF to know how your campaign is performing.{' '}
              <Link href="/#og-pulse" className="text-accent hover:underline">OG Pulse</Link> gives
              you a live dashboard with daily activity: calls made, conversations held, meetings booked,
              and pipeline value. Every call recording and conversation log is accessible in real time.
            </p>
            <p>
              Weekly reviews with your dedicated account lead cover what’s working, what’s not, and what we’re
              changing. If messaging isn’t landing, we adjust scripts mid-week rather than waiting for a
              reporting cycle. The goal is continuous improvement, not periodic snapshots.
            </p>
          </div>
        </div>
      </section>

      {/* Lead gen for SaaS / software */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink">
            Lead generation for SaaS and software companies
          </h2>
          <div className="mt-6 max-w-3xl space-y-4 text-slate-200 leading-relaxed">
            <p>
              SaaS sales cycles have their own dynamics: multiple stakeholders, technical evaluation stages, and
              buyers who have already researched your competitors before they take a call. Our SDRs are trained
              to navigate that. They understand how to position a product demo, handle “we’re already using X”
              objections, and identify whether a prospect is in an active buying window.
            </p>
            <p>
              For software companies selling into mid-market and enterprise accounts, we focus on
              multi-threaded outreach. That means engaging more than one stakeholder inside the same account to
              increase the chances of reaching someone with both the pain and the authority to act.
            </p>
            <p>
              Whether you’re targeting CTOs at 200-person companies or ops managers at Fortune 500s, the
              process adapts. ICP criteria, messaging, cadence, and channel mix are all calibrated to your
              specific market.
            </p>
          </div>
        </div>
      </section>

      {/* Internal links */}
      <InternalLinks exclude="/lead-generation" />

      {/* FAQs */}
      <FaqSection faqs={faqs} />

      {/* CTA */}
      <SeoCtaSection />

      {/* Service schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'B2B Lead Generation Services',
            provider: {
              '@type': 'Organization',
              name: 'Outbound-Growth',
              url: 'https://outbound-growth.com',
            },
            description:
              'B2B lead generation that delivers qualified sales opportunities through dedicated SDR teams handling research, outreach, qualification, and meeting booking.',
            url: 'https://outbound-growth.com/lead-generation',
            areaServed: 'Worldwide',
            serviceType: 'B2B Lead Generation',
          }),
        }}
      />
    </div>
  );
}

LeadGeneration.seo = {
  title: 'B2B Lead Generation Services | Outbound-Growth',
  description:
    'B2B lead generation that delivers qualified sales opportunities, not just contact lists. Dedicated SDR teams handle research, outreach, qualification, and meeting booking.',
  canonical: 'https://outbound-growth.com/lead-generation',
  ogTitle: 'B2B Lead Generation Services | Outbound-Growth',
  ogDescription:
    'Qualified B2B sales opportunities from dedicated SDR teams.',
};
