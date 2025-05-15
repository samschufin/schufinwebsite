'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

type AnimationVariant = 'fadeIn' | 'slideUp' | 'slideRight' | 'slideLeft' | 'scale' | 'none';

interface AnimatedElementProps {
  children: ReactNode;
  variant?: AnimationVariant;
  delay?: number;
  duration?: number;
  className?: string;
  triggerOnce?: boolean;
  viewport?: { once?: boolean; amount?: number | 'some' | 'all' };
}

export default function AnimatedElement({
  children,
  variant = 'fadeIn',
  delay = 0,
  duration = 0.5,
  className = '',
  triggerOnce = false,
  viewport = { once: false, amount: 0.3 }
}: AnimatedElementProps) {
  // Define animation variants
  const variants = {
    hidden: {
      opacity: 0,
      y: variant === 'slideUp' ? 20 : 0,
      x: variant === 'slideRight' ? -20 : variant === 'slideLeft' ? 20 : 0,
      scale: variant === 'scale' ? 0.95 : 1
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1.0] // Smooth easing function
      }
    }
  };

  // If no animation is desired, just return the children
  if (variant === 'none') {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={variants}
    >
      {children}
    </motion.div>
  );
} 