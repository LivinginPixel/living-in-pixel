import { SectionHeading } from './SectionHeading';
import type { Testimonial } from '../../../lib/types';

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

export function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  return (
    <section id="about" className="mx-auto max-w-[1180px] px-6 pb-24 pt-8 lg:px-16 lg:pb-28">
      <SectionHeading
        label="In their words"
        title={
          <>
            The people we <span className="text-muted">work with.</span>
          </>
        }
      />

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {testimonials.map((testimonial) => (
          <article
            key={testimonial.role}
            className="reveal flex flex-col rounded-3xl border border-border bg-white p-8 transition-shadow duration-300 hover:shadow-[0_16px_40px_-24px_rgba(31,32,35,0.3)]"
          >
            <div className="mb-5 text-lipBlue" aria-hidden>
              ★★★★★
            </div>
            <p className="mb-6 flex-1 text-[17px] leading-relaxed text-ink/85">
              &ldquo;{testimonial.quote}&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-lipBlueSoft font-display text-sm font-semibold text-lipBlue">
                {testimonial.initials}
              </div>
              <div>
                <div className="text-sm font-semibold text-ink">{testimonial.name}</div>
                <div className="text-xs text-muted">{testimonial.role}</div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
