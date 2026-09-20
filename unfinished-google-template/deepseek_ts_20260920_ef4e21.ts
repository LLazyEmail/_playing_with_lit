import { html } from 'lit';
import type { Section } from '../../../types.js';
import type { GoogleEmailData } from '../types.js';
import { GOOGLE_ASSETS, GOOGLE_BRAND } from '../constants.js';

export const renderProgressSection: Section<GoogleEmailData> = (data) => html`
  <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse; text-align:center;">
    <tr>
      <td
        bgcolor=${GOOGLE_BRAND.panel}
        style="background:${GOOGLE_BRAND.panel}; padding-top:24px;"
        valign="bottom"
      >
        <table width="600" cellpadding="0" cellspacing="0" style="width:600px; border-collapse:collapse;">
          <tr>
            <td width="24" bgcolor=${GOOGLE_BRAND.panel} style="width:24px; background:${GOOGLE_BRAND.panel};"></td>
            <td bgcolor=${GOOGLE_BRAND.panel} style="background:${GOOGLE_BRAND.panel}; padding-top:8px;" valign="bottom">
              <table
                width="100%"
                cellpadding="0"
                cellspacing="0"
                style="border-collapse:collapse; border:1px solid ${GOOGLE_BRAND.line}; max-width:552px;"
              >
                <tr>
                  <td style="background:${GOOGLE_BRAND.panelAlt};">
                    <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse; text-align:center;">
                      <tr>
                        <td colspan="3" align="center" style="padding-top:25px;">
                          <img src=${GOOGLE_ASSETS.progressArrows} alt="Progress" width="488" />
                        </td>
                      </tr>
                      <tr>
                        <td width="151" style="color:#444444; font-family:'Roboto', arial; font-size:12px; line-height:16px; text-align:left; padding:0 11px 19px 31px;">
                          Ordered<br />${data.progress.orderedDate}
                        </td>
                        <td width="162" style="color:#444444; font-family:'Roboto', arial; font-size:12px; line-height:16px; text-align:center; padding-bottom:19px;">
                          Shipped<br />${data.progress.shippedDate}
                        </td>
                        <td width="162" align="right" style="color:#444444; font-family:'Roboto', arial; font-size:12px; font-weight:bold; line-height:16px; text-align:right; padding:0 31px 19px 0;">
                          Delivered<br />${data.progress.deliveredDate}
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
            <td width="24" bgcolor=${GOOGLE_BRAND.panel} style="width:24px; background:${GOOGLE_BRAND.panel};"></td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
`;