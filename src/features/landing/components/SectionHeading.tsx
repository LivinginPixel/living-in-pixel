import type { ReactNode } from 'react';

interface SectionHeadingProps {
  label: string;
  title: ReactNode;
  className?: string;
}

export function SectionHeading({ label, title, className }: SectionHeadingProps) {
  return (
    <div className={className}>
      <div className="reveal mb-4 text-[10px] font-bold uppercase tracking-[4px] text-lipBlue">{label}</div>
      <h2 className="reveal font-display text-4xl font-black leading-tight tracking-[-2px] text-white md:text-5xl">
        {title}
      </h2>
    </div>
  );
}
