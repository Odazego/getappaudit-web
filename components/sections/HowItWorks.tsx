import Image from 'next/image';
import type { LucideIcon } from 'lucide-react';
import { Download, MousePointerClick, FileText } from 'lucide-react';

import { StepVideo } from '@/components/StepVideo';

type Step = {
  icon: LucideIcon;
  title: string;
  description: string;
  image?: string;
  video?: string;
  poster?: string;
};

const STEPS: Step[] = [
  {
    icon: Download,
    title: 'Install AppAudit for Chrome',
    description: 'One-click install from the Chrome Web Store. No account, no sign-in to start.',
    video: '/screenshots/step-1.mp4',
    poster: '/screenshots/step-1-poster.jpg',
  },
  {
    icon: MousePointerClick,
    title: 'Open your Bubble editor and click Audit',
    description:
      'AppAudit walks your app structure in-browser, sanitizes secrets locally, and runs the checks in a Web Worker.',
    video: '/screenshots/step-3.mp4',
    poster: '/screenshots/step-3-poster.jpg',
  },
  {
    icon: FileText,
    title: 'See your findings and fixes',
    description:
      'Every finding names the element, the page, a relative severity, and an actionable fix. Re-audit anytime — runs stay free for active subscribers.',
    video: '/screenshots/step-5.mp4',
    poster: '/screenshots/step-5-poster.jpg',
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="bg-slate-50 py-12 md:py-20"
      aria-labelledby="how-it-works-heading"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="how-it-works-heading"
            className="text-3xl font-semibold tracking-tight text-[var(--color-slate-900)] md:text-4xl"
          >
            From install to insight in{' '}
            <span className="text-[var(--color-indigo)]">3 steps</span>.
          </h2>
          <p className="mt-3 text-[var(--color-slate-500)]">
            No accounts. No setup. Open Bubble, click Audit, see findings.
          </p>
        </div>

        <ol className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {STEPS.map(({ icon: Icon, title, description, image, video, poster }, index) => (
            <li
              key={title}
              className="card-hover flex flex-col rounded-[var(--radius-cta)] bg-white p-6 ring-1 ring-black/[0.08]"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-indigo)] text-sm font-semibold text-white">
                  {index + 1}
                </span>
                <Icon className="h-5 w-5 text-[var(--color-slate-400)]" aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-[var(--color-slate-900)]">{title}</h3>
              <p className="mt-2 grow text-sm text-[var(--color-slate-500)] leading-relaxed">{description}</p>
              <div className="relative mt-4 aspect-video overflow-hidden rounded-[var(--radius-btn)] bg-slate-50 shadow-lg shadow-indigo-500/15 ring-1 ring-indigo-500/30">
                {video ? (
                  <StepVideo src={video} poster={poster} title={title} />
                ) : image ? (
                  <Image
                    src={image}
                    alt={`Screenshot: ${title}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                    priority={index === 0}
                  />
                ) : (
                  <div className="flex h-full items-center justify-center px-4 text-center">
                    <span className="font-mono text-xs text-[var(--color-slate-400)]">
                      [Screenshot: {title}]
                    </span>
                  </div>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
