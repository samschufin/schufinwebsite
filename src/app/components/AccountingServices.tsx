'use client';

import AnimatedElement from './AnimatedElement';
import AccountingServiceCarousel from './AccountingServiceCarousel';

export default function AccountingServices() {
  return (
    <div className="pt-16 pb-0 flex items-center min-h-screen scroll-mt-32">
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
            Clean, accurate, and timely financials are a must. I&apos;ll ensure your financial records are hygienic and reliable, giving you a clear understanding of where your business stands.
            </p>
          </AnimatedElement>

          <AccountingServiceCarousel />
          
          {/* Tax Services Disclaimer Footnote */}
          <AnimatedElement 
            variant="fadeIn" 
            delay={0.4} 
            duration={0.6}
            viewport={{ once: false, amount: 0.4 }}
          >
            <div className="mt-8 max-w-2xl">
              <p className="text-gray-300 text-xl leading-relaxed text-center">
                <span className="italic">
                  and no... I won&apos;t file your taxes, I&apos;m not &apos;that&apos; kind of accountant
                </span>
                <span className="inline-block ml-2 text-yellow-400">😊</span>
              </p>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </div>
  );
} 