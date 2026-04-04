import { html, TemplateResult } from 'lit';
import type { MailchimpEmailData } from '../types.js';

/**
 * Renders the disclaimer / compliance row for the Mailchimp-style email.
 *
 * Contains:
 *  - Company name and address
 *  - An unsubscribe link
 *  - An update-profile link
 *
 * @param data - Requires `companyName`, `companyAddress`, `unsubscribeUrl`,
 *               and `updateProfileUrl`.
 */
export function renderDisclaimerSection(
  data: Pick<
    MailchimpEmailData,
    'companyName' | 'companyAddress' | 'unsubscribeUrl' | 'updateProfileUrl'
  >
): TemplateResult {
  return html`
    <tr>
      <td align="center" valign="top">
        <table border="0" cellpadding="0" cellspacing="0" width="600" class="full_width">
          <tr>
            <td valign="top" class="disclaimer">
              <h5><b>${data.companyName}</b></h5>
              <p>${data.companyAddress}</p>
              <p>
                <a href="${data.updateProfileUrl}">Update your profile</a>
              </p>
              <p>
                <a href="${data.unsubscribeUrl}">Unsubscribe from future updates</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>`;
}
