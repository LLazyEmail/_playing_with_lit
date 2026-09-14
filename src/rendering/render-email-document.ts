import { render } from '@lit-labs/ssr';
import { collectResultSync } from '@lit-labs/ssr/lib/render-result.js';
import type { TemplateResult } from 'lit';

export interface EmailDocumentOptions {
  title: string;
  styles: string;
}

/**
 * Shared Lit SSR plumbing: render → collect → strip hydration markers.
 * Document shells stay per-template so doctype / MSO / font tags do not change.
 */
export function renderEmailBody(template: TemplateResult): string {
  const rawBodyContent = collectResultSync(render(template));
  return stripLitMarkers(rawBodyContent);
}

/**
 * Optional simple document wrapper for templates whose shell is just
 * title + styles + body (Zurb uses this; HN/NMTG/Mailchimp keep custom shells).
 */
export function renderEmailDocument(
  template: TemplateResult,
  options: EmailDocumentOptions
): string {
  const bodyContent = renderEmailBody(template);
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${options.title}</title>
    <style>${options.styles}</style>
  </head>
  <body>
    ${bodyContent}
  </body>
</html>`;
}

export function stripLitMarkers(html: string): string {
  return html
    .replace(/<!--lit-part[^>]*-->/g, '')
    .replace(/<!--\/lit-part-->/g, '')
    .replace(/<!--lit-node[^>]*-->/g, '');
}
