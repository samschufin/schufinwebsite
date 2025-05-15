'use client';

import { useCustomScroll } from '../lib/hooks/useCustomScroll';

export default function CustomScrollHandler() {
  // Use the custom scroll hook
  useCustomScroll();
  
  // This component doesn't render anything
  return null;
} 