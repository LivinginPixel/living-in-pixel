import { SectionHeading } from './SectionHeading';
import type { Testimonial } from '../../../lib/types';

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

export function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 pb-24 lg:px-16">
      <SectionHeading label="What Clients Say" title="The receipts." />

      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {testimonials.map((testimonial) => (
          <article key={testimonial.name} className="reveal rounded-2xl border border-white/10 bg-surface p-8">
            <div className="mb-5 text-lipBlue">★★★★★</div>
            <p className="mb-6 font-serif text-lg italic leading-7 text-white/75">
              &quot;{testimonial.quote}&quot;
            </p>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-lipBlue/20 bg-lipBlue/10 font-display text-sm font-black text-lipBlue">
                {testimonial.initials}
              </div>
              <div>
                <div className="text-sm font-bold text-white">{testimonial.name}</div>
                <div className="text-xs text-muted">{testimonial.role}</div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
