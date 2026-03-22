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
├── index.ts                    Entry point – sample data → rendered HTML files
├── renderer.ts                 renderToString() / hackernoonRenderToString()
├── types.ts                    EmailData / ArticleItem / HackernoonEmailData interfaces
└── templates/
    ├── newsletter.ts           Generic newsletter Lit body template
    └── hackernoon-email.ts     Hacker Noon newsletter Lit body template
hackernoon.html                 Original static HTML reference (Hacker Noon)
```

## Getting started

```bash
npm install
npm run render        # builds TypeScript then renders both email templates
```

Rendered output files:

| File | Template |
|---|---|
| `dist/rendered-email.html` | Generic newsletter |
| `dist/rendered-hackernoon.html` | Hacker Noon newsletter |

Open either file in a browser to preview the email.

---

## Hacker Noon template

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

### `HackernoonEmailData` shape

| Field | Type | Description |
|---|---|---|
| `title` | `string` | Main article headline rendered as `<h1>` |
| `preheaderText` | `string` | Hidden preview text shown in email client inbox lists |
| `year` | `number` | Copyright year in the footer |

All other content (sponsor card, article body, social links) is static and preserved verbatim from the original `hackernoon.html` reference file.

### Template sections

The body template is split into four section helpers for readability:

| Helper | Email section | Dynamic fields |
|---|---|---|
| `renderPreheaderSection()` | Top logo banner | — |
| `renderHeaderSection(data)` | Sponsor card + article content | `data.title` |
| `renderBodySection()` | Closing divider + bottom logo | — |
| `renderFooterSection(data)` | Social icons + copyright | `data.year` |

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
