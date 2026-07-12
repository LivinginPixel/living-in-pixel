import type { ReactNode } from 'react';

interface SectionHeadingProps {
  label: string;
  title: ReactNode;
  className?: string;
}

export function SectionHeading({ label, title, className }: SectionHeadingProps) {
  return (
    <div className={className}>
      <div className="reveal mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-lipBlue before:block before:h-px before:w-6 before:bg-lipBlue before:content-['']">
        {label}
      </div>
      <h2 className="reveal font-display text-[clamp(30px,4vw,50px)] font-semibold leading-[1.08] tracking-[-0.02em] text-ink">
        {title}
      </h2>
    </div>
  );
}
