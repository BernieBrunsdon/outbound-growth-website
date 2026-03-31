import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useBookDemoModal } from '../context/BookDemoModalContext';
import { CLIENT_APP_URL } from '../lib/appUrl';

export default function SolutionSection() {
  const { openModal } = useBookDemoModal();
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => setIsVisible(true), []);
  const chapters = [
    {
      title: 'Dedicated SDR Team: Your Premium Force.',
      subhead: 'A curated, strategic asset embedded in your go-to-market motion.',
      body:
        'This is not a shared pool or a generic outsourced workforce. Each client SDR team is staffed with rigorously vetted, South African based talent (native English proficiency, perfect cultural alignment with buyers). They are meticulously trained for a perfect fit with your specific ICP, tone, and calendar—acting as a seamless, specialized extension of your internal revenue operations team.',
      bullets: [
        'Continuous Coaching & QA on every call.',
        'Zero hiring, onboarding, or ramp-up burden.',
        'High-level consultative strategic support included.',
      ],
      reverse: false,
      ctaLabel: 'View our SDR selection process',
      ctaType: 'modal',
    },
    {
      title: 'Integrated Data & Technology Stack: Immediate Force Multiplication.',
      subhead:
        'No setup fees, no software licenses to manage. A powerful, turnkey suite from day one.',
      body:
        'Eliminate the initial five-figure software investment and two-week configuration timeframe of building a robust outbound tech stack. Your dedicated SDR team plugs you immediately into our fully optimized omnichannel engine: premium data intelligence for precision list building, advanced multi-channel sequencing, and flawless, real-time CRM synchronization. We assume all management and subscription costs—you simply receive the meetings.',
      bullets: [
        'Verified, dynamic target list intelligence.',
        'Native HubSpot / Salesforce integrations.',
        'Fully optimized multi-channel orchestration.',
      ],
      reverse: true,
      ctaLabel: null,
    },
    {
      title: 'Strategic Market Targeting: Precision Over Volume.',
      subhead: 'Data-driven ideal client profile definition and account list intelligence.',
      body:
        "Moving beyond basic keywords, we execute a sophisticated market intelligence analysis to build dynamic, high-intent target account lists. Our approach is strictly outcomes-focused, implementing persona-based messaging feedback loops that continuously test which titles and companies convert. This rigorous, iterative process ensures we are pursuing the buyers who actually buy in your category, maximizing every conversation's value.",
      bullets: [
        'Deep ICP-to-market fit alignment.',
        'Persona-based message testing.',
        'Strategic market segment feedback loops.',
      ],
      reverse: false,
      ctaLabel: null,
    },
    {
      title: 'Disciplined Omnichannel Execution: Proven Momentum.',
      subhead:
        'A multi-touch blend of call, email, and LinkedIn cadences, rigorously optimized.',
      body:
        'Outbound success is about operational discipline. Our SDR teams do not execute one-off "blasts." We orchestrate complex, highly disciplined cadences—integrating a blend of 12+ omnichannel touches over a defined period to maximize contact rates. Every campaign features robust A/B testing on subject lines, value propositions, and scripts, executed with a relentless focus on multi-channel follow-up and engagement, not just initial outreach.',
      bullets: [
        'Rigorous A/B performance testing.',
        'Omnichannel lead nurture sequences.',
        'Relentless follow-up and objection handling discipline.',
      ],
      reverse: true,
      ctaLabel: null,
    },
    {
      title: 'OG Pulse: The Transparency Engine.',
      subhead:
        'The definitive end of "black-box" agency wondering. Total, unfiltered operational access.',
      body:
        "We don't hide our work behind monthly PDF reports. We provide OG Pulse, the exact same real-time operations dashboard our dedicated SDR teams use. Log in to your Pulse portal for unfiltered, 24/7 access to all call recordings, email logs, and your definitive Meeting Vault. Verify every lead, review their intent details, and track your historical show-up rates. This level of total transparency guarantees that your monthly investment is always generating the momentum and pipeline you expect.",
      bullets: [
        'Live call and message logs.',
        'Shared access to the high-intent Meeting Vault.',
        'Tracked and optimized Meeting Show-Up Rates.',
      ],
      reverse: false,
      ctaLabel: 'See a sample Meeting Vault',
      ctaType: 'app',
    },
  ];

  return (
    <section id="solution" className="relative isolate">
      <div
        className="absolute inset-0 pointer-events-none bg-[url('/images/solutions-bg-texture.png')] bg-cover bg-center bg-fixed mix-blend-multiply"
        style={{ opacity: 0.15 }}
        aria-hidden
      />

      <div className="relative">
        <div className={`text-center py-20 px-6 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
          <div className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">Our solution</div>
          <h2 className="text-4xl md:text-5xl font-bold text-ink mb-6 max-w-5xl mx-auto">
            A Premium, Transparent Outbound System Built For Scale
          </h2>
          <p className="text-xl text-muted max-w-3xl mx-auto leading-relaxed">
            Scroll through each chapter to see exactly how your outbound engine is built and operated.
          </p>
        </div>

        {chapters.map((chapter, index) => (
          <section
            key={chapter.title}
            className={`relative min-h-screen py-24 ${
              index % 2 === 0 ? 'bg-white/85' : 'bg-slate-50/85'
            } backdrop-blur-[1px]`}
          >
            <div className="container mx-auto px-6 grid md:grid-cols-12 gap-12 items-center">
              <div className={`md:col-span-7 ${chapter.reverse ? 'md:order-2' : ''}`}>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wide mb-6">
                  Chapter {index + 1}
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-ink leading-tight mb-6">{chapter.title}</h2>
                <h4 className="text-xl md:text-2xl font-semibold text-primary mb-6">{chapter.subhead}</h4>
                <p className="text-lg text-muted leading-relaxed mb-8">{chapter.body}</p>
                <ul className="space-y-4 mb-10">
                  {chapter.bullets.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-ink">
                      <span className="mt-1.5 w-2.5 h-2.5 rounded-full bg-accent flex-shrink-0" aria-hidden />
                      <span className="text-base md:text-lg font-medium">{item}</span>
                    </li>
                  ))}
                </ul>

                {chapter.ctaLabel && chapter.ctaType === 'modal' ? (
                  <button
                    type="button"
                    onClick={() => openModal()}
                    className="inline-flex items-center bg-primary text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-200 btn-hover shadow-lg"
                  >
                    {chapter.ctaLabel}
                  </button>
                ) : null}

                {chapter.ctaLabel && chapter.ctaType === 'app' ? (
                  <a
                    href={CLIENT_APP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-accent text-white px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition-all duration-200 btn-hover shadow-lg"
                  >
                    {chapter.ctaLabel}
                  </a>
                ) : null}
              </div>

              <div className={`md:col-span-5 ${chapter.reverse ? 'md:order-1' : ''}`}>
                {index === 4 ? (
                  <div className="relative rounded-3xl border border-gray-100 bg-white shadow-2xl p-4 md:p-5 overflow-hidden">
                    <Image
                      src="/images/og-pulse-app-real.png"
                      alt="Actual OG Pulse app screenshot"
                      width={1280}
                      height={896}
                      className="w-full h-auto rounded-2xl object-cover"
                    />
                  </div>
                ) : (
                  <div className="relative rounded-3xl border border-gray-100 bg-white shadow-2xl p-10 md:p-12">
                    <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-accent/80" aria-hidden />
                    <div className="absolute -bottom-3 -left-3 w-6 h-6 rounded-full bg-primary/80" aria-hidden />
                    <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mb-8">
                      {index === 0 && (
                        <svg className="w-10 h-10 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M17 20h5V4h-5m-5 16h5V10h-5m-5 10h5V14H7m-5 6h5V8H2" />
                        </svg>
                      )}
                      {index === 1 && (
                        <svg className="w-10 h-10 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M4 6h16M4 12h16M4 18h16M8 4v16M16 4v16" />
                        </svg>
                      )}
                      {index === 2 && (
                        <svg className="w-10 h-10 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M4 19h16M4 5h8v6H4zM14 9h6M14 13h6M4 15h8" />
                        </svg>
                      )}
                      {index === 3 && (
                        <svg className="w-10 h-10 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M8 7h8M6 12h12M9 17h6M4 5h2v2H4zM18 5h2v2h-2zM4 10h2v2H4zM18 10h2v2h-2zM4 15h2v2H4zM18 15h2v2h-2z" />
                        </svg>
                      )}
                    </div>
                    <h3 className="text-2xl font-bold text-ink mb-4">{chapter.title}</h3>
                    <p className="text-muted leading-relaxed">
                      Premium execution architecture with measurable operational visibility at every stage.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}
