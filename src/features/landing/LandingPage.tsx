'use client';

import { caseStudies, contactEmail, marqueeItems, navLinks, processSteps, services, testimonials } from './data';
import { useCustomCursor, useNavBlur, useRevealOnScroll } from './hooks';
import {
  ContactSection,
  CustomCursor,
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
  useCustomCursor();
  useRevealOnScroll();
  useNavBlur();

  return (
    <main className="relative">
      <CustomCursor />
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
