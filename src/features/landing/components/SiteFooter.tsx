import type { NavLink } from '../../../lib/types';
import { Logo } from './Logo';

interface SiteFooterProps {
  links: NavLink[];
  email: string;
}

export function SiteFooter({ links, email }: SiteFooterProps) {
  const footerLinks = links.filter((link) => !link.cta);

  return (
    <footer className="flex flex-wrap items-center justify-between gap-5 border-t border-white/10 px-6 py-14 lg:px-16">
      <div>
        <Logo className="h-8 w-auto" />
      </div>

      <ul className="flex flex-wrap gap-8 text-xs text-muted">
        {footerLinks.map((link) => (
          <li key={link.href}>
            <a href={link.href} className="hover:text-white">
              {link.label}
            </a>
          </li>
        ))}
        <li>
          <a href="/privacy" className="hover:text-white">
            Privacy
          </a>
        </li>
        <li>
          <a href="/terms" className="hover:text-white">
            Terms
          </a>
        </li>
        <li>
          <a href={`mailto:${email}`} className="hover:text-white">
            {email}
          </a>
        </li>
      </ul>

      <div className="text-xs text-[#333]">© 2026 Living in Pixel</div>
    </footer>
  );
}
