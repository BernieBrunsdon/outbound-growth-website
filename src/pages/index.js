import Hero from '../components/Hero';
import ServicesGrid from '../components/ServicesGrid';
import ProcessSteps from '../components/ProcessSteps';
import IntegrationsGrid from '../components/IntegrationsGrid';
import CaseStudies from '../components/CaseStudies';
import Testimonials from '../components/Testimonials';
import ContactForm from '../components/ContactForm';

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <ProcessSteps />
      <IntegrationsGrid />
      <CaseStudies />
      <Testimonials />
      <ContactForm />
    </>
  );
}
