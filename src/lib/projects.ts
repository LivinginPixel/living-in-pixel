import type { CaseMetric, CaseStudy } from "./types";

export const PROJECT_SLUGS = [
  "Elmak-Construction",
  "Aquazaine-Motors",
  "forge-athletic",
  "ember-kitchen",
] as const;

export type ProjectSlug = (typeof PROJECT_SLUGS)[number];

export type NonEmptyArray<T> = readonly [T, ...T[]];

type ReadonlyRecord<K extends PropertyKey, V> = Readonly<Record<K, V>>;

export type ProjectImage = Readonly<{
  src: string;
  alt: string;
  caption?: string;
}>;

type ProjectMeta = Readonly<{
  client: string;
  industry: string;
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
  type: "text";
  heading: string;
  body: NonEmptyArray<string>;
}>;

type ProjectListSection = Readonly<{
  type: "list";
  heading: string;
  items: NonEmptyArray<string>;
  body?: readonly string[];
}>;

type ProjectResearchSection = Readonly<{
  type: "research";
  heading: string;
  findings: NonEmptyArray<ResearchFinding>;
}>;

type ProjectQuoteSection = Readonly<{
  type: "quote";
  quote: string;
  attribution: string;
  role: string;
}>;

type ProjectGallerySection = Readonly<{
  type: "gallery";
  heading: string;
  images: NonEmptyArray<ProjectImage>;
}>;

type ProjectSection =
  | ProjectTextSection
  | ProjectListSection
  | ProjectResearchSection
  | ProjectQuoteSection
  | ProjectGallerySection;

type ProjectBase = Readonly<
  CaseStudy &
    ProjectMeta & {
      slug: ProjectSlug;
      summary: string;
      hero: ProjectImage;
      /** true when the imagery is a placeholder for the client's own proof assets */
      sampleImages?: boolean;
      outcomes: NonEmptyArray<string>;
    }
>;

export type Project = Readonly<
  ProjectBase & { sections: NonEmptyArray<ProjectSection> }
>;

const createProject = <S extends ProjectSlug>(
  project: Readonly<ProjectBase & { slug: S }> & {
    sections: NonEmptyArray<ProjectSection>;
  },
): Project => project;

const METRICS = {
  "Elmak-Construction": [
    { value: "2.4", suffix: "x", label: "More qualified leads" },
    { value: "245", suffix: "%", label: "Listing-video inquiries" },
    { value: "14", suffix: "d", label: "To a full content system" },
  ],
  "Aquazaine-Motors": [
    { value: "56", suffix: "%", label: "Lower cost per lead" },
    { value: "23", suffix: "%", label: "More test drives booked" },
    { value: "8.7", suffix: "%", label: "Paid social CTR" },
  ],
  "forge-athletic": [
    { value: "2.4", suffix: "x", label: "Trial bookings / month" },
    { value: "38", suffix: "%", label: "New members from Reels" },
    { value: "120", suffix: "k", label: "Monthly local reach" },
  ],
  "ember-kitchen": [
    { value: "41", suffix: "%", label: "More online reservations" },
    { value: "280", suffix: "%", label: "Foot-traffic lift" },
    { value: "6.9", suffix: "%", label: "Carousel engagement" },
  ],
} as const satisfies ReadonlyRecord<ProjectSlug, NonEmptyArray<CaseMetric>>;

