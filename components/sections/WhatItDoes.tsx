import { Activity, ScanLine, Wrench } from 'lucide-react';

import { SampleFindingCard, type Severity } from '@/components/SampleFindingCard';

const PILLARS = [
  {
    icon: ScanLine,
    title: 'Scans your app, locally',
    description:
      'AppAudit reads the in-memory structure of your Bubble app — pages, workflows, data types, custom states — right where it already lives. Nothing is exported, nothing is uploaded.',
  },
  {
    icon: Activity,
    title: 'Same checks every time',
    description:
      'A Web Worker runs a deterministic TypeScript rules engine over the sanitized structure. Same input, same findings. No AI, no model drift, no model bills.',
  },
  {
    icon: Wrench,
    title: 'Tells you what to fix, and where',
    description:
      'Every finding names the element, the page it lives on, a relative severity, and an actionable fix. You leave the audit knowing exactly what to change next.',
  },
];

interface SampleFinding {
  severity: Severity;
  element: string;
  page: string;
  pattern: string;
  fix: string;
}

const SAMPLE_FINDINGS: SampleFinding[] = [
  {
    severity: 'HIGH',
    element: 'Workflow: page is loaded',
    page: '/inbox',
    pattern:
      'A "Search for" runs in the Page is loaded workflow on every visit — every page render hits the database before the user has done anything.',
    fix: 'Defer the search behind an explicit user action (button click, tab open, visibility trigger), or gate it with a "Do when" condition that fires only when the data is about to be shown.',
  },
  {
    severity: 'CRITICAL',
    element: 'API connector: get_customer_status (in RepeatingGroup customers)',
    page: '/admin_customers',
    pattern:
      'An API connector call runs from inside a RepeatingGroup cell — one external request fires for every row rendered, every time the list re-displays.',
    fix: 'Hoist the call out of the cell. Fetch the data once at the page level (or in a backend workflow) and pass the per-row result into the cell from a pre-fetched list.',
  },
  {
    severity: 'MEDIUM',
    element: 'RepeatingGroup: dashboard_items',
    page: '/dashboard',
    pattern:
      'A repeating group loads a 200-row search on every page render, with no pagination and no constraint on the user.',
    fix: 'Bound the search to the current user and add a page-size constraint, or paginate with "Load more" on demand.',
  },
];

export function WhatItDoes() {
  return (
    <section
      id="what-it-does"
      className="mx-auto max-w-6xl scroll-mt-20 px-4 py-12 md:px-6 md:py-20"
      aria-labelledby="what-it-does-heading"
    >
      <div className="mx-auto max-w-2xl text-center">
        <h2
          id="what-it-does-heading"
          className="text-3xl font-semibold tracking-tight text-[var(--color-slate-900)] md:text-4xl"
        >
          See what&rsquo;s burning your{' '}
          <span className="text-[var(--color-indigo)]">WU budget</span>.
        </h2>
        <p className="mt-3 text-[var(--color-slate-500)]">
          A precise look at the specific workflows, queries, and patterns driving up
          your Bubble bill. Not a calculator — an inspector.
        </p>
      </div>

      <ul className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
        {PILLARS.map(({ icon: Icon, title, description }) => (
          <li
            key={title}
            className="card-hover rounded-[var(--radius-cta)] bg-white p-6 ring-1 ring-black/[0.08]"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-[var(--radius-btn)] bg-[var(--color-indigo)]/10 text-[var(--color-indigo)]">
              <Icon className="h-5 w-5" aria-hidden="true" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-[var(--color-slate-900)]">{title}</h3>
            <p className="mt-2 text-sm text-[var(--color-slate-500)] leading-relaxed">{description}</p>
          </li>
        ))}
      </ul>

      <div className="mx-auto mt-12 max-w-3xl">
        <p className="text-center text-xs font-semibold uppercase tracking-wide text-[var(--color-slate-400)]">
          Sample findings
        </p>
        <ul className="mt-4 space-y-4">
          {SAMPLE_FINDINGS.map((f) => (
            <li key={f.element}>
              <SampleFindingCard {...f} animateElement />
            </li>
          ))}
        </ul>
        <p className="mt-4 text-center text-xs italic text-[var(--color-slate-400)]">
          Illustrative samples. AppAudit reports relative severity only — never dollar
          figures or Workload Unit totals.
        </p>
      </div>
    </section>
  );
}
