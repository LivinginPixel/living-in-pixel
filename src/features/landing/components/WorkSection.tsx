import Link from "next/link";
import { DirectionalLink } from "../../../components/navigation/DirectionalLink";
import type { CaseMetric, CaseStudy } from "../../../lib/types";

interface WorkSectionProps {
  caseStudies: CaseStudy[];
}

type CaseVisualVariant = "fintech" | "brand" | "social";

type NonEmptyArray<T> = readonly [T, ...T[]];

type ReadonlyRecord<K extends PropertyKey, V> = Readonly<Record<K, V>>;

type VariantTheme = Readonly<{
  background: string;
  accent: string;
  accentSoft: string;
  chip: string;
  panel: string;
  grid: string;
}>;

type VariantTagMap = ReadonlyRecord<CaseVisualVariant, readonly string[]>;

type TemplateTone = "primary" | "secondary" | "neutral";

type TemplateLayout = "stack" | "split" | "media";

type TemplateToken = Readonly<{
  title: string;
  layout: TemplateLayout;
  tone: TemplateTone;
}>;

type TemplateDeckMap = ReadonlyRecord<
  CaseVisualVariant,
  NonEmptyArray<TemplateToken>
>;

type TemplateToneStyles = ReadonlyRecord<TemplateTone, string>;

type TemplateAccentMap = ReadonlyRecord<CaseVisualVariant, string>;

const VARIANT_TAGS = {
  fintech: ["Fintech"],
  brand: ["Branding"],
  social: ["Social Media", "Strategy"],
} as const satisfies VariantTagMap;

const VARIANT_LABELS = {
  fintech: "Product Build",
  brand: "Brand System",
  social: "Social Architecture",
} as const satisfies ReadonlyRecord<CaseVisualVariant, string>;

const VARIANT_THEMES = {
  fintech: {
    background: "bg-[linear-gradient(135deg,#0d0d1f_0%,#0a0f2e_100%)]",
    accent: "text-lipBlue",
    accentSoft: "text-lipBlue/70",
    chip: "bg-lipBlue/10 text-lipBlue",
    panel: "border border-lipBlue/15 bg-[#0c1224]",
    grid: "bg-[linear-gradient(rgba(82,130,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(82,130,255,0.12)_1px,transparent_1px)] bg-[length:80px_80px] opacity-40",
  },
  brand: {
    background: "bg-[linear-gradient(135deg,#120b00_0%,#1a0f00_100%)]",
    accent: "text-[#c07d3a]",
    accentSoft: "text-[#c07d3a]/70",
    chip: "bg-[#c07d3a]/10 text-[#c07d3a]",
    panel: "border border-[#c07d3a]/20 bg-[#1a120a]",
    grid: "bg-[linear-gradient(rgba(192,125,58,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(192,125,58,0.18)_1px,transparent_1px)] bg-[length:80px_80px] opacity-40",
  },
  social: {
    background: "bg-[linear-gradient(135deg,#07111a_0%,#041218_100%)]",
    accent: "text-[#7fd5ff]",
    accentSoft: "text-[#7fd5ff]/70",
    chip: "bg-[#7fd5ff]/10 text-[#7fd5ff]",
    panel: "border border-[#7fd5ff]/15 bg-[#0a1622]",
    grid: "bg-[linear-gradient(rgba(127,213,255,0.14)_1px,transparent_1px),linear-gradient(90deg,rgba(127,213,255,0.14)_1px,transparent_1px)] bg-[length:80px_80px] opacity-40",
  },
} as const satisfies ReadonlyRecord<CaseVisualVariant, VariantTheme>;

const TEMPLATE_DECKS = {
  fintech: [
    { title: "Dashboard UI", tone: "primary", layout: "stack" },
    { title: "Onboarding", tone: "neutral", layout: "split" },
    { title: "KPI Report", tone: "secondary", layout: "media" },
  ],
  brand: [
    { title: "Pitch Deck", tone: "primary", layout: "media" },
    { title: "Brand Book", tone: "secondary", layout: "stack" },
    { title: "Sales Sheet", tone: "neutral", layout: "split" },
  ],
  social: [
    { title: "IG Carousel", tone: "primary", layout: "split" },
    { title: "LinkedIn Post", tone: "secondary", layout: "stack" },
    { title: "Video Cover", tone: "neutral", layout: "media" },
  ],
} as const satisfies TemplateDeckMap;

