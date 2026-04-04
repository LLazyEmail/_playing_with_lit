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
├── index.ts                         Entry point – renders all templates to dist/
├── renderer.ts                      renderToString / hackernoonRenderToString / nomoretogoRenderToString
├── types.ts                         Shared TypeScript interfaces
├── scripts/
│   ├── render-hackernoon.ts         Standalone script → generated/hackernoon-email.html
│   ├── render-nomoretogo.ts         Standalone script → generated/nomoretogo-email.html
│   └── content/
│       ├── hackernoon-data.ts       Sample data for the Hacker Noon template
│       └── nomoretogo-data.ts       Sample data for the No More To-Go template
└── templates/
    ├── newsletter.ts                Generic newsletter Lit body template
    ├── hackernoon-email.ts          Re-export shim → hackernoon/index.ts
    ├── nomoretogo-email.ts          Re-export shim → nomoretogo/index.ts
    ├── hackernoon/                  Modular Hacker Noon template
    │   ├── index.ts                 hackernoonEmailTemplate() composer
    │   ├── types.ts                 Re-exports HackernoonEmailData
    │   ├── constants.ts             Brand URLs, meme base URL, sponsor constants
    │   └── sections/
    │       ├── logo.section.ts      Top logo banner (templatePreheader)
    │       ├── header.section.ts    Sponsor card + article body (templateHeader)
    │       ├── body.section.ts      Closing divider + bottom logo (templateBody)
    │       └── footer.section.ts    Social icons + copyright (templateFooter)
    └── nomoretogo/                  Modular No More To-Go template
        ├── index.ts                 nomoretogoEmailTemplate() composer
        ├── types.ts                 Re-exports NomoretogoEmailData / RecipeItem
        ├── constants.ts             BASE_IMAGE URL
        └── sections/
            ├── logo.section.ts
            ├── nav.section.ts
            ├── intro.section.ts
            ├── recipe-grid.section.ts
            ├── recipe-grid/recipe-row.ts
            ├── cta.section.ts
            ├── prep-info.section.ts
            ├── community.section.ts
            ├── amazon.section.ts
            └── footer.section.ts
hackernoon.html                      Original static HTML reference (Hacker Noon)
nomoretogo.html                      Original static HTML reference (No More To-Go)
```

## Getting started

```bash
npm install
npm run render             # builds TypeScript then renders all templates to dist/
npm run render:hackernoon  # renders only the Hacker Noon template
npm run render:template    # renders only the No More To-Go template
```

### Rendered output locations

| Command | Output file | Template |
|---|---|---|
| `npm run render` | `dist/rendered-email.html` | Generic newsletter |
| `npm run render` | `dist/rendered-hackernoon.html` | Hacker Noon newsletter |
| `npm run render` | `dist/rendered-nomoretogo.html` | No More To-Go newsletter |
| `npm run render:hackernoon` | `generated/hackernoon-email.html` | Hacker Noon newsletter |
| `npm run render:template` | `generated/nomoretogo-email.html` | No More To-Go newsletter |

Open any of the output files in a browser to preview the email.

> **CI:** A GitHub Actions workflow (`.github/workflows/render-email-template.yml`) runs on every push and pull request. It builds the project, renders both the Hacker Noon and No More To-Go templates, and uploads the resulting HTML files as a `rendered-email-html` artifact.

---

## Hacker Noon template

Ported from `hackernoon.html`. The template is structured as a **modular folder** (`src/templates/hackernoon/`) where each Mailchimp template zone is a separate section file. The top-level `hackernoon-email.ts` is a backward-compatible re-export shim so existing imports keep working.

### Import and render

```ts
import '@lit-labs/ssr/lib/install-global-dom-shim.js';  // must come first
import { hackernoonEmailTemplate } from './templates/hackernoon-email.js';
import { hackernoonRenderToString } from './renderer.js';
import type { HackernoonEmailData } from './types.js';

const data: HackernoonEmailData = {
  title: 'The Secrets of High-Performing DevOps Teams',
  preheaderText: 'A short sentence shown in the email client preview pane…',
  year: new Date().getFullYear(),
};

