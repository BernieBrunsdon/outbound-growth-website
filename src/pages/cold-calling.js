import SeoPageHero from '../components/SeoPageHero';
import FaqSection from '../components/FaqSection';
import SeoCtaSection from '../components/SeoCtaSection';
import InternalLinks from '../components/InternalLinks';
import Link from 'next/link';

const faqs = [
  {
    q: 'How many calls does an SDR make per day?',
    a: 'A dedicated SDR typically makes 60-80 dials per day, depending on list quality and call duration. We prioritise quality conversations over raw dial volume.',
  },
  {
    q: 'Do you use auto-dialers or power dialers?',
    a: 'We use power dialers to reduce idle time between calls, but every conversation is live and human. No robocalls, no pre-recorded messages.',
  },
  {
    q: 'How do you build calling lists?',
    a: 'We use a combination of LinkedIn Sales Navigator, ZoomInfo, Apollo, and manual research to build targeted contact lists matched to your ICP. Every list is reviewed before dialling begins.',
  },
  {
    q: 'What happens when a meeting is booked?',
    a: 'The SDR confirms the meeting, sends a calendar invite, logs the details in your CRM, and briefs your closer with call notes and context. You can see everything in OG Pulse.',
  },
  {
    q: 'Can your SDRs call into North America and Europe?',
    a: 'Yes. Our South African SDRs work across US, UK, and European time zones. South Africa sits on GMT+2 with no daylight savings, which means strong overlap with both London and East Coast business hours.',
  },
  {
    q: 'How long before we start seeing meetings?',
    a: 'Most campaigns begin generating qualified conversations within the first two to three weeks. The first week is spent on onboarding, ICP alignment, and list building.',
  },
  {
    q: 'Do you provide call recordings?',
    a: 'Yes. Every call is recorded and logged. You can review recordings directly in OG Pulse, use them for coaching, or share them with your sales team.',
  },
  {
    q: 'What if cold calling does not work for our market?',
    a: 'Cold calling is one channel in a broader outbound strategy. If phone is underperforming for your ICP, we layer in email sequences and LinkedIn outreach to improve coverage.',
  },
];

