import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './marquee.css';

const Marquee = ({ content, backgroundColor, duration }) => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    const marqueeContent = marquee.querySelector('.marquee-content');
    if (!marqueeContent) return;

    const animationDuration = duration || 20; // Default duration is 20 seconds

    const playMarquee = () => {
      let tween;
      let progress = tween ? tween.progress() : 0;
      tween && tween.progress(0).kill();
      const width = parseInt(getComputedStyle(marqueeContent).getPropertyValue('width'), 10);
      const gap = parseInt(getComputedStyle(marqueeContent).getPropertyValue('column-gap'), 10);
      const distanceToTranslate = -1 * (gap + width);
      tween = gsap.fromTo(
        marquee.children,
        { x: 0 },
        { x: distanceToTranslate, duration: animationDuration, ease: 'none', repeat: -1 }
      );
      tween.progress(progress);
    };

    playMarquee();

    const debounce = (func, delay) => {
      let timer;
      return function (...args) {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
          func.apply(this, args);
        }, delay);
      };
    };

    const handleResize = debounce(playMarquee, 500);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [content, backgroundColor, duration]);

  // Clone the content to create an infinite scroll effect
  const clonedContent = [...content, ...content];

  return (
    <div ref={marqueeRef}>
      <div className="container-marquee" style={{ backgroundColor: backgroundColor }}>
        <div className="marquee" wb-data="marquee" duration={duration || 20}>
          <div className="marquee-content">
            {clonedContent.map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marquee;
