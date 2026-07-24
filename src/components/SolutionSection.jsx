import Image from 'next/image';
import { useBookDemoModal } from '../context/BookDemoModalContext';
import { CLIENT_APP_URL } from '../lib/appUrl';
import siteContent from '../../content/site.json';

const CHAPTER_IMAGES = [
  '/images/og-pulse-multidevice-preview.png',
  '/images/og-pulse-solution-showcase.png',
  '/images/og-pulse-dashboard-preview.png',
  '/images/og-pulse-multidevice-preview.png',
  '/images/og-pulse-app-real.png',
];

export default function SolutionSection() {
  const { openModal } = useBookDemoModal();
  const solution = siteContent.solution;

  const chapters = [
    {
      title: 'Dedicated SDR team',
      subhead: 'Embedded in your motion—not a shared pool.',
      body:
        'Each seat is staffed with vetted, South Africa–based talent: native English, trained on your ICP, tone, and calendar. Continuous coaching and QA sit with us so you are not hiring, ramping, or managing headcount.',
      bullets: [
        'Coaching and QA on live work',
        'No hiring or ramp burden on your side',
        'Strategy support included with the seat',
      ],
      reverse: false,
      ctaLabel: 'Talk through SDR fit',
      ctaType: 'modal',
      imageAlt: 'OG Pulse on multiple devices',
    },
    {
      title: 'Stack included',
      subhead: 'No setup fees. No separate software chase.',
      body:
        'Your team plugs into our outbound engine—data, sequencing, and CRM sync—without a five-figure tool bill or a two-week config project. We carry subscription and ops cost; you get meetings.',
      bullets: [
        'Target list intelligence',
        'HubSpot / Salesforce integrations',
        'Multi-channel sequences managed for you',
      ],
      reverse: true,
      ctaLabel: null,
      imageAlt: 'Outbound stack and workflow showcase',
    },
    {
      title: 'Targeting that converts',
      subhead: 'ICP and lists built for buyers who close.',
      body:
        'We define firmographics, roles, and triggers, then build and refresh account lists. Messaging is tested against titles and segments that actually convert in your category—not volume for its own sake.',
      bullets: [
        'ICP aligned to market fit',
        'Persona-based message tests',
        'Feedback loops into the next list',
      ],
      reverse: false,
      ctaLabel: null,
      imageAlt: 'OG Pulse dashboard targeting view',
    },
    {
      title: 'Daily omnichannel execution',
      subhead: 'Call, email, and LinkedIn—with follow-through.',
      body:
        'Cadences run across channels with disciplined follow-up. We test subject lines, value props, and scripts, then keep pressure on engagement—not one-off blasts.',
      bullets: [
        'A/B testing on live campaigns',
        'Multi-touch nurture sequences',
        'Objection handling and follow-up cadence',
      ],
      reverse: true,
      ctaLabel: null,
      imageAlt: 'Campaign activity across devices',
    },
    {
      title: 'OG Pulse',
      subhead: 'The same ops dashboard our SDRs use.',
      body:
        'Skip the black-box PDF. Log into Pulse for call recordings, email logs, and the Meeting Vault—24/7. Check intent notes and show-up history whenever you want proof the work is happening.',
      bullets: [
        'Live call and message logs',
        'Meeting Vault with context',
        'Show-up visibility over time',
      ],
      reverse: false,
      ctaLabel: 'Open sample Meeting Vault',
      ctaType: 'app',
      imageAlt: 'OG Pulse application screenshot',
    },
  ];

  return (
    <section id="solution" className="relative isolate bg-bg">
      <div className="relative">
        <div className="text-left md:text-center py-16 md:py-20 px-6 max-w-4xl mx-auto">
          <div className="text-section-label">{solution.label}</div>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-ink mb-4 leading-tight">
            {solution.title}
          </h2>
          <p className="text-lg md:text-xl text-muted leading-relaxed">{solution.subtitle}</p>
        </div>

        {chapters.map((chapter, index) => (
          <section
            key={chapter.title}
            className={`py-14 md:py-20 ${index % 2 === 0 ? 'bg-surface' : 'bg-bg'}`}
          >
            <div className="max-w-7xl mx-auto px-6 lg:px-8 grid md:grid-cols-12 gap-10 md:gap-14 items-center">
              <div className={`md:col-span-6 ${chapter.reverse ? 'md:order-2' : ''}`}>
                <p className="text-sm font-semibold text-muted mb-3 tabular-nums">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <h3 className="font-display text-2xl md:text-4xl font-semibold text-ink leading-tight mb-3">
                  {chapter.title}
                </h3>
                <p className="text-lg font-medium text-primary mb-4">{chapter.subhead}</p>
                <p className="text-base md:text-lg text-muted leading-relaxed mb-6">{chapter.body}</p>
                <ul className="space-y-3 mb-8">
                  {chapter.bullets.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-ink">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" aria-hidden />
                      <span className="text-base font-medium leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>

                {chapter.ctaLabel && chapter.ctaType === 'modal' ? (
                  <button
                    type="button"
                    onClick={() => openModal()}
                    className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
                  >
                    {chapter.ctaLabel}
                  </button>
                ) : null}

                {chapter.ctaLabel && chapter.ctaType === 'app' ? (
                  <a
                    href={CLIENT_APP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-accent text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity duration-200"
                  >
                    {chapter.ctaLabel}
                  </a>
                ) : null}
              </div>

              <div className={`md:col-span-6 ${chapter.reverse ? 'md:order-1' : ''}`}>
                <div className="relative overflow-hidden border border-slate-200/80 bg-white">
                  <Image
                    src={CHAPTER_IMAGES[index]}
                    alt={chapter.imageAlt}
                    width={1280}
                    height={800}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}
