'use client';

import * as React from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

import { LogoLockup } from '@/components/LogoLockup';
import { CTAButton } from '@/components/CTAButton';
import { cn } from '@/lib/utils';
import { SITE_NAME } from '@/lib/constants';

const LINKS = [
  { href: '/how-it-works', label: 'How it works' },
  { href: '/pricing', label: 'Pricing' },
];

export function MarketingNav() {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    function onResize() {
      if (window.innerWidth >= 768) setOpen(false);
    }
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  React.useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 4);
    }
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        // border-b is always present; only the color animates, so there's no
        // 1px layout shift when `scrolled` flips.
        'sticky top-0 z-40 w-full border-b transition-[background-color,backdrop-filter,box-shadow,border-color] duration-200',
        scrolled
          ? 'bg-white/80 backdrop-blur ring-1 ring-black/[0.08] border-transparent'
          : 'bg-transparent border-black/[0.08]'
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        <Link
          href="/"
          aria-label={`${SITE_NAME} home`}
          className="rounded-[var(--radius-btn)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-indigo)] focus-visible:ring-offset-2"
        >
          <LogoLockup size="sm" priority />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-6 md:flex">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[var(--color-slate-500)] transition-colors hover:text-[var(--color-slate-900)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-indigo)] focus-visible:ring-offset-2 rounded-sm"
            >
              {link.label}
            </Link>
          ))}
          <CTAButton size="md" chromeIcon>Install for Chrome</CTAButton>
        </nav>

        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-[var(--radius-btn)] text-[var(--color-slate-900)] hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-indigo)] focus-visible:ring-offset-2 md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        id="mobile-nav"
        className={cn(
          'md:hidden border-t border-black/[0.08] bg-white',
          open ? 'block' : 'hidden'
        )}
      >
        <nav aria-label="Primary mobile" className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-[var(--radius-btn)] px-2 py-2 text-base font-medium text-[var(--color-slate-900)] hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-indigo)] focus-visible:ring-offset-2"
            >
              {link.label}
            </Link>
          ))}
          <CTAButton size="md" chromeIcon className="mt-2 w-full">
            Install for Chrome
          </CTAButton>
        </nav>
      </div>
    </header>
  );
}
