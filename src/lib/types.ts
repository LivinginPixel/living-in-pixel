export interface NavLink {
  href: string;
  label: string;
  cta?: boolean;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  outcome?: string;
}

export interface CaseMetric {
  value: string;
  suffix?: string;
  label: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  metrics?: readonly CaseMetric[];
  featured?: boolean;
  image?: string;
  imageAlt?: string;
  industry?: string;
}

export interface ProcessStep {
  id: string;
  title: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  initials: string;
  name: string;
  role: string;
}

export type SocialPlatform = 'instagram' | 'facebook' | 'tiktok' | 'whatsapp';

export interface SocialLink {
  platform: SocialPlatform;
  href: string;
  label: string;
}
