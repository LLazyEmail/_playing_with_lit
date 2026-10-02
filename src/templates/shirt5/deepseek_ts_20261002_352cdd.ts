import { html, type TemplateResult } from 'lit';
import type { Shirt5EmailData } from '../types.js';
import { SHIRT5_PALETTE } from '../constants.js';

/**
 * Wraps the ordered shirt5 sections in the Klaviyo template chrome:
 * `#bodyTable` / `#bodyCell` outer tables, the `.templateContainer` /
 * `.templateContainerInner` non‑MSO div (or MSO table via conditionals),
 * and the `data-upload-file-url` / `data-upload-files-url` editor hooks.
 */
export function renderLayoutSection(
  data: Shirt5EmailData,
  logo: TemplateResult,
  header: TemplateResult,
  body: TemplateResult,
  footer: TemplateResult
): TemplateResult {
  return html`
    <div style="display:none !important;visibility:hidden;mso-hide:all;font-size:1px;color:#ffffff;line-height:1px;max-height:0;max-width:0;opacity:0;overflow:hidden;">${data.preheaderText}</div>
    <div style="display:none !important;visibility:hidden;mso-hide:all;font-size:1px;color:#ffffff;line-height:1px;max-height:0;max-width:0;opacity:0;overflow:hidden;">${data.preheaderSpacer ?? ''}</div>

    <center>
      <table
        align="center"
        border="0"
        cellpadding="0"
        cellspacing="0"
        id="bodyTable"
        width="100%"
        data-upload-file-url="/ajax/email-editor/file/upload"
        data-upload-files-url="/ajax/email-editor/files/upload"
        style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;table-layout:auto;padding:0;background-color:${SHIRT5_PALETTE.pageBg};height:100%;margin:0;width:100%"
      >
        <tbody>
          <tr>
            <td
              align="center"
              id="bodyCell"
              valign="top"
              style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;table-layout:auto;padding-top:5px;padding-left:20px;padding-bottom:20px;padding-right:20px;border-top:0;height:100%;margin:0;width:100%"
            >
              <!--[if !mso]><!-->
              <div
                class="templateContainer"
                style="border:0 none #aaa;background-color:${SHIRT5_PALETTE.pageBg};border-radius:0;display:table;width:600px"
              >
                <div class="templateContainerInner" style="padding:0">
              <!--<![endif]-->

              <!--[if mso]>
              <table border="0" cellpadding="0" cellspacing="0" class="templateContainer" width="600" style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;">
                <tbody><tr>
                  <td class="templateContainerInner" style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;">
              <![endif]-->

              <table
                border="0"
                cellpadding="0"
                cellspacing="0"
                width="100%"
                style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;table-layout:fixed"
              >
                <tr>
                  <td
                    align="center"
                    valign="top"
                    style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;table-layout:fixed"
                  >
                    <table
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      class="templateRow"
                      width="100%"
                      style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;table-layout:fixed"
                    >
                      <tbody>
                        <tr>
                          <td
                            class="rowContainer kmFloatLeft"
                            valign="top"
                            style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;table-layout:fixed"
                          >
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