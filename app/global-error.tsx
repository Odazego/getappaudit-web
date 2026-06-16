'use client';

import Link from 'next/link';

import { SITE_NAME } from '@/lib/constants';

import './globals.css';

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body>
        <main className="grid min-h-screen place-items-center px-4 text-center">
          <div className="max-w-md">
            <h1 className="text-2xl font-semibold tracking-tight text-[var(--color-slate-900)] md:text-3xl">
              {SITE_NAME} hit an unexpected error
            </h1>
            <p className="mt-3 text-sm text-[var(--color-slate-500)]">
              Something broke on this page. {SITE_NAME} runs entirely in your
              browser, so no data was sent anywhere.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <button
                type="button"
                onClick={reset}
                className="inline-flex items-center justify-center rounded-[var(--radius-cta)] bg-[var(--color-indigo)] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-indigo-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-indigo)] focus-visible:ring-offset-2"
              >
                Try again
              </button>
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-[var(--radius-cta)] px-5 py-2.5 text-sm font-semibold text-[var(--color-slate-900)] underline-offset-2 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-indigo)] focus-visible:ring-offset-2"
              >
                Back home
              </Link>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
