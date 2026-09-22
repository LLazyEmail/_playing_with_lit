import { html } from 'lit';
import type { Section } from '../../../types.js';
import type { GoogleEmailData } from '../types.js';
import { GOOGLE_BRAND } from '../constants.js';

const addressLines = (lines: string[]) => html`
  ${lines.map((line, i) => html`${line}${i < lines.length - 1 ? html`<br />` : ''}`)}
`;

export const renderOrderDetailsSection: Section<GoogleEmailData> = (data) => html`
  <table
    bgcolor="#ffffff"
    width="100%"
    cellpadding="0"
    cellspacing="0"
    style="border-collapse:collapse; background:#ffffff; border:1px solid ${GOOGLE_BRAND.line}; border-bottom:none; max-width:552px; margin:0 auto;"
  >
    <tr>
      <td style="padding-top:28px; color:${GOOGLE_BRAND.muted}; font-family:Roboto, arial; font-size:11px; font-weight:bold; vertical-align:top;">
        <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
          <tr>
            <td width="29"></td>
            <td width="200" style="color:#616161; font-family:'Roboto', arial; font-size:13px; font-weight:bold; line-height:16px; text-align:left;">
              Ordered
            </td>
            <td width="31"></td>
          </tr>
        </table>
      </td>
      <td style="padding-top:28px; color:#616161; font-family:Roboto, arial; font-size:13px; font-weight:bold; text-align:left;">
        <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
          <tr>
            <td width="15"></td>
            <td width="200" style="color:#616161; font-family:'Roboto', arial; font-size:13px; font-weight:bold; line-height:16px; text-align:left;">
              Order number
            </td>
            <td width="31"></td>
          </tr>
        </table>
      </td>
    </tr>

    <tr>
      <td style="padding-bottom:22px; color:${GOOGLE_BRAND.muted}; font-family:Roboto, arial; font-size:13px; line-height:16px; vertical-align:top;">
        <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
          <tr>
            <td width="29"></td>
            <td width="215" style="color:${GOOGLE_BRAND.muted}; font-family:'Roboto', arial; font-size:13px; line-height:16px; text-align:left;">
              ${data.order.orderedAt}
            </td>
            <td width="16"></td>
          </tr>
        </table>
      </td>
      <td style="padding-bottom:22px; color:${GOOGLE_BRAND.muted}; font-family:Roboto, arial; font-size:13px; line-height:15px; vertical-align:top;">
        <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
          <tr>
            <td width="18"></td>
            <td width="229" style="font-family:'Roboto', arial; font-size:13px; line-height:15px; text-align:left;">
              <a
                href="#"
                target="_blank"
                style="color:${GOOGLE_BRAND.primary}; text-decoration:underline;"
              >
                ${data.order.number}
              </a>
            </td>
            <td width="31"></td>
          </tr>
        </table>
      </td>
    </tr>

    <tr>
      <td colspan="2" style="color:${GOOGLE_BRAND.muted}; font-family:Roboto, arial; font-size:11px; font-weight:bold; line-height:15px; text-align:left;">
        <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
          <tr>
            <td width="31"></td>
            <td width="245" style="color:#616161; font-family:'Roboto', arial; font-size:13px; font-weight:bold; line-height:15px; text-align:left;">
              Ordered from
            </td>
            <td width="17"></td>
            <td width="247" style="color:#616161; font-family:'Roboto', arial; font-size:13px; font-weight:bold; line-height:16px; text-align:left;">
              Shipping address
            </td>
            <td width="31"></td>
          </tr>
        </table>
      </td>
    </tr>

    <tr>
      <td colspan="2" style="padding-bottom:25px; color:${GOOGLE_BRAND.muted}; font-family:'Roboto', arial; font-size:11px; line-height:15px; vertical-align:top;">
        <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
          <tr>
            <td width="32"></td>
            <td width="246" style="color:${GOOGLE_BRAND.muted}; font-family:'Roboto', arial; font-size:13px; line-height:18px; text-align:left; vertical-align:top;">
              ${addressLines(data.order.orderedFrom)}
            </td>
            <td width="17"></td>
            <td width="247" style="color:${GOOGLE_BRAND.muted}; font-family:'Roboto', arial; font-size:13px; line-height:18px; text-align:left; vertical-align:top;">
              ${addressLines(data.order.shippingAddress)}
            </td>
            <td width="31"></td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
`;