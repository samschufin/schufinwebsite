'use client';

import { useRef, useState, useEffect, useCallback } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import Hero from './Hero';
import Services from '@/app/components/Services';

export default function SmoothScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [windowHeight, setWindowHeight] = useState(0);
  const [touchStartY, setTouchStartY] = useState(0);
  
  // Update window height on client side
  useEffect(() => {
    setWindowHeight(window.innerHeight);
    
    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Setup scroll animations
  const { scrollY } = useScroll({
    container: containerRef
  });
  
  // Transform values for Hero section (fade out as we scroll)
  const heroOpacity = useTransform(
    scrollY, 
    [0, windowHeight * 0.3, windowHeight * 0.8], 
    [1, 0.7, 0]
  );
  
  // Transform values for Services section (fade in as we scroll)
  const servicesOpacity = useTransform(
    scrollY, 
    [windowHeight * 0.3, windowHeight * 0.8, windowHeight * 1.4], 
    [0, 0.7, 1]
  );
  
  // Track wheel events to create custom smooth scrolling
  const [targetScroll, setTargetScroll] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  
  // Initialize target scroll position
  useEffect(() => {
    if (containerRef.current) {
      setTargetScroll(containerRef.current.scrollTop);
    }
  }, []);
  
  // Smoothly animate to target scroll position
  const animateScroll = useCallback(() => {
    if (!containerRef.current) return;
    
    const currentScroll = containerRef.current.scrollTop;
    const distance = targetScroll - currentScroll;
    
    // If we're close enough to target or distance is very small, end animation
    if (Math.abs(distance) < 1) {
      setIsScrolling(false);
      return;
    }
    
    // Calculate a step size that creates smooth animation
    // Smaller step = slower scroll (we're using 5% of the remaining distance per frame)
    const step = distance * 0.05;
    
    // Apply the scroll
    containerRef.current.scrollTop += step;
    
    // Continue animation
    requestAnimationFrame(animateScroll);
  }, [targetScroll, setIsScrolling]);
  
  // Handle wheel events to create a smoother, slower scroll
  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    e.preventDefault();
    
    if (!containerRef.current) return;
    
    // Calculate a reasonable scroll amount per wheel tick
    // With this factor, it should take around 4-5 scroll actions to go from one section to another
    const scrollStep = windowHeight / 12; // Each wheel event scrolls 1/12th of screen height
    
    // Get direction of scroll and calculate new target
    const direction = Math.sign(e.deltaY);
    const newTarget = targetScroll + (direction * scrollStep);
    
    // Limit scrolling to just the two sections
    const maxScroll = windowHeight * 1.2;
    setTargetScroll(Math.max(0, Math.min(newTarget, maxScroll)));
    
    // Trigger scrolling animation if not already scrolling
    if (!isScrolling) {
      setIsScrolling(true);
      animateScroll();
    }
  };
  
  // Handle touch events for mobile devices
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchStartY(e.touches[0].clientY);
  };
  
  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    e.preventDefault();
    
    if (!containerRef.current) return;
    
    const touchY = e.touches[0].clientY;
    const touchDiff = touchStartY - touchY;
    
    // Only respond to significant touch movements (avoid small jitters)
    if (Math.abs(touchDiff) < 5) return;
    
    // Calculate a reasonable scroll amount per touch movement
    const scrollStep = windowHeight / 30; // Smaller step for touch for more control
    
    // Get direction of touch and calculate new target
    const direction = Math.sign(touchDiff);
    const newTarget = targetScroll + (direction * scrollStep);
    
    // Limit scrolling to just the two sections
    const maxScroll = windowHeight * 1.2;
    setTargetScroll(Math.max(0, Math.min(newTarget, maxScroll)));
    
    // Set new touch start position
    setTouchStartY(touchY);
    
    // Trigger scrolling animation if not already scrolling
    if (!isScrolling) {
      setIsScrolling(true);
      animateScroll();
    }
  };
  
  // Add keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!containerRef.current) return;
      
      // Calculate a scroll step similar to wheel events
      const scrollStep = windowHeight / 12;
      
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setTargetScroll(Math.min(targetScroll + scrollStep, windowHeight * 1.2));
        if (!isScrolling) {
          setIsScrolling(true);
          animateScroll();
        }
      }
      
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        setTargetScroll(Math.max(targetScroll - scrollStep, 0));
        if (!isScrolling) {
          setIsScrolling(true);
          animateScroll();
        }
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [windowHeight, targetScroll, isScrolling, animateScroll]);

  return (
    <div 
      ref={containerRef}
      className="h-screen overflow-y-auto overflow-x-hidden touch-none"
      onWheel={handleWheel}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      {/* Hero Section */}
      <motion.div 
        className="h-screen w-full"
        style={{ 
          opacity: heroOpacity
        }}
      >
        <Hero />
      </motion.div>
      
      {/* Services Section */}
      <motion.div 
        className="h-screen w-full"
        style={{ 
          opacity: servicesOpacity
        }}
      >
        <Services />
      </motion.div>
    </div>
  );
} 