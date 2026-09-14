import type { TemplateResult } from 'lit';

/**
 * Turns typed campaign data into a Lit body `TemplateResult`.
 * Concrete engines live next to each template composer.
 */
export abstract class TemplateEngine<T> {
  abstract compose(data: T): TemplateResult;
}
