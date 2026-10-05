import { html, type TemplateResult } from 'lit';
import type { Shirt1EmailData } from '../types.js';
import { SHIRT1_PALETTE } from '../constants.js';

/**
 * Renders the legal / unsubscribe footer row.
 * Kept intentionally minimal — extend with social icons or a preferences
 * link if the truncated portion of shirt1.html contains them.
 */
export function renderFooterSection(
  data: Pick<Shirt1EmailData, 'footer'>
): TemplateResult {
  return html`
    <table border="0" cellpadding="0" cellspacing="0" class="kmTextBlock" width="100%">
      <tbody class="kmTextBlockOuter">
        <tr>
          <td class="kmTextBlockInner" valign="top">
            <table align="left" border="0" cellpadding="0" cellspacing="0" class="kmTextContentContainer" width="100%">
              <tbody>
                <tr>
                  <td
                    class="kmTextContent"
                    style="font-size:11px;color:${SHIRT1_PALETTE.muted};padding:9px 18px;text-align:center;font-family:${SHIRT1_PALETTE.bodyFont};"
                    valign="top"
                  >
                    <p style="padding-bottom:4px; text-align:center;">
                      © ${data.footer.year} ${data.footer.brandName}
                    </p>
                    <p style="padding-bottom:4px; text-align:center;">
                      ${data.footer.addressLine}
                    </p>
                    <p style="padding-bottom:0; text-align:center;">
                      <a
                        href=${data.footer.unsubscribe.url}
                        style="color:${SHIRT1_PALETTE.text};font-weight:lighter;text-decoration:underline;"
                      >${data.footer.unsubscribe.label}</a>
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