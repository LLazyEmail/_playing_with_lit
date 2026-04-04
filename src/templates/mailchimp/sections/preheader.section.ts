import { html, TemplateResult } from 'lit';
import type { MailchimpEmailData } from '../types.js';

/**
 * Renders the hidden preheader row for the Mailchimp-style email.
 *
 * Contains:
 *  - A short preview text string visible in email-client inboxes.
 *  - A "View this e-mail in your browser" link on the right.
 *
 * @param data - Requires `preheaderText` and `viewInBrowserUrl`.
 */
export function renderPreheaderSection(
  data: Pick<MailchimpEmailData, 'preheaderText' | 'viewInBrowserUrl'>
): TemplateResult {
  return html`
    <tr class="mb_hide" style="display:table-row;">
      <td align="center" valign="top">
        <table border="0" cellpadding="0" cellspacing="0" width="600" class="full_width">
          <tr>
            <td valign="top" class="preheader">
              <table border="0" cellpadding="0" cellspacing="0" width="100%" class="full_width">
                <tr>
                  <td valign="top" align="left">
                    <p>${data.preheaderText}</p>
                  </td>
                  <td valign="middle" align="right">
                    <a href="${data.viewInBrowserUrl}" target="_blank">View this e-mail in your browser</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>`;
}
