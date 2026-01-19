'use client';

import gsap from 'gsap';
import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 1. Move the cursor based on mouse position
    const moveCursor = (e: MouseEvent) => {
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5, // The "lag" makes it feel fluid
        ease: 'power2.out',
      });
    };

    window.addEventListener('mousemove', moveCursor);

    // 2. Hide default cursor
    document.body.style.cursor = 'none';

    // 3. Hover Effects for Links & Buttons
    const onHover = () =>
      gsap.to(cursorRef.current, {
        scale: 3,
        backgroundColor: '#dfb755',
        mixBlendMode: 'normal',
        opacity: 0.5,
      });
    const onLeave = () =>
      gsap.to(cursorRef.current, {
        scale: 1,
        backgroundColor: '#fff',
        mixBlendMode: 'difference',
        opacity: 1,
      });

    const links = document.querySelectorAll('a, button');
    links.forEach((link) => {
      link.addEventListener('mouseenter', onHover);
      link.addEventListener('mouseleave', onLeave);
    });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.body.style.cursor = 'auto';
      links.forEach((link) => {
        link.removeEventListener('mouseenter', onHover);
        link.removeEventListener('mouseleave', onLeave);
      });
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-8 h-8 bg-white rounded-full pointer-events-none z-50 mix-blend-difference -translate-x-1/2 -translate-y-1/2"
    />
  );
}
