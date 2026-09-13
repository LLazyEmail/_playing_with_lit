# Platform layers

These layers sit *around* the existing per-template folders. They do not replace
`index.ts` composers or the `*-email.ts` re-export shims.

## Phase 1 — Tests

`npm test` runs [Vitest](https://vitest.dev) (`"type": "module"` + TypeScript).

- Unit tests next to sections (`*.section.test.ts`) assert data-driven bits
  such as `data.year` in the Hacker Noon footer.
- `src/templates/template-snapshots.test.ts` hashes the full rendered HTML of
  each assembled template (`hackernoon` / `nomoretogo` / `mailchimp`). Any
  markup change fails CI; update the SHA-256 digest after an intentional change.
- Section tests use `src/test/render-fragment.ts` so they do not need a full
  document shell.

## Phase 2 — Shared blocks (abstraction, not an HTML rewrite)

The three templates do **not** share the same table markup. Folding them into
one shared `<table>` would change pixels. Instead, `src/templates/shared/blocks/`
is a contract layer:

| API | Role |
|---|---|
| `FooterBlockProps` / `LogoBlockProps` | Discriminated unions (`hackernoon` \| `nomoretogo` \| `mailchimp`) |
| `registerFooterPresenter` + `renderFooterBlock` | Sections map `EmailData` → props, then call the shared API |
| `registerLogoPresenter` + `renderLogoBlock` | Same for logo / branding banners |
| `renderCtaButton` / `renderFooterColumn` | Small reusable atoms |

Each template keeps its original HTML as a presenter. The Hacker Noon footer
markup stays in `footer.section.ts`; the composer goes through
`footer.compose.ts` so that file is not rewritten.

```ts
export function renderFooterSection(data) {
  return renderFooterBlock({
    variant: 'mailchimp',
    footerColumns: data.footerColumns,
  });
}
```

## Phase 3 — Runtime data validation

TypeScript interfaces only exist at compile time. Incoming CMS/ESP/API payloads
are checked with Zod schemas in `src/validation/schemas.ts`:

- `emailDataSchema`
- `hackernoonEmailDataSchema`
- `nomoretogoEmailDataSchema`
- `mailchimpEmailDataSchema`

`parseEmailData()` throws `EmailDataValidationError` with field paths:

```
Invalid Hacker Noon email data:
  - preheaderText: Required
```

Validation runs at each template composer and again in
`src/validation/guarded-render.ts` (used by render scripts and snapshot tests).
`src/renderer.ts` document shells are unchanged.

```ts
import { hackernoonRenderToString } from './validation/guarded-render.js';
```

## Errors — one catchable root type

`src/errors/` defines the first-party failure model. Catch `AppError` instead of
string-matching `error.message`.

```
AppError
├─ ValidationError          EMAIL_VALIDATION_FAILED   layer=validation
│    └─ EmailDataValidationError
├─ CompositionError         BLOCK_PRESENTER_MISSING   layer=composition
├─ RenderError              RENDER_FAILED             layer=render
├─ PipelineError            PIPELINE_FAILED           layer=pipeline
└─ ConfigError              CONFIG_INVALID            layer=config
```

Every `AppError` has a stable `code`, a `layer`, `issues[]` (`{ path, message }`),
a `details` bag, `retryable`, and `toJSON()`. Guards: `isAppError`,
`isValidationError`, `isCompositionError`.

Missing footer/logo presenters throw `CompositionError`, not a bare `Error`.

## Optional HTML minification

Minify is **off** by default so local output stays readable. CI and production
scripts turn it on.

| Mode | Command |
|---|---|
| Debug (pretty) | `npm run render:hackernoon` |
| Production / PR | `npm run render:hackernoon:minify` |
| Env on | `EMAIL_MINIFY=1` |
| Env off (wins over `NODE_ENV=production`) | `EMAIL_MINIFY=0` |
| API | `await finalizeHtml(html, { minify: true })` |

Implementation: `src/pipeline/minify-html.ts` (`html-minifier-terser`) with
email-safe options — keep `<!--[if mso]>` comments, `caseSensitive`,
`keepClosingSlash`, no JS minify. Failures throw `PipelineError`.

Snapshot tests do **not** minify, so Phase 1 digests stay stable.

## Phase 6 — Environment-aware asset URLs

Do not hand-edit `constants.ts` per deploy. Hosts live in `src/config/`:

```ts
getAssetBaseUrl('nomoretogo.images')
joinAssetUrl('hackernoon.brand', 'hackernoon.png')
resolveAppEnv() // EMAIL_ENV → NODE_ENV → development
```

Template constants still export the same names:

```ts
export const BASE_IMAGE = getAssetBaseUrl('nomoretogo.images');
```

Production catalog values are the original hosts (snapshots unchanged).

```bash
EMAIL_ENV=staging
EMAIL_ASSET_BASE_NOMORETOGO_IMAGES=https://cdn.staging.example/nmtg/
EMAIL_ASSET_BASE_HACKERNOON_BRAND=https://cdn.staging.example/hn/brand/
EMAIL_ASSET_BASE_HACKERNOON_MEMES=...
EMAIL_ASSET_BASE_HACKERNOON_ICONS=...
EMAIL_ASSET_BASE_MAILCHIMP_PLACEHOLDER=https://placehold.co
```

Unknown `EMAIL_ENV` or an empty override throws `ConfigError`.
