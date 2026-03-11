import type { Metadata } from 'next';
import Link from 'next/link';
import { DirectionalLink } from '../../components/navigation/DirectionalLink';
import { projects, type Project } from '../../lib/projects';
import { SITE_NAME } from '../../lib/seo';

type ProjectPreview = Pick<
  Project,
  'slug' | 'title' | 'summary' | 'tags' | 'metrics' | 'client' | 'timeline' | 'location'
>;

type MetaItem = Readonly<{
  label: string;
  value: string;
}>;

const toPreview = <T extends Project>(project: T): ProjectPreview => ({
  slug: project.slug,
  title: project.title,
  summary: project.summary,
  tags: project.tags,
  metrics: project.metrics,
  client: project.client,
  timeline: project.timeline,
  location: project.location
});

const PROJECT_PREVIEWS = projects.map(toPreview);

const buildMeta = <T extends ProjectPreview>(project: T): readonly MetaItem[] => [
  { label: 'Client', value: project.client },
  { label: 'Timeline', value: project.timeline },
  { label: 'Location', value: project.location }
];

export const metadata: Metadata = {
  title: `Projects | ${SITE_NAME}`,
  description: `Case studies and product work delivered by ${SITE_NAME}.`
};

const ProjectCard = ({ project }: Readonly<{ project: ProjectPreview }>) => (
  <Link
    href={`/projects/${project.slug}`}
    className="group flex h-full flex-col gap-6 rounded-2xl border border-white/10 bg-[#0a0a12] p-7 transition-[transform,border-color] duration-300 hover:-translate-y-1.5 hover:border-lipBlue/30"
  >
    <div className="space-y-3">
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
      <h2 className="font-display text-[24px] font-bold leading-[1.3] tracking-[-0.5px] text-white">
        {project.title}
      </h2>
      <p className="text-sm leading-7 text-textMain/80">{project.summary}</p>
    </div>

    <div className="grid gap-3 sm:grid-cols-3">
      {buildMeta(project).map((item) => (
        <div key={item.label} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
          <div className="text-[10px] uppercase tracking-[2px] text-muted">{item.label}</div>
          <div className="mt-1 text-sm text-white">{item.value}</div>
        </div>
      ))}
    </div>

    {project.metrics ? (
      <div className="flex flex-wrap gap-6">
        {project.metrics.map((metric) => (
          <div key={metric.label}>
            <div className="font-display text-[20px] font-black tracking-[-0.5px] text-white">
              {metric.value}
              {metric.suffix ? <em className="not-italic text-lipBlue">{metric.suffix}</em> : null}
            </div>
            <div className="mt-0.5 text-[11px] text-muted">{metric.label}</div>
          </div>
        ))}
      </div>
    ) : null}

    <span className="mt-auto inline-flex items-center gap-2 text-[12px] font-bold tracking-[0.5px] text-lipBlue transition-[gap] duration-200 group-hover:gap-[14px]">
      View case study &rarr;
    </span>
  </Link>
);

export default function ProjectsPage() {
  return (
    <main className="min-h-screen px-6 py-24 lg:px-16">
      <div className="mx-auto flex w-full max-w-[1100px] flex-col gap-12">
        <DirectionalLink href="/#work" label="Back to home" direction="back" className="self-start" />

        <header className="space-y-4">
          <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[4px] text-lipBlue before:block before:h-px before:w-6 before:bg-lipBlue before:content-['']">
            Projects
          </div>
          <h1 className="font-display text-[clamp(36px,5vw,64px)] font-black leading-[1.05] tracking-[-2px] text-white">
            Work that
            <br />
            <em className="font-serif font-normal italic text-white/40">scales.</em>
          </h1>
          <p className="max-w-[640px] text-base leading-7 text-textMain">
            Explore product builds, brand systems, and growth architecture delivered for founders and teams.
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
