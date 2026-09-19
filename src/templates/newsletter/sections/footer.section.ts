import { html, type TemplateResult } from 'lit';
import type { EmailData } from '../types.js';

/** Renders subscription notice, legal links, and copyright. */
export function renderFooterSection(
  data: Pick<
    EmailData,
    'brandName' | 'unsubscribeUrl' | 'privacyUrl' | 'contactUrl' | 'year'
  >
): TemplateResult {
  return html`
        <!-- Footer -->
        <div class="footer">
          <p>
            You received this email because you subscribed to
            ${data.brandName} updates.
          </p>
          <p>
            <a href="${data.unsubscribeUrl}">Unsubscribe</a> &middot;
            <a href="${data.privacyUrl}">Privacy Policy</a> &middot;
            <a href="${data.contactUrl}">Contact Us</a>
          </p>
          <p>&copy; ${data.year} ${data.brandName}, Inc. All rights reserved.</p>
        </div>
  `;
}
