'use client';

import { useEffect, useRef } from 'react';

type StepVideoProps = {
  src: string;
  title: string;
  poster?: string;
  className?: string;
};

export function StepVideo({ src, title, poster, className }: StepVideoProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    let inView = false;

    const sync = () => {
      if (!inView || motionQuery.matches) {
        if (!video.paused) video.pause();
        return;
      }
      const result = video.play();
      if (result && typeof result.catch === 'function') {
        result.catch(() => {
          // Autoplay can be blocked by the browser; the poster (or first
          // frame) stays visible.
        });
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          inView = entry.isIntersecting;
        }
        sync();
      },
      { rootMargin: '200px 0px' },
    );
    observer.observe(video);
    motionQuery.addEventListener('change', sync);

    return () => {
      observer.disconnect();
      motionQuery.removeEventListener('change', sync);
    };
  }, []);

  return (
    <video
      ref={videoRef}
      src={src}
      poster={poster}
      muted
      loop
      playsInline
      preload="none"
      aria-label={`Preview: ${title}`}
      className={className ?? 'h-full w-full rounded-[inherit] object-cover'}
    />
  );
}
