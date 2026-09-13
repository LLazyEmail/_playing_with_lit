# AGENTS.md — _playing_with_lit

Instructions for any coding agent (Grok Build, or compatible AGENTS.md-reading tools) working
in this repository. Read this before making changes.

## What this repo is
A TypeScript project that uses Lit `html` tagged templates + `@lit-labs/ssr` to server-render
HTML emails (no browser, no client-side hydration needed). Templates: `hackernoon`,
`nomoretogo`, `mailchimp`, plus a generic `newsletter`.

## Build & verify
```
npm install
npm run build              # tsc
npm run render              # build + render all templates to dist/
npm run render:hackernoon
npm run render:template     # renders nomoretogo
npm run render:mailchimp
npm test                    # currently a stub — see Phase 1 below, fix this first
```
Always run `npm run build` after any change before considering a task done — this is a
TypeScript project and type errors are cheap to catch early.

## Architecture — do not restructure this
Each template lives in `src/templates/<name>/` as:
- `index.ts` — composer only. It imports and assembles sections in order. **Never put raw HTML
  markup directly in `index.ts`.**
- `types.ts` — re-exports the template's data contract from `src/types.ts` or defines it locally.
- `constants.ts` — shared URLs, brand colors, spacing values. **No magic strings/URLs in section
  files** — they belong here.
- `sections/*.section.ts` — one section = one file, ideally under ~200 lines.

Top-level `*-email.ts` files (e.g. `hackernoon-email.ts`) are backward-compatible re-export
shims pointing at `<name>/index.ts`. **Never delete or break these** — existing imports depend
on them.

`src/renderer.ts` holds `renderToString` / `<name>RenderToString` functions. The `<head>` /
`<title>` are built as a plain JS template string here, deliberately *outside* the Lit template
— Lit's SSR parser cannot process expressions inside raw-text elements like `<title>`. Do not
move `<title>` interpolation back into a Lit template.

`stripLitMarkers()` in `renderer.ts` removes Lit's hydration comments (`<!--lit-part-->` etc.)
from output — these are meaningless (and visually broken) in email clients. Any new render path
must call this before returning final HTML.

## Working style
- Make one phase / one concern per commit or PR. Don't bundle unrelated refactors.
- After any section-file change, re-run the render script for the affected template and spot
  check `dist/` or `generated/` output — Lit SSR errors on `<title>`-style mistakes are cryptic
  (`Unexpected final partIndex: N !== M`), so catching them early matters.
- Preserve the existing camelCase/`*.section.ts` naming conventions.

## Current priority roadmap
Work in this order; treat each phase as its own PR, and stop for review between phases unless
told otherwise.

1. **Tests** — `npm test` is currently a stub. Add a real runner (Vitest fits `"type": "module"`
   well). Unit-test individual section functions; snapshot-test each assembled template's
   rendered output. Wire this into `.github/workflows/render-email-template.yml`.
2. **`shared/blocks/`** — extract duplicated markup (footer, logo/branding, CTA button) that
   currently exists independently in `hackernoon/`, `nomoretogo/`, and `mailchimp/` into
   `src/templates/shared/blocks/`, parameterized by props. Keep template-specific content as
   data, not markup.
3. **Runtime validation** — add zod schemas mirroring the `*EmailData` TS interfaces and
   validate at the top of each `*RenderToString` function, since these types currently only
   exist at compile time.
4. **Production pipeline** — wire `juice` (CSS inlining) into `renderToString` by default rather
   than as a manual step; add HTML minification; add an `email-comb`-style CI check.
5. **Housekeeping** — move root-level reference files (`hackernoon.html`, `nomoretogo.html`,
   `email-template-mailchimp (1).html`, `flat_file_7.html`) into `reference/`; add ESLint +
   Prettier + a `lint` npm script wired into CI; split the monolithic `EMAIL_STYLES` constant
   per template/block.
6. **Environment config** — add a small `getAssetBaseUrl(env)`-style helper so image/link base
   URLs can differ between staging and production without hand-editing `constants.ts`.

## Things to leave alone
- The per-template folder structure and composer pattern — it's intentional, documented in the
  README's "Design rules" section, and should be extended, not replaced.
- `install-global-dom-shim.js` import order — it must be imported before any `lit` or
  `@lit-labs/ssr` code, in `src/index.ts`. Do not reorder this.
- TypeScript is pinned to the 7.x line (native Go compiler, GA as of July 2026). Its stable
  programmatic API isn't available until 7.1 — avoid adding tools that depend on the
  programmatic API (ts-morph, certain typescript-eslint integrations) without first aliasing
  `@typescript/typescript6`.

## Definition of done
A change is done when: `npm run build` passes, the affected template renders without errors,
any new/changed section has a corresponding test once Phase 1 lands, and the README is updated
if behavior visible to consumers changed.
