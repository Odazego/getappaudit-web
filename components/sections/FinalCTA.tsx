import { CTAButton } from '@/components/CTAButton';

export function FinalCTA() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-14">
      <div className="hero-pattern mx-auto max-w-4xl rounded-[var(--radius-cta)] bg-[var(--color-indigo)]/5 px-8 py-12 text-center ring-1 ring-[var(--color-indigo)]/10 sm:px-16 sm:py-16">
        <h2 className="text-3xl font-semibold tracking-tight text-[var(--color-slate-900)] md:text-4xl">
          Audit your app, <span className="text-[var(--color-indigo)]">free</span>.
        </h2>
        <p className="mt-3 text-[var(--color-slate-500)]">
          Install AppAudit, run the free preview, see exactly what&rsquo;s eating your bill.
        </p>
        <div className="mt-8 flex justify-center">
          <CTAButton size="lg" chromeIcon>
            Install for Chrome
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
