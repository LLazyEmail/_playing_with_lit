import { html, type TemplateResult } from 'lit';
import { NEWSLETTER_HEADING } from '../constants.js';
import type { EmailData } from '../types.js';

/** Renders the brand logo and newsletter heading. */
export function renderHeaderSection(
  data: Pick<EmailData, 'logoUrl' | 'brandName'>
): TemplateResult {
  return html`
        <!-- Header -->
        <div class="header">
          <img src="${data.logoUrl}" alt="${data.brandName} logo" />
          <h1>${NEWSLETTER_HEADING}</h1>
        </div>
  `;
}
