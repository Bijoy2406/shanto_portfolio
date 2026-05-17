'use client';

import { useEffect, useRef } from 'react';

interface ScrollRevealOptions {
  threshold?: number;
  margin?: string;
}

export function useScrollReveal(options: ScrollRevealOptions = {}) {
  const ref = useRef<HTMLElement>(null);
  const { threshold = 0.1, margin = '0px 0px -100px 0px' } = options;

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    }, { threshold, rootMargin: margin });

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [threshold, margin]);

  return ref;
}

export function useScrollRevealGroup(options: ScrollRevealOptions = {}) {
  const ref = useRef<HTMLElement>(null);
  const { threshold = 0.1, margin = '0px 0px -100px 0px' } = options;

  useEffect(() => {
    if (!ref.current) return;

    const elements = ref.current.querySelectorAll('[data-scroll-reveal]');
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        elements.forEach((el, index) => {
          setTimeout(() => {
            el.classList.add('revealed');
          }, index * 100);
        });
        observer.unobserve(entry.target);
      }
    }, { threshold, rootMargin: margin });

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [threshold, margin]);

  return ref;
}
