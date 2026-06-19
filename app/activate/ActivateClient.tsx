'use client';

import * as React from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Check, Copy, AlertCircle } from 'lucide-react';

import { LogoLockup } from '@/components/LogoLockup';
import { Button } from '@/components/ui/button';
import { CTAButton } from '@/components/CTAButton';
import { SITE_NAME, SUPPORT_EMAIL } from '@/lib/constants';

const COPIED_RESET_MS = 2000;

export function ActivateClient() {
  const params = useSearchParams();
  const licenseKey = params.get('license_key')?.trim() ?? '';
  const status = params.get('status')?.trim().toLowerCase() ?? '';
  const tierParam = params.get('tier')?.trim().toLowerCase() ?? '';
  const knownTier: 'solo' | 'agency' | '' =
    tierParam === 'solo' || tierParam === 'agency' ? tierParam : '';

  const hasRedirectMarker = !!(
    params.get('status') ||
    params.get('subscription_id') ||
    params.get('email')
  );
  const isSuccess = !!licenseKey && (status === 'active' || status === '');

  const [copied, setCopied] = React.useState(false);
  const inputRef = React.useRef<HTMLInputElement | null>(null);

  React.useEffect(() => {
    if (!copied) return;
    const t = window.setTimeout(() => setCopied(false), COPIED_RESET_MS);
    return () => window.clearTimeout(t);
  }, [copied]);

  async function copyKey() {
    if (!licenseKey) return;
    try {
      await navigator.clipboard.writeText(licenseKey);
      setCopied(true);
    } catch {
      // Clipboard API may be unavailable (e.g. older browsers, denied permission).
      // Fall back to selecting the input so the user can copy with the keyboard.
      const input = inputRef.current;
      if (input) {
        input.focus();
        input.select();
      }
    }
  }

  return (
    <div className="hero-pattern flex min-h-screen flex-col">
      <header className="w-full">
        <div className="mx-auto flex max-w-6xl items-center px-4 py-4 md:px-6">
          <Link href="/" aria-label={`${SITE_NAME} home`}>
            <LogoLockup size="md" priority />
          </Link>
        </div>
      </header>
      <main
        id="main-content"
        className="flex flex-1 items-center justify-center px-4 pb-12 md:pb-16"
      >
        <div className="w-full max-w-xl">
          {isSuccess ? (
            <ActiveLicensePanel
              licenseKey={licenseKey}
              copied={copied}
              onCopy={copyKey}
              inputRef={inputRef}
            />
          ) : hasRedirectMarker ? (
            <PaymentIncompletePanel knownTier={knownTier} />
          ) : (
            <MissingLicensePanel />
          )}
        </div>
      </main>
    </div>
  );
}

interface ActiveLicensePanelProps {
  licenseKey: string;
  copied: boolean;
  onCopy: () => void;
  inputRef: React.RefObject<HTMLInputElement | null>;
}

function ActiveLicensePanel({
  licenseKey,
  copied,
  onCopy,
  inputRef,
}: ActiveLicensePanelProps) {
  return (
    <section
      className="mt-8 rounded-[var(--radius-cta)] bg-white p-8 ring-1 ring-black/[0.08]"
      aria-labelledby="activate-heading"
    >
      <h1
        id="activate-heading"
        className="text-2xl font-semibold tracking-tight text-[var(--color-slate-900)] md:text-3xl"
      >
        Your {SITE_NAME} license is ready
      </h1>
      <p className="mt-2 text-sm text-[var(--color-slate-500)]">
        Copy your license key and paste it into the {SITE_NAME} extension to activate.
      </p>

      <div className="mt-6">
        <label
          htmlFor="license-key"
          className="block text-xs font-semibold uppercase tracking-wide text-[var(--color-slate-400)]"
        >
          License key
        </label>
        <div className="mt-2 flex flex-col gap-2 sm:flex-row">
          <input
            ref={inputRef}
            id="license-key"
            type="text"
            readOnly
            value={licenseKey}
            onFocus={(e) => e.currentTarget.select()}
            spellCheck={false}
            autoCorrect="off"
            autoCapitalize="off"
            className="flex-1 rounded-[var(--radius-btn)] border border-black/10 bg-slate-50 px-3 py-3 font-mono text-sm text-[var(--color-slate-900)] focus:outline-none focus:ring-2 focus:ring-[var(--color-indigo)]"
            aria-describedby="license-key-help"
          />
          <Button
            type="button"
            onClick={onCopy}
            className="rounded-[var(--radius-cta)] sm:w-auto"
          >
            {copied ? (
              <span className="inline-flex items-center gap-2">
                <Check className="h-4 w-4" aria-hidden="true" />
                Copied
              </span>
            ) : (
              <span className="inline-flex items-center gap-2">
                <Copy className="h-4 w-4" aria-hidden="true" />
                Copy
              </span>
            )}
          </Button>
        </div>
        <p
          id="license-key-help"
          className="mt-2 text-xs text-[var(--color-slate-400)]"
        >
          Tap the input to select the key, or use Copy.
        </p>
      </div>

      <ol className="mt-8 space-y-4 text-sm text-[var(--color-slate-500)]">
        <li className="flex gap-3">
          <span className="inline-flex h-6 w-6 flex-none items-center justify-center rounded-full bg-[var(--color-indigo)] text-xs font-semibold text-white">
            1
          </span>
          <span>
            Open the {SITE_NAME} extension by clicking its icon in your Chrome toolbar.
          </span>
        </li>
        <li className="flex gap-3">
          <span className="inline-flex h-6 w-6 flex-none items-center justify-center rounded-full bg-[var(--color-indigo)] text-xs font-semibold text-white">
            2
          </span>
          <span>
            Click <strong>Activate license</strong> in the popup.
          </span>
        </li>
        <li className="flex gap-3">
          <span className="inline-flex h-6 w-6 flex-none items-center justify-center rounded-full bg-[var(--color-indigo)] text-xs font-semibold text-white">
            3
          </span>
          <span>
            Paste your license key and confirm. You&rsquo;re ready to audit.
          </span>
        </li>
      </ol>

      <p className="mt-8 text-xs text-[var(--color-slate-400)]">
        Trouble activating? Email{' '}
        <a
          href={`mailto:${SUPPORT_EMAIL}`}
          className="text-[var(--color-indigo)] underline underline-offset-2 hover:text-[var(--color-indigo-hover)]"
        >
          {SUPPORT_EMAIL}
        </a>{' '}
        and we&rsquo;ll get you sorted.
      </p>
    </section>
  );
}

