# Email Renderer

Adapter over `@llazyemail/template-runtime-display`.

## What comes from the package

- Document shell: `document`, `head`, `body` (used by `renderEmailDocument`)
- Part/slot runtime: `defineTemplate`, `renderTemplate`, `renderEmail`, `slot`, and the rest of the package barrel

## What stays local

- `renderEmailBody` / `stripLitMarkers` — current templates still return a Lit `TemplateResult`. The runtime package renders string parts, not Lit templates.
- `Renderer<T>` — the project contract (`renderer.render(data): string`). The package has no equivalent class.

`src/rendering/` re-exports this module, so existing imports keep working.
