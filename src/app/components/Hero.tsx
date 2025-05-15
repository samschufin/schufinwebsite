'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';
import AnimatedElement from './AnimatedElement';
import { scrollToElement } from '../lib/scrollUtils';
import { motion } from 'framer-motion';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Delay the animation slightly for a staggered effect
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  // Smooth scroll function using our custom utility
  const handleServicesClick = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    
    // Get the services element
    const servicesElement = document.getElementById('services');
    if (!servicesElement) return;
    
    // Calculate position to scroll to (accounting for navbar height)
    const navbarHeight = 120; // Increased navbar height to ensure we scroll past it
    const targetPosition = servicesElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
    
    // Scroll to the position
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  }, []);

  return (
    <div id="home" className="min-h-[60vh] pt-16 pb-0 flex flex-col justify-start scroll-mt-20">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl mt-2">
        <div className="flex flex-col lg:flex-row items-start justify-center gap-8 lg:gap-12">
          <AnimatedElement 
            variant="slideRight" 
            className="lg:flex-1 max-w-xl text-center lg:text-left"
            duration={0.8}
            viewport={{ once: false, amount: 0.4 }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-100 mb-4 whitespace-normal lg:whitespace-nowrap">
              Welcome to SchuFin,
            </h1>
            <div className="relative mb-6">
              <motion.div 
                className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-2 h-0 bg-[#29ABE2]/70 rounded-full hidden lg:block"
                initial={{ height: 0 }}
                animate={{ height: isVisible ? 48 : 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              ></motion.div>
              <motion.h2 
                className="text-2xl md:text-3xl lg:text-4xl font-medium text-[#29ABE2] italic tracking-wide pl-0 lg:pl-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 10 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                Equipping Your Business with Financial Clarity
              </motion.h2>
            </div>
            <p className="text-lg md:text-xl text-gray-300/90 mb-6 leading-relaxed">
              I help small business owners go beyond the numbers—providing financial insights that
              empower smarter decisions, improve cash flow, and drive profitability. Whether you're scaling,
              strategizing, or simply seeking clarity, I bring the expertise to help you succeed.
            </p>
            <p className="text-xl md:text-2xl font-semibold text-gray-200 italic mb-8">
              Let's build a stronger financial future together.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mt-6">
              <button 
                onClick={handleServicesClick}
                className="group relative inline-flex items-center justify-center px-6 py-2.5 overflow-hidden font-medium text-gray-100 bg-[#29ABE2]/80 rounded-lg shadow-md transition-all duration-300 ease-out hover:bg-[#1B8DBF] hover:shadow-[#29ABE2]/30 hover:shadow-lg"
              >
                <span className="flex items-center gap-2">
                  Services
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-4 w-4 transform transition-transform duration-300 group-hover:translate-y-1" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </span>
                <span className="absolute bottom-0 left-0 w-0 h-1 bg-[#29ABE2] transition-all duration-300 ease-out group-hover:w-full"></span>
              </button>
              
              <Link 
                href="/contact" 
                className="group relative inline-flex items-center justify-center px-6 py-2.5 overflow-hidden font-medium text-[#29ABE2] bg-transparent border-2 border-[#29ABE2]/50 rounded-lg shadow-inner transition-all duration-300 ease-out hover:bg-[#29ABE2]/10 hover:border-[#29ABE2] hover:shadow-[#29ABE2]/20 hover:shadow-lg"
              >
                <span>Get in touch</span>
                <span className="absolute bottom-0 left-0 w-0 h-1 bg-[#29ABE2] transition-all duration-300 ease-out group-hover:w-full"></span>
              </Link>
            </div>
          </AnimatedElement>
          <AnimatedElement 
            variant="slideLeft" 
            className="lg:flex-1 flex flex-col items-center"
            delay={0.2}
            duration={0.8}
            viewport={{ once: false, amount: 0.4 }}
          >
            <div className="relative w-[280px] h-[280px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden shadow-xl border-4 border-white dark:border-gray-800">
              <Image
                src="/Profile Sam Schuhler-modified.png"
                alt="Sam Schuhler"
                fill
                sizes="(max-width: 768px) 280px, (max-width: 1024px) 350px, 400px"
                className="object-cover"
                priority
              />
            </div>
            <div className="mt-6 text-center text-sm md:text-base text-gray-300">
              Sam Schuhler, hence the SchuFin(ancials)
            </div>
          </AnimatedElement>
        </div>
      </div>
    </div>
  );
} 