const template = hackernoonEmailTemplate(data);
const html = hackernoonRenderToString(template, data);
// write `html` to a file or send via your ESP
```

Or use the dedicated render script to write `generated/hackernoon-email.html`:

```bash
npm run render:hackernoon
```

### `HackernoonEmailData` shape

| Field | Type | Description |
|---|---|---|
| `title` | `string` | Main article headline rendered as `<h1>` |
| `preheaderText` | `string` | Hidden preview text shown in email client inbox lists |
| `year` | `number` | Copyright year in the footer |

All other content (sponsor card, article body, social links) is static and preserved verbatim from the original `hackernoon.html` reference file.

### Template sections

The body template is composed from four section files inside `src/templates/hackernoon/sections/`:

| Section file | Email zone | Dynamic fields |
|---|---|---|
| `logo.section.ts` | Top logo banner (`templatePreheader`) | — |
| `header.section.ts` | Sponsor card + article content (`templateHeader`) | `data.title` |
| `body.section.ts` | Closing divider + bottom logo (`templateBody`) | — |
| `footer.section.ts` | Social icons + copyright (`templateFooter`) | `data.year` |

Constants for shared URLs (brand logo, meme GIFs, Mailchimp social icons, Bridgecrew sponsor) live in `src/templates/hackernoon/constants.ts`.

---

## How it works — a detailed walkthrough

### 1. The `html` tagged-template literal

Lit's `html` tag is a JavaScript [tagged template literal](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#tagged_templates). When the JavaScript engine evaluates a tagged template, it calls the tag function with two arguments:

- an array of the **static string parts** (the bits between your `${…}` expressions)
- the **dynamic values** you interpolated

```ts
// Under the hood, the JS engine calls:
//   html(["<h2>Hello, ", "! 👋</h2>"], data.recipientName)
html`<h2>Hello, ${data.recipientName}! 👋</h2>`
```

Lit records both the static strings and the dynamic values in a lightweight `TemplateResult` object. Crucially, **no DOM nodes are created yet** — the `TemplateResult` is just a description of what to render. The actual HTML string is only produced later, when you pass it to the SSR renderer.

---

### 2. Composing sub-templates

Because `html` returns a plain value (`TemplateResult`), you can interpolate one template inside another. That is how the newsletter's article list is built: a small `articleTemplate` function returns a `TemplateResult` for a single row, and the parent template maps over the articles array:

```ts
// src/templates/newsletter.ts

function articleTemplate(article: ArticleItem): TemplateResult {
  return html`
    <div class="article-item">
      <img src="${article.imageUrl}" alt="${article.imageAlt}" />
      <div>
        <h4><a href="${article.url}">${article.title}</a></h4>
        <p>${article.excerpt}</p>
      </div>
    </div>
  `;
}

export function newsletterEmailTemplate(data: EmailData): TemplateResult {
  return html`
    <div class="email-wrapper">
      <!-- … other sections … -->
      <div class="articles">
        <h3>Top Stories This Month</h3>
        ${data.articles.map(articleTemplate)}   <!-- array of TemplateResults -->
      </div>
    </div>
  `;
}
```

The SSR renderer knows how to walk a nested tree of `TemplateResult` objects and flatten everything into a single HTML string.

---

### 3. The DOM shim — running Lit in Node.js

Lit was designed for browsers. It references browser globals like `Element`, `HTMLElement`, `document`, and `window`. When you run Lit in Node.js those globals do not exist. `@lit-labs/ssr` ships a minimal shim that defines just enough of the DOM API to let the SSR renderer work:

```ts
// src/index.ts  — must be imported before any lit or lit-ssr code
import '@lit-labs/ssr/lib/install-global-dom-shim.js';
```

The shim only stubs out the subset of the DOM that Lit itself touches internally. It is **not** a full DOM implementation — don't try to manipulate real DOM nodes with it. Its only job is to stop Lit from crashing when it looks for `window.customElements` or `HTMLElement`.

---

### 4. The rendering pipeline

Once the template tree is assembled, it flows through three stages inside `renderToString()` in `src/renderer.ts`:

#### Stage 1 — `render()` produces a lazy iterable

```ts
import { render } from '@lit-labs/ssr';

