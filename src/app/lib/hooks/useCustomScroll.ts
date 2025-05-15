'use client';

import { useEffect } from 'react';

export function useCustomScroll() {
  useEffect(() => {
    // Disabling custom scroll behavior to prevent glitchy scrolling
    // The custom scroll behavior was causing conflicts with other scrolling mechanisms
    
    // If you want to re-enable custom scrolling, uncomment the code below
    /*
    // Function to handle wheel events with a more gentle approach
    const handleWheel = (event: WheelEvent) => {
      // Don't prevent default scrolling completely
      // Instead, we'll add a small delay between scrolls
      
      // Get the current scroll position
      const currentScrollY = window.scrollY;
      
      // Only apply custom scrolling for larger scroll events
      if (Math.abs(event.deltaY) > 10) {
        // Slightly reduce the scroll speed without blocking default behavior
        setTimeout(() => {
          window.scrollTo({
            top: currentScrollY + (event.deltaY > 0 ? 20 : -20),
            behavior: 'smooth'
          });
        }, 50);
      }
    };
    
    // Add the event listener without blocking default behavior
    window.addEventListener('wheel', handleWheel, { passive: true });
    
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
    */
  }, []);
} 