'use client';

import { useEffect, useRef, useState } from 'react';

interface NumberCounterProps {
  value: number;
  duration?: number;
  suffix?: string;
  className?: string;
}

export default function NumberCounter({
  value,
  duration = 2000,
  suffix = '',
  className = '',
}: NumberCounterProps) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasStarted = useRef(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasStarted.current) {
        hasStarted.current = true;
        const startTime = performance.now();

        const animate = (currentTime: number) => {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const current = Math.floor(value * progress);

          setDisplayValue(current);

          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };

        requestAnimationFrame(animate);
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [value, duration]);

  return (
    <div ref={ref} className={className}>
      {displayValue}
      {suffix}
    </div>
  );
}
