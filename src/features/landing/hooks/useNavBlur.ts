'use client';

import { useEffect } from 'react';

const DEFAULT_ACTIVE_CLASSES = ['backdrop-blur-xl', 'bg-[rgba(6,6,11,0.9)]'];

interface UseNavBlurOptions {
  navId?: string;
  threshold?: number;
  activeClasses?: string[];
}

export function useNavBlur({
  navId = 'main-nav',
  threshold = 60,
  activeClasses = DEFAULT_ACTIVE_CLASSES
}: UseNavBlurOptions = {}) {
  const activeClassKey = activeClasses.join(' ');

  useEffect(() => {
    const nav = document.getElementById(navId);
    const parsedActiveClasses = activeClassKey.split(' ');

    if (!nav) {
      return;
    }

    const onScroll = () => {
      if (window.scrollY > threshold) {
        nav.classList.add(...parsedActiveClasses);
      } else {
        nav.classList.remove(...parsedActiveClasses);
      }
    };

    window.addEventListener('scroll', onScroll);
    onScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [navId, threshold, activeClassKey]);
}
