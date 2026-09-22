# AGENTS.md — _playing_with_lit

Agent instructions. Grok is the agent for this repo; its session rules and command approvals live in `.grok/`. Use this file and stop exploring once the rows below name the files you need.

Lit `html` plus `@lit-labs/ssr` render HTML emails in Node. No browser and no client hydration.

## Look here first

Open only the paths for the task. Skip `node_modules/`, `dist/`, `generated/`, and full HTML under `reference/`.

| Task | Open |
|---|---|
| Template markup | `src/templates/<name>/` — `index.ts` composes, `sections/*.section.ts` holds markup, plus `types.ts`, `constants.ts`, `<name>.renderer.ts` |
| Registered templates | `hackernoon`, `nomoretogo`, `mailchimp`, `zurb`, `google` in `src/rendering/template-registry.ts`. `newsletter` is separate and renders from `src/index.ts` |
| Campaign data | `campaigns/<template>/<campaign>.json` and `<campaign>.data.json`. Payload: `src/scripts/content/<name>-data.ts`. Mysterium and flat-file-7 are Hacker Noon campaigns, not templates |
| New template | Copy `src/templates/zurb/`, `src/validation/zurb.validator.ts`, `src/scripts/render-zurb.ts`, and the `render:zurb` script. Register it in `template-registry.ts` |
| Reference HTML | `reference/README.md` only |
| Validation | `src/validation/schemas.ts` and `src/validation/<name>.validator.ts` |
| Errors | `src/errors/` — throw an `AppError` subclass with a stable `code` |
| Asset hosts | `src/config/assets.ts` (`getAssetBaseUrl`, `joinAssetUrl`). Do not add a second host map |
| Minify | `src/pipeline/minify-html.ts`. Stays off unless `EMAIL_MINIFY=1` |
| Tests | Colocated `*.section.test.ts`. Full-HTML hashes: `src/templates/template-snapshots.test.ts` |
| Draft Google email | `unfinished-google-template/readme.md`. Leave that tree alone until a task says to land it |

Read `PLATFORM.md` only when a task names a platform layer. Read `CONTRIBUTING.md` only when a task names the design rules. Do not open both by default.

## Already shipped

Do not re-add or restyle these during an unrelated change:

Vitest (`npm test`), the shared-block contracts in `src/templates/shared/blocks/`, Zod validators, `AppError`, ESLint and Prettier (`npm run lint`, `npm run format`), the originals in `reference/`, per-template style modules, opt-in HTML minify, and `getAssetBaseUrl`.

`juice` and email-comb are not installed. Add them only when a task asks.

## Shape of a change

- One template or one concern. Leave other templates, the pipeline, and the docs untouched.
- Copy the nearest section file and match its imports and test.
- A new section is `sections/<name>.section.ts`, one call from that template's `index.ts`, and one colocated test. Add a renderer, schema, or pipeline file only when the data contract changed.
- Put colors, URLs, and spacing in that template's `constants.ts`. Put sample strings in `src/scripts/content/`.
- `index.ts` only composes sections. Markup stays in `sections/` or a shared-block presenter.
- Keep the `src/templates/*-email.ts` re-export shims.
- Shared blocks are a props contract. Keep each template's table markup in its own presenter.
- Leave snapshot hashes alone unless the task changes rendered markup. Then update `src/templates/__snapshots__/`.

## Lit and email

- Interpolate `<title>`, `<style>`, and `<textarea>` only inside a plain string in `<name>.renderer.ts` or `renderEmailDocument`. An expression inside those tags in a Lit `html` template throws `Unexpected final partIndex`.
- Return HTML through `renderEmailBody` in `src/rendering/render-email-document.ts` so Lit hydration comments are stripped.
- Keep `import '@lit-labs/ssr/lib/install-global-dom-shim.js'` before any `lit` import in `src/index.ts` and in each `src/scripts/render-*.ts`.
- TypeScript is 7.0.x. Do not add ts-morph or any tool that needs the TypeScript programmatic API.

## Verify, then stop

```
npm run build
npm test -- src/templates/<name>
npm run render:<name>
```

Run those for the template you changed. Run bare `npm test` only when the change crosses templates. Skip the `:minify` scripts unless the task is minification. Skip `README.md`, `PLATFORM.md`, `documentation.md`, and `CONTRIBUTING.md` unless a command or public contract changed.
