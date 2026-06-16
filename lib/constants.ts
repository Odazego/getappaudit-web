// Single source of truth for domain, brand, pricing, and disclaimer text.
// Everything in app/** and components/** reads from here — no scattered literals.

export const SITE_URL = 'https://getappaudit.com';
export const SITE_NAME = 'AppAudit';
export const SITE_TAGLINE = 'Find the patterns inflating your Bubble bill';
export const SITE_DESCRIPTION =
  'A local-first Chrome extension that scans your Bubble app and surfaces the patterns inflating your Workload Unit bill. Runs entirely in your browser — no AI, no backend, your app never leaves the page.';

// Placeholder base — swap in the real listing URL when the Web Store
// submission is approved.
export const CHROME_STORE_URL = 'https://chromewebstore.google.com/';

export const SUPPORT_EMAIL = 'support@getappaudit.com';

export const PRICING = {
  solo: {
    name: 'Solo',
    priceMonthly: 19,
    devices: 1,
    brandedExport: false,
    tagline: 'For solo developers auditing their own apps.',
  },
  agency: {
    name: 'Agency',
    priceMonthly: 49,
    devices: 5,
    brandedExport: true,
    tagline: 'For agencies auditing client apps.',
  },
} as const;

export const NON_AFFILIATION =
  'AppAudit is an independent tool and is not affiliated with, endorsed by, or sponsored by Bubble Group, Inc.';