const renderResult = render(template);
// renderResult is a RenderResult — a synchronous Iterable<string | Promise<RenderResult>>
```

`render()` does not immediately produce a string. It returns a lazy iterator that yields **string chunks** (and, for async templates, Promises). This design supports streaming: a web server can pipe chunks to the response as they are produced without waiting for the entire template to be ready.

#### Stage 2 — `collectResultSync()` joins the chunks

```ts
import { collectResultSync } from '@lit-labs/ssr/lib/render-result.js';

const rawBodyContent = collectResultSync(renderResult);
```

`collectResultSync` walks the iterator, calls any thunks it encounters, concatenates all the string chunks, and returns a single string. It throws if any chunk is a `Promise` — for that case you would use the async `collectResult` instead (see [Async templates](#async-templates) below).

#### Stage 3 — strip Lit's hydration markers

The raw string coming out of stage 2 contains HTML comments that Lit injects to mark dynamic sections for client-side hydration:

```html
<!-- what collectResultSync actually produces -->
<h2>Hello, <!--lit-part-->John Doe<!--/lit-part-->! 👋</h2>
<img <!--lit-node 4-->src="https://…" alt="MyBrand logo" />
```

These markers are essential when Lit hydrates a server-rendered page in a browser, but they are **meaningless in email** — every email client would render them as visible text or garbled markup. So we strip them with a simple regex pass:

```ts
// src/renderer.ts
function stripLitMarkers(html: string): string {
  return html
    .replace(/<!--lit-part[^>]*-->/g, '')
    .replace(/<!--\/lit-part-->/g, '')
    .replace(/<!--lit-node[^>]*-->/g, '');
}
```

After stripping, the snippet above becomes the expected clean markup:

```html
<h2>Hello, John Doe! 👋</h2>
<img src="https://…" alt="MyBrand logo" />
```

---

### 5. Why `<title>` and `<style>` live outside the Lit template

HTML defines a set of [raw-text elements](https://html.spec.whatwg.org/#raw-text-elements) — `<script>` and `<style>` — plus [escapable raw-text elements](https://html.spec.whatwg.org/#escapable-raw-text-elements) like `<title>` and `<textarea>`. Parsers treat the **inline content** of these elements as raw character data rather than normal child nodes (child elements are not parsed inside them).

Lit SSR parses the template's static HTML string with an HTML5 parser to locate expression markers. When it encounters a raw-text element, the parser switches into a mode where it does not look for child nodes — so Lit's expression markers inside `<title>` are invisible to it. The marker count tracked internally ends up mismatched against the number of values in the template, and the renderer throws:

```
Error: Unexpected final partIndex: 0 !== 1 while processing the following template:
  <html>
    <head>
      <title>${...} – Monthly Newsletter</title>   ← expression never found
      …
