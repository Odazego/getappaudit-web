import Image from 'next/image';

import { cn } from '@/lib/utils';
import { SITE_NAME, SITE_TAGLINE } from '@/lib/constants';

type LockupSize = 'sm' | 'md' | 'lg';

const LOCKUP_ALT_WITH_TAGLINE = `${SITE_NAME} — ${SITE_TAGLINE}`;

// Width/height match each SVG's intrinsic aspect ratio (lockup 4:1, notagline ~4.17:1)
// so Next/Image doesn't fire the "modified one dimension" warning when CSS sizes the height.
const SIZE: Record<LockupSize, { className: string; width: number; height: number; src: string; alt: string }> = {
  sm: {
    className: 'h-8',
    width: 133,
    height: 32,
    src: '/logo-lockup-notagline.svg',
    alt: SITE_NAME,
  },
  md: {
    className: 'h-9',
    width: 144,
    height: 36,
    src: '/logo-lockup.svg',
    alt: LOCKUP_ALT_WITH_TAGLINE,
  },
  lg: {
    className: 'h-12',
    width: 192,
    height: 48,
    src: '/logo-lockup.svg',
    alt: LOCKUP_ALT_WITH_TAGLINE,
  },
};

interface LogoLockupProps {
  size?: LockupSize;
  className?: string;
  priority?: boolean;
}

export function LogoLockup({ size = 'md', className, priority }: LogoLockupProps) {
  const spec = SIZE[size];
  return (
    <Image
      src={spec.src}
      alt={spec.alt}
      width={spec.width}
      height={spec.height}
      priority={priority ?? size === 'lg'}
      draggable={false}
      className={cn('w-auto select-none', spec.className, className)}
    />
  );
}
