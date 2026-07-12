import type {
  CaseStudy,
  NavLink,
  ProcessStep,
  Service,
  SocialLink,
  Testimonial,
} from "../../../lib/types";
import { projectCaseStudies } from "../../../lib/projects";

export const contactEmail = "hello@livinginpixel.com";

// TODO: replace with the real WhatsApp Business number before launch.
export const whatsappNumber = "10000000000";

export const socialLinks: SocialLink[] = [
  { platform: "instagram", href: "https://instagram.com/livinginpixel", label: "Instagram" },
  { platform: "facebook", href: "https://facebook.com/livinginpixel", label: "Facebook" },
  { platform: "tiktok", href: "https://tiktok.com/@livinginpixel", label: "TikTok" },
  { platform: "whatsapp", href: `https://wa.me/${whatsappNumber}`, label: "WhatsApp" },
];

export const navLinks: NavLink[] = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#process", label: "Process" },
  { href: "#about", label: "About" },
  { href: `mailto:${contactEmail}`, label: "Start a project", cta: true },
];

export const marqueeItems: string[] = [
  "Real Estate",
  "Automotive",
  "Fitness & Wellness",
  "Hospitality",
  "Social Media Systems",
  "Lead Generation",
  "Brand & Content",
];

export const servicesIntro =
  "We help you build your identity, establish an online presence, attract customers, streamline how you operate, and scale with technology. One partner for the whole journey, not five different vendors.";

export const services: Service[] = [
  {
    id: "01",
    title: "Build your brand",
    description:
      "We give your business a professional identity: logo, visual branding, and the marketing assets that make people take you seriously from the first impression.",
    outcome: "A brand people trust before they have even spoken to you.",
  },
  {
    id: "02",
    title: "Build your online presence",
    description:
      "We design and build the business website, landing pages, and digital experiences that turn that identity into credibility, so the people you attract believe what they see.",
    outcome: "A site that turns visitors into believers.",
  },
  {
    id: "03",
    title: "Capture and convert leads",
    description:
      "We design the systems that turn visitors into enquiries: optimised landing pages, lead forms, CRM integration, WhatsApp integration, and sales automation that follows up before anyone goes cold.",
    outcome: "Enquiries that land in your CRM, not just your inbox.",
  },
  {
    id: "04",
    title: "Build custom software",
    description:
      "When off-the-shelf tools stop fitting how you work, we design and build the custom web apps, mobile apps, internal systems, and customer portals that fit your business instead of the other way round.",
    outcome: "Tools built around how you actually work.",
  },
  {
    id: "05",
    title: "Automate and scale",
    description:
      "We connect your systems, automate the repetitive work, and bring in AI-powered processes where they save real time, so growing does not mean hiring your way out of every bottleneck.",
    outcome: "More output, without more headcount.",
  },
];

export const caseStudies: CaseStudy[] = projectCaseStudies;

export const processSteps: ProcessStep[] = [
  {
    id: "01",
    title: "Discovery",
    description:
      "We learn your business, your customers, and the gap between where you are and where you need to be. No assumptions, no templates pulled off a shelf.",
  },
  {
    id: "02",
    title: "Strategy",
    description:
      "A clear plan for what we build, why, and in what order, grounded in how your customers actually decide. You sign off before we start.",
  },
  {
    id: "03",
    title: "Build",
    description:
      "We move fast but carefully. Weekly check-ins, visible progress, and content or campaigns going live. Never a black box you wait on for months.",
  },
  {
    id: "04",
    title: "Handover",
    description:
      "We do not create a dependency. You get the system, the templates, the training, and a simple way to measure what is working, so it keeps running without us.",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "We stopped guessing. There is a plan for every week, the listing videos actually bring in buyers, and my agents finally know what to post.",
    initials: "CR",
    name: "Principal Broker",
    role: "Crestview Realty",
  },
  {
    quote:
      "Same budget, completely different result. We can finally see which ads put people on the lot, and the follow-up means we are not letting leads go cold.",
    initials: "AM",
    name: "General Manager",
    role: "Apex Motors",
  },
  {
    quote:
      "It finally feels like us. New people walk in saying they saw us on Instagram, and my coaches can actually keep the content going themselves.",
    initials: "FA",
    name: "Studio Owner",
    role: "Forge Athletic",
  },
];
