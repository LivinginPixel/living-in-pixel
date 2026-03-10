import type { ProcessStep } from '../../../lib/types';

interface ProcessSectionProps {
  steps: ProcessStep[];
}

export function ProcessSection({ steps }: ProcessSectionProps) {
  return (
    <section id="process" className="mx-auto max-w-[1200px] px-[60px] py-[120px] max-[900px]:px-6 max-[900px]:py-20">
      <div className="reveal mb-4 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[4px] text-lipBlue before:block before:h-px before:w-6 before:bg-lipBlue before:content-['']">
        How We Work
      </div>
      <h2 className="reveal font-display text-[clamp(32px,4vw,52px)] font-black leading-[1.05] tracking-[-2px] text-white">
        No fluff.
        <br />
        <em className="font-serif font-normal italic text-white/40">Just process.</em>
      </h2>

      <div className="mt-[60px] flex flex-col">
        {steps.map((step, index) => (
          <div
            key={step.id}
            className={`reveal group grid items-center gap-10 border-b border-white/[0.06] py-9 min-[901px]:grid-cols-[80px_1fr_1fr] max-[900px]:grid-cols-[50px_1fr] ${
              index === 0 ? 'border-t' : ''
            }`}
          >
            <div className="font-display text-[13px] font-light tracking-[2px] text-muted transition-colors duration-300 group-hover:text-lipBlue">
              {step.id}
            </div>
            <div className="font-display text-[20px] font-bold tracking-[-0.5px] text-white">{step.title}</div>
            <p className="text-[14px] leading-[1.7] text-muted max-[900px]:hidden">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
