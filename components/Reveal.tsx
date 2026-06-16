'use client';

import * as React from 'react';

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
}

export function Reveal({ children, delay = 0, className, as: Tag = 'div' }: RevealProps) {
  const ref = React.useRef<HTMLElement | null>(null);
  const [shown, setShown] = React.useState(false);

  React.useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Skip animation entirely if the user prefers reduced motion. The setShown
    // call is deferred via rAF so it isn't synchronous inside the effect body.
    if (
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    ) {
      const raf = window.requestAnimationFrame(() => setShown(true));
      return () => window.cancelAnimationFrame(raf);
    }

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setShown(true);
          obs.disconnect();
        }
      },
      { threshold: 0.05, rootMargin: '0px 0px 100px 0px' }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, []);

  const props = {
    ref: ref as React.Ref<HTMLElement>,
    style: { transitionDelay: `${delay}ms` },
    className: [
      'transition-all duration-[450ms] ease-out',
      shown ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2',
      className,
    ]
      .filter(Boolean)
      .join(' '),
  };

  return React.createElement(Tag, props, children);
}
