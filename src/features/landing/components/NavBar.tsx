'use client';

import { useEffect, useState } from 'react';
import type { NavLink } from '../../../lib/types';
import { Logo } from './Logo';

interface NavBarProps {
  links: NavLink[];
}

const isSectionLink = (href: string): boolean => href.startsWith('#');

const sectionIdOf = (href: string): string => href.replace('#', '');

export function NavBar({ links }: NavBarProps) {
  const [activeId, setActiveId] = useState<string>('');
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const sectionIds = links.filter((link) => isSectionLink(link.href)).map((link) => sectionIdOf(link.href));

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: [0, 0.25, 0.5, 1] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [links]);

  const sectionLinks = links.filter((link) => !link.cta);
  const ctaLink = links.find((link) => link.cta);

  return (
    <nav
      id="main-nav"
      className="fixed left-0 right-0 top-0 z-50 border-b border-transparent bg-white/85 backdrop-blur-md transition-colors"
    >
      <div className="flex items-center justify-between px-6 py-4 lg:px-16">
        <a href="#" className="flex items-center leading-none" onClick={() => setMenuOpen(false)}>
          <Logo className="h-8 w-auto" priority />
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 text-sm font-medium text-muted lg:flex">
          {sectionLinks.map((link) => {
            const active = isSectionLink(link.href) && sectionIdOf(link.href) === activeId;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  aria-current={active ? 'true' : undefined}
                  className={`relative py-1 transition-colors after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:rounded-full after:bg-lipBlue after:transition-all after:duration-300 after:content-[''] ${
                    active ? 'font-semibold text-ink after:w-full' : 'text-muted after:w-0 hover:text-ink'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
          {ctaLink ? (
            <li>
              <a
                href={ctaLink.href}
                className="rounded-full bg-lipBlue px-5 py-2.5 font-semibold text-white shadow-sm transition hover:bg-[#2f5be0]"
              >
                {ctaLink.label}
              </a>
            </li>
          ) : null}
        </ul>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white text-ink transition hover:bg-surface lg:hidden"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" className="h-5 w-5">
            {menuOpen ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 8h16M4 16h16" />}
          </svg>
        </button>
      </div>

      {/* Mobile menu panel */}
      {menuOpen ? (
        <div className="border-t border-border bg-white px-6 pb-6 pt-2 lg:hidden">
          <ul className="flex flex-col">
            {sectionLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block border-b border-border py-4 text-base font-medium text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          {ctaLink ? (
            <a
              href={ctaLink.href}
              onClick={() => setMenuOpen(false)}
              className="mt-5 block rounded-full bg-lipBlue px-5 py-3.5 text-center text-sm font-semibold text-white"
            >
              {ctaLink.label}
            </a>
          ) : null}
        </div>
      ) : null}
    </nav>
  );
}