function MissingLicensePanel() {
  return (
    <section
      className="mt-8 rounded-[var(--radius-cta)] bg-white p-8 text-center ring-1 ring-black/[0.08]"
      aria-labelledby="activate-missing-heading"
    >
      <h1
        id="activate-missing-heading"
        className="text-2xl font-semibold tracking-tight text-[var(--color-slate-900)] md:text-3xl"
      >
        No license key in this URL
      </h1>
      <p className="mt-2 text-sm text-[var(--color-slate-500)]">
        You&rsquo;ll land here automatically after completing checkout. If you reached this
        page directly, head back and pick a tier.
      </p>
      <div className="mt-6 flex justify-center">
        <CTAButton href="/pricing" external={false} size="md">
          See pricing
        </CTAButton>
      </div>
      <p className="mt-6 text-xs text-[var(--color-slate-400)]">
        Already subscribed and can&rsquo;t find your key? Email{' '}
        <a
          href={`mailto:${SUPPORT_EMAIL}`}
          className="text-[var(--color-indigo)] underline underline-offset-2 hover:text-[var(--color-indigo-hover)]"
        >
          {SUPPORT_EMAIL}
        </a>
        .
      </p>
    </section>
  );
}

interface PaymentIncompletePanelProps {
  knownTier: '' | 'solo' | 'agency';
}

function PaymentIncompletePanel({ knownTier }: PaymentIncompletePanelProps) {
  const heading =
    knownTier === 'solo'
      ? 'Your Solo payment didn’t go through.'
      : knownTier === 'agency'
        ? 'Your Agency payment didn’t go through.'
        : 'Your payment didn’t go through.';
  const retryHref =
    knownTier === 'solo'
      ? '/pricing#tier-solo'
      : knownTier === 'agency'
        ? '/pricing#tier-agency'
        : '/pricing';
  const retryLabel =
    knownTier === 'solo'
      ? 'Try Solo again'
      : knownTier === 'agency'
        ? 'Try Agency again'
        : 'Try again';

  return (
    <section
      className="mt-8 rounded-[var(--radius-cta)] bg-white p-8 ring-1 ring-black/[0.08]"
      aria-labelledby="activate-incomplete-heading"
    >
      <h1
        id="activate-incomplete-heading"
        className="text-2xl font-semibold tracking-tight text-[var(--color-slate-900)] md:text-3xl"
      >
        {heading}
      </h1>
      <p className="mt-3 inline-flex items-start gap-2 text-sm text-[var(--color-slate-500)]">
        <AlertCircle
          className="mt-0.5 h-4 w-4 flex-none text-[var(--color-indigo)]"
          aria-hidden="true"
        />
        <span>
          This sometimes happens &mdash; a card declines, the tab closes, the bank flags
          the charge. No subscription was created.
        </span>
      </p>
      <p className="mt-2 text-sm text-[var(--color-slate-500)]">
        You can try again now, or your card issuer may auto-retry shortly.
      </p>

      <div className="mt-6">
        <CTAButton href={retryHref} external={false} size="md">
          {retryLabel}
        </CTAButton>
      </div>

      <p className="mt-8 text-xs text-[var(--color-slate-400)]">
        Need a hand? Email{' '}
        <a
          href={`mailto:${SUPPORT_EMAIL}`}
          className="text-[var(--color-indigo)] underline underline-offset-2 hover:text-[var(--color-indigo-hover)]"
        >
          {SUPPORT_EMAIL}
        </a>
        .
      </p>
    </section>
  );
}
