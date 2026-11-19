import Image from 'next/image';
import { useBookDemoModal } from '../context/BookDemoModalContext';
import { SolutionIntro } from './SolutionIntro';

export { SolutionIntro };

export function SolutionChapters() {
  const { openModal } = useBookDemoModal();

  const chapters = [
    {
      title: 'Dedicated SDR teams',
      subhead: 'People who own your pipeline.',
      body: 'Dedicated South African SDR professionals embedded into your sales operation. From prospect research to qualification and meeting generation, your team operates as an extension of your business.',
      bullets: [
        'Dedicated SDR capacity',
        'Native-level English communication',
        'Continuous coaching and quality assurance',
      ],
      reverse: false,
      ctaLabel: 'Talk through SDR fit',
      ctaType: 'modal',
      image: '/images/ecosystem/obg-pulse.png',
      imageAlt: 'OBG Pulse CRM and sales operations',
      width: 641,
      height: 1024,
    },
    {
      title: 'An integrated technology stack',
      subhead: 'Your entire outbound operation. One ecosystem.',
      body: 'Forget managing disconnected sales tools. We bring prospect intelligence, CRM, outreach infrastructure and campaign management together into one coordinated operation.',
      bullets: [
        'Integrated sales technology',
        'Centralised campaign management',
        'CRM and prospect visibility',
      ],
      reverse: true,
      ctaLabel: null,
      image: '/images/ecosystem/obg-central.png',
      imageAlt: 'OBG Central connecting Pulse and Reach',
      width: 1024,
      height: 515,
    },
    {
      title: 'Intelligent prospecting',
      subhead: 'Precision before outreach.',
      body: 'We identify the companies, decision-makers and buying signals that matter to your business. Every campaign starts with a defined ideal customer profile and research-led targeting.',
      bullets: [
        'ICP development',
        'Decision-maker identification',
        'Account and contact intelligence',
      ],
      reverse: false,
      ctaLabel: null,
      image: '/images/ecosystem/obg-reach-ui.png',
      imageAlt: 'OBG Reach prospect research and campaign interface',
      width: 642,
      height: 430,
    },
    {
      title: 'Omnichannel execution',
      subhead: 'Every interaction has a purpose.',
      body: 'Our SDRs coordinate personalised cold email, calling and LinkedIn outreach through structured campaigns designed to generate qualified conversations.',
      bullets: [
        'Personalised email campaigns',
        'Strategic cold calling',
        'LinkedIn engagement and follow-up',
      ],
      reverse: true,
      ctaLabel: null,
      image: '/images/ecosystem/obg-reach.png',
      imageAlt: 'OBG Reach campaigns, sequences and inbox',
      width: 642,
      height: 1024,
    },
    {
      title: 'Complete operational visibility',
      subhead: 'See the work. Track the results.',
      body: 'Our clients have access to OG Pulse, giving them visibility into outbound activity, prospect engagement, meeting progress and campaign performance.',
      bullets: [
        'Live activity and reporting',
        'Call and communication records',
        'Meeting and pipeline visibility',
      ],
      reverse: false,
      ctaLabel: null,
      ctaType: null,
      image: '/images/ecosystem/obg-pulse-ui.png',
      imageAlt: 'OG Pulse sales pipeline and performance interface',
      width: 641,
      height: 430,
    },
  ];

  return (
    <div className="relative">
      {chapters.map((chapter, index) => (
        <section
          key={chapter.title}
          className={index === 0 ? 'pt-8 md:pt-10 pb-14 md:pb-20' : 'py-14 md:py-20'}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8 grid md:grid-cols-12 gap-10 md:gap-14 items-center">
            <div className={`md:col-span-6 ${chapter.reverse ? 'md:order-2' : ''}`}>
              <p className="text-sm font-semibold text-muted mb-3 tabular-nums">
                {String(index + 1).padStart(2, '0')}
              </p>
              <h3 className="font-display text-2xl md:text-[2rem] font-semibold text-ink leading-tight mb-3">
                {chapter.title}
              </h3>
              <p className="text-lg font-medium text-primary mb-4">{chapter.subhead}</p>
              <p className="text-base md:text-lg text-slate-200 leading-relaxed mb-6">{chapter.body}</p>
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
                  className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors duration-200"
                >
                  {chapter.ctaLabel}
                </button>
              ) : null}
            </div>

            <div className={`md:col-span-6 flex justify-center ${chapter.reverse ? 'md:order-1' : ''}`}>
              <div className="product-shot">
                <Image
                  src={chapter.image}
                  alt={chapter.imageAlt}
                  width={chapter.width}
                  height={chapter.height}
                  quality={95}
                  unoptimized
                  className="product-shot-image"
                  sizes="520px"
                />
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}

export default function SolutionSection() {
  return (
    <>
      <SolutionIntro />
      <SolutionChapters />
    </>
  );
}
