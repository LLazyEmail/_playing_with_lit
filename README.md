# _playing_with_lit

> Converting an HTML email template using **Lit** as a server-side template engine.

## What this does

This project demonstrates how to use [`lit`](https://lit.dev) and [`@lit-labs/ssr`](https://github.com/lit/lit/tree/main/packages/labs/ssr) to define an HTML email template as a set of composable tagged-template-literal functions and render it to a clean HTML string in Node.js – no browser required.

Platform layers added around the templates (tests, shared blocks, Zod validation, errors, optional minify, env asset hosts) are documented in **[PLATFORM.md](PLATFORM.md)**.

### Templates vs campaigns

A **template** is a composer under `src/templates/` (Hacker Noon, No More To-Go, Mailchimp, Zurb, Google Store, generic newsletter). Folder count is the template count.

A **campaign** is a data fixture + render script that reuses an existing template. Mysterium and `flat_file_7` are Hacker Noon *campaigns*, not extra templates. There is no `src/templates/mysterium/` folder on purpose.

| Kind | Name | Source HTML | Data | Render |
|---|---|---|---|---|
| Template | Hacker Noon | `reference/hackernoon.html` | `src/scripts/content/hackernoon-data.ts` | `npm run render:hackernoon` |
| Campaign | Mysterium | `reference/mysterium_1.html` | `src/scripts/content/mysterium-data.ts` | `npm run render:mysterium` |
| Campaign | Test automation (`flat_file_7`) | `reference/flat_file_7.html` | `src/scripts/content/flat-file-7-data.ts` | `npm run render:flat-file-7` |
| Template | No More To-Go | `reference/nomoretogo.html` | `src/scripts/content/nomoretogo-data.ts` | `npm run render:template` |
| Template | Mailchimp | `reference/email-template-mailchimp (1).html` | `src/scripts/content/mailchimp-data.ts` | `npm run render:mailchimp` |
| Template | Google Store | `sandbox/google.html` | `src/scripts/content/google-data.ts` | `npm run render:google` |

Original HTML lives under [`reference/`](reference/). See that folder’s README.

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
npm run render:hackernoon  # Hacker Noon DevOps issue, readable debug HTML
npm run render:mysterium   # Hacker Noon campaign (VPN issue)
npm run render:flat-file-7 # Hacker Noon campaign (test automation issue)
npm run render:template    # No More To-Go, readable debug HTML
npm run render:mailchimp   # Mailchimp-style, readable debug HTML
npm run render:google      # Google Store shipment confirmation
npm run render:hackernoon:minify   # production / CI
npm run render:mysterium:minify
npm run render:flat-file-7:minify
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

| Command | Output file | What it is |
|---|---|---|
| `npm run render` | `dist/rendered-email.html` | Generic newsletter template |
| `npm run render` | `dist/rendered-hackernoon.html` | Hacker Noon template |
| `npm run render` | `dist/rendered-nomoretogo.html` | No More To-Go template |
| `npm run render:hackernoon` | `generated/hackernoon-email.html` | Hacker Noon template (DevOps fixture) |
| `npm run render:mysterium` | `generated/mysterium-email.html` | Hacker Noon campaign |
| `npm run render:flat-file-7` | `generated/flat-file-7-email.html` | Hacker Noon campaign |
| `npm run render:template` | `generated/nomoretogo-email.html` | No More To-Go template |
| `npm run render:mailchimp` | `generated/mailchimp-email.html` | Mailchimp template |
| `npm run render:google` | `generated/google-email.html` | Google Store shipment confirmation |

> **CI:** `.github/workflows/render-email-template.yml` builds, lints, tests, then renders Hacker Noon and No More To-Go **minified**. Snapshot tests use readable HTML so digests stay stable.

The rest of this README (template data shapes, Lit SSR walkthrough, design rules) is unchanged. See **[PLATFORM.md](PLATFORM.md)** for Phase 1–6 details.
