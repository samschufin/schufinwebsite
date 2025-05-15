'use client';

import AnimatedElement from './AnimatedElement';
import AccountingServiceCarousel from './AccountingServiceCarousel';

export default function AccountingServices() {
  return (
    <div className="pt-16 pb-24 flex items-center min-h-screen scroll-mt-32">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 max-w-7xl">
        <div className="flex flex-col items-center">
          <AnimatedElement 
            variant="slideUp" 
            duration={0.6}
            viewport={{ once: false, amount: 0.4 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-6 text-center">
              Accounting Services
            </h2>
          </AnimatedElement>
          
          <AnimatedElement 
            variant="fadeIn" 
            delay={0.2} 
            duration={0.6}
            viewport={{ once: false, amount: 0.4 }}
          >
            <p className="text-xl text-gray-300 mb-8 text-center max-w-3xl">
            Clean, accurate, and timely financials are a must. I’ll ensure your financial records are hygienic and reliable, giving you a clear understanding of where your business stands.
            </p>
          </AnimatedElement>

          <AccountingServiceCarousel />
        </div>
      </div>
    </div>
  );
} 