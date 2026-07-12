import Link from 'next/link';

export type IconDirection = 'back' | 'forward';
export type IconTone = 'brand' | 'neutral';
export type IconSize = 'sm' | 'md';
export type LinkRel = 'prev' | 'next';
export type LinkVariant = 'text' | 'pill';

export type DirectionalLinkProps<THref extends string = string> = Readonly<{
  href: THref;
  label: string;
  direction?: IconDirection;
  tone?: IconTone;
  size?: IconSize;
  variant?: LinkVariant;
  rel?: LinkRel;
  className?: string;
}>;

type IconProps = Readonly<{
  direction: IconDirection;
  tone: IconTone;
  size: IconSize;
}>;

const ICON_SIZE = {
  sm: 'h-8 w-8',
  md: 'h-9 w-9'
} as const;

const ICON_TONE = {
  brand: 'text-lipBlue',
  neutral: 'text-ink'
} as const;

const ICON_ROTATE = {
  back: '',
  forward: 'rotate-180'
} as const;

const ICON_SHIFT = {
  back: 'group-hover:-translate-x-1',
  forward: 'group-hover:translate-x-1'
} as const;

const ICON_SHIFT_INNER = {
  back: 'group-hover:-translate-x-0.5',
  forward: 'group-hover:translate-x-0.5'
} as const;

const VARIANT_CLASSES = {
  text: 'text-xs font-medium uppercase tracking-[0.12em] text-muted hover:text-ink',
  pill:
    'rounded-full border border-border bg-white px-6 py-3 text-sm font-medium text-ink hover:border-ink/25 hover:bg-surface'
} as const satisfies Readonly<Record<LinkVariant, string>>;

const DirectionalIcon = ({ direction, tone, size }: IconProps) => (
  <span
    aria-hidden
    className={`relative inline-flex items-center justify-center rounded-full ${ICON_SIZE[size]} text-ink/70 transition-transform duration-200 ${
      ICON_SHIFT[direction]
    }`}
  >
    <span className="absolute inset-0 rounded-full border border-border bg-surface transition-all duration-300 group-hover:border-lipBlue/40 group-hover:shadow-[0_0_28px_rgba(59,107,240,0.25)]" />
    <span className="absolute inset-0 rounded-full border border-lipBlue/30 opacity-0 group-hover:opacity-100 motion-reduce:animate-none animate-[backPulse_2.6s_ease-out_infinite]" />
    <svg
      className={`relative h-4 w-4 transition-transform duration-200 ${ICON_SHIFT_INNER[direction]} ${
        ICON_TONE[tone]
      } ${ICON_ROTATE[direction]}`}
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M11.5 4.5L6 10l5.5 5.5" />
      <path d="M6 10h8" />
    </svg>
  </span>
);

export const DirectionalLink = <THref extends string>({
  href,
  label,
  direction = 'back',
  tone = 'brand',
  size = 'md',
  variant = 'text',
  rel,
  className
}: DirectionalLinkProps<THref>) => {
  const content =
    direction === 'back' ? (
      <>
        <DirectionalIcon direction={direction} tone={tone} size={size} />
        <span>{label}</span>
      </>
    ) : (
      <>
        <span>{label}</span>
        <DirectionalIcon direction={direction} tone={tone} size={size} />
      </>
    );

  return (
    <Link
      href={href}
      rel={rel}
      className={`group inline-flex items-center gap-3 transition-colors ${VARIANT_CLASSES[variant]} ${className ?? ''}`}
    >
      {content}
    </Link>
  );
};
