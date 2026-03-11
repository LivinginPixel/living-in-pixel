import type { CaseMetric, CaseStudy } from './types';

export const PROJECT_SLUGS = ['pocketledger', 'nexora', 'flowstate'] as const;

export type ProjectSlug = (typeof PROJECT_SLUGS)[number];

export type NonEmptyArray<T> = readonly [T, ...T[]];

type ReadonlyRecord<K extends PropertyKey, V> = Readonly<Record<K, V>>;

type ProjectMeta = Readonly<{
  client: string;
  location: string;
  timeline: string;
  services: NonEmptyArray<string>;
  tech: NonEmptyArray<string>;
}>;

type ResearchFinding = Readonly<{
  title: string;
  insight: string;
  evidence?: string;
}>;

type ProjectTextSection = Readonly<{
  type: 'text';
  heading: string;
  body: NonEmptyArray<string>;
}>;

type ProjectListSection = Readonly<{
  type: 'list';
  heading: string;
  items: NonEmptyArray<string>;
  body?: readonly string[];
}>;

type ProjectResearchSection = Readonly<{
  type: 'research';
  heading: string;
  findings: NonEmptyArray<ResearchFinding>;
}>;

type ProjectSection = ProjectTextSection | ProjectListSection | ProjectResearchSection;

type ProjectBase = Readonly<
  CaseStudy &
    ProjectMeta & {
      slug: ProjectSlug;
      summary: string;
      outcomes: NonEmptyArray<string>;
    }
>;

export type Project = Readonly<ProjectBase & { sections: NonEmptyArray<ProjectSection> }>;

const createProject = <S extends ProjectSlug>(project: Readonly<ProjectBase & { slug: S }> & { sections: NonEmptyArray<ProjectSection> }): Project =>
  project;

const METRICS = {
  pocketledger: [
    { value: '8', suffix: 'wks', label: 'Zero to beta' },
    { value: '3', suffix: 'k+', label: 'Beta users' },
    { value: '99.8', suffix: '%', label: 'API uptime' }
  ],
  nexora: [
    { value: '40', suffix: '+', label: 'Templates built' },
    { value: '2', suffix: 'x', label: 'Engagement lift' },
    { value: '6', suffix: 'wks', label: 'Delivery' }
  ],
  flowstate: [
    { value: '4', suffix: 'x', label: 'Follower growth' },
    { value: '60', label: 'Templates delivered' },
    { value: '8', suffix: 'wks', label: 'System rollout' }
  ]
} as const satisfies ReadonlyRecord<ProjectSlug, NonEmptyArray<CaseMetric>>;

