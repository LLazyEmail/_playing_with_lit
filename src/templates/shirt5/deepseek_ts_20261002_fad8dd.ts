import { html, type TemplateResult } from 'lit';
import {
  registerLogoPresenter,
  renderLogoBlock,
} from '../../shared/blocks/logo.js';
import { SHIRT5_ASSETS, SHIRT5_BRAND_URL, SHIRT5_KLAVIYO_QUERY } from '../constants.js';

/**
 * Renders the top brand banner row (maps to the first `.kmImageBlock`).
 * In shirt5.html the Buck Mason logo is inside the hero image itself,
 * so this section renders that hero and nothing else.
 */
function presentShirt5Logo(): TemplateResult {
  return html`
    <table
      border="0"
      cellpadding="0"
      cellspacing="0"
      class="kmImageBlock"
      width="100%"
      style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;table-layout:fixed;min-width:100%"
    >
      <tbody class="kmImageBlockOuter">
        <tr>
          <td
            class="kmImageBlockInner"
            style="padding:9px 0 9px 0;background-color:#FFFFFF;"
            valign="top"
          >
            <table
              align="left"
              border="0"
              cellpadding="0"
              cellspacing="0"
              class="kmImageContentContainer"
              width="100%"
              style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;table-layout:fixed;min-width:100%"
            >
              <tbody>
                <tr>
                  <td
                    class="kmImageContent"
                    valign="top"
                    style="padding:0 9px;font-size:0;text-align:center;"
                  >
                    <a
                      href=${SHIRT5_BRAND_URL + SHIRT5_KLAVIYO_QUERY}
                      target="_self"
                      style="word-wrap:break-word;max-width:100%;color:#000;font-weight:normal;text-decoration:underline"
                    >
                      <img
                        align="center"
                        alt="Buck Mason"
                        class="kmImage"
                        src=${SHIRT5_ASSETS.brandHero}
                        width="564"
                        style="border:0;height:auto;line-height:100%;outline:none;text-decoration:none;max-width:100%;display:inline;vertical-align:top;font-size:12px;width:100%;max-width:1200px;padding:0;border-width:0;"
                      />
                    </a>
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

registerLogoPresenter('shirt5', () => presentShirt5Logo());

export function renderLogoSection(): TemplateResult {
  return renderLogoBlock({ variant: 'shirt5' });
}