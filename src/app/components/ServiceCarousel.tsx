'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

// Define the service group type
type ServiceGroup = {
  title: string;
  color: string;
  services: string[];
};

// Define the service groups
const serviceGroups: ServiceGroup[] = [
  {
    title: "Forecasting",
    color: "#FF5A5F", // Coral red color
    services: [
      "Cash Flow Forecasting",
      "Rolling Operational Forecasts",
      "Scenario Analysis",
      "Business Modeling"
    ]
  },
  {
    title: "Reporting",
    color: "#3498DB", // Blue color
    services: [
      "Custom Financial Dashboards",
      "Executive Financial Reports",
      "KPI Tracking & Benchmarking"
    ]
  },
  {
    title: "Advisory",
    color: "#F1C40F", // Yellow color
    services: [
      "Financial Review Meetings",
      "Goal Setting & Strategic Planning",
      "Profitability & Pricing Analysis",
      "Operational Efficiency Consulting"
    ]
  }
];

export default function ServiceCarousel() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Find the maximum number of services to ensure consistent card height
  const maxServices = Math.max(...serviceGroups.map(group => group.services.length));

  return (
    <div className="w-full max-w-6xl mx-auto relative py-6 md:py-8">
      {/* Service Cards Container */}
      <div className="flex flex-col md:flex-row justify-center items-center md:items-stretch gap-6 md:gap-4">
        {serviceGroups.map((group, index) => (
          <motion.div
            key={index}
            className="w-full md:w-1/3 rounded-2xl shadow-xl overflow-hidden cursor-pointer"
            initial={{ opacity: 0.9, scale: 0.95 }}
            animate={{
              opacity: hoveredIndex === null || hoveredIndex === index ? 1 : 0.7,
              scale: hoveredIndex === index ? 1.05 : 0.95,
              zIndex: hoveredIndex === index ? 20 : 10,
              y: hoveredIndex === index ? -10 : 0
            }}
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 20 
            }}
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
          >
            <div className="flex flex-col h-full">
              <div 
                className="w-full p-6 md:p-8 flex flex-col items-center"
                style={{ backgroundColor: group.color }}
              >
                {/* Icon Placeholder */}
                <div className="w-16 h-16 bg-white/20 rounded-full mb-4 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2 text-center">
                  {group.title}
                </h3>
              </div>
              <div className="w-full bg-gray-900/70 p-5 md:p-6 flex-grow">
                <div className="space-y-3">
                  {group.services.map((service, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-3 border border-gray-700 rounded-lg bg-gray-800/50 transition-all duration-200 hover:bg-gray-800">
                      <div className="flex-shrink-0 w-5 h-5" style={{ color: group.color }}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-gray-200 font-medium">{service}</p>
                      </div>
                    </div>
                  ))}
                  
                  {/* Add empty placeholder items to ensure consistent height */}
                  {Array.from({ length: maxServices - group.services.length }).map((_, idx) => (
                    <div key={`empty-${idx}`} className="h-[52px] opacity-0">
                      {/* Empty space with same height as service items */}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
} 