export const projects = [
  createProject({
    slug: 'pocketledger',
    title: 'PocketLedger - Personal Finance Dashboard',
    summary: 'A real-time finance dashboard that helps users track spending, set goals, and stay on top of recurring bills.',
    description:
      'Full-stack web application for a Lagos-based fintech startup. Built a real-time spending analytics dashboard, onboarding flow, and API integrations - from zero to beta in 8 weeks.',
    tags: ['Fintech', 'Web App', 'Dashboard'],
    metrics: METRICS.pocketledger,
    featured: true,
    client: 'PocketLedger',
    location: 'Lagos, Nigeria',
    timeline: '8 weeks',
    services: ['Product strategy', 'UX/UI design', 'Full-stack engineering'],
    tech: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Stripe'],
    outcomes: [
      'Launched a stable beta with 3k+ early adopters.',
      'Reduced onboarding drop-off by 28% after the first iteration.',
      'Enabled real-time analytics with <2s refresh latency.'
    ],
    sections: [
      {
        type: 'text',
        heading: 'Overview',
        body: [
          'PocketLedger needed a dependable MVP that felt premium on day one. The focus was on instant clarity: a dashboard that summarizes spending, highlights bill risk, and keeps users on track with monthly goals.'
        ]
      },
      {
        type: 'list',
        heading: 'Objectives',
        items: [
          'Ship a production-ready beta in under 2 months.',
          'Design an onboarding flow that reduces cognitive load for first-time users.',
          'Create a scalable analytics layer for daily spending insights.'
        ]
      },
      {
        type: 'research',
        heading: 'Research & Insights',
        findings: [
          {
            title: 'Trust signals drive conversion',
            insight: 'Users were hesitant to connect accounts without immediate reassurance about security and data handling.',
            evidence: '5 of 7 interviews cited “risk” before signing in.'
          },
          {
            title: 'Bills are the strongest habit trigger',
            insight: 'Recurring bill reminders produced the highest return visits and referrals.',
            evidence: 'Returning users checked “Bills” 2.4x more than any other view.'
          },
          {
            title: 'Visual summaries beat raw tables',
            insight: 'Users preferred quick trend cards over transaction lists for daily reviews.',
            evidence: 'Prototype test: 6 of 7 users finished tasks faster with summary cards.'
          }
        ]
      },
      {
        type: 'list',
        heading: 'Solution',
        items: [
          'Built a real-time analytics dashboard with goal tracking and spend categories.',
          'Designed a progressive onboarding flow with inline security cues.',
          'Implemented a unified notification system for bill alerts and weekly summaries.'
        ]
      },
      {
        type: 'list',
        heading: 'Deliverables',
        items: [
          'Responsive web app with authenticated dashboard and reporting views.',
          'API integration layer for bank aggregation and payment data.',
          'Design system for cards, charts, and status indicators.'
        ]
      },
      {
        type: 'list',
        heading: 'Outcomes',
        items: [
          'Beta cohort retention improved by 19% after week two.',
          'Customer support tickets decreased by 35% after onboarding refinements.',
          'Validated product-market interest ahead of seed raise.'
        ]
      }
    ]
  }),
  createProject({
    slug: 'nexora',
    title: 'Nexora - Brand System & Template Suite',
    summary: 'A cohesive brand system with sales-ready templates for a B2B SaaS team scaling outbound growth.',
    description:
      "Complete brand identity and 40+ Canva & Figma templates for a B2B SaaS startup's social and sales collateral.",
    tags: ['Branding', 'Templates'],
    metrics: METRICS.nexora,
    client: 'Nexora',
    location: 'Remote',
    timeline: '6 weeks',
    services: ['Brand strategy', 'Visual identity', 'Template systems'],
    tech: ['Figma', 'Canva', 'Notion'],
    outcomes: [
      'Unified all marketing touchpoints under one identity.',
      'Enabled the sales team to ship collateral without design bottlenecks.',
      'Increased inbound demo requests after rollout.'
    ],
    sections: [
      {
        type: 'text',
        heading: 'Overview',
        body: [
          'Nexora needed a credible, enterprise-ready brand identity without losing startup speed. The focus was on clarity, repeatability, and a template engine that kept every output consistent.'
        ]
      },
      {
        type: 'list',
        heading: 'Objectives',
        items: [
          'Create a brand system that scales across sales and marketing.',
          'Provide a ready-to-use template library for social and sales.',
          'Ensure non-designers can produce polished assets quickly.'
        ]
      },
      {
        type: 'research',
        heading: 'Research & Insights',
        findings: [
          {
            title: 'Consistency beat variety',
            insight: 'Sales teams were more likely to reuse templates when the structure stayed identical.',
            evidence: 'Template reuse doubled in tests where layouts stayed fixed.'
          },
          {
            title: 'Proof points sell',
            insight: 'Case studies and data visuals performed better than feature lists on outbound decks.',
            evidence: 'Deck tests showed 31% higher engagement on data-heavy slides.'
          },
          {
            title: 'Minimal palettes reduce errors',
            insight: 'Limiting color usage to a strict set decreased off-brand outputs.',
            evidence: 'Pilot teams reported fewer edit cycles after palette constraints.'
          }
        ]
      },
      {
        type: 'list',
        heading: 'Solution',
        items: [
          'Built a modular brand system with typography, color, and motion rules.',
          'Delivered a 40+ template suite for sales decks, proposals, and social content.',
          'Created a lightweight usage guide and onboarding workshop.'
        ]
      },
      {
        type: 'list',
        heading: 'Deliverables',
        items: [
          'Brand guidelines with tone, visual rules, and asset library.',
          'Template library in Canva and Figma with locked styles.',
          'Sales enablement kit with case study and one-pager layouts.'
        ]
      },
      {
        type: 'list',
        heading: 'Outcomes',
        items: [
          'Marketing output increased to 3x weekly cadence.',
          'Sales team cut design requests by 60%.',
          'Brand recognition improved across partner campaigns.'
        ]
      }
    ]
  }),
  createProject({
    slug: 'flowstate',
    title: 'Flowstate - Social Architecture System',
    summary: 'A content engine that turned a dormant social presence into a structured growth channel.',
    description:
      'Rebuilt the entire social presence for a productivity startup - page setup, content pillars, and 60-day template library.',
    tags: ['Social Media', 'Strategy'],
    metrics: METRICS.flowstate,
    client: 'Flowstate',
    location: 'Remote',
    timeline: '8 weeks',
    services: ['Content strategy', 'Template systems', 'Growth experimentation'],
    tech: ['Figma', 'Buffer', 'Notion'],
    outcomes: [
      'Established a repeatable 60-day content calendar.',
      'Improved engagement rate within the first month.',
      'Built a sustainable production workflow for internal teams.'
    ],
    sections: [
      {
        type: 'text',
        heading: 'Overview',
        body: [
          'Flowstate had strong product retention but inconsistent social visibility. The goal was to rebuild the entire content architecture and hand off a clear production system.'
        ]
      },
      {
        type: 'list',
        heading: 'Objectives',
        items: [
          'Define content pillars that map directly to product value.',
          'Ship a template library for rapid weekly publishing.',
          'Establish metrics and cadence to measure growth.'
        ]
      },
      {
        type: 'research',
        heading: 'Research & Insights',
        findings: [
          {
            title: 'Audience needs tangible outcomes',
            insight: 'Posts with clear “before/after” benefits performed best.',
            evidence: 'Engagement rose 2.1x on outcome-driven formats.'
          },
          {
            title: 'Consistency beats spikes',
            insight: 'A steady cadence outperformed occasional viral pushes.',
            evidence: '4-week test showed higher follower retention with 3x weekly cadence.'
          },
          {
            title: 'Visual templates reduce bottlenecks',
            insight: 'Prebuilt templates cut production time by more than half.',
            evidence: 'Design time per post dropped from 3 hours to 70 minutes.'
          }
        ]
      },
      {
        type: 'list',
        heading: 'Solution',
        items: [
          'Repositioned the brand voice and page structure for clarity.',
          'Built pillar-based content calendars with testing loops.',
          'Delivered a 60-day template library with guidance.'
        ]
      },
      {
        type: 'list',
        heading: 'Deliverables',
        items: [
          'Content playbook with pillar strategy and tone guidelines.',
          'Template library for LinkedIn and Instagram formats.',
          'Dashboard for tracking engagement and conversion metrics.'
        ]
      },
      {
        type: 'list',
        heading: 'Outcomes',
        items: [
          'Follower growth accelerated within the first 30 days.',
          'Content production time reduced by 50%+',
          'Inbound product demo requests increased after rollout.'
        ]
      }
    ]
  })
] as const satisfies readonly Project[];

