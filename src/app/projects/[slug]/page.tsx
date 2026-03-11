import type { Metadata } from 'next';
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
type PagerLabel<R extends 'prev' | 'next'> = R extends 'prev' ? `Back to ${string}` : `Next: ${string}`;

type MetaItem = Readonly<{
  label: string;
  value: string;
}>;

const PROJECT_SET = new Set<string>(PROJECT_SLUGS);

const isProjectSlug = (value: string): value is ProjectSlug => PROJECT_SET.has(value);

const buildMeta = (project: Project): readonly MetaItem[] => [
  { label: 'Client', value: project.client },
  { label: 'Timeline', value: project.timeline },
  { label: 'Location', value: project.location }
];

const buildPagerLabel = <R extends 'prev' | 'next'>(rel: R, project: Project): PagerLabel<R> => {
  const label = rel === 'prev' ? `Back to ${project.client}` : `Next: ${project.client}`;
  return label as PagerLabel<R>;
};

const renderParagraphs = <T extends readonly string[]>(paragraphs: T) =>
  paragraphs.map((text, index) => (
    <p key={`${index}-${text.slice(0, 24)}`} className="text-base leading-7 text-textMain">
      {text}
    </p>
  ));

const renderResearchFinding = (finding: ResearchFinding) => (
  <div key={finding.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
    <h3 className="font-display text-lg font-bold text-white">{finding.title}</h3>
    <p className="mt-2 text-sm leading-7 text-textMain/80">{finding.insight}</p>
    {finding.evidence ? (
      <p className="mt-3 text-xs uppercase tracking-[2px] text-muted">Evidence: {finding.evidence}</p>
    ) : null}
  </div>
);

const renderSection = (section: ProjectSection) => {
  switch (section.type) {
    case 'text':
      return (
        <section key={section.heading} className="space-y-3">
          <h2 className="font-display text-2xl font-bold tracking-[-0.5px] text-white">{section.heading}</h2>
          <div className="space-y-3">{renderParagraphs(section.body)}</div>
        </section>
      );
    case 'list':
      return (
        <section key={section.heading} className="space-y-3">
          <h2 className="font-display text-2xl font-bold tracking-[-0.5px] text-white">{section.heading}</h2>
          {section.body ? <div className="space-y-3">{renderParagraphs(section.body)}</div> : null}
          <ul className="list-disc space-y-2 pl-5 text-base leading-7 text-textMain">
            {section.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      );
    case 'research':
      return (
        <section key={section.heading} className="space-y-4">
          <h2 className="font-display text-2xl font-bold tracking-[-0.5px] text-white">{section.heading}</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {section.findings.map((finding) => renderResearchFinding(finding))}
          </div>
        </section>
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
    return { title: `Project | ${SITE_NAME}` };
  }

  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: `Project | ${SITE_NAME}` };
  }

  return {
    title: `${project.title} | ${SITE_NAME}`,
    description: project.summary
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
      <div className="mx-auto flex w-full max-w-[1100px] flex-col gap-12">
        <DirectionalLink href="/projects" label="Back to projects" direction="back" />

        <header className="space-y-6">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-lipBlue/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[2px] text-lipBlue"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="space-y-3">
            <h1 className="font-display text-[clamp(36px,5vw,64px)] font-black leading-[1.05] tracking-[-2px] text-white">
              {project.title}
            </h1>
            <p className="max-w-[720px] text-base leading-7 text-textMain">{project.summary}</p>
          </div>
        </header>

        <div className="grid gap-4 md:grid-cols-3">
          {buildMeta(project).map((item) => (
            <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
              <div className="text-[10px] uppercase tracking-[2px] text-muted">{item.label}</div>
              <div className="mt-1 text-base text-white">{item.value}</div>
            </div>
          ))}
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-[#0a0a12] p-6">
            <div className="text-[10px] uppercase tracking-[2px] text-muted">Services</div>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.services.map((service) => (
                <span key={service} className="rounded-full bg-white/5 px-3 py-1 text-xs text-textMain">
                  {service}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-[#0a0a12] p-6">
            <div className="text-[10px] uppercase tracking-[2px] text-muted">Stack</div>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.tech.map((tool) => (
                <span key={tool} className="rounded-full bg-white/5 px-3 py-1 text-xs text-textMain">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-10">
          {project.sections.map((section) => renderSection(section))}
        </div>

        <section className="space-y-3">
          <h2 className="font-display text-2xl font-bold tracking-[-0.5px] text-white">Results Snapshot</h2>
          <ul className="list-disc space-y-2 pl-5 text-base leading-7 text-textMain">
            {project.outcomes.map((outcome) => (
              <li key={outcome}>{outcome}</li>
            ))}
          </ul>
        </section>

        <nav className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-8">
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
