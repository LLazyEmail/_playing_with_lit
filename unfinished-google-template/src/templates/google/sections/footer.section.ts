import { html } from 'lit';
import type { Section } from '../../../types.js';
import type { GoogleEmailData } from '../types.js';
import { GOOGLE_BRAND } from '../constants.js';

const linkStyle = `color:${GOOGLE_BRAND.muted}; text-decoration:none;`;

export const renderFooterSection: Section<GoogleEmailData> = (data) => html`
  <table
    width="600"
    cellpadding="0"
    cellspacing="0"
    bgcolor=${GOOGLE_BRAND.footer}
    dir="ltr"
    style="width:600px; border-collapse:collapse; background:${GOOGLE_BRAND.footer}; vertical-align:middle;"
  >
    <tr>
      <td
        align="left"
        style="color:${GOOGLE_BRAND.muted}; font-family:'Roboto', arial; font-size:12px; padding:4px 30px 32px 40px;"
      >
        <table width="530" cellpadding="0" cellspacing="0" bgcolor=${GOOGLE_BRAND.footer} style="border-collapse:collapse; width:530px; background:${GOOGLE_BRAND.footer};">
          <tr>
            <td style="color:${GOOGLE_BRAND.muted}; font-family:'Roboto', arial; font-size:12px; line-height:14px; padding:20px 0 2px 0;">
              You have received this service email to update you about your recent Google Store transaction.
            </td>
          </tr>

          <tr>
            <td align="left">
              <table align="left" cellpadding="0" cellspacing="0" bgcolor=${GOOGLE_BRAND.footer} style="border-collapse:collapse; background:${GOOGLE_BRAND.footer};">
                <tr>
                  <td width="80" align="left" style="color:${GOOGLE_BRAND.muted}; font-family:'Roboto', arial; font-size:12px; font-weight:bold; line-height:14px; padding:20px 10px 20px 0; max-width:80px; vertical-align:middle;">
                    <a href=${data.footer.links.account} target="_blank" style=${linkStyle}>Account</a>
                  </td>
                  <td width="110" align="left" style="color:${GOOGLE_BRAND.muted}; font-family:'Roboto', arial; font-size:12px; font-weight:bold; line-height:14px; padding:20px 10px 20px 0; max-width:110px; vertical-align:middle;">
                    <a href=${data.footer.links.orderHistory} target="_blank" style=${linkStyle}>Order History</a>
                  </td>
                  <td width="106" align="left" style="color:${GOOGLE_BRAND.muted}; font-family:'Roboto', arial; font-size:12px; font-weight:bold; line-height:14px; padding:20px 0; max-width:106px; vertical-align:middle;">
                    <a href=${data.footer.links.contactUs} target="_blank" style=${linkStyle}>Contact Us</a>
                  </td>
                  <td width="110" align="left" style="color:${GOOGLE_BRAND.muted}; font-family:'Roboto', arial; font-size:12px; font-weight:bold; line-height:14px; padding:20px 10px 20px 0; max-width:110px; vertical-align:middle;">
                    <a href=${data.footer.links.termsOfSale} target="_blank" style=${linkStyle}>Terms of Sale</a>
                  </td>
                  <td width="110" align="left" style="color:${GOOGLE_BRAND.muted}; font-family:'Roboto', arial; font-size:12px; font-weight:bold; line-height:14px; padding:20px 0; max-width:110px; vertical-align:middle; white-space:nowrap;">
                    <a href=${data.footer.links.termsOfService} target="_blank" style=${linkStyle}>Terms of Service</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <tr>
            <td colspan="9" style="color:${GOOGLE_BRAND.muted}; font-family:'Roboto', arial; font-size:12px; font-weight:bold; line-height:14px; padding:4px 0 13px 0;">
              ${data.footer.addressLine}
            </td>
          </tr>
          <tr>
            <td colspan="9" style="color:${GOOGLE_BRAND.muted}; font-family:'Roboto', arial; font-size:12px; font-weight:bold; line-height:14px; padding:4px 0 13px 0;">
              © ${data.footer.year} Google | All Rights Reserved.
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
`;