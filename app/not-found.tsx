import Link from 'next/link';

import { LogoLockup } from '@/components/LogoLockup';
import { CTAButton } from '@/components/CTAButton';
import { SITE_NAME } from '@/lib/constants';

export default function NotFound() {
  return (
    <main
      id="main-content"
      className="grid min-h-screen place-items-center px-4 text-center"
    >
      <div className="flex max-w-md flex-col items-center gap-6">
        <Link href="/" aria-label={`${SITE_NAME} home`}>
          <LogoLockup size="md" />
        </Link>
        <div>
          <h1 className="text-3xl font-semibold text-[var(--color-slate-900)]">Page not found</h1>
          <p className="mt-2 text-[var(--color-slate-500)]">
            The page you&rsquo;re looking for doesn&rsquo;t exist or has moved.
          </p>
        </div>
        <CTAButton href="/" external={false}>
          Back to home
        </CTAButton>
      </div>
    </main>
  );
}
