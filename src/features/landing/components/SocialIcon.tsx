import type { SocialPlatform } from '../../../lib/types';

interface SocialIconProps {
  platform: SocialPlatform;
  className?: string;
}

export function SocialIcon({ platform, className = 'h-[18px] w-[18px]' }: SocialIconProps) {
  const shared = {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.7,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    className,
    'aria-hidden': true
  };

  if (platform === 'instagram') {
    return (
      <svg {...shared}>
        <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
        <circle cx="12" cy="12" r="4.2" />
        <circle cx="17" cy="7" r="0.6" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  if (platform === 'facebook') {
    return (
      <svg {...shared}>
        <path d="M14 21v-8h3l.5-3.5H14V7.2c0-1 .3-1.7 1.8-1.7H18V2.3C17.6 2.2 16.5 2 15.2 2 12.6 2 11 3.6 11 6.6v2.9H8V13h3v8h3z" />
      </svg>
    );
  }

  if (platform === 'tiktok') {
    return (
      <svg {...shared}>
        <path d="M15 3v11.5a3.5 3.5 0 1 1-3.5-3.5" />
        <path d="M15 3c.3 2.4 2 4.3 4.3 4.6" />
      </svg>
    );
  }

  return (
    <svg {...shared}>
      <path d="M7 17.5l-3.2.9.9-3.1A7.5 7.5 0 1 1 7 17.5z" />
      <path d="M8.7 8.6c.2-.4.5-.4.8-.4.2 0 .4 0 .6.5s.6 1.5.6 1.6c.1.1.1.3 0 .5-.1.2-.2.3-.3.4-.2.2-.3.3-.1.6.2.3.8 1.2 1.7 1.9 1.1.9 1.8 1.1 2.1 1.2.3.1.4 0 .6-.2s.7-.8.9-1c.2-.3.4-.2.6-.1s1.5.7 1.8.8c.2.1.4.2.4.3.1.2.1.9-.2 1.7s-1.6 1.4-2.3 1.4c-.6 0-1.4 0-4.4-1.8s-4.4-4.4-4.6-4.6c-.2-.3-1.2-1.5-1.2-2.9 0-1.4.7-2 1-2.3z" />
    </svg>
  );
}
