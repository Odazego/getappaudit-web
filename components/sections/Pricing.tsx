import { Check, X } from 'lucide-react';

import { CTAButton } from '@/components/CTAButton';
import { PRICING } from '@/lib/constants';

type TierFeature = { label: string; included: boolean };

type Tier = {
  key: 'solo' | 'agency';
  name: string;
  priceMonthly: number;
  tagline: string;
  features: TierFeature[];
  emphasized?: boolean;
};

const TIERS: Tier[] = [
  {
    key: 'solo',
    name: PRICING.solo.name,
    priceMonthly: PRICING.solo.priceMonthly,
    tagline: PRICING.solo.tagline,
    features: [
      { label: 'Full findings list', included: true },
      { label: 'Actionable fixes for every finding', included: true },
      { label: 'Unlimited re-audits', included: true },
      { label: `${PRICING.solo.devices} device`, included: true },
      { label: 'Branded export', included: PRICING.solo.brandedExport },
    ],
  },
  {
    key: 'agency',
    name: PRICING.agency.name,
    priceMonthly: PRICING.agency.priceMonthly,
    tagline: PRICING.agency.tagline,
    emphasized: true,
    features: [
      { label: 'Full findings list', included: true },
      { label: 'Actionable fixes for every finding', included: true },
      { label: 'Unlimited re-audits', included: true },
      { label: `${PRICING.agency.devices} devices`, included: true },
      { label: 'Branded export', included: PRICING.agency.brandedExport },
    ],
  },
];

interface PricingProps {
  id?: string;
  className?: string;
  includeHeading?: boolean;
}

export function Pricing({ id = 'pricing', className, includeHeading = true }: PricingProps) {
  return (
    <section
      id={id}
      className={['mx-auto max-w-6xl scroll-mt-20 px-4 py-12 md:px-6 md:py-20', className]
        .filter(Boolean)
        .join(' ')}
      aria-labelledby={`${id}-heading`}
    >
      {includeHeading && (
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id={`${id}-heading`}
            className="text-3xl font-semibold tracking-tight text-[var(--color-slate-900)] md:text-4xl"
          >
            Pick the tier that <span className="text-[var(--color-indigo)]">fits</span>.
          </h2>
          <p className="mt-3 text-[var(--color-slate-500)]">
            Monthly subscription. Cancel anytime. Re-audits stay free for the life of
            your subscription.
          </p>
        </div>
      )}

      <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
        {TIERS.map((tier) => (
          <article
            key={tier.key}
            aria-labelledby={`${id}-${tier.key}-name`}
            className={[
              'card-hover flex flex-col rounded-[var(--radius-cta)] bg-white p-8 ring-1',
              tier.emphasized
                ? 'ring-[var(--color-indigo)]/30 shadow-sm'
                : 'ring-black/[0.08]',
            ].join(' ')}
          >
            <header>
              <h3
                id={`${id}-${tier.key}-name`}
                className="text-lg font-semibold text-[var(--color-slate-900)]"
              >
                {tier.name}
              </h3>
              <p className="mt-1 text-sm text-[var(--color-slate-500)]">{tier.tagline}</p>
              <div className="mt-5 flex items-baseline gap-2">
                <span className="text-5xl font-bold text-[var(--color-indigo)]">
                  ${tier.priceMonthly}
                </span>
                <span className="text-sm text-[var(--color-slate-500)]">/ month</span>
              </div>
            </header>

            <ul className="mt-6 flex-1 space-y-3">
              {tier.features.map((feature) => (
                <li
                  key={feature.label}
                  className="flex items-start gap-3 text-sm"
                >
                  {feature.included ? (
                    <Check
                      className="mt-0.5 h-5 w-5 flex-none text-[var(--color-indigo)]"
                      aria-hidden="true"
                    />
                  ) : (
                    <X
                      className="mt-0.5 h-5 w-5 flex-none text-[var(--color-slate-400)]"
                      aria-hidden="true"
                    />
                  )}
                  <span
                    className={
                      feature.included
                        ? 'text-[var(--color-slate-900)]'
                        : 'text-[var(--color-slate-400)] line-through'
                    }
                  >
                    {feature.label}
                  </span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="mt-8 flex flex-col items-center gap-2">
        <CTAButton size="lg" chromeIcon>
          Install for Chrome
        </CTAButton>
        <p className="text-xs text-[var(--color-slate-400)]">
          Pick your tier in the extension after install.
        </p>
      </div>
    </section>
  );
}
