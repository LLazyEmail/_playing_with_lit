# _playing_with_lit

> Converting an HTML email template using **Lit** as a server-side template engine.

## What this does

This project demonstrates how to use [`lit`](https://lit.dev) and [`@lit-labs/ssr`](https://github.com/lit/lit/tree/main/packages/labs/ssr) to define an HTML email template as a set of composable tagged-template-literal functions and render it to a clean HTML string in Node.js – no browser required.

### Key design decisions

| Concern | Approach |
|---|---|
| Template authoring | `html` tagged-template literals from `lit` |
| Server-side rendering | `@lit-labs/ssr` + `collectResultSync` |
| Hydration markers | Stripped from output (not needed for email) |
| `<head>` / `<title>` | Built as plain JS template string in the renderer (Lit SSR cannot process expressions inside raw-text elements like `<title>`) |
| Styling | Single `EMAIL_STYLES` constant in `renderer.ts`, injected into the `<style>` block |

## Project structure

```
src/
├── index.ts                  Entry point – sample data → rendered HTML file
├── renderer.ts               renderToString(): Lit template → full email HTML
├── types.ts                  EmailData / ArticleItem interfaces
└── templates/
    ├── newsletter.ts         Lit body template (header, hero, articles, footer)
    └── email-template.html   Original static HTML reference template
```

## Getting started

```bash
npm install
npm run render        # builds TypeScript then renders dist/rendered-email.html
```

Open `dist/rendered-email.html` in a browser to preview the email.

## How it works

1. **Define data** – populate an `EmailData` object with the recipient name, brand, articles, etc.
2. **Create a template** – `newsletterEmailTemplate(data)` returns a Lit `TemplateResult` for the email body.
3. **Render** – `renderToString(template, data)` calls `@lit-labs/ssr`'s `render()`, collects the result synchronously, strips Lit's hydration comments, and wraps the content in a full HTML document shell.
4. **Output** – the resulting string is a standalone `.html` file ready to be sent via any email service provider.

## Extending

- Add more templates by creating new files in `src/templates/` and exporting a function that accepts your data type and returns a `TemplateResult`.
- Swap `collectResultSync` for `collectResult` (async) if you need to render templates that contain async directives.
- Pipe the rendered HTML through a CSS inliner (e.g. [`juice`](https://github.com/Automattic/juice)) before sending to maximise email-client compatibility.
