import type { NavLink, SocialLink } from '../../../lib/types';
import { Logo } from './Logo';
import { SocialIcon } from './SocialIcon';

interface SiteFooterProps {
  links: NavLink[];
  email: string;
  socialLinks: SocialLink[];
}

export function SiteFooter({ links, email, socialLinks }: SiteFooterProps) {
  const footerLinks = links.filter((link) => !link.cta);

  return (
    <footer className="border-t border-border px-6 py-10 lg:px-16">
      <div className="mx-auto flex max-w-[1180px] flex-col gap-8">
        <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <Logo className="h-7 w-auto" />

          <ul className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <li key={social.platform}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-ink/25 hover:text-ink"
                >
                  <SocialIcon platform={social.platform} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col items-start gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition-colors hover:text-ink">
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a href="/privacy" className="transition-colors hover:text-ink">
                Privacy
              </a>
            </li>
            <li>
              <a href="/terms" className="transition-colors hover:text-ink">
                Terms
              </a>
            </li>
            <li>
              <a href={`mailto:${email}`} className="transition-colors hover:text-ink">
                {email}
              </a>
            </li>
          </ul>

          <div className="text-sm text-faint">© 2026 Living in Pixel</div>
        </div>
      </div>
    </footer>
  );
}