export const projects = [
  createProject({
    slug: "Elmak-Construction",
    title: "Elmak Construction: Social Media, Built From Scratch",
    summary:
      "We designed and launched a complete social media operation for an independent real estate brokerage: page architecture, content pillars, listing formats, and a template library the agents actually use.",
    description:
      "A dormant Instagram and Facebook presence turned into a structured lead engine for a real estate brokerage: brand system, listing content formats, and a 2weeks publishing library",
    tags: ["Real Estate", "Social Media", "Lead Gen"],
    industry: "Real Estate Brokerage",
    featured: true,
    sampleImages: true,
    hero: {
      src: "/case-studies/realestate-hero.jpg",
      alt: "Model house and keys on a table representing a real estate closing",
    },
    metrics: METRICS["Elmak-Construction"],
    client: "Elmak Construction",
    location: "Accra, GH",
    timeline: "2 Weeks",
    services: [
      "Social media architecture",
      "Content strategy",
      "Branded template systems",
      "Paid social setup",
    ],
    tech: ["Instagram", "Facebook", "Meta Ads Manager", "Canva"],
    outcomes: [
      "Went from ad-hoc posting to a documented, repeatable publishing system agents run themselves.",
      "Listing walkthrough videos became the highest-performing format and the top source of DM enquiries.",
      "Built a qualified-lead pipeline from social that the team can measure week over week.",
    ],
    sections: [
      {
        type: "text",
        heading: "The brief",
        body: [
          "Elmak Construction had one agent, and almost no social presence to show for it. Their Facebook had no followers, posts went up whenever someone remembered, and there was no way to tell whether any of it produced business. Referrals were carrying the brokerage, but referrals don't scale, and the team knew buyers now start their search on a phone.",
          "They didn't need someone to 'run their Facebook.' They needed a system: a clear brand, formats that showed listings well, and a workflow simple enough that busy agents would keep it going after we left.",
        ],
      },
      {
        type: "list",
        heading: "What we set out to do",
        items: [
          "Rebuild the page structure, bio, highlights, and visual identity into something that reads as a professional brokerage.",
          "Define content pillars that map to how buyers and sellers actually make decisions.",
          "Make listing video the centre of the strategy. It is the format that moves real estate.",
          "Hand over a template library and calendar the agents can run without us.",
        ],
      },
      {
        type: "research",
        heading: "What the research told us",
        findings: [
          {
            title: "Video is the whole game",
            insight:
              "For real estate, moving footage of the property does the persuading. We built the content plan around walkthrough Reels and short listing tours instead of static photos.",
            evidence:
              "Listings marketed with video generate roughly 203% more enquiries than those without.",
          },
          {
            title: "Social is where the good leads are",
            insight:
              "Buyers who engage with listing content are further along than cold portal traffic. We optimised for saves, shares, and DMs, not vanity follower counts.",
            evidence:
              "46% of realtors report social media as their single best source of high-quality leads.",
          },
          {
            title: "Faces beat facades",
            insight:
              "Posts featuring the agents (walkthroughs to camera, neighbourhood guides, client handovers) consistently out-reached polished property-only shots.",
            evidence:
              "Real estate content on Instagram averages ~3.7% engagement, above most industries, and rises further with people on screen.",
          },
        ],
      },
      {
        type: "list",
        heading: "The system we built",
        body: [
          "Everything was designed so a non-designer could produce an on-brand post in minutes.",
        ],
        items: [
          "A five-pillar content plan: new listings, walkthrough tours, neighbourhood guides, client wins, and market updates.",
          'A branded template kit, listing carousels, "Just Listed / Just Sold" frames, price-drop cards, and Reel cover templates in Canva.',
          "A repeatable listing-video formula: shot list, on-camera script, captions, and a hook framework for the first three seconds.",
          "A 14-day content calendar in Notion with a weekly cadence the whole team can follow.",
          "A Meta Ads Manager setup to boost the best-performing listing videos to local buyer audiences.",
        ],
      },
      {
        type: "gallery",
        heading: "Inside the work",
        images: [
          {
            src: "/case-studies/realestate-1.jpg",
            alt: "A modern home glowing warmly at dusk",
            caption: "Listing content built around walkthrough video.",
          },
          {
            src: "/case-studies/realestate-2.jpg",
            alt: "An architect-designed home lit up at twilight",
            caption: "Hero shots that make every listing look premium.",
          },
          {
            src: "/case-studies/realestate-3.jpg",
            alt: "A contemporary home with a pool and patio",
            caption:
              "Lifestyle and neighbourhood guides that build local authority.",
          },
        ],
      },
      {
        type: "list",
        heading: "The 90-day rollout",
        items: [
          "Weeks 1-2: brand refresh, page overhaul, pillar strategy, and template design.",
          "Weeks 3-6: first content sprint, filming days on active listings, and publishing cadence live.",
          "Weeks 7-10: paid amplification on the top listing videos and lead-capture in DMs.",
          "Weeks 11-13: handover with training sessions, the calendar, and a simple weekly metrics review.",
        ],
      },
      {
        type: "quote",
        quote:
          "We stopped guessing. There's a plan for every week, the listing videos actually bring in buyers, and my agents finally know what to post without asking me.",
        attribution: "Principal Broker",
        role: "Elmak Construction",
      },
    ],
  }),
  createProject({
    slug: "Aquazaine-Motors",
    title: "Aquazaine Motors: Turning Ad Spend Into Test Drives",
    summary:
      "A used-car dealership was buying traffic that never showed up. We rebuilt their lead engine end to end: offer, landing pages, paid social and search, and follow-up, so budget turned into people on the lot.",
    description:
      "Rebuilt a car dealership’s digital lead engine: sharper offers, faster landing pages, Meta and Google campaigns, and a lead follow-up flow that cut cost per lead and filled the test-drive calendar.",
    tags: ["Automotive", "Lead Gen", "Paid Media"],
    industry: "Automotive Retail",
    sampleImages: true,
    hero: {
      src: "/case-studies/cardealer-hero.jpg",
      alt: "Blue sports coupe photographed at sunset",
    },
    metrics: METRICS["Aquazaine-Motors"],
    client: "Aquazaine Motors",
    location: "Accra, GH",
    timeline: "4 months",
    services: [
      "Lead-gen strategy",
      "Paid social & search",
      "Landing pages",
      "CRM & follow-up automation",
    ],
    tech: [
      "Meta Ads Manager",
      "Google Ads",
      "Performance Max",
      "Next.js",
      "Twilio",
      "HubSpot",
    ],
    outcomes: [
      "Cut cost per lead by more than half by fixing the offer and the landing experience, not just the ad targeting.",
      "Increased booked test drives by a third through faster response times and structured follow-up.",
      "Gave the sales team a single, trustworthy source of leads instead of scattered form fills and DMs.",
    ],
    sections: [
      {
        type: "text",
        heading: "The brief",
        body: [
          "Aquazaine Motors was spending real money on Facebook and Google every month and had almost nothing to show for it. Leads trickled in, most were junk, and cost per lead kept climbing. The owner's instinct was that the ads were the problem, but the ads were only the visible part.",
          "When we traced a lead's full journey, the leaks were everywhere: a vague 'check out our inventory' offer, a slow landing page that didn't work on a phone, a contact form nobody answered for hours, and no system to follow up. We rebuilt the whole path from click to test drive.",
        ],
      },
      {
        type: "list",
        heading: "What we set out to do",
        items: [
          "Replace the generic offer with specific, high-intent hooks tied to real inventory and finance.",
          "Build fast, mobile-first landing pages designed to capture a qualified lead in seconds.",
          "Restructure paid social and search around the vehicles and audiences that actually convert.",
          "Automate instant follow-up so no lead goes cold while a salesperson is busy on the floor.",
        ],
      },
      {
        type: "research",
        heading: "What the research told us",
        findings: [
          {
            title: "Automotive intent is unusually high",
            insight:
              "People clicking car ads are often weeks from buying. The job is not to create demand, it is to capture it before a competitor does and route it to a human fast.",
            evidence:
              "Automotive leads paid digital ads with the highest conversion rate of any industry, around 14.7%, versus a ~7.5% average.",
          },
          {
            title: "Speed of response decides the sale",
            insight:
              "Internet leads close far below showroom leads, almost entirely because of slow, inconsistent follow-up. Instant, structured contact closes that gap.",
            evidence:
              "Showroom leads close at ~25% within 30 days; typical internet leads close at ~6%. The difference is largely follow-up speed.",
          },
          {
            title: "Social creative punches above its weight",
            insight:
              "Well-targeted vehicle creative on Meta dramatically outperforms generic ads, giving cheaper, higher-quality leads when paired with a strong offer.",
            evidence:
              "Automotive sales campaigns average ~8.8% click-through on Facebook, nearly 5x the cross-industry norm.",
          },
        ],
      },
      {
        type: "list",
        heading: "The system we built",
        body: [
          "A single, measurable pipeline from ad click to a name on the test-drive calendar.",
        ],
        items: [
          'Offer-led campaigns: specific vehicles, finance hooks, and trade-in prompts instead of "browse our inventory".',
          "Purpose-built landing pages in Next.js: sub-two-second loads, one clear action, built for thumbs.",
          "A Google Performance Max + Meta structure focused on the models and audiences that book drives.",
          "Twilio-powered instant SMS reply plus a HubSpot follow-up sequence so every lead hears back in minutes.",
          "Closed-loop tracking so the team can see which campaigns produce actual test drives, not just clicks.",
        ],
      },
      {
        type: "gallery",
        heading: "Inside the work",
        images: [
          {
            src: "/case-studies/cardealer-1.jpg",
            alt: "A sports car on the showroom floor",
            caption: "Inventory-led creative built around specific vehicles.",
          },
          {
            src: "/case-studies/cardealer-2.jpg",
            alt: "A car in motion on the open road",
            caption: "Offer hooks tied to finance and trade-in intent.",
          },
          {
            src: "/case-studies/cardealer-3.jpg",
            alt: "A muscle car shot head-on in an empty lot",
            caption: "Mobile-first landing pages engineered for speed.",
          },
        ],
      },
      {
        type: "list",
        heading: "The 4-month rollout",
        items: [
          "Month 1: full funnel audit, new offers, and landing-page build.",
          "Month 2: campaign restructure across Meta and Google, tracking and CRM wired up.",
          "Month 3: instant follow-up automation live; daily optimisation on cost per lead.",
          "Month 4: scale the winners, retire the losers, and hand over dashboards and playbooks.",
        ],
      },
      {
        type: "quote",
        quote:
          "Same budget, completely different result. We can finally see which ads put people on the lot, and the follow-up means we're not letting leads rot in an inbox anymore.",
        attribution: "General Manager",
        role: "Aquazaine Motors",
      },
    ],
  }),
  createProject({
    slug: "forge-athletic",
    title: "Forge Athletic: A Reels Engine for a Boutique Gym",
    summary:
      "A boutique strength studio with a loyal community but flat sign-ups. We built a short-form video system around real members and real classes, and turned local reach into trial bookings.",
    description:
      "A short-form content system for a boutique fitness studio: content pillars, a repeatable Reels formula filmed on the training floor, and a trial-booking funnel that converts local reach into members.",
    tags: ["Fitness", "Social Media", "Content System"],
    industry: "Boutique Fitness",
    hero: {
      src: "/case-studies/fitness-hero.jpg",
      alt: "Row of dumbbells on a rack in a modern gym with a member training",
    },
    metrics: METRICS["forge-athletic"],
    client: "Forge Athletic",
    location: "Denver, CO",
    timeline: "10 weeks",
    services: [
      "Short-form content strategy",
      "Reels production system",
      "Trial funnel",
      "Community growth",
    ],
    tech: ["Instagram", "TikTok", "CapCut", "Later", "Linktree"],
    outcomes: [
      "Built a filming-and-publishing rhythm the coaches sustain without an agency babysitting them.",
      "Reels became the studio’s number-one source of first-time trial bookings.",
      "Turned an engaged-but-small following into consistent local discovery and walk-ins.",
    ],
    sections: [
      {
        type: "text",
        heading: "The brief",
        body: [
          "Forge Athletic had the thing money can't buy: a genuine community. Classes were full of regulars, the coaching was excellent, and members loved the place. But growth had stalled. Their social was a mix of overproduced graphics and motivational quotes that looked like every other gym and reached almost no one new.",
          "The opportunity was obvious the moment we walked in: the energy on the training floor was the marketing. We just had to build a system to capture it consistently and put it in front of the right local people.",
        ],
      },
      {
        type: "list",
        heading: "What we set out to do",
        items: [
          "Shift the strategy from polished graphics to authentic, floor-level short-form video.",
          "Give the coaches a filming formula simple enough to run between classes.",
          "Reach people within a few miles of the studio who have never heard of it.",
          "Connect that reach to a frictionless trial-class booking flow.",
        ],
      },
      {
        type: "research",
        heading: "What the research told us",
        findings: [
          {
            title: "Reels are the local discovery engine",
            insight:
              "Short-form video is the one format that reliably reaches non-followers nearby. For a location-based business, that is exactly the audience that becomes members.",
            evidence:
              "Reels are the highest-reach format on Instagram, surfaced to non-followers by interest and location.",
          },
          {
            title: "Authenticity outperforms production",
            insight:
              "Real members, real classes, and genuinely funny moments beat glossy edits. We built for consistency and honesty over cinematic polish.",
            evidence:
              "Studios crediting social growth report that showing up regularly matters more than being perfect.",
          },
          {
            title: "Short-form drives real membership",
            insight:
              "For boutique studios, a large share of new members can trace their first contact to a single video. We treated each Reel as a top-of-funnel ad with a clear next step.",
            evidence:
              "At one studio, 200+ of 600+ members traced their first contact back to a short video.",
          },
        ],
      },
      {
        type: "list",
        heading: "The system we built",
        body: [
          "A content engine designed to run on ten minutes a day, not a production budget.",
        ],
        items: [
          "Three content pillars: class energy, coach expertise, and member transformations.",
          "A 30-second Reel formula: one class, three angles, energy-matched music, ending on a booking CTA frame.",
          "A shot-list card the coaches keep at the desk so filming never depends on inspiration.",
          "A trial funnel: bio link to a single-purpose booking page, with DM and comment CTAs baked into every post.",
          "A first-30-days measurement plan tracking bio-link clicks, DM volume, and trial bookings.",
        ],
      },
      {
        type: "gallery",
        heading: "Inside the work",
        images: [
          {
            src: "/case-studies/fitness-1.jpg",
            alt: "Member performing a workout in a gym",
            caption: "Class energy captured as native short-form video.",
          },
          {
            src: "/case-studies/fitness-2.jpg",
            alt: "Weights and equipment on a gym floor",
            caption: "A repeatable filming formula the coaches run themselves.",
          },
          {
            src: "/case-studies/fitness-3.jpg",
            alt: "Athlete lifting weights in a training session",
            caption: "Every post ends on a trial-booking call to action.",
          },
        ],
      },
      {
        type: "list",
        heading: "The 10-week rollout",
        items: [
          "Weeks 1-2: strategy reset, pillar definition, and the Reel formula.",
          "Weeks 3-5: filming systems on the floor and first publishing sprint.",
          "Weeks 6-8: iterate on hooks and CTAs against the booking numbers.",
          "Weeks 9-10: hand over the shot-list system, calendar, and metrics dashboard.",
        ],
      },
      {
        type: "quote",
        quote:
          "It finally feels like us. The videos are real classes with real members, and new people are walking in saying they saw us on Instagram. My coaches can actually keep it going.",
        attribution: "Studio Owner",
        role: "Forge Athletic",
      },
    ],
  }),
  createProject({
    slug: "ember-kitchen",
    title: "Ember Kitchen: From Empty Tables to a Waitlist",
    summary:
      "A neighbourhood restaurant with great food and quiet weeknights. We built a social and booking system around crave-worthy content and one-tap reservations, and filled the room.",
    description:
      "A social-to-reservation system for a neighbourhood restaurant: appetite-driven content, reservation links in every story, and a booking flow that turned discovery into filled tables.",
    tags: ["Hospitality", "Social Media", "Reservations"],
    industry: "Restaurant & Hospitality",
    hero: {
      src: "/case-studies/restaurant-hero.jpg",
      alt: "Warmly lit upscale restaurant dining room",
    },
    metrics: METRICS["ember-kitchen"],
    client: "Ember Kitchen",
    location: "Portland, OR",
    timeline: "12 weeks",
    services: [
      "Social media strategy",
      "Food content direction",
      "Reservation funnel",
      "Local discovery",
    ],
    tech: [
      "Instagram",
      "TikTok",
      "Google Business Profile",
      "OpenTable",
      "CapCut",
    ],
    outcomes: [
      "Made weeknight covers predictable instead of hoping for walk-ins.",
      "Turned social profiles into a direct booking channel with reservation links everywhere.",
      "Built a content library and calendar the front-of-house team maintains between services.",
    ],
    sections: [
      {
        type: "text",
        heading: "The brief",
        body: [
          "Ember Kitchen served some of the best food in the neighbourhood to a half-empty dining room on weeknights. Weekends were fine; Tuesday through Thursday were painful. Their Instagram was a graveyard of dim phone photos of plates, and there was no way to go from 'that looks good' to 'table booked'.",
          "Restaurants live and die on appetite and convenience. The plan was to make the food look irresistible, put it in front of hungry locals, and remove every step between craving and reservation.",
        ],
      },
      {
        type: "list",
        heading: "What we set out to do",
        items: [
          "Direct genuinely appetising content: the dishes, the room, the people, the moments.",
          "Reach nearby diners and lift the restaurant’s local discovery footprint.",
          "Put a reservation link in front of every viewer, everywhere they encounter the brand.",
          "Give the team a content routine that fits around a live service.",
        ],
      },
      {
        type: "research",
        heading: "What the research told us",
        findings: [
          {
            title: "People, not just plates",
            insight:
              "The best-performing restaurant content shows people enjoying the room, not only overhead shots of food. We directed content around the experience, not just the dish.",
            evidence:
              "Photos featuring people perform ~44% better than food-only posts.",
          },
          {
            title: "Booking links convert cravings",
            insight:
              "A hungry viewer will book if the path is one tap. We put reservation links in stories, bio, and profile, and treated every post as a booking prompt.",
            evidence:
              "Restaurants using stories with reservation links see ~41% higher conversion to actual bookings.",
          },
          {
            title: "Carousels and short video win the feed",
            insight:
              "Multi-image carousels and Reels earn the most reach and engagement for food content, so we built the calendar around them.",
            evidence:
              "Instagram carousels earn the highest median engagement (~6.9%); Reels reach ~2.25x more people than single images.",
          },
        ],
      },
      {
        type: "list",
        heading: "The system we built",
        body: [
          "A content-to-reservation loop designed to fill the quiet nights first.",
        ],
        items: [
          "A dish-and-experience content plan: signature plates, behind-the-pass moments, and full-room energy.",
          "A carousel + Reels calendar weighted toward weekends and holidays, when food content performs best.",
          "Reservation links wired into every story, the bio, and the Google Business Profile.",
          "A local-discovery push: geotags, neighbourhood hashtags, and an optimised Google profile.",
          "A lightweight capture routine so front-of-house shoots usable content during real service.",
        ],
      },
      {
        type: "gallery",
        heading: "Inside the work",
        images: [
          {
            src: "/case-studies/restaurant-1.jpg",
            alt: "A warm, industrial-style restaurant dining room",
            caption: "The room and the experience, not just the food.",
          },
          {
            src: "/case-studies/restaurant-2.jpg",
            alt: "Guests filling a bright, open dining space",
            caption: "People and full-room energy in every post.",
          },
          {
            src: "/case-studies/restaurant-3.jpg",
            alt: "An overhead view of plated signature dishes",
            caption: "Appetite-first direction on the signature dishes.",
          },
        ],
      },
      {
        type: "list",
        heading: "The 12-week rollout",
        items: [
          "Weeks 1-3: brand and profile refresh, content direction, and reservation-link setup.",
          "Weeks 4-8: content sprints during live service and a consistent posting cadence.",
          "Weeks 9-11: double down on the formats and dishes driving bookings.",
          "Week 12: hand over the calendar, shot list, and a simple weekly review.",
        ],
      },
      {
        type: "quote",
        quote:
          "Weeknights used to be dead. Now people come in holding up their phone saying 'I saw this dish and booked a table.' That sentence pays our rent.",
        attribution: "Owner & Head Chef",
        role: "Ember Kitchen",
      },
    ],
  }),
] as const satisfies readonly Project[];

