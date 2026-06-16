import { Lock, Cpu, EyeOff } from 'lucide-react';

const POINTS = [
  {
    icon: Cpu,
    title: 'Runs in a Web Worker',
    description:
      'The checks execute inside your browser, in a sandboxed Web Worker. The page main thread stays responsive.',
  },
  {
    icon: EyeOff,
    title: 'Sanitized in your browser',
    description:
      'Known secret patterns — API keys, JWTs, bearer tokens, cloud access keys, high-entropy strings — are redacted locally before any preview renders.',
  },
  {
    icon: Lock,
    title: 'No backend, no telemetry',
    description:
      'There is no server to send data to. AppAudit ships no analytics, no fingerprinting, no event tracking. Your audit is yours.',
  },
];

export function PrivacyBlock() {
  return (
    <section
      id="privacy"
      className="bg-slate-50 py-12 md:py-20"
      aria-labelledby="privacy-heading"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="privacy-heading"
            className="text-3xl font-semibold tracking-tight text-[var(--color-slate-900)] md:text-4xl"
          >
            Your app never <span className="text-[var(--color-indigo)]">leaves your browser</span>.
          </h2>
          <p className="mt-3 text-[var(--color-slate-500)]">
            Local-first by design. The audit runs on your machine.
          </p>
        </div>

        <ul className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
          {POINTS.map(({ icon: Icon, title, description }) => (
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
      </div>
    </section>
  );
}
