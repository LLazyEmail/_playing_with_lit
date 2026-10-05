import { html, type TemplateResult } from 'lit';
import type { Shirt2EmailData } from '../types.js';
import { SHIRT2_PALETTE } from '../constants.js';

/**
 * Wraps the ordered shirt2 sections in the Alex Mill / Shopify-style
 * template chrome. Keeps the outer `<center>` + 640px card pattern from
 * `sandbox/shirt2.html` and the MSO conditional wrappers.
 */
export function renderLayoutSection(
  data: Shirt2EmailData,
  logo: TemplateResult,
  header: TemplateResult,
  body: TemplateResult,
  footer: TemplateResult
): TemplateResult {
  return html`
    <div
      class="ibx_no_webview"
      style="display:none !important;visibility:hidden;mso-hide:all;font-size:1px;color:#ffffff;line-height:1px;max-height:0;max-width:0;opacity:0;overflow:hidden;"
    >${data.preheaderText}</div>

    <table
      align="center"
      cellpadding="0"
      cellspacing="0"
      border="0"
      role="presentation"
      style="width:100%;background-color:${SHIRT2_PALETTE.bodyBg};"
    >
      <tr>
        <td align="center" valign="top">
          <!--[if gte mso 9]>
          <table align="center" border="0" cellspacing="0" cellpadding="0" width="640" style="width:640px;">
            <tr>
              <td align="center" valign="top" width="640" style="width:640px;">
          <![endif]-->

          ${logo}
          ${header}
          ${body}
          ${footer}

          <!--[if gte mso 9]>
              </td>
            </tr>
          </table>
          <![endif]-->
        </td>
      </tr>
    </table>
  `;
}