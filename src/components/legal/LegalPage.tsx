import type { ReactNode } from 'react';
import Link from 'next/link';
import { getLegalNav, type LegalPageContent, type LegalRoute, type LegalSection, type NavRel, type NonEmptyArray } from '../../lib/legal';

const HOME_LINK = {
  href: '/',
  label: 'Back to home'
} as const;

type HomeHref = typeof HOME_LINK.href;

type WithClassName<T extends object> = T & Readonly<{ className?: string }>;

type BackToHomeLinkProps = WithClassName<Readonly<{ href?: HomeHref; label?: string }>>;

type PagerLabel<R extends NavRel> = R extends 'prev' ? `Back to ${string}` : `Next: ${string}`;

type PagerLinkProps<R extends NavRel> = Readonly<{
  rel: R;
  route: LegalRoute;
}>;

type Paragraphs = NonEmptyArray<string> | readonly string[];

const renderParagraphs = <T extends Paragraphs>(paragraphs: T): ReactNode[] =>
  paragraphs.map((text, index) => (
    <p key={`${index}-${text.slice(0, 24)}`} className="text-base leading-7 text-textMain">
      {text}
    </p>
  ));

const renderSectionBody = (body: readonly string[] | undefined): ReactNode | null => {
  if (!body || body.length === 0) {
    return null;
  }

  return <div className="space-y-3">{renderParagraphs(body)}</div>;
};

const renderSection = (section: LegalSection): ReactNode => {
  switch (section.type) {
    case 'list':
      return (
        <section key={section.heading} className="space-y-3">
          <h2 className="font-display text-2xl text-white">{section.heading}</h2>
          {renderSectionBody(section.body)}
          <ul className="list-disc space-y-2 pl-5 text-base leading-7 text-textMain">
            {section.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      );
    case 'text':
      return (
        <section key={section.heading} className="space-y-3">
          <h2 className="font-display text-2xl text-white">{section.heading}</h2>
          {renderParagraphs(section.body)}
        </section>
      );
    default: {
      const exhaustiveCheck: never = section;
      return exhaustiveCheck;
    }
  }
};

const BACK_ICON_SIZES = {
  sm: 'h-8 w-8',
  md: 'h-9 w-9'
} as const;

type BackIconSize = keyof typeof BACK_ICON_SIZES;
type BackIconTone = 'brand' | 'neutral';

type BackIconProps = Readonly<{
  size?: BackIconSize;
  tone?: BackIconTone;
}>;

const BACK_ICON_TONE: Readonly<Record<BackIconTone, string>> = {
  brand: 'text-lipBlue',
  neutral: 'text-white'
};

const BackIcon = ({ size = 'md', tone = 'brand' }: BackIconProps) => (
  <span
    aria-hidden
    className={`relative inline-flex items-center justify-center rounded-full ${BACK_ICON_SIZES[size]} text-white/80 transition-transform duration-200 group-hover:-translate-x-1`}
  >
    <span className="absolute inset-0 rounded-full border border-white/10 bg-white/5 transition-all duration-300 group-hover:border-lipBlue/40 group-hover:shadow-[0_0_32px_rgba(82,130,255,0.4)]" />
    <span className="absolute inset-0 rounded-full border border-lipBlue/30 opacity-0 group-hover:opacity-100 motion-reduce:animate-none animate-[backPulse_2.6s_ease-out_infinite]" />
    <svg
      className={`relative h-4 w-4 transition-transform duration-200 group-hover:-translate-x-0.5 ${BACK_ICON_TONE[tone]}`}
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M11.5 4.5L6 10l5.5 5.5" />
      <path d="M6 10h8" />
    </svg>
  </span>
);

type BackLinkProps = Readonly<{
  href: string;
  label: string;
  className?: string;
}>;

const BackLink = ({ href, label, className }: BackLinkProps) => (
  <Link
    href={href}
    className={`group inline-flex items-center gap-3 text-xs uppercase tracking-[2px] text-muted transition-colors hover:text-white ${className ?? ''}`}
  >
    <BackIcon />
    <span>{label}</span>
  </Link>
);

const BackToHomeLink = ({
  href = HOME_LINK.href,
  label = HOME_LINK.label,
  className
}: BackToHomeLinkProps) => <BackLink href={href} label={label} className={className} />;

const PAGER_PREFIX = {
  prev: 'Back to',
  next: 'Next:'
} as const satisfies Readonly<Record<NavRel, string>>;

const buildPagerLabel = <R extends NavRel>(rel: R, route: LegalRoute): PagerLabel<R> => {
  const prefix = PAGER_PREFIX[rel];
  const label = `${prefix} ${route.label}`.replace(': ', ': ') as PagerLabel<R>;
  return label;
};

const PagerLink = <R extends NavRel>({ rel, route }: PagerLinkProps<R>) => {
  if (rel === 'prev') {
    return <BackLink href={route.href} label={buildPagerLabel(rel, route)} className="text-muted" />;
  }

  return (
    <Link
      href={route.href}
      rel={rel}
      className="inline-flex items-center gap-2 text-xs uppercase tracking-[2px] text-muted transition-colors hover:text-white"
    >
      <span>{buildPagerLabel(rel, route)}</span>
      <span aria-hidden className="font-mono text-sm">
        -&gt;
      </span>
    </Link>
  );
};

export function LegalPage({ content }: Readonly<{ content: LegalPageContent }>) {
  const nav = getLegalNav(content.slug);

  return (
    <main className="min-h-screen cursor-auto px-6 py-24 lg:px-16">
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-10">
        <BackToHomeLink />

        <header className="space-y-4">
          <p className="text-xs uppercase tracking-[2px] text-muted">Legal</p>
          <div className="space-y-3">
            <h1 className="font-display text-4xl font-bold text-white">{content.title}</h1>
            <p className="text-sm text-muted">Last updated: {content.lastUpdated}</p>
          </div>
          <div className="space-y-3">{renderParagraphs(content.intro)}</div>
        </header>

        {content.sections.map((section) => renderSection(section))}

        <nav aria-label="Legal pagination" className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-8">
          <div>{nav.prev ? <PagerLink rel="prev" route={nav.prev.route} /> : null}</div>
          <div>{nav.next ? <PagerLink rel="next" route={nav.next.route} /> : null}</div>
        </nav>
      </div>
    </main>
  );
}