export type ProjectNavLink = Readonly<{
  rel: "prev" | "next";
  project: Project;
}>;
export type ProjectNav = Readonly<{
  prev: ProjectNavLink | null;
  next: ProjectNavLink | null;
}>;

const PROJECT_INDEX = Object.fromEntries(
  projects.map((project) => [project.slug, project] as const),
) as ReadonlyRecord<ProjectSlug, Project>;

const PROJECT_POSITION = Object.fromEntries(
  PROJECT_SLUGS.map((slug, index) => [slug, index] as const),
) as ReadonlyRecord<ProjectSlug, number>;

const getProjectAt = (index: number): Project | null => projects[index] ?? null;

export const projectCaseStudies = projects.map(
  ({ slug, title, description, tags, metrics, featured, industry, hero }) => ({
    slug,
    title,
    description,
    tags,
    metrics,
    featured,
    industry,
    image: hero.src,
    imageAlt: hero.alt,
  }),
) satisfies readonly CaseStudy[];

export const getProjectBySlug = <S extends ProjectSlug>(
  slug: S,
): Project | null => PROJECT_INDEX[slug] ?? null;

export const getProjectNav = <S extends ProjectSlug>(slug: S): ProjectNav => {
  const index = PROJECT_POSITION[slug];
  const prevProject = getProjectAt(index - 1);
  const nextProject = getProjectAt(index + 1);

  return {
    prev: prevProject ? { rel: "prev", project: prevProject } : null,
    next: nextProject ? { rel: "next", project: nextProject } : null,
  };
};
