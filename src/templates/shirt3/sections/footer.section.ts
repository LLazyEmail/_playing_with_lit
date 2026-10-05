import { html, type TemplateResult } from 'lit';
import type { Shirt3EmailData } from '../types.js';
import { SHIRT3_PALETTE } from '../constants.js';

/**
 * Renders the legal / unsubscribe footer.
 * The tail of shirt3.html was truncated; extend as needed once you can
 * see the real markup (social row, preferences, physical address, etc.).
 */
export function renderFooterSection(
  data: Pick<Shirt3EmailData, 'footer'>
): TemplateResult {
  return html`
    <table
      align="center"
      cellpadding="0"
      cellspacing="0"
      border="0"
      role="presentation"
      bgcolor=${SHIRT3_PALETTE.bodyBg}
      style="width:640px;margin:0 auto;"
      class="full footer"
    >
      <tr>
        <td
          align="center"
          style="padding:30px 20px;font-family:${SHIRT3_PALETTE.bodyFont};font-size:12px;line-height:19px;color:${SHIRT3_PALETTE.navy};"
        >
          <p style="margin:0 0 6px 0;">
            © ${data.footer.year} ${data.footer.brandName}
          </p>
          <p style="margin:0 0 6px 0;">${data.footer.addressLine}</p>
          <p style="margin:0;">
            <a
              href=${data.footer.unsubscribe.url}
              style="color:${SHIRT3_PALETTE.navy};text-decoration:underline;"
            >${data.footer.unsubscribe.label}</a>
            &nbsp;·&nbsp;
            <a
              href=${data.footer.preferences.url}
              style="color:${SHIRT3_PALETTE.navy};text-decoration:underline;"
            >${data.footer.preferences.label}</a>
          </p>
        </td>
      </tr>
    </table>
  `;
}