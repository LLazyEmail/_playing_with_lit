import { html, type TemplateResult } from 'lit';
import type { Shirt5EmailData } from '../types.js';
import { SHIRT5_PALETTE } from '../constants.js';

/**
 * Renders the legal / unsubscribe footer.
 * The tail of shirt5.html was truncated; extend as needed once you can
 * see the real Klaviyo footer markup.
 */
export function renderFooterSection(
  data: Pick<Shirt5EmailData, 'footer'>
): TemplateResult {
  return html`
    <table
      border="0"
      cellpadding="0"
      cellspacing="0"
      class="kmTextBlock"
      width="100%"
      style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;table-layout:fixed;min-width:100%"
    >
      <tbody class="kmTextBlockOuter">
        <tr>
          <td class="kmTextBlockInner" valign="top" style="padding-top:9px;">
            <table
              align="left"
              border="0"
              cellpadding="0"
              cellspacing="0"
              class="kmTextContentContainer"
              width="100%"
              style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;table-layout:fixed;min-width:100%"
            >
              <tbody>
                <tr>
                  <td
                    class="kmTextContent"
                    valign="top"
                    style="padding:9px 18px;color:${SHIRT5_PALETTE.text};font-family:Helvetica, Arial, sans-serif;font-size:12px;line-height:18px;text-align:center;"
                  >
                    <p style="padding-bottom:6px;text-align:center;">
                      © ${data.footer.year} ${data.footer.brandName}
                    </p>
                    <p style="padding-bottom:6px;text-align:center;">
                      ${data.footer.addressLine}
                    </p>
                    <p style="padding-bottom:0;text-align:center;">
                      <a
                        href=${data.footer.unsubscribe.url}
                        style="color:${SHIRT5_PALETTE.text};text-decoration:underline;"
                      >${data.footer.unsubscribe.label}</a>
                      &nbsp;·&nbsp;
                      <a
                        href=${data.footer.preferences.url}
                        style="color:${SHIRT5_PALETTE.text};text-decoration:underline;"
                      >${data.footer.preferences.label}</a>
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  `;
}