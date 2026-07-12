import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { DirectionalLink } from '../../../components/navigation/DirectionalLink';
import {
  PROJECT_SLUGS,
  getProjectBySlug,
  getProjectNav,
  type Project,
  type ProjectSlug
} from '../../../lib/projects';
import { SITE_NAME } from '../../../lib/seo';

type ProjectParams = Readonly<{ slug: string }>;

type ProjectSection = Project['sections'][number];

type ResearchFinding = Extract<ProjectSection, { type: 'research' }>['findings'][number];
type GalleryImage = Extract<ProjectSection, { type: 'gallery' }>['images'][number];
type PagerLabel<R extends 'prev' | 'next'> = R extends 'prev' ? `Back to ${string}` : `Next: ${string}`;

type MetaItem = Readonly<{
  label: string;
  value: string;
}>;

const PROJECT_SET = new Set<string>(PROJECT_SLUGS);

const isProjectSlug = (value: string): value is ProjectSlug => PROJECT_SET.has(value);

const ACCENT_TEXT = 'text-lipBlue';
const ACCENT_CHIP = 'bg-lipBlueSoft text-lipBlue';
const ACCENT_BAR = 'border-lipBlue';

const buildMeta = (project: Project): readonly MetaItem[] => [
  { label: 'Client', value: project.client },
  { label: 'Industry', value: project.industry },
  { label: 'Timeline', value: project.timeline },
  { label: 'Location', value: project.location }
];

const buildPagerLabel = <R extends 'prev' | 'next'>(rel: R, project: Project): PagerLabel<R> => {
  const label = rel === 'prev' ? `Back to ${project.client}` : `Next: ${project.client}`;
  return label as PagerLabel<R>;
};

const renderParagraphs = <T extends readonly string[]>(paragraphs: T) =>
  paragraphs.map((text, index) => (
    <p key={`${index}-${text.slice(0, 24)}`} className="text-[17px] leading-[1.75] text-textMain">
      {text}
    </p>
  ));

const renderResearchFinding = (finding: ResearchFinding) => (
  <div key={finding.title} className="rounded-2xl border border-border bg-surface p-6">
    <h3 className="font-display text-lg font-semibold text-ink">{finding.title}</h3>
    <p className="mt-2 text-[15px] leading-relaxed text-muted">{finding.insight}</p>
    {finding.evidence ? (
      <p className={`mt-4 border-t border-border pt-3 text-[13px] font-medium ${ACCENT_TEXT}`}>
        {finding.evidence}
      </p>
    ) : null}
  </div>
);

const renderGalleryImage = (image: GalleryImage) => (
  <figure key={image.src} className="overflow-hidden rounded-2xl border border-border bg-surface">
    <div className="relative aspect-[4/3]">
      <Image src={image.src} alt={image.alt} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
    </div>
    {image.caption ? <figcaption className="px-4 py-3 text-sm text-muted">{image.caption}</figcaption> : null}
  </figure>
);

