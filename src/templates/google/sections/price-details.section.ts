import { html } from 'lit';
import type { Section } from '../../../types.js';
import type { GoogleEmailData } from '../types.js';
import { GOOGLE_BRAND } from '../constants.js';

export const renderPriceDetailsSection: Section<GoogleEmailData> = (data) => html`
  <table
    align="center"
    bgcolor="#ffffff"
    cellpadding="0"
    cellspacing="0"
    id="shippingTaxAndTotal"
    width="552"
    style="border-collapse:collapse; width:552px; max-width:552px; background:#ffffff; margin:0 auto; border:1px solid ${GOOGLE_BRAND.line}; border-top:none;"
  >
    <tr>
      <td style="padding-top:22px; text-align:left; vertical-align:middle;">
        <table cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse;">
          <tr>
            <td width="30"></td>
            <td width="246" style="text-align:left; vertical-align:top;">
              <table cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse;">
                <tr>
                  <td style="color:#616161; font-family:Roboto, arial; font-size:13px; font-weight:bold; line-height:16px; text-align:left; vertical-align:bottom;">
                    Payment method
                  </td>
                </tr>
                <tr>
                  <td style="color:${GOOGLE_BRAND.soft}; font-family:Roboto, arial; font-size:13px; line-height:16px; text-align:left; vertical-align:middle; padding-top:4px;">
                    ${data.payment.method}
                  </td>
                </tr>
              </table>
            </td>
            <td width="17"></td>
            <td width="247" style="text-align:left; vertical-align:top;">
              <table cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse;">
                <tr>
                  <td width="183" style="color:#616161; font-family:Roboto, arial; font-size:13px; font-weight:bold; line-height:16px; text-align:left;">
                    Shipping
                  </td>
                  <td width="0"></td>
                  <td style="color:${GOOGLE_BRAND.soft}; font-family:Roboto, arial; font-size:13px; line-height:16px; text-align:right;">
                    ${data.totals.shipping}
                  </td>
                </tr>
                <tr>
                  <td width="183" style="color:#616161; font-family:Roboto, arial; font-size:13px; font-weight:bold; line-height:16px; text-align:left; padding-top:7px;">
                    Discount
                  </td>
                  <td width="4"></td>
                  <td style="color:${GOOGLE_BRAND.soft}; font-family:Roboto, arial; font-size:13px; line-height:16px; text-align:right; padding-top:7px; white-space:nowrap;">
                    ${data.totals.discount}
                  </td>
                </tr>
                <tr>
                  <td width="183" style="color:#616161; font-family:Roboto, arial; font-size:13px; font-weight:bold; line-height:16px; text-align:left; padding-top:7px;">
                    Tax
                  </td>
                  <td width="4"></td>
                  <td style="color:${GOOGLE_BRAND.soft}; font-family:Roboto, arial; font-size:13px; line-height:16px; text-align:right; padding-top:7px;">
                    ${data.totals.tax}
                  </td>
                </tr>
                <tr>
                  <td width="183" style="color:#616161; font-family:Roboto, arial; font-size:13px; font-weight:bold; line-height:16px; text-align:left; padding:7px 0 28px 0; vertical-align:bottom;">
                    Total
                  </td>
                  <td width="4"></td>
                  <td style="color:${GOOGLE_BRAND.soft}; font-family:Roboto, arial; font-size:13px; line-height:16px; text-align:right; padding:7px 0 28px 0; vertical-align:bottom;">
                    ${data.totals.total}
                  </td>
                </tr>
              </table>
            </td>
            <td width="32"></td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
`;