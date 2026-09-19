import { html, type TemplateResult } from 'lit';
import type { EmailData } from '../types.js';

/** Renders the primary call-to-action button. */
export function renderCtaSection(
  data: Pick<EmailData, 'ctaUrl' | 'ctaLabel'>
): TemplateResult {
  return html`
        <!-- CTA -->
        <div class="cta-container">
          <a href="${data.ctaUrl}" class="cta-button">${data.ctaLabel}</a>
        </div>
  `;
}
