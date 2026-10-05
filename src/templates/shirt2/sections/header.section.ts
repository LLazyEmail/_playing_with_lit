import { html, type TemplateResult } from 'lit';
import type { Shirt2EmailData } from '../types.js';

/**
 * Renders the hero row:
 *   eyebrow ("Good News: We Saved Your Picks ;)")
 *   headline ("And You Get Them For 15% Off")
 *   CTA ("Check Out With 15% Off")
 */
export function renderHeaderSection(
  data: Pick<Shirt2EmailData, 'hero'>
): TemplateResult {
  return html`
    <table
      align="center"
      cellpadding="0"
      cellspacing="0"
      border="0"
      role="presentation"
      bgcolor="#ffffff"
      style="width:640px;margin:0 auto;"
      class="full hero"
    >
      <tr>
        <td align="center" class="yahooHero" style="padding:50px 0;">
          <table
            align="center"
            cellpadding="0"
            cellspacing="0"
            border="0"
            role="presentation"
            style="width:90%;margin:0 auto;"
          >
            <tr>
              <td align="center" style="padding:0 0 20px;">
                <h2
                  style="margin:0;font-weight:normal;font-family:Helvetica, Arial, sans-serif, LinetoCircularWeb;font-size:21px;mso-line-height-rule:exactly;line-height:25px;-webkit-font-smoothing:antialiased;"
                >
                  <a
                    href=${data.hero.cta.url}
                    target="_blank"
                    style="text-decoration:none;color:#F8421E;"
                  >${data.hero.eyebrow}</a>
                </h2>
              </td>
            </tr>
            <tr>
              <td align="center">
                <h1
                  style="margin:0;font-weight:normal;font-family:'Courier New', Courier, monospace, PitchSansWeb;font-size:40px;mso-line-height-rule:exactly;line-height:45px;-webkit-font-smoothing:antialiased;letter-spacing:-1.33px;"
                >
                  <a
                    href=${data.hero.cta.url}
                    target="_blank"
                    style="text-decoration:none;color:#0F1B55;"
                  >${data.hero.headline}</a>
                </h1>
              </td>
            </tr>
            <tr>
              <td align="center" class="pad" style="padding:35px 0 0;">
                <table
                  align="center"
                  cellpadding="0"
                  cellspacing="0"
                  border="0"
                  bgcolor="#1203B0"
                  role="presentation"
                  style="width:260px;margin:0 auto;"
                  class="cta"
                >
                  <tr>
                    <td align="center">
                      <table
                        align="center"
                        cellpadding="0"
                        cellspacing="0"
                        border="0"
                        role="presentation"
                        style="width:100%;margin:0 auto;"
                      >
                        <tr>
                          <td
                            align="center"
                            valign="middle"
                            height="50"
                            style="text-align:center;font-family:Helvetica, Arial, sans-serif, LinetoCircularWeb;font-size:15px;-webkit-font-smoothing:antialiased;letter-spacing:1px;"
                          >
                            <a
                              href=${data.hero.cta.url}
                              style="color:#fffffe;text-decoration:none;"
                              target="_blank"
                            >${data.hero.cta.label}</a>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  `;
}