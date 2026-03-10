import type { ReactNode } from 'react';
import Link from 'next/link';
import { getLegalNav, type LegalPageContent, type LegalSection, type NonEmptyArray } from '../../lib/legal';

const HOME_LINK = {
  href: '/',
  label: 'Back to home'
} as const;

type HomeHref = typeof HOME_LINK.href;

type WithClassName<T extends object> = T & Readonly<{ className?: string }>;

type BackToHomeLinkProps = WithClassName<Readonly<{ href?: HomeHref; label?: string }>>;

type PagerLinkProps = Readonly<{
  href: string;
  label: string;
  rel: 'prev' | 'next';
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

const BackToHomeLink = ({
  href = HOME_LINK.href,
  label = HOME_LINK.label,
  className
}: BackToHomeLinkProps) => (
  <Link href={href} className={`inline-flex items-center gap-3 text-xs uppercase tracking-[2px] text-muted hover:text-white ${className ?? ''}`}>
    <span aria-hidden className="font-mono text-sm">
      &lt;=
    </span>
    <span>{label}</span>
  </Link>
);

const PagerLink = ({ href, label, rel }: PagerLinkProps) => (
  <Link
    href={href}
    rel={rel}
    className="inline-flex items-center gap-2 text-xs uppercase tracking-[2px] text-muted transition-colors hover:text-white"
  >
    <span aria-hidden className="font-mono text-sm">
      {rel === 'prev' ? '<-' : '->'}
    </span>
    <span>{label}</span>
  </Link>
);

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
          <div>{nav.prev ? <PagerLink href={nav.prev.route.href} label={nav.prev.route.title} rel="prev" /> : null}</div>
          <div>{nav.next ? <PagerLink href={nav.next.route.href} label={nav.next.route.title} rel="next" /> : null}</div>
        </nav>
      </div>
    </main>
  );
}
