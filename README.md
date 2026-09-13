# _playing_with_lit

> Converting an HTML email template using **Lit** as a server-side template engine.

## What this does

This project demonstrates how to use [`lit`](https://lit.dev) and [`@lit-labs/ssr`](https://github.com/lit/lit/tree/main/packages/labs/ssr) to define an HTML email template as a set of composable tagged-template-literal functions and render it to a clean HTML string in Node.js – no browser required.

Platform layers added around the templates (tests, shared blocks, Zod validation, errors, optional minify, env asset hosts) are documented in **[PLATFORM.md](PLATFORM.md)**.

### Key design decisions

| Concern | Approach |
|---|---|
| Template authoring | `html` tagged-template literals from `lit` |
| Server-side rendering | `@lit-labs/ssr` + `collectResultSync` |
| Hydration markers | Stripped from output (not needed for email) |
| `<head>` / `<title>` | Built as plain JS template string in the renderer (Lit SSR cannot process expressions inside raw-text elements like `<title>`) |
| Styling | Template-specific style constants, injected into each renderer's `<style>` block |
| Tests | Vitest unit tests per section + SHA-256 snapshots of assembled templates |
| Shared blocks | Typed footer/logo/CTA contracts; template HTML stays in presenters |
| Runtime validation | Zod schemas at composers and guarded render helpers |
| Errors | `AppError` hierarchy with stable codes and layers |
| Minify | Optional (`EMAIL_MINIFY=1` / `*:minify` scripts); debug output stays readable |
| Asset hosts | `getAssetBaseUrl()` + `EMAIL_ENV` / `EMAIL_ASSET_BASE_*` |

## Getting started

```bash
npm install
npm test                   # Vitest unit + snapshot tests
npm run render             # builds TypeScript then renders all templates to dist/
npm run render:hackernoon  # Hacker Noon, readable debug HTML
npm run render:template    # No More To-Go, readable debug HTML
npm run render:mailchimp   # Mailchimp-style, readable debug HTML
npm run render:hackernoon:minify   # production / CI
npm run render:template:minify
npm run render:mailchimp:minify
```

### Code quality

```bash
npm run lint
npm run lint:fix
npm run format
npm run format:check
```

### Rendered output locations

| Command | Output file | Template |
|---|---|---|
| `npm run render` | `dist/rendered-email.html` | Generic newsletter |
| `npm run render` | `dist/rendered-hackernoon.html` | Hacker Noon newsletter |
| `npm run render` | `dist/rendered-nomoretogo.html` | No More To-Go newsletter |
| `npm run render:hackernoon` | `generated/hackernoon-email.html` | Hacker Noon newsletter |
| `npm run render:template` | `generated/nomoretogo-email.html` | No More To-Go newsletter |
| `npm run render:mailchimp` | `generated/mailchimp-email.html` | Mailchimp-style product email |

> **CI:** `.github/workflows/render-email-template.yml` builds, lints, tests, then renders Hacker Noon and No More To-Go **minified**. Snapshot tests use readable HTML so digests stay stable.

The rest of this README (template data shapes, Lit SSR walkthrough, design rules) is unchanged. See **[PLATFORM.md](PLATFORM.md)** for Phase 1–6 details.