export default function ColdCalling() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'B2B Cold Calling Services',
    provider: {
      '@type': 'Organization',
      name: 'Outbound-Growth',
      url: 'https://outbound-growth.com',
    },
    description:
      'Professional B2B cold calling from dedicated SDR teams. Research-driven calls, real conversations with decision-makers, and qualified meetings booked on your calendar.',
    areaServed: ['US', 'GB', 'EU'],
    serviceType: 'B2B Cold Calling',
  };

  return (
    <div className="bg-bg">
      <SeoPageHero
        label="Cold calling"
        h1="B2B Cold Calling Services That Generate Real Sales Conversations"
        subtitle="Dedicated SDRs who research your prospects, pick up the phone, and book qualified meetings on your calendar. No robocalls. No scripts read verbatim. Just real conversations with decision-makers."
      />

      {/* Why cold calling still works */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink">
            Why cold calling still works in B2B
          </h2>
          <div className="mt-6 space-y-4 text-slate-200 leading-relaxed max-w-3xl">
            <p>
              Email inboxes are crowded. LinkedIn is noisy. But when a well-prepared SDR
              calls a prospect who fits your ICP, the conversation happens in real time.
              There is no waiting for a reply, no algorithm deciding whether your message
              gets seen.
            </p>
            <p>
              Cold calling works because it forces a response. A prospect either picks up
              or they do not. When they do, your SDR has 30 seconds to earn the next
              minute. That directness is hard to replicate in any other channel, and it is
              why phone remains the fastest path to a qualified meeting for most B2B sales
              teams.
            </p>
          </div>
        </div>
      </section>

      {/* Building calling lists */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink">
            Building calling lists and research before calls
          </h2>
          <div className="mt-6 space-y-4 text-slate-200 leading-relaxed max-w-3xl">
            <p>
              A cold call is only as good as the list behind it. Before any dialling
              begins, our team builds targeted contact lists matched to your ideal
              customer profile. We pull from LinkedIn Sales Navigator, ZoomInfo, Apollo,
              and manual research to verify titles, direct dials, and company fit.
            </p>
            <p>
              Each contact is tagged with context: recent funding rounds, job changes,
              tech stack signals, or trigger events that give the SDR a reason to call
              beyond &quot;just checking in.&quot; This research phase typically takes three
              to five days for a new campaign and continues on a rolling basis as lists
              are worked and refreshed.
            </p>
          </div>
        </div>
      </section>

      {/* Call scripts and personalisation */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink">
            Call scripts and personalisation
          </h2>
          <div className="mt-6 space-y-4 text-slate-200 leading-relaxed max-w-3xl">
            <p>
              We write call frameworks, not rigid scripts. The framework gives your SDR a
              structured opening, a clear value hook, and two or three discovery
              questions. But the actual conversation is adapted to the person on the other
              end of the line.
            </p>
            <p>
              Personalisation starts with the research. If the prospect recently expanded
              into a new market or posted about a hiring challenge, the SDR references it
              in the first 15 seconds. This is what separates a call that gets a
              conversation from one that gets a hang-up.
            </p>
          </div>
        </div>
      </section>

      {/* Objection handling */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink">
            Objection handling
          </h2>
          <div className="mt-6 space-y-4 text-slate-200 leading-relaxed max-w-3xl">
            <p>
              &quot;We already have a provider.&quot; &quot;Send me an email.&quot;
              &quot;Not interested.&quot; These are not rejections. They are reflexes. A
              trained SDR knows the difference and has a measured response for each.
            </p>
            <p>
              We document the most common objections for your market during the first two
              weeks and build a living objection-handling guide. SDRs practise responses
              in coaching sessions before going live. The goal is never to be pushy. It is
              to acknowledge the objection, share a relevant point, and ask one more
              question.
            </p>
          </div>
        </div>
      </section>

      {/* Qualification and booking */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink">
            Qualification and booking meetings
          </h2>
          <div className="mt-6 space-y-4 text-slate-200 leading-relaxed max-w-3xl">
            <p>
              Not every conversation should become a meeting. Our SDRs qualify against
              your criteria before booking: budget authority, timeline, use case fit, and
              team size. If a prospect does not meet the threshold, they go into a nurture
              sequence rather than onto your calendar.
            </p>
            <p>
              When a prospect does qualify, the SDR books directly into your calendar,
              sends a confirmation with context, and logs the call summary in your CRM.
              Your closer walks into the meeting knowing exactly what was discussed.
            </p>
          </div>
        </div>
      </section>

      {/* CRM and reporting */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink">
            CRM activity and call reporting
          </h2>
          <div className="mt-6 space-y-4 text-slate-200 leading-relaxed max-w-3xl">
            <p>
              Every call, voicemail, and conversation is logged in your CRM in real time.
              We work inside HubSpot, Salesforce, Pipedrive, or whatever system your team
              uses. No end-of-week data dumps.
            </p>
            <p>
              Beyond CRM logging, OG Pulse gives you a live dashboard with dial counts,
              connect rates, meeting conversion, and call recordings. You can review any
              call, flag coaching moments, and track pipeline contribution without waiting
              for a monthly report.
            </p>
          </div>
        </div>
      </section>

      {/* SDR management */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink">
            SDR management
          </h2>
          <div className="mt-6 space-y-4 text-slate-200 leading-relaxed max-w-3xl">
            <p>
              Your SDR is managed by our ops team. That means daily standups, weekly call
              reviews, script iteration, and performance coaching. You do not need to hire
              a sales manager to oversee your outsourced caller.
            </p>
            <p>
              We handle ramp-up, ongoing training, and replacement if an SDR is not
              performing. You stay involved at the strategic level: approving messaging,
              reviewing meetings, and giving feedback on lead quality.
            </p>
          </div>
        </div>
      </section>

      {/* US and UK calling */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink">
            US calling and UK calling
          </h2>
          <div className="mt-6 space-y-4 text-slate-200 leading-relaxed max-w-3xl">
            <p>
              South Africa sits on GMT+2 with no daylight savings adjustment. That puts
              our SDRs in a natural window for London morning calls and US East Coast
              afternoon calls. For West Coast campaigns, we shift schedules to start later
              in the SA day.
            </p>
            <p>
              Our SDRs are native English speakers with neutral accents. They are
              comfortable calling into both American and British markets, and they
              understand the cultural differences in how prospects in each region prefer
              to be approached.
            </p>
          </div>
        </div>
      </section>

      {/* South African SDRs */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink">
            Why South African SDRs are an attractive option
          </h2>
          <div className="mt-6 space-y-4 text-slate-200 leading-relaxed max-w-3xl">
            <p>
              South Africa has a deep talent pool of English-speaking graduates who are
              hungry to build careers in tech sales. The cost of living means you get a
              full-time, dedicated SDR at a fraction of the cost of hiring in London or
              New York, without sacrificing call quality or professionalism.
            </p>
            <p>
              Combined with favourable time zones and a cultural affinity with Western
              markets, South African SDRs consistently perform on par with their US and UK
              counterparts on connect rates and meeting conversion.
            </p>
            <p>
              <Link
                href="/south-african-sdrs"
                className="text-primary hover:underline"
              >
                Learn more about our South African SDR model
              </Link>
            </p>
          </div>
        </div>
      </section>

      <InternalLinks exclude="/cold-calling" />

      <FaqSection faqs={faqs} />

      <SeoCtaSection />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </div>
  );
}

ColdCalling.seo = {
  title: 'B2B Cold Calling Services | Outsourced SDR Team | Outbound-Growth',
  description:
    'Professional B2B cold calling from dedicated SDR teams. Research-driven calls, real conversations with decision-makers, and qualified meetings booked on your calendar.',
  canonical: 'https://outbound-growth.com/cold-calling',
  ogTitle: 'B2B Cold Calling Services | Outbound-Growth',
  ogDescription:
    'Outsourced cold calling that generates real B2B sales conversations.',
};
