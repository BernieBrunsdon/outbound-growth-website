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
      {/* Man-from-behind video: hero through first section */}
      <StickyVideoZone
        src="/videos/why-sa-loop.mp4"
        poster="/images/og-pulse-dashboard-preview.png"
        opacity={0.4}
        overlayClassName="bg-gradient-to-r from-navy via-navy/90 to-navy/60"
      >
        <Hero />
        <SolutionIntro />
      </StickyVideoZone>

      {/* Former hero video: fixed cover for the entire rest of the site */}
      <StickyVideoZone
        src="/videos/hero-loop.mp4"
        poster="/images/og-pulse-dashboard-preview.png"
        opacity={0.45}
        layered
        cover="fixed"
        overlayClassName="bg-gradient-to-b from-navy/65 via-navy/50 to-navy/65"
      >
        <SolutionChapters />
        <ProcessSteps />
        <WhySouthAfrica />
        <ContactForm />
        <Footer />
      </StickyVideoZone>
    </>
  );
}
