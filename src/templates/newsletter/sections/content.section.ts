import { html, type TemplateResult } from 'lit';
import { DIGEST_HEADING } from '../constants.js';
import type { EmailData } from '../types.js';

/** Renders the digest heading and body copy. */
export function renderContentSection(
  data: Pick<EmailData, 'bodyText'>
): TemplateResult {
  return html`
        <!-- Main Content -->
        <div class="content">
          <h3>${DIGEST_HEADING}</h3>
          <p>${data.bodyText}</p>
        </div>
  `;
}
