import Image from 'next/image';
import Link from 'next/link';
import { DirectionalLink } from '../../../components/navigation/DirectionalLink';
import type { CaseStudy } from '../../../lib/types';

interface WorkSectionProps {
  caseStudies: CaseStudy[];
}

const DOT = 'bg-lipBlue';
const TAG = 'bg-lipBlueSoft text-lipBlue';
const NUM = 'text-lipBlue';

function Metrics({ caseStudy }: { caseStudy: CaseStudy }) {
  if (!caseStudy.metrics) {
    return null;
  }
  return (
    <div className="flex flex-wrap gap-x-8 gap-y-4">
      {caseStudy.metrics.map((metric) => (
        <div key={metric.label}>
          <div className="font-display text-2xl font-semibold tracking-[-0.02em] text-ink">
            {metric.value}
            {metric.suffix ? <span className={NUM}>{metric.suffix}</span> : null}
          </div>
          <div className="mt-0.5 text-xs text-muted">{metric.label}</div>
        </div>
      ))}
    </div>
  );
}

function Tags({ caseStudy }: { caseStudy: CaseStudy }) {
  return (
    <div className="flex flex-wrap gap-2">
      {caseStudy.tags.map((label) => (
        <span key={label} className={`rounded-full px-3 py-1 text-[11px] font-semibold tracking-wide ${TAG}`}>
          {label}
        </span>
      ))}
    </div>
  );
}

function FeaturedCard({ caseStudy }: { caseStudy: CaseStudy }) {
  return (
    <Link
      href={`/projects/${caseStudy.slug}`}
      className="reveal group grid overflow-hidden rounded-3xl border border-border bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_-28px_rgba(31,32,35,0.4)] md:grid-cols-2"
    >
      <div className="relative aspect-[4/3] overflow-hidden md:aspect-auto md:min-h-[340px]">
        {caseStudy.image ? (
          <Image
            src={caseStudy.image}
            alt={caseStudy.imageAlt ?? caseStudy.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : null}
      </div>
      <div className="flex flex-col gap-5 p-8 lg:p-10">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-muted">
          <span className={`h-2 w-2 rounded-full ${DOT}`} />
          {caseStudy.industry ?? 'Featured'} · Featured
        </div>
        <h3 className="font-display text-[clamp(24px,3vw,34px)] font-semibold leading-tight tracking-[-0.02em] text-ink">
          {caseStudy.title}
        </h3>
        <p className="text-[15px] leading-relaxed text-muted">{caseStudy.description}</p>
        <Metrics caseStudy={caseStudy} />
        <Tags caseStudy={caseStudy} />
        <span className="mt-auto inline-flex items-center gap-2 pt-2 text-sm font-semibold text-lipBlue transition-[gap] duration-200 group-hover:gap-3">
          Read the case study →
        </span>
      </div>
    </Link>
  );
}

function CaseCard({ caseStudy }: { caseStudy: CaseStudy }) {
  return (
    <Link
      href={`/projects/${caseStudy.slug}`}
      className="reveal group flex flex-col overflow-hidden rounded-3xl border border-border bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_48px_-24px_rgba(31,32,35,0.35)]"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        {caseStudy.image ? (
          <Image
            src={caseStudy.image}
            alt={caseStudy.imageAlt ?? caseStudy.title}
            fill
            sizes="(max-width: 900px) 100vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          />
        ) : null}
      </div>
      <div className="flex flex-1 flex-col gap-4 p-7">
        <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
          <span className={`h-1.5 w-1.5 rounded-full ${DOT}`} />
          {caseStudy.industry}
        </div>
        <h3 className="font-display text-xl font-semibold leading-snug tracking-[-0.01em] text-ink">
          {caseStudy.title}
        </h3>
        <p className="text-sm leading-relaxed text-muted">{caseStudy.description}</p>
        <div className="mt-auto pt-2">
          <Metrics caseStudy={caseStudy} />
        </div>
        <span className="inline-flex items-center gap-2 text-sm font-semibold text-lipBlue transition-[gap] duration-200 group-hover:gap-3">
          View case study →
        </span>
      </div>
    </Link>
  );
}

export function WorkSection({ caseStudies }: WorkSectionProps) {
  const featuredCase = caseStudies.find((item) => item.featured);
  const regularCases = caseStudies.filter((item) => !item.featured);

  return (
    <section id="work" className="border-y border-border bg-surface px-6 py-24 lg:px-16 lg:py-28">
      <div className="mx-auto max-w-[1180px]">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="reveal mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-lipBlue before:block before:h-px before:w-6 before:bg-lipBlue before:content-['']">
              Selected work
            </div>
            <h2 className="reveal max-w-[16ch] font-display text-[clamp(30px,4vw,50px)] font-semibold leading-[1.08] tracking-[-0.02em] text-ink">
              Real businesses, <span className="text-muted">real results.</span>
            </h2>
          </div>

          <DirectionalLink
            href="/projects"
            label="All projects"
            direction="forward"
            variant="pill"
            size="sm"
            className="reveal self-end"
          />
        </div>

        <div className="flex flex-col gap-5">
          {featuredCase ? <FeaturedCard caseStudy={featuredCase} /> : null}
          {regularCases.length > 0 ? (
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {regularCases.map((item) => (
                <CaseCard key={item.slug} caseStudy={item} />
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
