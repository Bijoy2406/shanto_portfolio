'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollRevealProvider() {
  const pathname = usePathname();

  useEffect(() => {
    let observer: IntersectionObserver;

    // Wait a frame so the new page's DOM is fully painted before observing
    const raf = requestAnimationFrame(() => {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('revealed');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1, rootMargin: '0px 0px -80px 0px' },
      );

      document.querySelectorAll('[data-scroll-reveal]').forEach((el) => observer.observe(el));
    });

    return () => {
      cancelAnimationFrame(raf);
      observer?.disconnect();
    };
  }, [pathname]);

  return null;
}
