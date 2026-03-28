import Hero from '../components/Hero';
import SolutionSection from '../components/SolutionSection';
import ProcessSteps from '../components/ProcessSteps';
import WhySouthAfrica from '../components/WhySouthAfrica';
import IdealClients from '../components/IdealClients';
import Testimonials from '../components/Testimonials';
import ContactForm from '../components/ContactForm';

export default function Home() {
  return (
    <>
      <Hero />
      <SolutionSection />
      <ProcessSteps />
      <WhySouthAfrica />
      <IdealClients />
      <Testimonials />
      <ContactForm />
    </>
  );
}
