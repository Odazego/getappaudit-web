'use client';

import * as React from 'react';

interface TypewriterProps {
  text: string;
  speedMs?: number;
  className?: string;
}

// Inline-typing accent. The full text is always in the DOM (aria-label + a
// visibility:hidden span) so screen readers and search engines see it on
// first paint; only the *visible* portion grows over time. The hidden span
// also reserves the final width, so the surrounding flex row doesn't reflow
// as characters reveal.
export function Typewriter({ text, speedMs = 25, className }: TypewriterProps) {
  const ref = React.useRef<HTMLSpanElement | null>(null);
  const [shown, setShown] = React.useState(0);
  const [started, setStarted] = React.useState(false);

  React.useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    ) {
      const raf = window.requestAnimationFrame(() => {
        setShown(text.length);
        setStarted(true);
      });
      return () => window.cancelAnimationFrame(raf);
    }

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setStarted(true);
          obs.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, [text.length]);

  React.useEffect(() => {
    if (!started) return;
    if (shown >= text.length) return;
    const t = window.setTimeout(() => setShown((n) => n + 1), speedMs);
    return () => window.clearTimeout(t);
  }, [started, shown, text.length, speedMs]);

  const visible = text.slice(0, shown);
  const hidden = text.slice(shown);

  return (
    <span ref={ref} aria-label={text} className={className}>
      <span aria-hidden="true">{visible}</span>
      <span aria-hidden="true" style={{ visibility: 'hidden' }}>
        {hidden}
      </span>
    </span>
  );
}
