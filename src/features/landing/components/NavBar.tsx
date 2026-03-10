import type { NavLink } from '../../../lib/types';
import { Logo } from './Logo';

interface NavBarProps {
  links: NavLink[];
}

export function NavBar({ links }: NavBarProps) {
  return (
    <nav
      id="main-nav"
      className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between bg-gradient-to-b from-[rgba(6,6,11,0.95)] to-transparent px-6 py-6 lg:px-16"
    >
      <a href="#" className="block leading-none">
        <Logo className="h-8 w-auto" priority />
      </a>

      <ul className="hidden items-center gap-8 text-sm text-muted lg:flex">
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className={
                link.cta
                  ? 'rounded-full bg-lipBlue px-5 py-2 font-bold text-white'
                  : 'hover:text-white'
              }
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
