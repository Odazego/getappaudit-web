import type { Metadata } from 'next';

import { Hero } from '@/components/sections/Hero';
import { WhatItDoes } from '@/components/sections/WhatItDoes';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { PrivacyBlock } from '@/components/sections/PrivacyBlock';
import { Pricing } from '@/components/sections/Pricing';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { WaitlistForm } from '@/components/WaitlistForm';
import { Reveal } from '@/components/Reveal';
import { SITE_DESCRIPTION, SITE_NAME, SITE_TAGLINE } from '@/lib/constants';

export const metadata: Metadata = {
  title: `${SITE_NAME} — ${SITE_TAGLINE}`,
  description: SITE_DESCRIPTION,
  alternates: { canonical: '/' },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Reveal>
        <WhatItDoes />
      </Reveal>
      <Reveal>
        <HowItWorks />
      </Reveal>
      <Reveal>
        <PrivacyBlock />
      </Reveal>
      <Reveal>
        <Pricing />
      </Reveal>
      <Reveal>
        <section
          className="mx-auto max-w-3xl px-4 py-12 text-center md:px-6 md:py-16"
          aria-labelledby="feature-updates-heading"
        >
          <h2
            id="feature-updates-heading"
            className="text-2xl font-semibold tracking-tight text-[var(--color-slate-900)] md:text-3xl"
          >
            Stay in the <span className="text-[var(--color-indigo)]">loop</span>.
          </h2>
          <p className="mt-3 text-[var(--color-slate-500)]">
            Quick note when new checks ship or AppAudit learns new patterns. No
            marketing blasts.
          </p>
          <div className="mt-6 flex justify-center">
            <WaitlistForm />
          </div>
        </section>
      </Reveal>
      <Reveal>
        <FinalCTA />
      </Reveal>
    </>
  );
}
