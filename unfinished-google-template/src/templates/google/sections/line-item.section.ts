import { html } from 'lit';
import type { Section } from '../../../types.js';
import type { GoogleEmailData } from '../types.js';
import { GOOGLE_ASSETS, GOOGLE_BRAND } from '../constants.js';

export const renderLineItemSection: Section<GoogleEmailData> = (data) => html`
  <table
    bgcolor="#ffffff"
    width="100%"
    cellpadding="0"
    cellspacing="0"
    id="itemDetails"
    style="border-collapse:collapse; background:#ffffff; margin:0 auto;"
  >
    <tr>
      <td
        rowspan="2"
        width="34"
        style="vertical-align:top; padding:1px 0 1px 2px; width:34px; text-align:left;"
      >
        <img src=${data.item.image} alt=${data.item.name} width="100" height="75" />
      </td>
      <td style="padding-top:10px; vertical-align:top;">
        <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
          <tr>
            <td
              width="330"
              style="padding-bottom:6px; line-height:20px; color:${GOOGLE_BRAND.text}; font-family:Roboto, arial; font-size:14px; text-align:left; vertical-align:middle;"
            >
              ${data.item.name}
            </td>
          </tr>
          <tr>
            <td
              width="330"
              style="padding-bottom:12px; line-height:13px; color:${GOOGLE_BRAND.muted}; font-family:Roboto, arial; font-size:11px; text-align:left; vertical-align:middle;"
            >
              ID number:<br />
              <span style="word-break:break-all;">${data.item.idNumber}</span>
            </td>
          </tr>
        </table>
      </td>
      <td style="vertical-align:top; padding-top:12px;">
        <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
          <tr>
            <td
              width="81"
              style="line-height:15px; color:#444444; font-family:Roboto, arial; font-size:12px; text-align:right; vertical-align:middle;"
            >
              ${data.item.price}
            </td>
          </tr>
          <tr>
            <td
              width="81"
              style="line-height:15px; color:#444444; font-family:Roboto, arial; font-size:12px; text-align:right; vertical-align:top; padding-top:16px; white-space:nowrap;"
            >
              Quantity: ${data.item.quantity}
            </td>
          </tr>
        </table>
      </td>
      <td width="33" style="width:33px;"></td>
    </tr>
  </table>
`;