export type ProjectNavLink = Readonly<{ rel: 'prev' | 'next'; project: Project }>;
export type ProjectNav = Readonly<{ prev: ProjectNavLink | null; next: ProjectNavLink | null }>;

const PROJECT_INDEX = Object.fromEntries(projects.map((project) => [project.slug, project] as const)) as ReadonlyRecord<
  ProjectSlug,
  Project
>;

const PROJECT_POSITION = Object.fromEntries(PROJECT_SLUGS.map((slug, index) => [slug, index] as const)) as ReadonlyRecord<
  ProjectSlug,
  number
>;

const getProjectAt = (index: number): Project | null => projects[index] ?? null;

export const projectCaseStudies = projects.map(({ slug, title, description, tags, metrics, featured }) => ({
  slug,
  title,
  description,
  tags,
  metrics,
  featured
})) satisfies readonly CaseStudy[];

export const getProjectBySlug = <S extends ProjectSlug>(slug: S): Project | null => PROJECT_INDEX[slug] ?? null;

export const getProjectNav = <S extends ProjectSlug>(slug: S): ProjectNav => {
  const index = PROJECT_POSITION[slug];
  const prevProject = getProjectAt(index - 1);
  const nextProject = getProjectAt(index + 1);

  return {
    prev: prevProject ? { rel: 'prev', project: prevProject } : null,
    next: nextProject ? { rel: 'next', project: nextProject } : null
  };
};
