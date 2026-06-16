import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';

import { cn } from '@/lib/utils';
import { CHROME_STORE_URL } from '@/lib/constants';

type Variant = 'primary' | 'secondary';
type Size = 'md' | 'lg';

interface CTAButtonProps extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  href?: string;
  external?: boolean;
  variant?: Variant;
  size?: Size;
  chromeIcon?: boolean;
}

const baseClasses =
  'inline-flex items-center justify-center gap-2 font-medium rounded-[var(--radius-cta)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-indigo)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50';

const variantClasses: Record<Variant, string> = {
  primary: 'bg-[var(--color-indigo)] text-white hover:bg-[var(--color-indigo-hover)]',
  secondary:
    'border border-black/10 bg-white text-[var(--color-slate-900)] hover:bg-slate-50',
};

const sizeClasses: Record<Size, string> = {
  md: 'h-11 px-5 text-sm',
  lg: 'h-12 px-6 text-base',
};

export function CTAButton({
  href = CHROME_STORE_URL,
  external,
  variant = 'primary',
  size = 'md',
  chromeIcon = false,
  className,
  children,
  ...rest
}: CTAButtonProps) {
  const classes = cn(baseClasses, variantClasses[variant], sizeClasses[size], className);

  const content = (
    <>
      {chromeIcon && (
        <Image
          src="/chrome-logo.svg"
          width={18}
          height={18}
          alt=""
          aria-hidden="true"
          className="mr-1"
        />
      )}
      {children}
    </>
  );

  const isExternal = external ?? /^https?:\/\//.test(href);

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        {...rest}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...rest}>
      {content}
    </Link>
  );
}
