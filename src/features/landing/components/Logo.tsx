import Image from 'next/image';

interface LogoProps {
  className?: string;
  height?: number;
  priority?: boolean;
  width?: number;
  /** 'dark' renders dark ink for light backgrounds (default); 'light' renders the white wordmark */
  variant?: 'dark' | 'light';
}

export function Logo({
  className = '',
  height = 109,
  priority = false,
  width = 163,
  variant = 'dark'
}: LogoProps) {
  const src = variant === 'light' ? '/logo.svg' : '/logo-dark.svg';

  return (
    <Image
      src={src}
      alt="Living in Pixel"
      width={width}
      height={height}
      priority={priority}
      className={`object-contain ${className}`.trim()}
    />
  );
}
