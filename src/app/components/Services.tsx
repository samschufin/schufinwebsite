'use client';

import AnimatedElement from './AnimatedElement';
import ServiceCarousel from './ServiceCarousel';
import { motion } from 'framer-motion';

export default function Services() {
  return (
    <div className="pt-0 pb-8 flex items-center scroll-mt-32">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 max-w-7xl">
        <div className="flex flex-col items-center">
          <AnimatedElement 
            variant="slideUp" 
            duration={0.6}
            viewport={{ once: false, amount: 0.4 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-6 text-center">
              Strategic Services
            </h2>
          </AnimatedElement>
          
          <AnimatedElement 
            variant="fadeIn" 
            delay={0.2} 
            duration={0.6}
            viewport={{ once: false, amount: 0.4 }}
          >
            <p className="text-xl text-gray-300 mb-8 text-center max-w-3xl">
              I provide custom, actionable reports tailored to your business. These insights help you make data-driven decisions that align with your goals.
            </p>
          </AnimatedElement>

          <ServiceCarousel />
        </div>
      </div>
    </div>
  );
} 