import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { DirectionalLink } from '../../components/navigation/DirectionalLink';
import { projects, type Project } from '../../lib/projects';
import { SITE_NAME } from '../../lib/seo';

type ProjectPreview = Pick<
  Project,
  'slug' | 'title' | 'summary' | 'tags' | 'metrics' | 'client' | 'timeline' | 'location' | 'industry' | 'hero'
>;

const toPreview = <T extends Project>(project: T): ProjectPreview => ({
  slug: project.slug,
  title: project.title,
  summary: project.summary,
  tags: project.tags,
  metrics: project.metrics,
  client: project.client,
  timeline: project.timeline,
  location: project.location,
  industry: project.industry,
  hero: project.hero
});

const PROJECT_PREVIEWS = projects.map(toPreview);

export const metadata: Metadata = {
  title: `Case Studies | ${SITE_NAME}`,
  description: `Social media, lead generation, and brand systems delivered for real businesses by ${SITE_NAME}.`
};

const ProjectCard = ({ project }: Readonly<{ project: ProjectPreview }>) => (
  <Link
    href={`/projects/${project.slug}`}
    className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_48px_-24px_rgba(31,32,35,0.35)]"
  >
    <div className="relative aspect-[16/10] overflow-hidden">
      <Image
        src={project.hero.src}
        alt={project.hero.alt}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
      />
    </div>
    <div className="flex flex-1 flex-col gap-4 p-7">
      <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
        <span className="h-1.5 w-1.5 rounded-full bg-lipBlue" />
        {project.industry} · {project.location}
      </div>
      <h2 className="font-display text-xl font-semibold leading-snug tracking-[-0.01em] text-ink">
        {project.title}
      </h2>
      <p className="text-sm leading-relaxed text-muted">{project.summary}</p>

      {project.metrics ? (
        <div className="mt-auto flex flex-wrap gap-x-7 gap-y-3 pt-2">
          {project.metrics.map((metric) => (
            <div key={metric.label}>
              <div className="font-display text-xl font-semibold tracking-[-0.02em] text-ink">
                {metric.value}
                {metric.suffix ? <span className="text-lipBlue">{metric.suffix}</span> : null}
              </div>
              <div className="mt-0.5 text-[11px] text-muted">{metric.label}</div>
            </div>
          ))}
        </div>
      ) : null}

      <span className="inline-flex items-center gap-2 text-sm font-semibold text-lipBlue transition-[gap] duration-200 group-hover:gap-3">
        Read the case study →
      </span>
    </div>
  </Link>
);

export default function ProjectsPage() {
  return (
    <main className="min-h-screen px-6 py-28 lg:px-16">
      <div className="mx-auto flex w-full max-w-[1120px] flex-col gap-12">
        <DirectionalLink href="/#work" label="Back to home" direction="back" className="self-start" />

        <header className="max-w-2xl space-y-5">
          <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-lipBlue before:block before:h-px before:w-6 before:bg-lipBlue before:content-['']">
            Case studies
          </div>
          <h1 className="font-display text-[clamp(36px,5vw,60px)] font-semibold leading-[1.05] tracking-[-0.02em] text-ink">
            Work that moves <span className="text-muted">the numbers.</span>
          </h1>
          <p className="text-lg leading-relaxed text-muted">
            Social media systems, lead generation, and brand work built for real businesses, with the
            strategy behind every result.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2">
          {PROJECT_PREVIEWS.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </main>
  );
}
