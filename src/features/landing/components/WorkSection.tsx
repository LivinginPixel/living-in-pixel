import type { CaseStudy } from '../../../lib/types';

interface WorkSectionProps {
  caseStudies: CaseStudy[];
}

type CaseVisualVariant = 'fintech' | 'brand' | 'social';

const fintechBars = [40, 65, 50, 85, 60, 95, 70];
const socialPosts: Array<'default' | 'accent' | 'accent2'> = [
  'accent',
  'default',
  'accent2',
  'default',
  'accent',
  'default',
  'accent2',
  'accent',
  'default'
];

function getCaseVisualVariant(caseStudy: CaseStudy): CaseVisualVariant {
  if (caseStudy.tags.includes('Fintech')) {
    return 'fintech';
  }

  if (caseStudy.tags.includes('Branding')) {
    return 'brand';
  }

  return 'social';
}

function FintechVisual() {
  return (
    <>
      <div className="absolute inset-0 grid grid-cols-8 grid-rows-5 gap-px p-5 opacity-30">
        {Array.from({ length: 40 }, (_, index) => {
          const row = Math.floor(index / 8);
          const col = index % 8;
          const lit = (row + col) % 2 === 0;

          return (
            <div
              key={index}
              className={`rounded-[2px] border border-lipBlue/20 ${lit ? 'bg-lipBlue/15' : ''}`}
            />
          );
        })}
      </div>

      <div className="relative z-[2] flex h-[100px] items-end gap-1.5">
        {fintechBars.map((height, index) => (
          <div
            key={height}
            style={{ height: `${height}px`, animationDelay: `${(index + 1) * 0.1}s` }}
            className="w-[14px] origin-bottom rounded-t-[3px] bg-[linear-gradient(to_top,rgba(82,130,255,0.3),#5282ff)] animate-[barGrow_1.5s_ease_both]"
          />
        ))}
      </div>
    </>
  );
}

function BrandVisual() {
  return (
    <div className="relative flex h-40 w-40 items-center justify-center rounded-full border border-[rgba(192,125,58,0.3)]">
      <div className="absolute h-[120px] w-[120px] rounded-full border border-[rgba(192,125,58,0.15)]" />
      <div className="font-display text-[32px] font-black tracking-[-2px] text-[#c07d3a]">NX</div>
    </div>
  );
}

function SocialVisual() {
  return (
    <div className="grid grid-cols-3 gap-1.5 -rotate-[8deg]">
      {socialPosts.map((variant, index) => (
        <div
          key={`${variant}-${index}`}
          className={`h-20 w-20 rounded-lg border ${
            variant === 'accent'
              ? 'border-lipBlue/20 bg-lipBlue/10'
              : variant === 'accent2'
                ? 'border-[#c07d3a]/20 bg-[#c07d3a]/10'
                : 'border-white/[0.06] bg-white/[0.04]'
          }`}
        />
      ))}
    </div>
  );
}

function CaseVisual({ variant, featured }: { variant: CaseVisualVariant; featured: boolean }) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden ${
        featured ? 'h-[360px]' : 'h-[280px]'
      } ${
        variant === 'fintech'
          ? 'bg-[linear-gradient(135deg,#0d0d1f_0%,#0a0f2e_100%)]'
          : variant === 'brand'
            ? 'bg-[linear-gradient(135deg,#0f0a00_0%,#1a0f00_100%)]'
            : 'bg-[linear-gradient(135deg,#060d0f_0%,#041218_100%)]'
      }`}
    >
      {variant === 'fintech' ? <FintechVisual /> : null}
      {variant === 'brand' ? <BrandVisual /> : null}
      {variant === 'social' ? <SocialVisual /> : null}
    </div>
  );
}

function CaseCard({ caseStudy, featured = false }: { caseStudy: CaseStudy; featured?: boolean }) {
  const visualVariant = getCaseVisualVariant(caseStudy);

  return (
    <a
      href="#"
      className={`reveal block overflow-hidden rounded-2xl border border-white/[0.06] bg-[#0a0a12] transition-[transform,border-color] duration-300 hover:-translate-y-1.5 hover:border-lipBlue/25 ${
        featured ? 'min-[901px]:col-span-2' : ''
      }`}
    >
      <CaseVisual variant={visualVariant} featured={featured} />

      <div className="px-8 pb-8 pt-7">
        <div className="mb-[14px] flex flex-wrap gap-2">
          {caseStudy.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-lipBlue/10 px-[10px] py-1 text-[10px] font-bold uppercase tracking-[2px] text-lipBlue"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3
          className={`font-display font-bold leading-[1.3] tracking-[-0.5px] text-white ${
            featured ? 'text-[28px]' : 'text-[20px]'
          }`}
        >
          {caseStudy.title}
        </h3>

        <p className="mb-5 mt-[10px] text-[14px] leading-[1.7] text-muted">{caseStudy.description}</p>

        {caseStudy.metrics ? (
          <div className="flex flex-wrap gap-7">
            {caseStudy.metrics.map((metric) => (
              <div key={metric.label}>
                <div className="font-display text-[22px] font-black tracking-[-1px] text-white">
                  {metric.value}
                  {metric.suffix ? <em className="not-italic text-lipBlue">{metric.suffix}</em> : null}
                </div>
                <div className="mt-0.5 text-[11px] text-muted">{metric.label}</div>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </a>
  );
}

export function WorkSection({ caseStudies }: WorkSectionProps) {
  const featuredCase = caseStudies.find((item) => item.featured);
  const regularCases = caseStudies.filter((item) => !item.featured);

  return (
    <section
      id="work"
      className="border-y border-white/[0.06] bg-surface px-[60px] py-[120px] max-[900px]:px-6 max-[900px]:py-20"
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-[60px] flex flex-wrap items-end justify-between gap-5">
          <div>
            <div className="reveal mb-4 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[4px] text-lipBlue before:block before:h-px before:w-6 before:bg-lipBlue before:content-['']">
              Selected Work
            </div>
            <h2 className="reveal font-display text-[clamp(32px,4vw,52px)] font-black leading-[1.05] tracking-[-2px] text-white">
              Results that
              <br />
              <em className="font-serif font-normal italic text-white/40">speak clearly.</em>
            </h2>
          </div>

          <a
            href="#"
            className="reveal self-end rounded-full border border-white/[0.06] px-9 py-4 text-sm text-textMain transition-[border-color,color] duration-200 hover:border-white/20 hover:text-white"
          >
            All Projects →
          </a>
        </div>

        <div className="grid gap-5 min-[901px]:grid-cols-2">
          {featuredCase ? <CaseCard caseStudy={featuredCase} featured /> : null}
          {regularCases.map((item) => (
            <CaseCard key={item.title} caseStudy={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
