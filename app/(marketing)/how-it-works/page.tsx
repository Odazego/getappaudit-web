import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Image from 'next/image';

import { CTAButton } from '@/components/CTAButton';
import { Reveal } from '@/components/Reveal';
import { StepVideo } from '@/components/StepVideo';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { SITE_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'How it works',
  description: `How ${SITE_NAME} runs a local-first Workload Unit audit on your Bubble app — Web Worker, deterministic rules engine, no backend.`,
  alternates: { canonical: '/how-it-works' },
};

function I({ children }: { children: ReactNode }) {
  return <span className="text-[var(--color-indigo)]">{children}</span>;
}

interface Step {
  title: ReactNode;
  body: string;
  screenshot: string;
  id?: string;
  cta?: boolean;
  compat?: boolean;
  video?: string;
  poster?: string;
  image?: string;
}

const STEPS: Step[] = [
  {
    id: 'install',
    title: (
      <>
        <I>Install</I> the extension from the Chrome Web Store
      </>
    ),
    body: `${SITE_NAME} installs as a standard Chrome extension. No account, no sign-in required to start.`,
    screenshot: 'Chrome Web Store listing with Install button',
    video: '/screenshots/step-1.mp4',
    poster: '/screenshots/step-1-poster.jpg',
    cta: true,
    compat: true,
  },
  {
    title: (
      <>
        Open your <I>Bubble.io editor</I>
      </>
    ),
    body: `Navigate to the app you want to audit. ${SITE_NAME} detects the Bubble editor automatically and injects a floating Audit button.`,
    screenshot: 'Bubble editor with a project open',
    video: '/screenshots/step-2.mp4',
    poster: '/screenshots/step-2-poster.jpg',
  },
  {
    title: (
      <>
        Click <I>“Audit my app”</I>
      </>
    ),
    body: `Launch from either the floating button injected into the editor or the ${SITE_NAME} popup in your Chrome toolbar.`,
    screenshot: 'Floating Audit button overlay on the Bubble editor',
    video: '/screenshots/step-3.mp4',
    poster: '/screenshots/step-3-poster.jpg',
  },
  {
    title: (
      <>
        Sanitize and analyze, <I>locally</I>
      </>
    ),
    body: `${SITE_NAME} walks your app structure in-page, redacts known secret patterns in your browser, and runs a deterministic TypeScript rules engine in a Web Worker. Nothing is uploaded.`,
    screenshot: 'Audit modal showing local scan progress',
    video: '/screenshots/step-4.mp4',
    poster: '/screenshots/step-4-poster.jpg',
  },
  {
    title: (
      <>
        See your <I>findings list</I>
      </>
    ),
    body: 'Each finding names the element, the page it lives on, a relative severity, and an actionable fix. Free preview shows the top 5 findings and a summary.',
    screenshot: 'Findings list with severity chips and fix snippets',
    video: '/screenshots/step-5.mp4',
    poster: '/screenshots/step-5-poster.jpg',
  },
  {
    title: (
      <>
        Subscribe and <I>re-audit anytime</I>
      </>
    ),
    body: 'Pick a tier inside the extension to unlock the full findings list and fixes. Re-audits stay free while your subscription is active.',
    screenshot: 'Tier picker inside the extension',
    video: '/screenshots/step-6.mp4',
    poster: '/screenshots/step-6-poster.jpg',
  },
];

const BROWSERS = [
  { name: 'Chrome', src: '/browsers/chrome.svg' },
  { name: 'Edge', src: '/browsers/edge.svg' },
  { name: 'Brave', src: '/browsers/brave.svg' },
  { name: 'Arc', src: '/browsers/arc.svg' },
];

function InlineBrowserCompat() {
  return (
    <div className="mt-6 rounded-[var(--radius-cta)] bg-slate-50 p-4 ring-1 ring-black/[0.06]">
      <p className="text-sm font-medium text-[var(--color-slate-900)]">
        Works on every Chromium browser
      </p>
      <p className="mt-1 text-xs text-[var(--color-slate-500)]">
        Install once from the Chrome Web Store — runs on Chrome, Edge, Brave, and Arc.
      </p>
      <ul className="mt-3 flex flex-wrap items-center gap-6">
        {BROWSERS.map((b) => (
          <li key={b.name} className="flex items-center gap-2">
            <Image src={b.src} alt={`${b.name} browser`} width={32} height={32} className="h-8 w-8" />
            <span className="sr-only">{b.name}</span>
          </li>
        ))}
      </ul>
      <p className="mt-3 text-xs text-[var(--color-slate-400)]">
        Firefox and Safari support coming later.
      </p>
    </div>
  );
}

