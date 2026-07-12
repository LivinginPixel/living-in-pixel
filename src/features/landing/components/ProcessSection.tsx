import Image from 'next/image';
import type { ProcessStep } from '../../../lib/types';

interface ProcessSectionProps {
  steps: ProcessStep[];
}

export function ProcessSection({ steps }: ProcessSectionProps) {
  return (
    <section id="process" className="mx-auto max-w-[1180px] px-6 py-24 lg:px-16 lg:py-28">
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <div className="reveal mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-lipBlue before:block before:h-px before:w-6 before:bg-lipBlue before:content-['']">
            How we work
          </div>
          <h2 className="reveal max-w-[14ch] font-display text-[clamp(30px,4vw,50px)] font-semibold leading-[1.08] tracking-[-0.02em] text-ink">
            No black boxes. <span className="text-muted">Just a clear process.</span>
          </h2>
          <p className="reveal mt-5 max-w-sm text-[15px] leading-relaxed text-muted">
            A senior team, a written plan, and visible progress every week, then a clean handover so
            it keeps running without us.
          </p>
          <div className="reveal relative mt-8 hidden aspect-[4/3] overflow-hidden rounded-3xl border border-border lg:block">
            <Image
              src="/site/process.jpg"
              alt="A team collaborating around a table of laptops"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`reveal group grid grid-cols-[48px_minmax(0,1fr)] gap-x-6 gap-y-2 border-b border-border py-8 ${
                index === 0 ? 'border-t' : ''
              }`}
            >
              <div className="font-display text-sm font-semibold tracking-[0.08em] text-faint transition-colors duration-300 group-hover:text-lipBlue">
                {step.id}
              </div>
              <div>
                <div className="font-display text-xl font-semibold tracking-[-0.01em] text-ink">{step.title}</div>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