const TEMPLATE_TONE_STYLES: TemplateToneStyles = {
  primary: "border-lipBlue/30 bg-lipBlue/10 text-lipBlue",
  secondary: "border-white/10 bg-white/5 text-white/70",
  neutral: "border-white/10 bg-[#0b0f1f] text-white/60",
} as const;

const TEMPLATE_ACCENTS: TemplateAccentMap = {
  fintech: "bg-lipBlue/20",
  brand: "bg-[#c07d3a]/25",
  social: "bg-[#7fd5ff]/25",
} as const;

const isNonEmptyArray = <T,>(items: readonly T[]): items is NonEmptyArray<T> =>
  items.length > 0;

const take = <T,>(items: readonly T[], count: number): readonly T[] =>
  items.slice(0, count);

const truncate = <T extends string>(value: T, max = 120): string =>
  value.length <= max ? value : `${value.slice(0, max).trim()}...`;

const firstSentence = <T extends string>(value: T): string => {
  const trimmed = value.trim();
  const boundary = trimmed.indexOf(". ");
  return boundary === -1 ? trimmed : trimmed.slice(0, boundary + 1);
};

const summarize = (description: string): string =>
  truncate(firstSentence(description), 120);

const getCaseVisualVariant = (caseStudy: CaseStudy): CaseVisualVariant => {
  const entries = Object.entries(VARIANT_TAGS) as Array<
    [CaseVisualVariant, readonly string[]]
  >;
  const match = entries.find(([, tags]) =>
    tags.some((tag) => caseStudy.tags.includes(tag)),
  );
  return match?.[0] ?? "social";
};

const resolveMetrics = (
  metrics: readonly CaseMetric[] | undefined,
  fallback: NonEmptyArray<CaseMetric>,
): NonEmptyArray<CaseMetric> => {
  if (metrics && isNonEmptyArray(metrics)) {
    return metrics;
  }

  return fallback;
};

type TemplateCardProps = Readonly<{
  token: TemplateToken;
  variant: CaseVisualVariant;
}>;

const TemplateCard = ({ token, variant }: TemplateCardProps) => {
  const accent = TEMPLATE_ACCENTS[variant];

  return (
    <div
      className={`flex flex-col gap-2 rounded-xl border px-3 py-3 ${TEMPLATE_TONE_STYLES[token.tone]}`}
    >
      <div className="flex items-center justify-between text-[9px] uppercase tracking-[2px]">
        <span>{token.title}</span>
        <span className="text-white/40">Template</span>
      </div>
      <div className="space-y-1.5">
        {token.layout === "stack" ? (
          <>
            <span className={`block h-2 w-8 rounded-full ${accent}`} />
            <span className="block h-2 w-full rounded-full bg-white/10" />
            <span className="block h-2 w-3/4 rounded-full bg-white/10" />
          </>
        ) : null}
        {token.layout === "split" ? (
          <div className="grid grid-cols-2 gap-2">
            <span className={`block h-6 rounded-lg ${accent}`} />
            <div className="space-y-1.5">
              <span className="block h-2 rounded-full bg-white/10" />
              <span className="block h-2 rounded-full bg-white/10" />
            </div>
          </div>
        ) : null}
        {token.layout === "media" ? (
          <>
            <span className={`block h-8 rounded-lg ${accent}`} />
            <span className="block h-2 w-3/4 rounded-full bg-white/10" />
          </>
        ) : null}
      </div>
    </div>
  );
};

type TemplateDeckProps = Readonly<{
  variant: CaseVisualVariant;
  templates: NonEmptyArray<TemplateToken>;
}>;

const TemplateDeck = ({ variant, templates }: TemplateDeckProps) => (
  <div className="space-y-3">
    <div className="flex items-center justify-between">
      <span
        className={`text-[10px] uppercase tracking-[2px] ${VARIANT_THEMES[variant].accentSoft}`}
      >
        Template Library
      </span>
      <span className="text-[10px] uppercase tracking-[2px] text-muted">
        {templates.length} templates
      </span>
    </div>
    <div className="grid grid-cols-3 gap-2">
      {templates.map((token) => (
        <TemplateCard key={token.title} token={token} variant={variant} />
      ))}
    </div>
  </div>
);

type CaseVisualProps = Readonly<{
  caseStudy: CaseStudy;
  featured?: boolean;
}>;