const renderSection = (section: ProjectSection) => {
  switch (section.type) {
    case 'text':
      return (
        <section key={section.heading} className="space-y-4">
          <h2 className="font-display text-2xl font-semibold tracking-[-0.01em] text-ink">{section.heading}</h2>
          <div className="space-y-4">{renderParagraphs(section.body)}</div>
        </section>
      );
    case 'list':
      return (
        <section key={section.heading} className="space-y-4">
          <h2 className="font-display text-2xl font-semibold tracking-[-0.01em] text-ink">{section.heading}</h2>
          {section.body ? <div className="space-y-3">{renderParagraphs(section.body)}</div> : null}
          <ul className="space-y-3">
            {section.items.map((item) => (
              <li key={item} className="flex gap-3 text-[17px] leading-[1.7] text-textMain">
                <span className={`mt-[10px] h-1.5 w-1.5 flex-none rounded-full ${ACCENT_TEXT} bg-current`} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
      );
    case 'research':
      return (
        <section key={section.heading} className="space-y-5">
          <h2 className="font-display text-2xl font-semibold tracking-[-0.01em] text-ink">{section.heading}</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {section.findings.map((finding) => renderResearchFinding(finding))}
          </div>
        </section>
      );
    case 'gallery':
      return (
        <section key={section.heading} className="space-y-5">
          <h2 className="font-display text-2xl font-semibold tracking-[-0.01em] text-ink">{section.heading}</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {section.images.map((image) => renderGalleryImage(image))}
          </div>
        </section>
      );
    case 'quote':
      return (
        <blockquote key={section.attribution} className={`border-l-2 ${ACCENT_BAR} py-2 pl-6`}>
          <p className="text-[22px] font-medium leading-snug text-ink">&ldquo;{section.quote}&rdquo;</p>
          <footer className="mt-4 text-sm text-muted">
            <span className="font-semibold text-ink">{section.attribution}</span> · {section.role}
          </footer>
        </blockquote>
      );
    default: {
      const exhaustiveCheck: never = section;
      return exhaustiveCheck;
    }
  }
};

export const generateStaticParams = () => PROJECT_SLUGS.map((slug) => ({ slug }));

export const generateMetadata = async ({ params }: { params: Promise<ProjectParams> }): Promise<Metadata> => {
  const { slug } = await params;

  if (!isProjectSlug(slug)) {
    return { title: `Case study | ${SITE_NAME}` };
  }

  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: `Case study | ${SITE_NAME}` };
  }

  return {
    title: `${project.title} | ${SITE_NAME}`,
    description: project.summary,
    openGraph: {
      title: `${project.title} | ${SITE_NAME}`,
      description: project.summary,
      images: [{ url: project.hero.src, alt: project.hero.alt }]
    }
  };
};

export default async function ProjectPage({ params }: { params: Promise<ProjectParams> }) {
  const { slug } = await params;

  if (!isProjectSlug(slug)) {
    notFound();
  }

  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const nav = getProjectNav(project.slug);
  return (
    <main className="min-h-screen px-6 py-24 lg:px-16">
      <div className="mx-auto flex w-full max-w-[900px] flex-col gap-12">
        <DirectionalLink href="/projects" label="Back to case studies" direction="back" className="self-start" />

        <header className="space-y-6">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className={`rounded-full px-3 py-1 text-[11px] font-semibold tracking-wide ${ACCENT_CHIP}`}
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="font-display text-[clamp(30px,5vw,52px)] font-semibold leading-[1.06] tracking-[-0.02em] text-ink">
            {project.title}
          </h1>
          <p className="max-w-[720px] text-lg leading-relaxed text-muted">{project.summary}</p>
        </header>

        <div className="relative aspect-[16/9] overflow-hidden rounded-3xl border border-border">
          <Image
            src={project.hero.src}
            alt={project.hero.alt}
            fill
            priority
            sizes="(max-width: 900px) 100vw, 900px"
            className="object-cover"
          />
        </div>

        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-4">
          {buildMeta(project).map((item) => (
            <div key={item.label} className="bg-white px-5 py-4">
              <div className="text-[11px] uppercase tracking-[0.1em] text-faint">{item.label}</div>
              <div className="mt-1 text-[15px] font-medium text-ink">{item.value}</div>
            </div>
          ))}
        </div>

        {project.metrics ? (
          <div className="grid grid-cols-3 gap-4 rounded-2xl border border-border bg-surface p-6">
            {project.metrics.map((metric) => (
              <div key={metric.label}>
                <div className="font-display text-[clamp(24px,4vw,34px)] font-semibold tracking-[-0.02em] text-ink">
                  {metric.value}
                  {metric.suffix ? <span className={ACCENT_TEXT}>{metric.suffix}</span> : null}
                </div>
                <div className="mt-1 text-xs text-muted">{metric.label}</div>
              </div>
            ))}
          </div>
        ) : null}

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-white p-6">
            <div className="text-[11px] uppercase tracking-[0.1em] text-faint">Services</div>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.services.map((service) => (
                <span key={service} className="rounded-full bg-surface px-3 py-1 text-[13px] text-textMain">
                  {service}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-white p-6">
            <div className="text-[11px] uppercase tracking-[0.1em] text-faint">Tools &amp; platforms</div>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.tech.map((tool) => (
                <span key={tool} className="rounded-full bg-surface px-3 py-1 text-[13px] text-textMain">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-12">{project.sections.map((section) => renderSection(section))}</div>

        <section className="space-y-4 rounded-2xl border border-border bg-surface p-7">
          <h2 className="font-display text-2xl font-semibold tracking-[-0.01em] text-ink">Results snapshot</h2>
          <ul className="space-y-3">
            {project.outcomes.map((outcome) => (
              <li key={outcome} className="flex gap-3 text-[17px] leading-[1.7] text-textMain">
                <span className={`mt-[10px] h-1.5 w-1.5 flex-none rounded-full ${ACCENT_TEXT} bg-current`} />
                <span>{outcome}</span>
              </li>
            ))}
          </ul>
        </section>

        <nav className="flex flex-wrap items-center justify-between gap-4 border-t border-border pt-8">
          <div>
            {nav.prev ? (
              <DirectionalLink
                href={`/projects/${nav.prev.project.slug}`}
                label={buildPagerLabel('prev', nav.prev.project)}
                direction="back"
                rel="prev"
              />
            ) : null}
          </div>
          <div>
            {nav.next ? (
              <DirectionalLink
                href={`/projects/${nav.next.project.slug}`}
                label={buildPagerLabel('next', nav.next.project)}
                direction="forward"
                rel="next"
              />
            ) : null}
          </div>
        </nav>
      </div>
    </main>
  );
}
