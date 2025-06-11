"use client";

import Navbar from './components/Navbar';
import TrendLineAnimation from './components/TrendLineAnimation';
import Hero from './components/Hero';
import Services from './components/Services';
import ServicesBanner from './components/ServicesBanner';
import AccountingServices from './components/AccountingServices';
import Contact from './components/Contact';
import ScrollObserver from './components/ScrollObserver';
import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

export default function Home() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const scrollTo = searchParams.get('scrollTo');
    if (scrollTo === 'services') {
      const servicesSection = document.getElementById('services');
      if (servicesSection) {
        window.scrollTo({
          top: servicesSection.offsetTop - 100, // Adjust for navbar height
          behavior: 'smooth',
        });
      }
    } else if (scrollTo === 'contact') {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        window.scrollTo({
          top: contactSection.offsetTop - 100, // Adjust for navbar height
          behavior: 'smooth',
        });
      }
    }
  }, [searchParams]);

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

        {/* Contact section */}
        <section id="contact" className="w-full">
          <Contact />
        </section>
      </main>
    </>
  );
}
