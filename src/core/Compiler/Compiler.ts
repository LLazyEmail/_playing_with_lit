import type { TemplateResult } from 'lit';
import { renderEmailBody } from '../../rendering/render-email-document.js';

/**
 * Compiles a Lit body template to an HTML fragment (no document shell).
 * Document wrapping stays on each template's `*RenderToString`.
 */
export class Compiler {
  compile(template: TemplateResult): string {
    return renderEmailBody(template);
  }
}
