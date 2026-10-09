import { render } from '@lit-labs/ssr';
import { collectResultSync } from '@lit-labs/ssr/lib/render-result.js';
import {
  document,
  head,
  renderTemplate,
  type RenderOptions,
  type Template,
} from '@llazyemail/template-runtime-display';
import type { TemplateResult } from 'lit';

export interface EmailDocumentOptions {
  title: string;
  styles: string;
}

/**
 * Lit body compiler. `@llazyemail/template-runtime-display` renders string
 * parts, not Lit `TemplateResult`s, so this step stays local until templates
 * leave Lit. Hydration comments are stripped before the HTML is composed.
 */
export function renderEmailBody(template: TemplateResult): string {
  const rawBodyContent = collectResultSync(render(template));
  return stripLitMarkers(rawBodyContent);
}

/**
 * Simple document wrapper. The shell comes from
 * `@llazyemail/template-runtime-display` (`head` + `body` + `document`).
 */
export function renderEmailDocument(
  template: TemplateResult,
  options: EmailDocumentOptions
): string {
  const bodyContent = renderEmailBody(template);
  return document({
    headHtml: head({ title: options.title, styles: options.styles }),
    mainHtml: bodyContent,
  });
}

export function stripLitMarkers(html: string): string {
  return html
    .replace(/<!--lit-part[^>]*-->/g, '')
    .replace(/<!--\/lit-part-->/g, '')
    .replace(/<!--lit-node[^>]*-->/g, '');
}

/**
 * Render a runtime template and return its HTML. Throws when a part fails.
 */
export function renderRuntimeHtml<T>(
  template: Template<T>,
  props: T,
  options: RenderOptions<T> = {}
): string {
  const result = renderTemplate(template, props, options);
  if (!result.ok) {
    const failed = result.parts.find((part) => part.status === 'error');
    const detail = failed?.error?.message ?? result.composeError?.message ?? 'render failed';
    throw new Error(`Template "${result.templateId}" failed: ${detail}`);
  }
  return result.html;
}
