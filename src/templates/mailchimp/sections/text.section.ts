import { html, TemplateResult } from 'lit';
import type { MailchimpEmailData } from '../types.js';

/**
 * Renders the main text content row for the Mailchimp-style email.
 *
 * Contains a top-level heading (H1) and a body paragraph.
 *
 * @param data - Requires `contentHeading` and `contentBody`.
 */
export function renderTextSection(
  data: Pick<MailchimpEmailData, 'contentHeading' | 'contentBody'>
): TemplateResult {
  return html`
    <tr>
      <td align="center" valign="top">
        <table border="0" cellpadding="0" cellspacing="0" width="600" class="full_width">
          <tr>
            <td align="left" valign="top" bgcolor="#ffffff" class="full_width_text">
              <h1>${data.contentHeading}</h1>
              <p>${data.contentBody}</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>`;
}
