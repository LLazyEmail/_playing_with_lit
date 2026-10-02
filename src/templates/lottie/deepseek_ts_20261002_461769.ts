import { html, type TemplateResult } from 'lit';
import type { LottieEmailData } from '../types.js';
import { LOTTIE_PALETTE } from '../constants.js';

/**
 * Renders the legal / unsubscribe footer.
 * The tail of lottie.html was truncated; extend as needed once you can
 * see the real Postcards footer markup.
 */
export function renderFooterSection(
  data: Pick<LottieEmailData, 'footer'>
): TemplateResult {
  return html`
    <table
      border="0"
      cellpadding="0"
      cellspacing="0"
      role="presentation"
      width="100%"
    >
      <tbody>
        <tr>
          <td
            align="center"
            bgcolor=${LOTTIE_PALETTE.cardBg}
            pc-default-class="pc-sm-p-35-25-30 pc-xs-p-25-20-20"
            pc-default-padding="40px 30px 40px"
            style="padding: 40px 30px 40px; background-color: ${LOTTIE_PALETTE.cardBg}"
            valign="top"
          >
            <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
              <tbody>
                <tr>
                  <td
                    align="center"
                    class="pc-fb-font"
                    style="padding: 0 5px 6px; font-family: 'Karla', Helvetica, Arial, sans-serif; font-size: 13px; line-height: 20px; color: #6e6e6e;"
                    valign="top"
                  >© ${data.footer.year} ${data.footer.brandName}</td>
                </tr>
                <tr>
                  <td
                    align="center"
                    class="pc-fb-font"
                    style="padding: 0 5px 6px; font-family: 'Karla', Helvetica, Arial, sans-serif; font-size: 13px; line-height: 20px; color: #6e6e6e;"
                    valign="top"
                  >${data.footer.addressLine}</td>
                </tr>
                <tr>
                  <td
                    align="center"
                    class="pc-fb-font"
                    style="padding: 0 5px; font-family: 'Karla', Helvetica, Arial, sans-serif; font-size: 13px; line-height: 20px; color: #6e6e6e;"
                    valign="top"
                  >
                    <a
                      href=${data.footer.unsubscribe.url}
                      style="color: #6e6e6e; text-decoration: underline;"
                    >${data.footer.unsubscribe.label}</a>
                    &nbsp;·&nbsp;
                    <a
                      href=${data.footer.preferences.url}
                      style="color: #6e6e6e; text-decoration: underline;"
                    >${data.footer.preferences.label}</a>
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