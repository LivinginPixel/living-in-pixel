import Image from 'next/image';

interface LogoProps {
  className?: string;
  height?: number;
  priority?: boolean;
  width?: number;
}

export function Logo({ className = '', height = 109, priority = false, width = 163 }: LogoProps) {
  return (
    <Image
      src="/logo.svg"
      alt="Living in Pixel"
      width={width}
      height={height}
      priority={priority}
      className={`object-contain ${className}`.trim()}
    />
  );
}
