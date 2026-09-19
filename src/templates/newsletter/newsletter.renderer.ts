import type { EmailData } from '../../types.js';
import { Renderer } from '../../rendering/renderer.js';
import { newsletterEmailTemplate } from './index.js';
import { renderToString } from '../../validation/guarded-render.js';

/** Wraps the existing generic newsletter composer + guarded render. */
export class NewsletterRenderer extends Renderer<EmailData> {
  render(data: EmailData): string {
    const template = newsletterEmailTemplate(data);
    return renderToString(template, data);
  }
}
