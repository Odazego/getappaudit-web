import * as React from 'react';

interface TocItem {
  id: string;
  label: string;
}

interface LegalLayoutProps {
  title: string;
  lastUpdated: string;
  toc: TocItem[];
  children: React.ReactNode;
}

export function LegalLayout({ title, lastUpdated, toc, children }: LegalLayoutProps) {
  return (
    <article className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
      <header className="mb-8">
        <h1 className="text-3xl font-semibold tracking-tight text-[var(--color-slate-900)] md:text-4xl">
          {title}
        </h1>
        <p className="mt-2 text-sm text-[var(--color-slate-500)]">Last updated {lastUpdated}</p>
      </header>

      <details className="mb-6 rounded-[var(--radius-cta)] ring-1 ring-black/[0.08] open:bg-slate-50 lg:hidden">
        <summary className="cursor-pointer px-4 py-3 text-sm font-medium text-[var(--color-slate-900)]">
          Jump to section
        </summary>
        <nav aria-label="Table of contents" className="border-t border-black/[0.08] px-4 py-3">
          <ol className="space-y-2 text-sm">
            {toc.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="text-[var(--color-slate-500)] hover:text-[var(--color-slate-900)]"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>
      </details>

      <div className="lg:grid lg:grid-cols-[16rem_1fr] lg:gap-12">
        <aside className="hidden lg:block">
          <nav aria-label="Table of contents" className="sticky top-20 max-h-[calc(100vh-6rem)] overflow-y-auto pr-2">
            <h2 className="mb-3 text-xs font-semibold uppercase tracking-wide text-[var(--color-slate-400)]">
              On this page
            </h2>
            <ol className="space-y-2 text-sm">
              {toc.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="block text-[var(--color-slate-500)] transition-colors hover:text-[var(--color-slate-900)]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </aside>

        <div className="prose-legal max-w-3xl text-[var(--color-slate-500)]">
          {children}
        </div>
      </div>
    </article>
  );
}
