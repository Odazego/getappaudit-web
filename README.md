# AppAudit Landing

Public marketing site for **AppAudit** — a local-first Chrome extension that scans Bubble.io apps and surfaces the patterns inflating their Workload Unit bill.

Static Next.js 16 site, deployed to Cloudflare Pages. Canonical domain: `getappaudit.com`.

## What AppAudit is (and isn't)

AppAudit is a Chrome MV3 extension. It walks your Bubble app's in-memory structure inside the browser, redacts known secret patterns locally, and runs a deterministic TypeScript rules engine in a Web Worker to surface cost patterns. Findings are relative-severity only — never dollar figures, never Workload Unit totals.

- Local-first. There is no backend. Your app data never leaves your browser.
- Deterministic. No AI in the runtime. Same input, same findings, every time.
- Subscription pricing. Solo $19/mo (1 device, unbranded export). Agency $49/mo (5 devices, branded export). License-key model, validated against a license server, free re-audits while the subscription is active.
- Free tier in the extension: top 5 findings + a summary. Paid: full findings list + fixes + (Agency) branded export.

The landing site does not run the audit. The audit runs in the extension.

## Quick start

```bash
pnpm install
pnpm dev          # http://localhost:3000
pnpm build        # writes the static export to ./out
```

Other scripts: `pnpm typecheck`, `pnpm lint`.

## Deploying to Cloudflare Pages

1. Push this repo to GitHub.
2. In Cloudflare Pages, create a new project connected to the repo.
3. Build settings:
   - Framework preset: **Next.js (Static HTML Export)**
   - Build command: `pnpm build`
   - Output directory: `out`
   - Node version: 20+
4. Custom domain: point `getappaudit.com` at the Pages project.

No environment variables are required. The landing has no backend dependencies.

## Routes

- `/` — home
- `/how-it-works` — local-first audit walkthrough
- `/pricing` — Solo + Agency monthly tiers
- `/privacy` — privacy policy (leads with "your app never leaves your browser")
- `/terms` — terms of service
- `/activate` — post-checkout landing for Dodo. Reads `?license_key=…&status=active`, shows the key in a copyable field, and tells the user to paste it into the extension. Excluded from the sitemap and `noindex`.

Reserved for later (placeholder READMEs only, not real routes yet):

- `/app/*` — future authenticated dashboard
- `/r/<id>` — future shareable report viewer

## Single-source config

Everything brand-, domain-, email-, and pricing-related lives in `lib/constants.ts`. The domain, the support email, the Chrome Web Store URL, the pricing tiers, the non-affiliation disclaimer, and the tagline all read from there.

## Legal pages

`/terms` and `/privacy` are JSX pages that render a top-of-file `SECTIONS` array via `.map()`. Editing legal copy = changing one plain string in that array; brand and domain values come from `lib/constants.ts`. No markdown parser, no loose `.md` files.

## Stack notes

- Next.js 16, App Router, static export (`output: 'export'`).
- TypeScript strict.
- Tailwind CSS v4 (brand tokens via CSS `@theme` in `app/globals.css`).
- shadcn/ui primitives under `components/ui/`.
- Inter font self-hosted via `@fontsource/inter` (no Google Fonts CDN).
- Zero third-party JavaScript — no analytics, no tracking, no PostHog.

The one external network call from any client-side JS is the optional feature-updates email form, which posts to Web3Forms with a public client-side access key.

## Brand assets

Logos and icons live under `public/` and `public/icons/`. They were originally copied from the extension repo. When the AppAudit rebrand assets are finalized, replace the files in place — the code references them by filename and won't need changes.

## Disclaimer

AppAudit is an independent tool and is not affiliated with, endorsed by, or sponsored by Bubble Group, Inc.
