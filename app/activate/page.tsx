import { Suspense } from 'react';
import type { Metadata } from 'next';

import { ActivateClient } from './ActivateClient';
import { SITE_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Activate',
  description: `Activate your ${SITE_NAME} license inside the Chrome extension.`,
  alternates: { canonical: '/activate' },
  robots: { index: false, follow: false },
};

export default function ActivatePage() {
  return (
    <Suspense fallback={null}>
      <ActivateClient />
    </Suspense>
  );
}
