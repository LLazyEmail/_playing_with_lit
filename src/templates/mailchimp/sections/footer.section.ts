import { html, TemplateResult } from 'lit';
import type { MailchimpEmailData } from '../types.js';

/**
 * Renders the three-column dark footer row for the Mailchimp-style email.
 *
 * Each of the three {@link FooterColumn} entries becomes its own narrow table
 * column containing a heading and a short description paragraph.
 *
 * @param data - Requires `footerColumns` (a fixed-length tuple of three columns).
 */
export function renderFooterSection(
  data: Pick<MailchimpEmailData, 'footerColumns'>
): TemplateResult {
  const [col1, col2, col3] = data.footerColumns;
  return html`
    <tr>
      <td align="center" width="100%" valign="top" class="footer">
        <table class="table-inner" align="center" border="0" cellpadding="0" cellspacing="0" width="600">
          <tr>
            <td bgcolor="#30363d" class="footer-inner" valign="top">
              <table class="table-full" align="left" border="0" cellpadding="0" cellspacing="0" width="31%">
                <tr>
                  <td valign="top" class="footer-col-first">
                    <h3>${col1.title}</h3>
                    <p>${col1.description}</p>
                  </td>
                </tr>
              </table>
              <table class="table-full" align="left" border="0" cellpadding="0" cellspacing="0" width="31%">
                <tr>
                  <td valign="top" class="footer-col-second">
                    <h3>${col2.title}</h3>
                    <p>${col2.description}</p>
                  </td>
                </tr>
              </table>
              <table class="table-full" align="left" border="0" cellpadding="0" cellspacing="0" width="31%">
                <tr>
                  <td valign="top" class="footer-col-last">
                    <h3>${col3.title}</h3>
                    <p>${col3.description}</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>`;
}
