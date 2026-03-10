'use client';

import { useEffect } from 'react';

interface UseRevealOnScrollOptions {
  selector?: string;
  threshold?: number;
  staggerDelayMs?: number;
}

export function useRevealOnScroll({
  selector = '.reveal',
  threshold = 0.12,
  staggerDelayMs = 80
}: UseRevealOnScrollOptions = {}) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (!entry.isIntersecting) {
            return;
          }

          window.setTimeout(() => {
            entry.target.classList.add('visible');
          }, index * staggerDelayMs);

          observer.unobserve(entry.target);
        });
      },
      { threshold }
    );

    const revealElements = Array.from(document.querySelectorAll(selector));
    revealElements.forEach((element) => observer.observe(element));

    return () => {
      revealElements.forEach((element) => observer.unobserve(element));
      observer.disconnect();
    };
  }, [selector, threshold, staggerDelayMs]);
}
