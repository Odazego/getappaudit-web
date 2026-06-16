'use client';

import * as React from 'react';
import { CheckCircle2 } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';

// Public client-side key by design. Submissions land in the AppAudit Web3Forms
// inbox until a self-hosted endpoint replaces this.
const WEB3FORMS_ACCESS_KEY = 'a9cbc34b-88a9-4279-848a-bcef4ee064e6';
const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Status = 'idle' | 'submitting' | 'success' | 'error';

interface WaitlistFormProps {
  className?: string;
  ctaLabel?: string;
  inputId?: string;
  placeholder?: string;
}

export function WaitlistForm({
  className,
  ctaLabel = 'Notify me',
  inputId = 'feature-updates-email',
  placeholder = 'you@example.com',
}: WaitlistFormProps) {
  const [email, setEmail] = React.useState('');
  const [status, setStatus] = React.useState<Status>('idle');

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmed = email.trim();
    if (!EMAIL_RE.test(trimmed)) {
      setStatus('error');
      return;
    }

    setStatus('submitting');
    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          email: trimmed,
          subject: 'AppAudit feature updates signup',
          from_name: 'AppAudit Landing',
          botcheck: '',
        }),
      });

      const data = (await response.json().catch(() => null)) as { success?: boolean } | null;

      if (response.ok && data?.success === true) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div
        className={cn(
          'flex items-center gap-2 rounded-[var(--radius-cta)] bg-slate-50 px-4 py-3 text-sm text-[var(--color-slate-900)]',
          className
        )}
        role="status"
        aria-live="polite"
      >
        <CheckCircle2 className="h-5 w-5 text-[var(--color-indigo)]" aria-hidden="true" />
        Thanks &mdash; we&rsquo;ll be in touch.
      </div>
    );
  }

  const submitting = status === 'submitting';
  const errorId = `${inputId}-error`;

  return (
    <div className={cn('w-full max-w-md', className)}>
      <form onSubmit={handleSubmit} className="flex w-full flex-col gap-2 sm:flex-row" noValidate>
        <Label htmlFor={inputId} className="sr-only">
          Email address
        </Label>
        <Input
          id={inputId}
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder={placeholder}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status === 'error') setStatus('idle');
          }}
          disabled={submitting}
          aria-invalid={status === 'error' || undefined}
          aria-describedby={status === 'error' ? errorId : undefined}
          className="flex-1"
        />
        {/* Honeypot: bots fill this; real users leave it empty. */}
        <input
          type="text"
          name="botcheck"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="absolute left-[-9999px] h-0 w-0 opacity-0"
          defaultValue=""
        />
        <Button
          type="submit"
          disabled={submitting}
          className="rounded-[var(--radius-cta)] sm:w-auto"
        >
          {submitting ? 'Submitting…' : ctaLabel}
        </Button>
      </form>
      {status === 'error' && (
        <p
          id={errorId}
          role="alert"
          aria-live="polite"
          className="mt-2 text-sm text-[var(--color-slate-900)]"
        >
          Something went wrong &mdash; please try again.
        </p>
      )}
    </div>
  );
}
