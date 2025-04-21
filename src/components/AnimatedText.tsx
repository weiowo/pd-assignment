'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface AnimatedTextProps {
  text: string;
}

export default function AnimatedText({ text }: AnimatedTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const lines = Array.from(containerRef.current.querySelectorAll('.line')) as HTMLElement[];

    lines.forEach((line, lineIndex) => {
      const chars = line.querySelectorAll('.char');

      gsap.fromTo(
        chars,
        {
          opacity: 0,
          rotateZ: -20,
          rotateX: -100,
          y: 120,
          x: 50,
          transformOrigin: 'center',
        },
        {
          opacity: 1,
          rotateZ: 0,
          rotateX: 0,
          y: 0,
          x: 0,
          ease: 'power3.out',
          duration: 1.2,
          stagger: {
            each: 0.04,
            from: 'start',
          },
          delay: lineIndex * 0.2,
        }
      );
    });
  }, [text]);

  const lines = text.split('\n');

  return (
    <div ref={containerRef} className="text-white text-6xl font-medium leading-[64px]">
      {lines.map((line, lineIndex) => (
        <div key={lineIndex} className="line block">
          {lineIndex === 0 ? (
            <span className="char whitespace-pre inline-block w-10">“&nbsp;</span>
          ) : (
            <span className="inline-block w-10"></span>
          )}
          {line.split('').map((char, charIndex) => (
            <span key={charIndex} className="char whitespace-pre inline-block">
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
          {lineIndex === lines.length - 1 && (
            <span className="char whitespace-pre inline-block">&nbsp;”</span>
          )}
        </div>
      ))}
    </div>
  );
}
