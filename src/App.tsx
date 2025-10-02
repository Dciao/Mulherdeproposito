import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import HowItWorks from './components/HowItWorks';
import Products from './components/Products';
import Pricing from './components/Pricing';
import Bonus from './components/Bonus';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Guarantee from './components/Guarantee';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Benefits />
      <HowItWorks />
      <Products />
      <Pricing />
      <Bonus />
      <Testimonials />
      <FAQ />
      <Guarantee />
      <FinalCTA />
      <Footer />
    </div>
  );
}

export default App;
