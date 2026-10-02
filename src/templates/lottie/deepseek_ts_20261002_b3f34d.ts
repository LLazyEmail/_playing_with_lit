import { html, type TemplateResult } from 'lit';
import type { LottieEmailData } from '../types.js';
import { LOTTIE_PALETTE } from '../constants.js';

/**
 * Wraps the ordered lottie sections in the Postcards shell:
 * the outer `.pc-email-body` bg table, the `.pc-email-container` 620px
 * centered wrapper, and the MSO conditional 620px table.
 *
 * The Preheader and MSO conditionals in the source are URL‑encoded comments
 * (`<!--{C}%3C!%2D%2D...`). We keep them verbatim so the Postcards editor
 * can round‑trip the file without re‑mangling them.
 */
export function renderLayoutSection(
  data: LottieEmailData,
  logo: TemplateResult,
  header: TemplateResult,
  body: TemplateResult,
  footer: TemplateResult
): TemplateResult {
  return html`
    <table
      bgcolor=${LOTTIE_PALETTE.pageBg}
      border="0"
      cellpadding="0"
      cellspacing="0"
      class="pc-email-body"
      role="presentation"
      style="table-layout: fixed;"
      width="100%"
    >
      <tbody>
        <tr>
          <td align="center" class="pc-email-body-inner" valign="top">
            <!--{C}%3C!%2D%2D%7BC%7D%253C!%252D%252D%257BC%257D%25253C!%25252D%25252D%25255Bif%252520gte%252520mso%2525209%25255D%25253E%25253Cv%25253Abackground%252520xmlns%25253Av%25253D%252522urn%25253Aschemas-microsoft-com%25253Avml%252522%252520fill%25253D%252522t%252522%25253E%25253Cv%25253Afill%252520type%25253D%252522tile%252522%252520src%25253D%252522%252522%252520color%25253D%252522%252523f4f4f4%252522%25252F%25253E%25253C%25252Fv%25253Abackground%25253E%25253C!%25255Bendif%25255D%25252D%25252D%25253E%252D%252D%253E%2D%2D%3E-->

            <!--{C}%3C!%2D%2D%7BC%7D%253C!%252D%252D%257BC%257D%25253C!%25252D%25252D%25255Bif%252520(gte%252520mso%2525209)%25257C(IE)%25255D%25253E%25253Ctable%252520width%25253D%252522620%252522%252520align%25253D%252522center%252522%252520border%25253D%2525220%252522%252520cellspacing%25253D%2525220%252522%252520cellpadding%25253D%2525220%252522%252520role%25253D%252522presentation%252522%25253E%25253Ctr%25253E%25253Ctd%252520width%25253D%252522620%252522%252520align%25253D%252522center%252522%252520valign%25253D%252522top%252522%25253E%25253C!%25255Bendif%25255D%25252D%25252D%25253E%252D%252D%253E%2D%2D%3E-->

            <table
              align="center"
              border="0"
              cellpadding="0"
              cellspacing="0"
              class="pc-email-container"
              role="presentation"
              style="margin: 0 auto; max-width: 620px;"
              width="100%"
            >
              <tbody>
                <tr>
                  <td align="left" style="padding: 0 10px;" valign="top">
                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                      <tbody>
                        <tr>
                          <td height="20" style="font-size: 1px; line-height: 1px;"> </td>
                        </tr>
                      </tbody>
                    </table>
                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                      <tbody>
                        <tr>
                          <td valign="top">
                            ${logo}
                            ${header}
                            ${body}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    ${footer}
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