'use client';

import {
  caseStudies,
  contactEmail,
  navLinks,
  processSteps,
  services,
  servicesIntro,
  socialLinks,
  testimonials
} from './data';
import { useNavBlur, useRevealOnScroll } from './hooks';
import {
  ContactSection,
  HeroSection,
  NavBar,
  ProcessSection,
  ServicesSection,
  SiteFooter,
  TestimonialsSection,
  WorkSection
} from './components';

export function LandingPage() {
  useRevealOnScroll();
  useNavBlur();

  return (
    <main className="relative">
      <NavBar links={navLinks} />
      <HeroSection />
      <ServicesSection services={services} intro={servicesIntro} />
      <WorkSection caseStudies={caseStudies} />
      <ProcessSection steps={processSteps} />
      <TestimonialsSection testimonials={testimonials} />
      <ContactSection email={contactEmail} />
      <SiteFooter links={navLinks} email={contactEmail} socialLinks={socialLinks} />
    </main>
  );
}
