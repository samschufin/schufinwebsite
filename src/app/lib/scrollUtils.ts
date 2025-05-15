/**
 * Smoothly scrolls to a specific element on the page
 * @param elementId - The ID of the element to scroll to
 * @param offset - Optional offset from the top of the element (default: 0)
 * @param duration - Duration of the scroll animation in milliseconds (default: 1000)
 */
export const scrollToElement = (elementId: string, offset = 0, duration = 1000): void => {
  // Find the target element
  const targetElement = document.getElementById(elementId);
  
  if (!targetElement) {
    console.warn(`Element with id "${elementId}" not found.`);
    return;
  }
  
  // Get the current scroll position
  const startPosition = window.pageYOffset;
  
  // Calculate the target position (element's position relative to the document + offset)
  const targetPosition = targetElement.getBoundingClientRect().top + startPosition - offset;
  
  // Calculate the distance to scroll
  const distance = targetPosition - startPosition;
  
  // Set the start time
  let startTime: number | null = null;
  
  // Animation function
  function animation(currentTime: number) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    
    // Easing function (easeInOutQuad)
    const ease = (t: number) => 
      t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    
    window.scrollTo(0, startPosition + distance * ease(progress));
    
    // Continue animation if not complete
    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  }
  
  // Start the animation
  requestAnimationFrame(animation);
}; 