import { html, type TemplateResult } from 'lit';
import type { Shirt4EmailData } from '../types.js';
import { SHIRT4_PALETTE } from '../constants.js';

/**
 * Renders the legal / unsubscribe footer.
 * The tail of shirt4.html was truncated; extend as needed once you can
 * see the real markup (social icons, store locator, preferences, etc.).
 */
export function renderFooterSection(
  data: Pick<Shirt4EmailData, 'footer'>
): TemplateResult {
  return html`
    <table
      border="0"
      cellpadding="0"
      cellspacing="0"
      role="presentation"
      style="background-color:${SHIRT4_PALETTE.pageBg}; min-width:100%; width:100%;"
    >
      <tr>
        <td align="center" class="plr15" style="padding:30px 30px 40px;">
          <p style="color:${SHIRT4_PALETTE.muted}; font-size:12px; line-height:18px; margin:0 0 6px 0;">
            © ${data.footer.year} ${data.footer.brandName}
          </p>
          <p style="color:${SHIRT4_PALETTE.muted}; font-size:12px; line-height:18px; margin:0 0 6px 0;">
            ${data.footer.addressLine}
          </p>
          <p style="color:${SHIRT4_PALETTE.muted}; font-size:12px; line-height:18px; margin:0;">
            <a
              href=${data.footer.unsubscribe.url}
              style="color:${SHIRT4_PALETTE.muted}; text-decoration:underline;"
            >${data.footer.unsubscribe.label}</a>
            &nbsp;·&nbsp;
            <a
              href=${data.footer.preferences.url}
              style="color:${SHIRT4_PALETTE.muted}; text-decoration:underline;"
            >${data.footer.preferences.label}</a>
          </p>
        </td>
      </tr>
    </table>
  `;
}