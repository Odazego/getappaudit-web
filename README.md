# AppAudit Landing

Public marketing site for **AppAudit** — a local-first Chrome extension that scans Bubble.io apps and surfaces the patterns inflating their Workload Unit bill. Findings are relative-severity only — never dollar figures, never Workload Unit totals.

- **Install:** [AppAudit — for Bubble on the Chrome Web Store](https://chromewebstore.google.com/detail/appaudit-%E2%80%94-for-bubble/ehakfpjcmkifiefpcikhcdlieampelll)
- **Live site:** [getappaudit.com](https://getappaudit.com)

## What AppAudit is (and isn't)

AppAudit is a Chrome MV3 extension. It walks your Bubble app's in-memory structure inside the browser, redacts known secret patterns locally, and runs a deterministic TypeScript rules engine in a Web Worker to surface cost patterns.

- Local-first. There is no backend. Your app data never leaves your browser.
- Deterministic. No AI in the runtime. Same input, same findings, every time.
- License-key model. Keys are validated **client-side** in the extension against the payment provider's public license endpoint — there is no AppAudit backend. Re-audits stay free while your subscription is active.
- Free tier in the extension: top 5 findings + a summary. Paid: full findings list + fixes + (Agency) branded export.

The landing site does not run the audit. The audit runs in the extension.

## Quick start

```bash
pnpm install
pnpm dev          # http://localhost:3000
pnpm build        # writes the static export to ./out
```

Other scripts: `pnpm typecheck`, `pnpm lint`.

## Disclaimer

AppAudit is an independent tool and is not affiliated with, endorsed by, or sponsored by Bubble Group, Inc.
