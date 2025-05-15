'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';

// Throttle function to limit how often a function can be called
const throttle = (func: Function, delay: number) => {
  let lastCall = 0;
  return (...args: any[]) => {
    const now = new Date().getTime();
    if (now - lastCall < delay) {
      return;
    }
    lastCall = now;
    return func(...args);
  };
};

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState('home');
  const observerRef = useRef<IntersectionObserver | null>(null);
  const initialLoadRef = useRef(true);

  // Set up intersection observer to detect which section is in view
  useEffect(() => {
    // Cleanup previous observer
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    // Create new observer
    observerRef.current = new IntersectionObserver(
      (entries) => {
        // Skip the first intersection on initial page load
        if (initialLoadRef.current) {
          initialLoadRef.current = false;
          return;
        }

        // Find the entry with the largest intersection ratio
        const visibleSection = entries.reduce((max, entry) => {
          return (entry.intersectionRatio > max.intersectionRatio) ? entry : max;
        }, { intersectionRatio: 0, target: { id: activeSection } } as IntersectionObserverEntry);

        // Only update if we have a visible section with a valid ID
        if (visibleSection.intersectionRatio > 0 && visibleSection.target.id) {
          setActiveSection(visibleSection.target.id);
        }
      },
      {
        // Root margin to trigger slightly before the element is in view
        // Negative top margin means it will trigger before the element reaches the top
        rootMargin: '-100px 0px -20% 0px',
        threshold: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0]
      }
    );

    // Observe sections
    const sections = document.querySelectorAll('#home, #services');
    sections.forEach(section => {
      if (observerRef.current) {
        observerRef.current.observe(section);
      }
    });

    // Cleanup on unmount
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [activeSection]);

  // Scroll to section function
  const scrollToSection = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    
    // Find the element
    const element = document.getElementById(id);
    if (!element) return;
    
    // Calculate position to scroll to (accounting for navbar height)
    const navbarHeight = 100; // Approximate navbar height
    const targetPosition = element.getBoundingClientRect().top + window.scrollY - navbarHeight;
    
    // Scroll to the position
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });

    // Update active section
    setActiveSection(id);
  };

  // Specific function for services section to ensure it works
  const scrollToServices = (e: React.MouseEvent) => {
    e.preventDefault();
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      // Simple and smooth scrolling to the services section
      window.scrollTo({
        top: servicesSection.offsetTop - 100, // 100px for navbar height
        behavior: 'smooth'
      });
      
      // Only update active section after user interaction
      setActiveSection('services');
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 w-full z-50 bg-white/90 dark:bg-gray-950/90 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-6 py-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center" onClick={scrollToSection('home')}>
              <div className="w-72 h-28 relative">
                <Image
                  src="/schufin-high-resolution-logo.png"
                  alt="SchuFin Logo"
                  fill
                  sizes="(max-width: 768px) 100vw, 288px"
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-10">
            <a 
              href="#home" 
              onClick={scrollToSection('home')}
              className={`text-gray-700 dark:text-gray-300 hover:text-[#29ABE2] dark:hover:text-[#29ABE2] font-medium transition-colors cursor-pointer ${
                activeSection === 'home' ? 'text-[#29ABE2] dark:text-[#29ABE2] font-bold relative after:absolute after:bottom-[-6px] after:left-0 after:w-full after:h-0.5 after:bg-[#29ABE2] after:rounded-full' : ''
              }`}
            >
              Home
            </a>
            <a 
              href="#services" 
              onClick={scrollToServices}
              className={`text-gray-700 dark:text-gray-300 hover:text-[#29ABE2] dark:hover:text-[#29ABE2] font-medium transition-colors cursor-pointer ${
                activeSection === 'services' || activeSection === 'strategic-services' || activeSection === 'accounting-services' ? 'text-[#29ABE2] dark:text-[#29ABE2] font-bold relative after:absolute after:bottom-[-6px] after:left-0 after:w-full after:h-0.5 after:bg-[#29ABE2] after:rounded-full' : ''
              }`}
            >
              Services
            </a>
            <Link 
              href="/diagnostics" 
              className={`text-gray-700 dark:text-gray-300 hover:text-[#29ABE2] dark:hover:text-[#29ABE2] font-medium transition-colors ${
                pathname === '/diagnostics' ? 'text-[#29ABE2] dark:text-[#29ABE2] font-bold relative after:absolute after:bottom-[-6px] after:left-0 after:w-full after:h-0.5 after:bg-[#29ABE2] after:rounded-full' : ''
              }`}
            >
              Diagnostics
            </Link>
            {/* Debug indicator - remove in production */}
            <span className="text-xs text-gray-500 hidden">Active: {activeSection}</span>
          </div>

          <div className="flex items-center space-x-5">
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle dark mode"
            >
              {theme === 'dark' ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
            <Link
              href="/contact"
              className={`bg-[#29ABE2] text-white px-6 py-2.5 rounded-full hover:bg-[#1B8DBF] transition-colors font-medium shadow-md hover:shadow-lg ${
                pathname === '/contact' ? 'ring-2 ring-[#29ABE2] ring-offset-2 ring-offset-white dark:ring-offset-gray-950' : ''
              }`}
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 