const FALLBACK_METRICS = {
  fintech: [
    { value: "99", suffix: "%", label: "Uptime" },
    { value: "8", suffix: "wks", label: "Launch window" },
    { value: "3", suffix: "k+", label: "Beta users" },
  ],
  brand: [
    { value: "40", suffix: "+", label: "Templates" },
    { value: "2", suffix: "x", label: "Engagement" },
    { value: "6", suffix: "wks", label: "Delivery" },
  ],
  social: [
    { value: "4", suffix: "x", label: "Growth" },
    { value: "60", label: "Templates" },
    { value: "8", suffix: "wks", label: "Sprint" },
  ],
} as const satisfies ReadonlyRecord<
  CaseVisualVariant,
  NonEmptyArray<CaseMetric>
>;

const CaseVisual = ({ caseStudy, featured = false }: CaseVisualProps) => {
  const variant = getCaseVisualVariant(caseStudy);
  const theme = VARIANT_THEMES[variant];
  const metrics = resolveMetrics(caseStudy.metrics, FALLBACK_METRICS[variant]);
  const templates = TEMPLATE_DECKS[variant];

  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden ${
        featured ? "h-[360px]" : "h-[280px]"
      } ${theme.background}`}
    >
      <div className={`pointer-events-none absolute inset-0 ${theme.grid}`} />
      <div className="relative z-[1] flex h-full w-full flex-col justify-between gap-6 p-8">
        <div className="space-y-4">
          <div
            className={`text-[10px] uppercase tracking-[3px] ${theme.accentSoft}`}
          >
            {VARIANT_LABELS[variant]}
          </div>
          <div className="text-[18px] font-bold text-white">
            {summarize(caseStudy.description)}
          </div>
        </div>
        <TemplateDeck variant={variant} templates={templates} />
        <div className="grid grid-cols-3 gap-3">
          {take(metrics, 3).map((metric) => (
            <div
              key={metric.label}
              className={`rounded-xl px-4 py-3 ${theme.panel}`}
            >
              <div className="font-display text-[18px] font-black tracking-[-0.5px] text-white">
                {metric.value}
                {metric.suffix ? (
                  <em className={`not-italic ${theme.accent}`}>
                    {metric.suffix}
                  </em>
                ) : null}
              </div>
              <div className="mt-1 text-[10px] uppercase tracking-[2px] text-muted">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

function CaseCard({
  caseStudy,
  featured = false,
}: {
  caseStudy: CaseStudy;
  featured?: boolean;
}) {
  return (
    <Link
      href={`/projects/${caseStudy.slug}`}
      className={`reveal group block overflow-hidden rounded-2xl border border-white/[0.06] bg-[#0a0a12] transition-[transform,border-color] duration-300 hover:-translate-y-1.5 hover:border-lipBlue/25 ${
        featured ? "min-[901px]:col-span-2" : ""
      }`}
    >
      <CaseVisual caseStudy={caseStudy} featured={featured} />

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
            featured ? "text-[28px]" : "text-[20px]"
          }`}
        >
          {caseStudy.title}
        </h3>

        <p className="mb-5 mt-[10px] text-[14px] leading-[1.7] text-muted">
          {caseStudy.description}
        </p>

        {caseStudy.metrics ? (
          <div className="flex flex-wrap gap-7">
            {caseStudy.metrics.map((metric) => (
              <div key={metric.label}>
                <div className="font-display text-[22px] font-black tracking-[-1px] text-white">
                  {metric.value}
                  {metric.suffix ? (
                    <em className="not-italic text-lipBlue">{metric.suffix}</em>
                  ) : null}
                </div>
                <div className="mt-0.5 text-[11px] text-muted">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        ) : null}

        <span className="mt-5 inline-flex items-center gap-2 text-[12px] font-bold tracking-[0.5px] text-lipBlue transition-[gap] duration-200 group-hover:gap-[14px]">
          View case study &rarr;
        </span>
      </div>
    </Link>
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
              <em className="font-serif font-normal italic text-white/40">
                speak clearly.
              </em>
            </h2>
          </div>

          <DirectionalLink
            href="/projects"
            label="All Projects"
            direction="forward"
            variant="pill"
            size="sm"
            className="reveal self-end"
          />
        </div>

        <div className="grid gap-5 min-[901px]:grid-cols-2">
          {featuredCase ? <CaseCard caseStudy={featuredCase} featured /> : null}
          {regularCases.map((item) => (
            <CaseCard key={item.slug} caseStudy={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
