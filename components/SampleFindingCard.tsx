import { Typewriter } from '@/components/Typewriter';

export type Severity = 'CRITICAL' | 'HIGH' | 'MEDIUM';

export interface SampleFindingCardProps {
  severity: Severity;
  element: string;
  page: string;
  pattern: string;
  fix: string;
  animateElement?: boolean;
  className?: string;
}

const SEVERITY_CLASSES: Record<Severity, string> = {
  CRITICAL: 'bg-red-100 text-red-800 ring-red-300',
  HIGH: 'bg-red-50 text-red-700 ring-red-200',
  MEDIUM: 'bg-amber-50 text-amber-700 ring-amber-200',
};

export function SampleFindingCard({
  severity,
  element,
  page,
  pattern,
  fix,
  animateElement = false,
  className,
}: SampleFindingCardProps) {
  return (
    <article
      className={[
        'card-hover rounded-[var(--radius-cta)] bg-white p-5 ring-1 ring-black/[0.08]',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <div className="flex flex-wrap items-center gap-3">
        <span
          className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-semibold ring-1 ${SEVERITY_CLASSES[severity]}`}
        >
          {severity}
        </span>
        {animateElement ? (
          <Typewriter
            text={element}
            className="font-mono text-sm text-[var(--color-slate-900)]"
          />
        ) : (
          <span className="font-mono text-sm text-[var(--color-slate-900)]">
            {element}
          </span>
        )}
        <span className="text-xs text-[var(--color-slate-400)]">on {page}</span>
      </div>
      <p className="mt-3 text-sm text-[var(--color-slate-500)] leading-relaxed">
        {pattern}
      </p>
      <div className="mt-3 rounded-[var(--radius-btn)] bg-slate-50 px-3 py-2 text-sm text-[var(--color-slate-900)]">
        <span className="font-semibold text-[var(--color-indigo)]">Fix:</span>{' '}
        {fix}
      </div>
    </article>
  );
}
