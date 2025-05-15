'use client';

import { motion } from 'framer-motion';
import AnimatedElement from './AnimatedElement';

export default function ServicesBanner() {
  return (
    <div className="w-full py-12 bg-[#29ABE2] shadow-md">
      <div className="container mx-auto px-6 md:px-12">
        <AnimatedElement
          variant="fadeIn"
          duration={0.8}
          viewport={{ once: false, amount: 0.6 }}
        >
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ scale: 0.98, opacity: 0.9 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
              In order to get to the fun stuff above
            </h2>
            <p className="text-lg md:text-xl text-white">
              We need to make sure that your financial foundation is strong with...
            </p>
          </motion.div>
        </AnimatedElement>
      </div>
    </div>
  );
} 