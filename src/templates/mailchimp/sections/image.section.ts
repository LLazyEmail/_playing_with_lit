import { html, TemplateResult } from 'lit';
import type { MailchimpEmailData } from '../types.js';

/**
 * Renders the full-width hero image row for the Mailchimp-style email.
 *
 * @param data - Requires `heroImageUrl` and `heroImageAlt`.
 */
export function renderImageSection(
  data: Pick<MailchimpEmailData, 'heroImageUrl' | 'heroImageAlt'>
): TemplateResult {
  return html`
    <tr>
      <td align="center" width="100%" class="full_width_image">
        <table border="0" cellpadding="0" cellspacing="0" width="600" class="full_width">
          <tr>
            <td width="100%" valign="top">
              <img
                src="${data.heroImageUrl}"
                alt="${data.heroImageAlt}"
                width="600"
                style="max-width:600px; display:block; width:100%; height:auto;"
              />
            </td>
          </tr>
        </table>
      </td>
    </tr>`;
}
