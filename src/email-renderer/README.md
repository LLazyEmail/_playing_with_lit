# Email Renderer

Adapter over `@llazyemail/template-runtime-display`.

## What comes from the package

- Document shell: `document`, `head`, `body` (used by `renderEmailDocument`)
- Part/slot runtime: `defineTemplate`, `renderTemplate`, `renderEmail`, `slot`, and the rest of the package barrel

The package (and its dependency `@llazyemail/render-template`) requires parts to return **strings**. Lit objects are not valid part return values.

## What stays local

- `renderEmailBody` / `stripLitMarkers` — current templates still return a Lit `TemplateResult`. The runtime package renders string parts, not Lit templates. This is the required adapter so Lit SSR can feed the runtime without errors.
- `Renderer<T>` — the project contract (`renderer.render(data): string`). The package has no equivalent class.

`src/rendering/` re-exports this module, so existing imports keep working.

Generation (catalog, payload, write) belongs in `@llazyemail/generate-template`, not here.
