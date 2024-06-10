import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './heromarquee.css'; // Import CSS file for additional styling


const ScrollingElement = ({ title }) => {
  const elementRef = useRef(null);
  const tlRef = useRef(null);
  const scrollTimeoutRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;

    // Initialize GSAP timeline
    tlRef.current = gsap.to(element, {
      x: '-100%',
      duration: 5,
      ease: 'linear',
      repeat: -1,
      paused: true // Initially pause the animation
    });

    // Mousewheel event handler
    const handleWheel = (event) => {
      const delta = event.deltaY || -event.wheelDelta || event.detail;
      const direction = delta < 0 ? -1 : 1;

      // Resume animation and set timescale based on scroll direction
      tlRef.current.play();
      tlRef.current.timeScale(direction * 2); // Adjust the speed factor as needed

      // Debounce scroll pause
      clearTimeout(scrollTimeoutRef.current);
      scrollTimeoutRef.current = setTimeout(() => {
        tlRef.current.pause(); // Pause animation when scrolling stops
      }, 100); // Adjust the debounce time as needed
    };

    // Add event listener for mouse wheel
    document.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      // Cleanup: remove event listener
      document.removeEventListener('wheel', handleWheel);
      clearTimeout(scrollTimeoutRef.current); // Clear timeout on component unmount
    };
  }, []);

  return (
    <div className="scrollingElement" ref={elementRef}>
      <span className="text">{title}</span>
    </div>
  );
};

export default ScrollingElement;
