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
    const sections = document.querySelectorAll('#home, #services, #contact');
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
        <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
          {/* Logo - Left Column */}
          <div className="flex items-center flex-1">
            <Link href="/" className="flex items-center ml-0" onClick={scrollToSection('home')}>
              <div className="w-48 h-20 relative">
                <Image
                  src="/logo-no-for-dark-background.png"
                  alt="SchuFin Logo"
                  fill
                  sizes="(max-width: 768px) 100vw, 192px"
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Navigation Links - Center Column */}
          <div className="hidden md:flex items-center space-x-10 flex-1 justify-center">
            <Link 
              href="/" 
              className={`text-gray-700 dark:text-gray-300 hover:text-[#29ABE2] dark:hover:text-[#29ABE2] font-medium transition-colors cursor-pointer ${
                activeSection === 'home' ? 'text-[#29ABE2] dark:text-[#29ABE2] font-bold relative after:absolute after:bottom-[-6px] after:left-0 after:w-full after:h-0.5 after:bg-[#29ABE2] after:rounded-full' : ''
              }`}
            >
              Home
            </Link>
            <Link 
              href={{ pathname: '/', query: { scrollTo: 'services' } }}
              className={`text-gray-700 dark:text-gray-300 hover:text-[#29ABE2] dark:hover:text-[#29ABE2] font-medium transition-colors cursor-pointer ${
                activeSection === 'services' ? 'text-[#29ABE2] dark:text-[#29ABE2] font-bold relative after:absolute after:bottom-[-6px] after:left-0 after:w-full after:h-0.5 after:bg-[#29ABE2] after:rounded-full' : ''
              }`}
            >
              Services
            </Link>
            <Link 
              href={{ pathname: '/', query: { scrollTo: 'contact' } }}
              className={`text-gray-700 dark:text-gray-300 hover:text-[#29ABE2] dark:hover:text-[#29ABE2] font-medium transition-colors cursor-pointer ${
                activeSection === 'contact' ? 'text-[#29ABE2] dark:text-[#29ABE2] font-bold relative after:absolute after:bottom-[-6px] after:left-0 after:w-full after:h-0.5 after:bg-[#29ABE2] after:rounded-full' : ''
              }`}
            >
              Get in Touch
            </Link>
            {/* Debug indicator - remove in production */}
            <span className="text-xs text-gray-500 hidden">Active: {activeSection}</span>
          </div>

          {/* Right Column - Empty for balance */}
          <div className="flex-1"></div>
        </div>
      </div>
    </nav>
  );
} 