import Navbar from './components/Navbar';
import TrendLineAnimation from './components/TrendLineAnimation';
import Hero from './components/Hero';
import Services from './components/Services';
import ServicesBanner from './components/ServicesBanner';
import AccountingServices from './components/AccountingServices';
import ScrollObserver from './components/ScrollObserver';

export default function Home() {
  return (
    <>
      <TrendLineAnimation />
      <Navbar />
      <ScrollObserver />
      <main className="w-full">
        <section id="home" className="w-full flex flex-col justify-start">
          <Hero />
        </section>
        
        {/* Combined services section */}
        <section id="services" className="w-full -mt-24">
          {/* Strategic services */}
          <div id="strategic-services" className="w-full flex items-center justify-center">
            <Services />
          </div>
          
          {/* Banner between service types */}
          <div id="services-banner" className="w-full -mt-16">
            <ServicesBanner />
          </div>
          
          {/* Accounting services */}
          <div id="accounting-services" className="min-h-screen w-full flex items-center justify-center">
            <AccountingServices />
          </div>
        </section>
      </main>
    </>
  );
}