const FAQ = [
  {
    q: 'What data leaves my browser?',
    a: `Nothing. ${SITE_NAME} runs the entire audit in your browser — sanitizing, rule evaluation, finding rendering. There is no server to send anything to.`,
  },
  {
    q: 'Does AppAudit work on private apps?',
    a: `Yes. ${SITE_NAME} runs inside your Bubble editor session, so it works on any app you have editor access to — public or private.`,
  },
  {
    q: 'Will running an audit consume Workload Units?',
    a: `No. ${SITE_NAME} reads the app structure that already lives in your editor — it does not invoke your workflows or run server-side code, so it does not consume Workload Units.`,
  },
  {
    q: 'Is there any AI in the audit?',
    a: `No. The rules engine is a deterministic TypeScript module that runs in a Web Worker. Same input gives you the same findings, every time. No model bills, no model drift.`,
  },
];

export default function HowItWorksPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 md:px-6 md:py-20">
      <header className="mx-auto max-w-3xl text-center">
        <h1 className="text-3xl font-semibold tracking-tight text-[var(--color-slate-900)] md:text-5xl">
          How <I>AppAudit</I> works.
        </h1>
        <p className="mt-3 text-[var(--color-slate-500)]">
          The audit runs in your browser. No backend, no queue, no upload of your app
          data.
        </p>
      </header>

      <ol className="mt-10 space-y-10">
        {STEPS.map((step, index) => (
          <li key={index} id={step.id} className="scroll-mt-20">
            <Reveal className="grid items-center gap-6 md:grid-cols-2 md:gap-10">
              <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-indigo)] text-sm font-semibold text-white">
                    {index + 1}
                  </span>
                </div>
                <h2 className="mt-3 text-xl font-semibold text-[var(--color-slate-900)] md:text-2xl">
                  {step.title}
                </h2>
                <p className="mt-2 text-[var(--color-slate-500)] leading-relaxed">{step.body}</p>
                {step.cta && (
                  <div className="mt-4">
                    <CTAButton size="md" chromeIcon>
                      Install for Chrome
                    </CTAButton>
                  </div>
                )}
                {step.compat && <InlineBrowserCompat />}
              </div>
              {step.video ? (
                <div
                  className={
                    'aspect-[3/2] w-full max-w-[600px] overflow-hidden rounded-[var(--radius-cta)] bg-slate-100 shadow-lg shadow-indigo-500/15 ring-1 ring-indigo-500/30 ' +
                    (index % 2 === 1 ? 'md:order-1' : '')
                  }
                >
                  <StepVideo
                    src={step.video}
                    poster={step.poster}
                    title={step.screenshot}
                  />
                </div>
              ) : step.image ? (
                <div
                  className={
                    'relative aspect-[3/2] w-full max-w-[600px] overflow-hidden rounded-[var(--radius-cta)] bg-slate-100 shadow-lg shadow-indigo-500/15 ring-1 ring-indigo-500/30 ' +
                    (index % 2 === 1 ? 'md:order-1' : '')
                  }
                >
                  <Image
                    src={step.image}
                    alt={`Screenshot: ${step.screenshot}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    priority={index === 0}
                  />
                </div>
              ) : (
                <div
                  className={
                    'aspect-[3/2] w-full max-w-[600px] grid place-items-center overflow-hidden rounded-[var(--radius-cta)] bg-slate-100 px-6 text-center text-sm text-[var(--color-slate-400)] shadow-lg shadow-indigo-500/15 ring-1 ring-indigo-500/30 ' +
                    (index % 2 === 1 ? 'md:order-1' : '')
                  }
                  role="img"
                  aria-label={`Screenshot placeholder: ${step.screenshot}`}
                  style={{ width: '100%', height: 'auto' }}
                >
                  [Screenshot: {step.screenshot}]
                </div>
              )}
            </Reveal>
          </li>
        ))}
      </ol>

      <Reveal className="mt-16">
        <section
          className="rounded-[var(--radius-cta)] bg-slate-50 p-8 md:p-10"
          aria-labelledby="security-heading"
        >
          <h2
            id="security-heading"
            className="text-2xl font-semibold tracking-tight text-[var(--color-slate-900)]"
          >
            Your app data never leaves your{' '}
            <span className="text-[var(--color-indigo)]">browser</span>.
          </h2>
          <p className="mt-3 text-[var(--color-slate-500)] leading-relaxed">
            {`${SITE_NAME} captures your Bubble app's in-memory structure, redacts known secret patterns (Stripe keys, JWTs, bearer tokens, AWS keys, GitHub PATs, Slack tokens, generic high-entropy strings) right in your browser, and runs the checks in a Web Worker. There is no backend to upload to, no AI provider in the loop, and no telemetry. The audit you see is computed on your machine.`}
          </p>
        </section>
      </Reveal>

      <Reveal className="mx-auto mt-12 max-w-3xl">
        <section aria-labelledby="how-faq-heading">
          <h2
            id="how-faq-heading"
            className="text-2xl font-semibold tracking-tight text-[var(--color-slate-900)] md:text-3xl"
          >
            Common <span className="text-[var(--color-indigo)]">technical questions</span>
          </h2>
          <Accordion type="single" collapsible className="mt-6 w-full">
            {FAQ.map((item, i) => (
              <AccordionItem key={item.q} value={`how-${i}`}>
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
