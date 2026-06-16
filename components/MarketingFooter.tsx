import Link from 'next/link';

import { LogoLockup } from '@/components/LogoLockup';
import { Separator } from '@/components/ui/separator';
import {
  CHROME_STORE_URL,
  NON_AFFILIATION,
  SITE_NAME,
  SUPPORT_EMAIL,
} from '@/lib/constants';

const PRODUCT_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/how-it-works', label: 'How it works' },
  { href: '/pricing', label: 'Pricing' },
  { href: CHROME_STORE_URL, label: 'Install Chrome extension', external: true },
];

const LEGAL_LINKS = [
  { href: '/privacy', label: 'Privacy' },
  { href: '/terms', label: 'Terms' },
  { href: `mailto:${SUPPORT_EMAIL}`, label: 'Contact', external: true },
];

function FooterLink({
  href,
  label,
  external,
}: {
  href: string;
  label: string;
  external?: boolean;
}) {
  const className =
    'inline-flex text-sm text-[var(--color-slate-500)] transition-colors hover:text-[var(--color-slate-900)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-indigo)] focus-visible:ring-offset-2 rounded-sm';

  if (external) {
    return (
      <a
        href={href}
        target={href.startsWith('mailto:') ? undefined : '_blank'}
        rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
        className={className}
      >
        {label}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {label}
    </Link>
  );
}

export function MarketingFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-slate-200">
      <div className="mx-auto max-w-6xl px-4 py-8 md:px-6">
        <div className="grid gap-6 md:grid-cols-[1fr_auto_auto] md:gap-12">
          <div>
            <Link href="/" aria-label={`${SITE_NAME} home`} className="inline-block">
              <LogoLockup size="sm" />
            </Link>
            <p className="mt-3 max-w-xs text-sm text-[var(--color-slate-500)]">
              Made with <span aria-hidden="true">❤️</span>
              <span className="sr-only">love</span> for the Bubble.io community.
            </p>
          </div>

          <nav aria-label="Product" className="flex flex-col gap-2">
            <h2 className="text-sm font-semibold text-[var(--color-slate-900)]">Product</h2>
            {PRODUCT_LINKS.map((l) => (
              <FooterLink key={l.label} {...l} />
            ))}
          </nav>

          <nav aria-label="Legal" className="flex flex-col gap-2">
            <h2 className="text-sm font-semibold text-[var(--color-slate-900)]">Legal</h2>
            {LEGAL_LINKS.map((l) => (
              <FooterLink key={l.label} {...l} />
            ))}
          </nav>
        </div>

        <Separator className="my-6" />

        <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
          <p className="text-xs text-[var(--color-slate-400)]">
            © {year} {SITE_NAME}
          </p>
          <p className="max-w-xl text-xs italic text-[var(--color-slate-400)] sm:text-right">
            {NON_AFFILIATION}
          </p>
        </div>
      </div>
    </footer>
  );
}
