import Hero from '../components/Hero';
import AwardsBar from '../components/AwardsBar';
import About from '../components/About';
import Projects from '../components/Projects';
import Amenities from '../components/Amenities';
import LocationHighlights from '../components/LocationHighlights';
import InvestmentCalculator from '../components/InvestmentCalculator';
import Testimonials from '../components/Testimonials';
import Gallery from '../components/Gallery';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <main>
      <Hero />
      <AwardsBar />
      <About />
      <Projects />
      <Amenities />
      <LocationHighlights />
      <InvestmentCalculator />
      <Testimonials />
      <Gallery />
      <Contact />
    </main>
  );
}
