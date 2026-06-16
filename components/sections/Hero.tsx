import { Sparkles } from 'lucide-react';

import { CTAButton } from '@/components/CTAButton';
import { SampleFindingCard } from '@/components/SampleFindingCard';

export function Hero() {
  return (
    <section className="hero-pattern flex min-h-[560px] flex-col justify-center md:min-h-[640px]">
      <div className="mx-auto max-w-6xl px-4 pb-16 pt-12 md:px-6 md:pb-24 md:pt-16">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <span className="gradient-border-pill mb-10 inline-flex items-center gap-2 rounded-full bg-[var(--color-indigo)]/10 px-3 py-1 text-xs font-medium text-[var(--color-indigo)] md:mb-12">
              <Sparkles className="h-3 w-3" aria-hidden="true" />
              Built for Bubble.io developers
            </span>
            <h1 className="text-4xl font-semibold tracking-tight text-[var(--color-slate-900)] md:text-5xl lg:text-6xl">
              Stop overpaying for{' '}
              <span className="text-[var(--color-indigo)]">Bubble</span>.
            </h1>
            <p className="mt-8 max-w-2xl text-base text-[var(--color-slate-500)] md:mt-10 md:text-lg">
              AppAudit finds the workflows, queries, and patterns running up your
              Workload Units — right in your browser.
            </p>
            <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row md:mt-12">
              <CTAButton size="lg" chromeIcon>
                Install for Chrome
              </CTAButton>
              <CTAButton href="#what-it-does" external={false} variant="secondary" size="lg">
                See what it does
              </CTAButton>
            </div>
          </div>

          <div className="w-full">
            <SampleFindingCard
              severity="HIGH"
              element="RepeatingGroup: teammembers"
              page="settings_team_members"
              pattern="Loads every record in the data type on each page render — no pagination, no user scope."
              fix='Add a user-scope constraint and a page-size limit, or paginate with "Load more" on demand.'
            />
          </div>
        </div>
      </div>
    </section>
  );
}