```

The fix is to keep the Lit template responsible only for the `<body>` content (where all elements are normal flow content), and build the `<head>` — including `<title>` and `<style>` — as a plain JavaScript template string in `renderToString()`:

```ts
// src/renderer.ts
export function renderToString(
  template: TemplateResult,
  data: Pick<EmailData, 'brandName'>
): string {
  const rawBodyContent = collectResultSync(render(template));
  const bodyContent = stripLitMarkers(rawBodyContent);

  // <title> interpolation happens here in a plain JS template string,
  // completely bypassing Lit's HTML parser.
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <title>${data.brandName} – Monthly Newsletter</title>
    <style>${EMAIL_STYLES}</style>
  </head>
  <body>
    ${bodyContent}
  </body>
</html>`;
}
```

---

### 6. End-to-end data flow

Here is the full journey from input data to rendered `.html` file:

```
EmailData (src/index.ts)
      │
      │  newsletterEmailTemplate(data)
      ▼
TemplateResult          ← Lit html`` tag; no DOM yet
      │
      │  render(template)           [from @lit-labs/ssr]
      ▼
RenderResult            ← lazy iterable of string chunks + thunks
      │
      │  collectResultSync(renderResult)
      ▼
raw HTML string         ← includes <!--lit-part--> markers
      │
      │  stripLitMarkers(raw)
      ▼
clean body HTML         ← pure HTML, no Lit comments
      │
      │  wrap in document shell (renderToString)
      ▼
complete .html file     ← DOCTYPE + <head> + <body> → dist/rendered-email.html
```

---

### 7. The `EmailData` type contract

All data passed to the template is captured in two TypeScript interfaces (`src/types.ts`):

```ts
interface EmailData {
  recipientName: string;   // personalisation — "Hello, John Doe!"
  brandName: string;       // used in header, footer, and <title>
  logoUrl: string;         // src of the header logo <img>
  heroSubtitle: string;    // paragraph beneath the greeting
  bodyText: string;        // main body copy
  ctaLabel: string;        // button text
  ctaUrl: string;          // button href
  articles: ArticleItem[]; // list of featured stories
  year: number;            // footer copyright year
  unsubscribeUrl: string;
  privacyUrl: string;
  contactUrl: string;
}

interface ArticleItem {
  imageUrl: string;   // thumbnail src
  imageAlt: string;   // thumbnail alt text
  title: string;      // headline, rendered as a link
  excerpt: string;    // short description
  url: string;        // headline href
}
```

TypeScript enforces that every field is provided before the template is called, giving you a compile-time safety net instead of a runtime "undefined is not a string" surprise.

---

## Extending

### Add a new email template

Create a new file in `src/templates/` that exports a function returning a `TemplateResult`, mirroring the pattern in `newsletter.ts`:

```ts
// src/templates/transactional.ts
import { html, TemplateResult } from 'lit';

export interface TransactionalData { … }

export function transactionalTemplate(data: TransactionalData): TemplateResult {
  return html`
    <div class="email-wrapper">
      …
    </div>
  `;
}
```

Then call it from your entry point, pass the result through `renderToString`, and write the output file.

### Async templates

If a template contains async directives (e.g., fetching data inside a directive), replace `collectResultSync` with the async equivalent:

```ts
import { collectResult } from '@lit-labs/ssr/lib/render-result.js';

const bodyContent = await collectResult(render(template));
```

### Inline CSS for maximum email-client compatibility

Most email clients do not support `<style>` blocks or `<link>` stylesheets reliably. The safest approach is to inline all CSS into `style=""` attributes before sending. You can pipe the output through [`juice`](https://github.com/Automattic/juice):

```ts
import juice from 'juice';

const inlined = juice(renderToString(template, data));
// send `inlined` via your ESP
```

---

## Scalable template organization

Both the **Hacker Noon** and **No More To-Go** templates are already structured using the modular pattern described below. When you add new templates, follow the same conventions.

### Folder structure (implemented)

```text
src/
  templates/
    hackernoon/                       # one folder per template
      index.ts                        # public entry — exports hackernoonEmailTemplate()
      types.ts                        # re-exports template-specific data model
      constants.ts                    # image base URLs, sponsor URLs, icon paths
      sections/
        logo.section.ts
        header.section.ts
        body.section.ts
        footer.section.ts
    nomoretogo/
      index.ts                        # public entry — exports nomoretogoEmailTemplate()
      types.ts
      constants.ts
      sections/
        logo.section.ts
        nav.section.ts
        intro.section.ts
        recipe-grid.section.ts
        recipe-grid/
          recipe-row.ts
        cta.section.ts
        prep-info.section.ts
        community.section.ts
        amazon.section.ts
        footer.section.ts
    hackernoon-email.ts               # re-export shim (backward compat)
    nomoretogo-email.ts               # re-export shim (backward compat)
    newsletter.ts                     # example of a simple single-file template
```

### Design rules

1. **One section = one file** — keep each section under ~200 lines to stay readable.
2. **`index.ts` is a composer only** — the main template file just imports and assembles sections in order; no raw HTML markup lives there.
3. **Promote reusable parts to `shared/blocks/`** — CTA buttons, footers, date headers, and social rows that appear in multiple templates belong in `shared/` (not yet created, but the right place to add them as the library grows).
4. **Separate content model from rendering** — use `types.ts` for data contracts.
5. **No magic constants in section files** — image base URLs, spacing values, and brand colours go in `constants.ts`.
6. **Test per section and snapshot the full template** — unit-test individual section helpers; keep at least one snapshot test of the assembled output to catch regressions when refactoring.
