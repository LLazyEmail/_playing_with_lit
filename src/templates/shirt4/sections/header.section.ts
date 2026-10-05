import { html, type TemplateResult } from 'lit';
import type { Shirt4EmailData } from '../types.js';
import { SHIRT4_BRAND_URL, SHIRT4_PALETTE } from '../constants.js';

/**
 * Renders:
 *   - Black top bar with a 4px red stripe + returns message
 *   - Horizontal nav row (MENSWEAR · SWIM · POLOS)
 */
export function renderHeaderSection(
  data: Pick<Shirt4EmailData, 'topBar' | 'nav'>
): TemplateResult {
  return html`
    <table
      border="0"
      cellpadding="0"
      cellspacing="0"
      role="presentation"
      style="background-color:#000000; min-width:100%; width:100%;"
    >
      <tr>
        <td align="center">
          <table
            align="center"
            border="0"
            cellpadding="0"
            cellspacing="0"
            role="presentation"
            style="margin:0 auto; min-width:100%; width:100%;"
          >
            <tr>
              <td style="text-align:center;">
                <div
                  role="separator"
                  style="background-color:${data.topBar.stripColor}; line-height:4px; height:4px; font-size:4px; mso-line-height-rule:exactly;"
                > </div>
              </td>
            </tr>
          </table>
          <table
            align="center"
            border="0"
            cellpadding="0"
            cellspacing="0"
            role="presentation"
            style="margin:0 auto; min-width:90%; width:90%;"
          >
            <tr>
              <td align="center" style="padding-top:3px; padding-bottom:3px; mso-padding-alt:5px 0px 0px 0px;">
                <p style="color:#ffffff; font-size:12px; font-weight:bold;">
                  ${data.topBar.message}
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>

    <table
      border="0"
      cellpadding="0"
      cellspacing="0"
      role="presentation"
      style="background-color:${SHIRT4_PALETTE.pageBg}; min-width:100%; width:100%;"
    >
      <tr>
        <td align="center" style="padding-bottom:40px;">
          <table
            align="center"
            border="0"
            cellpadding="0"
            cellspacing="0"
            role="presentation"
            style="margin:0 auto;"
          >
            <tr>
              ${data.nav.map(
                (item, i) => html`
                  <td align="center">
                    <p style="color:#000000; font-size:16px; font-weight:bold; margin:0;">
                      <a
                        href=${item.url}
                        style="color:#000000; display:inline-block; text-decoration:none; word-break:normal;"
                        target="_blank"
                      ><strong>${item.label}</strong></a>
                    </p>
                  </td>
                  ${i < data.nav.length - 1
                    ? html`<td style="width:30px;"> </td>`
                    : ''}
                `
              )}
            </tr>
          </table>
        </td>
      </tr>
    </table>
  `;
}