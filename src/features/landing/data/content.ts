import type {
  CaseStudy,
  NavLink,
  ProcessStep,
  Service,
  Testimonial,
} from "../../../lib/types";

export const navLinks: NavLink[] = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#process", label: "Process" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Start a Project", cta: true },
];

export const marqueeItems: string[] = [
  "Software Engineering",
  "Social Media Architecture",
  "Brand Identity",
  "Posting Templates",
  "Startup Growth",
  "Digital Strategy",
];

export const services: Service[] = [
  {
    id: "01",
    title: "Software Engineering",
    description:
      "Clean, scalable code that solves real problems. From web apps to custom internal tools — we build things that work and grow with your business.",
  },
  {
    id: "02",
    title: "Social Media Architecture",
    description:
      "We don't post for you — we build the system. Page structure, content strategy, visual identity, and a library of branded templates your team actually uses.",
  },
  {
    id: "03",
    title: "Branded Templates",
    description:
      "A full suite of on-brand, plug-and-play templates — social posts, pitch decks, proposals — so every touchpoint looks like it came from a top-tier agency.",
  },
];

export const caseStudies: CaseStudy[] = [
  {
    featured: true,
    title: "PocketLedger — Personal Finance Dashboard",
    description:
      "Full-stack web application for a Lagos-based fintech startup. Built a real-time spending analytics dashboard, onboarding flow, and API integrations — from zero to beta in 8 weeks.",
    tags: ["Fintech", "Web App", "Dashboard"],
    metrics: [
      { value: "8", suffix: "wks", label: "Zero to launch" },
      { value: "3", suffix: "k+", label: "Beta users" },
      { value: "98", suffix: "%", label: "Uptime" },
    ],
  },
  {
    title: "Nexora — Brand System & Template Suite",
    description:
      "Complete brand identity and 40+ Canva & Figma templates for a B2B SaaS startup's social and sales collateral.",
    tags: ["Branding", "Templates"],
    metrics: [
      { value: "40", suffix: "+", label: "Templates built" },
      { value: "2", suffix: "x", label: "Engagement lift" },
    ],
  },
  {
    title: "Flowstate — LinkedIn & Instagram Architecture",
    description:
      "Rebuilt the entire social presence for a productivity startup — page setup, content pillars, and 60-day template library.",
    tags: ["Social Media", "Strategy"],
    metrics: [
      { value: "4", suffix: "x", label: "Follower growth" },
      { value: "60", label: "Templates delivered" },
    ],
  },
];

export const processSteps: ProcessStep[] = [
  {
    id: "01",
    title: "Discovery",
    description:
      "We learn your business, your goals, and the gap between where you are and where you need to be. No assumptions.",
  },
  {
    id: "02",
    title: "Strategy",
    description:
      "A clear plan - what we build, why, and in what order. You sign off before a single pixel is placed.",
  },
  {
    id: "03",
    title: "Build",
    description:
      "We move fast but carefully. Weekly check-ins, visible progress, no disappearing acts.",
  },
  {
    id: "04",
    title: "Launch & Handoff",
    description:
      "We do not just deliver and vanish. Full documentation, training where needed, and 30-day post-launch support.",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "LiP did not just build our app. They helped us shape the product itself, which made the delivery far stronger.",
    initials: "AO",
    name: "Adaeze O.",
    role: "Founder, PocketLedger",
  },
  {
    quote:
      "Our LinkedIn went from inactive to a reliable sales channel. The template system made consistent output realistic.",
    initials: "KM",
    name: "Kwame M.",
    role: "CEO, Flowstate",
  },
  {
    quote:
      "The brand system gave us immediate credibility with investors and customers. It changed how we were perceived.",
    initials: "TS",
    name: "Temi S.",
    role: "Co-founder, Nexora",
  },
];

export const contactEmail = "hello@livinginpixel.com";
