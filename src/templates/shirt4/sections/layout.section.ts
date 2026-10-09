import { html, type TemplateResult } from 'lit';
import type { Shirt4EmailData } from '../types.js';
import { SHIRT4_PALETTE } from '../constants.js';

/**
 * Wraps the ordered shirt4 sections in the Ometria/Orlebar Brown shell:
 *   - a 600px max-width outer wrapper (MSO-guarded)
 *   - the "VIEW IN BROWSER" row
 *   - the 1px-bordered card that contains the top bar, logo, nav, body,
 *     and footer
 */
export function renderLayoutSection(
  data: Shirt4EmailData,
  logo: TemplateResult,
  header: TemplateResult,
  body: TemplateResult,
  footer: TemplateResult
): TemplateResult {
  return html`
    <div dir="ltr" lang="en" style="display:none;">${data.preheaderText}</div>

    <div
      aria-label="newsletter"
      aria-roledescription="email"
      dir="ltr"
      lang="en"
      role="article"
      style="font-family:Arial, sans-serif; font-size:medium; font-size:max(16px, 1rem); -webkit-font-smoothing:antialiased; -moz-osx-font-smoothing:grayscale; text-rendering:optimizeLegibility; line-break:normal; word-break:break-word;"
    >
      <!--[if true]>
      <table class="mso" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:600px;" align="center"><tr><td>
      <![endif]-->
      <div style="max-width:600px; margin:0 auto;">
        <div class="hide" style="padding:30px; text-align:center;">
          <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="margin:0 auto; min-width:100%; width:100%;">
            <tr>
              <td align="center" style="mso-padding-alt:30px 30px 30px 30px;">
                <a
                  class="tdn"
                  href="https://orlebarbrown.com"
                  style="color:#595959; font-size:12px; padding-bottom:4px; font-weight:normal; text-decoration:none; text-transform:none; border-bottom:1px solid #595959; text-align:center;"
                  target="_blank"
                >VIEW IN BROWSER</a>
              </td>
            </tr>
          </table>
        </div>
      </div>
      <!--[if true]>
      </td></tr></table>
      <![endif]-->

      <!--[if true]>
      <table class="mso" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:600px; border:1px solid #E9E9E9;" align="center"><tr><td>
      <![endif]-->
      <div style="max-width:600px; margin:0 auto; border:1px solid ${SHIRT4_PALETTE.cardBorder};">
        <div>
          ${header}
          ${logo}
          ${body}
          ${footer}
        </div>
      </div>
      <!--[if true]>
      </td></tr></table>
      <![endif]-->
    </div>
  `;
}