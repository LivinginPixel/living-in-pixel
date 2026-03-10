export interface NavLink {
  href: string;
  label: string;
  cta?: boolean;
}

export interface Service {
  id: string;
  title: string;
  description: string;
}

export interface CaseMetric {
  value: string;
  suffix?: string;
  label: string;
}

export interface CaseStudy {
  title: string;
  description: string;
  tags: string[];
  metrics?: CaseMetric[];
  featured?: boolean;
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

interface socialMediaLink {
  href: string;
  label: string;
}
