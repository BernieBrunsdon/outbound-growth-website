import Hero from '../components/Hero';
import { SolutionIntro, SolutionChapters } from '../components/SolutionSection';
import ProcessSteps from '../components/ProcessSteps';
import WhySouthAfrica from '../components/WhySouthAfrica';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import StickyVideoZone from '../components/StickyVideoZone';

export default function Home() {
  return (
    <>
      {/* Body video always underneath — hero fades into it instead of a hard cut */}
      <StickyVideoZone
        src="/videos/hero-loop.mp4"
        opacity={0.4}
        cover="fixed"
        alwaysOn
        overlayClassName="bg-gradient-to-b from-navy/70 via-navy/55 to-navy/70"
      >
        {/* Hero video on top, masked soft at the bottom */}
        <StickyVideoZone
          src="/videos/why-sa-loop.mp4"
          opacity={0.35}
          priority
          fadeOutBottom
          overlayClassName="bg-gradient-to-r from-navy/95 via-navy/88 to-navy/70"
        >
          <Hero />
        </StickyVideoZone>

        <SolutionIntro />
        <SolutionChapters />
        <ProcessSteps />
        <WhySouthAfrica />
        <ContactForm />
        <Footer />
      </StickyVideoZone>
    </>
  );
}
