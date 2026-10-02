import { html, type TemplateResult } from 'lit';
import type { Shirt1EmailData } from '../types.js';
import { SHIRT1_PALETTE } from '../constants.js';

/**
 * Wraps the ordered shirt1 sections in the Klaviyo-style template chrome
 * (body table / body cell / templateContainer + MSO conditional wrappers).
 */
export function renderLayoutSection(
  data: Shirt1EmailData,
  logo: TemplateResult,
  header: TemplateResult,
  body: TemplateResult,
  footer: TemplateResult
): TemplateResult {
  return html`
    <!-- preheader -->
    <div
      style="display:none !important;visibility:hidden;mso-hide:all;font-size:1px;color:#ffffff;line-height:1px;max-height:0;max-width:0;opacity:0;overflow:hidden;"
    >${data.preheaderText}</div>

    <center>
      <table
        align="center"
        border="0"
        cellpadding="0"
        cellspacing="0"
        id="bodyTable"
        width="100%"
        style="border-collapse:collapse;height:100%;margin:0;padding:0;width:100%;background-color:${SHIRT1_PALETTE.pageBg};"
      >
        <tbody>
          <tr>
            <td
              align="center"
              id="bodyCell"
              valign="top"
              style="height:100%;margin:0;padding:50px 20px 20px;width:100%;background-color:${SHIRT1_PALETTE.pageBg};"
            >
              <!--[if !mso]><!-->
              <div class="templateContainer" style="display:table; width:600px;">
                <div class="templateContainerInner">
              <!--<![endif]-->

              <!--[if mso]>
              <table border="0" cellpadding="0" cellspacing="0" class="templateContainer" width="600" style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;">
                <tbody><tr>
                  <td class="templateContainerInner" style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;">
              <![endif]-->

              <table border="0" cellpadding="0" cellspacing="0" width="100%">
                <tbody>
                  <tr>
                    <td align="center" valign="top">
                      <table border="0" cellpadding="0" cellspacing="0" class="templateRow" width="100%">
                        <tbody>
                          <tr>
                            <td class="rowContainer kmFloatLeft" valign="top">
                              ${logo}
                              ${header}
                              ${body}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                  ${footer}
                </tbody>
              </table>

              <!--[if mso]>
                  </td>
                </tr></tbody>
              </table>
              <![endif]-->

              <!--[if !mso]><!-->
                </div>
              </div>
              <!--<![endif]-->
            </td>
          </tr>
        </tbody>
      </table>
    </center>
  `;
}