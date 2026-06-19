import type { Metadata } from 'next';

import { Pricing } from '@/components/sections/Pricing';
import { WaitlistForm } from '@/components/WaitlistForm';
import { Reveal } from '@/components/Reveal';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { PRICING, SITE_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Pricing',
  description: `${SITE_NAME} pricing: Solo $${PRICING.solo.priceMonthly}/mo for individual developers, Agency $${PRICING.agency.priceMonthly}/mo for teams. Monthly subscription, cancel anytime, unlimited re-audits.`,
  alternates: { canonical: '/pricing' },
};

const FAQ = [
  {
    q: 'What is a Workload Unit?',
    a: 'A Workload Unit (WU) is the metering unit Bubble uses to bill server-side work — every workflow run, database query, and scheduled action consumes WUs. AppAudit surfaces the patterns in your app that drive up WU usage so you can cut them without breaking the app.',
  },
  {
    q: 'How does the free preview work?',
    a: `Install ${SITE_NAME} and run a free audit on any Bubble app you have editor access to. You see the top 5 findings and a summary without subscribing. To see the full findings list and fix details, pick a tier in the extension.`,
  },
  {
    q: 'What does "branded export" mean on the Agency tier?',
    a: `Agency subscribers can export a finished audit as a branded report (with your agency's name on it) to hand off to clients. Solo subscribers get the same in-app findings list and fixes, but exports stay unbranded.`,
  },
  {
    q: 'Can I cancel anytime?',
    a: 'Yes. Cancel at any time. Your subscription stays active until the end of the billing period, and your re-audits remain free until then.',
  },
  {
    q: 'Does AppAudit ever upload my app?',
    a: `Never. ${SITE_NAME} runs the entire audit in your browser. There is no backend to upload to. See the Privacy page for the full breakdown.`,
  },
  {
    q: 'Is this affiliated with Bubble?',
    a: 'No. AppAudit is an independent tool and is not affiliated with, endorsed by, or sponsored by Bubble Group, Inc.',
  },
];

export default function PricingPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-20">
      <header className="mx-auto max-w-2xl text-center">
        <h1 className="text-3xl font-semibold tracking-tight text-[var(--color-slate-900)] md:text-5xl">
          Pricing that follows the{' '}
          <span className="text-[var(--color-indigo)]">patterns</span>.
        </h1>
        <p className="mt-3 text-[var(--color-slate-500)]">
          Monthly subscription, cancel anytime. Re-audits are free for the life of your
          subscription.
        </p>
      </header>

      <Reveal>
        <Pricing id="pricing-cards" includeHeading={false} className="!py-10 md:!py-14" />
      </Reveal>

      <Reveal className="mx-auto mt-8 w-full max-w-md">
        <section
          className="rounded-[var(--radius-cta)] bg-slate-50 p-6 text-center"
          aria-labelledby="pricing-feature-updates"
        >
          <h2 id="pricing-feature-updates" className="text-base font-semibold text-[var(--color-slate-900)]">
            Stay in the loop.
          </h2>
          <p className="mt-2 text-sm text-[var(--color-slate-500)]">
            Quick note when new checks ship or {SITE_NAME} learns new patterns. No
            marketing blasts.
          </p>
          <div className="mt-4 flex justify-center">
            <WaitlistForm inputId="pricing-feature-updates-email" />
          </div>
        </section>
      </Reveal>

      <Reveal className="mx-auto mt-16 max-w-3xl">
        <section aria-labelledby="pricing-faq-heading">
          <h2
            id="pricing-faq-heading"
            className="text-2xl font-semibold tracking-tight text-[var(--color-slate-900)] md:text-3xl"
          >
            Frequently <span className="text-[var(--color-indigo)]">asked questions</span>
          </h2>
          <Accordion type="single" collapsible className="mt-6 w-full">
            {FAQ.map((item, i) => (
              <AccordionItem key={item.q} value={`pricing-${i}`}>
                <AccordionTrigger>{item.q}</AccordionTrigger>
                <AccordionContent>{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      </Reveal>
    </div>
  );
}
