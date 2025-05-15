'use client';

import { useEffect } from 'react';

export default function ScrollObserver() {
  useEffect(() => {
    // This component is for handling section visibility animations
    // without interfering with scrolling behavior
    
    // Make the home section visible immediately on page load
    const homeSection = document.getElementById('home');
    if (homeSection) {
      homeSection.classList.add('visible');
    }
    
    // Get all sections
    const sections = document.querySelectorAll('section');
    
    // Create Intersection Observer instance
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        // If section is entering the viewport
        if (entry.isIntersecting) {
          // Make it visible with a transition
          entry.target.classList.add('visible');
        } else {
          // When section leaves viewport, remove the visible class to allow re-animation
          // Only remove if it's completely out of view to prevent flickering
          if (entry.intersectionRatio <= 0.1 && entry.target.id !== 'home') {
            entry.target.classList.remove('visible');
          }
        }
      });
    }, {
      // Trigger when element enters viewport
      threshold: [0.1, 0.2, 0.3, 0.4, 0.5],
      rootMargin: '-10% 0px -10% 0px'
    });
    
    // Observe all sections
    sections.forEach(section => {
      observer.observe(section);
    });
    
    // Cleanup
    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);
  
  // This component doesn't render anything
  return null;
} 