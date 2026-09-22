import { html } from 'lit';
import type { Section } from '../../../types.js';
import type { GoogleEmailData } from '../types.js';
import { GOOGLE_ASSETS } from '../constants.js';

export const renderTrackingSection: Section<GoogleEmailData> = (data) => html`
  <table
    width="100%"
    cellpadding="0"
    cellspacing="0"
    style="border-collapse:collapse; border-top:1px solid #eeeeee; background:#ffffff;"
  >
    <tr>
      <td style="padding:28px 0 27px 0;">
        <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse; text-align:left;">
          <tr>
            <td width="32" style="width:32px;"></td>
            <td width="25" style="line-height:16px; text-align:left;">
              <a href=${data.shipment.trackingUrl} target="_blank" style="text-decoration:none;">
                <img src=${GOOGLE_ASSETS.truck} alt="Truck" width="22" height="16" />
              </a>
            </td>
            <td
              width="463"
              style="color:#444444; font-family:'Roboto', arial; font-size:14px; font-weight:bold; line-height:16px; text-align:left; padding-left:14px; vertical-align:top;"
            >
              <a
                href=${data.shipment.trackingUrl}
                target="_blank"
                style="color:#444444; text-decoration:none; font-weight:bold;"
              >
                Track Shipment
              </a>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
`;