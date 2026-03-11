'use client';

import { caseStudies, contactEmail, marqueeItems, navLinks, processSteps, services, testimonials } from './data';
import { useNavBlur, useRevealOnScroll } from './hooks';
import {
  ContactSection,
  HeroSection,
  MarqueeStrip,
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
      <MarqueeStrip items={marqueeItems} />
      <ServicesSection services={services} />
      <WorkSection caseStudies={caseStudies} />
      <ProcessSection steps={processSteps} />
      <TestimonialsSection testimonials={testimonials} />
      <ContactSection email={contactEmail} />
      <SiteFooter links={navLinks} email={contactEmail} />
    </main>
  );
}
