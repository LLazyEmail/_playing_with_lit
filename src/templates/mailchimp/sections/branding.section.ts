import { html, TemplateResult } from 'lit';
import type { MailchimpEmailData } from '../types.js';

/**
 * Renders the dark top-bar branding row for the Mailchimp-style email.
 *
 * Contains the brand name on the left and up to four navigation links on the
 * right (hidden on mobile via `.mb_hide`).
 *
 * @param data - Requires `brandName` and `navLinks`.
 */
export function renderBrandingSection(
  data: Pick<MailchimpEmailData, 'brandName' | 'navLinks'>
): TemplateResult {
  return html`
    <tr>
      <td align="center" valign="top">
        <table border="0" cellpadding="0" cellspacing="0" width="600" class="full_width">
          <tr>
            <td valign="top" bgcolor="#30363d" class="branding">
              <table border="0" cellpadding="0" cellspacing="0" width="100%" class="full_width">
                <tr>
                  <td align="left" valign="top" width="150" class="brandname">${data.brandName}</td>
                  <td class="mb_hide" align="right" valign="middle">
                    ${data.navLinks.map(
                      link => html`<a href="${link.url}" class="nav-link">${link.label}</a>`
                    )}
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>`;
}
