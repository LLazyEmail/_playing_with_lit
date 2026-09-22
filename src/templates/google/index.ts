import { html, type TemplateResult } from 'lit';
import type { GoogleEmailData } from './types.js';
import { renderHeaderSection } from './sections/header.section.js';
import { renderProgressSection } from './sections/progress.section.js';
import { renderLineItemSection } from './sections/line-item.section.js';
import { renderTrackingSection } from './sections/tracking.section.js';
import { renderOrderDetailsSection } from './sections/order-details.section.js';
import { renderPriceDetailsSection } from './sections/price-details.section.js';
import { renderFooterSection } from './sections/footer.section.js';

/** Composer only — the shipment card chrome stays here; sections hold the rows. */
export function googleEmailTemplate(data: GoogleEmailData): TemplateResult {
  return html`
    <div style="display:none; font-size:0; line-height:0; color:#ffffff;">
      ${data.preheader}
    </div>

    <table
      width="600"
      align="center"
      cellpadding="0"
      cellspacing="0"
      style="border-collapse:collapse; font-family:Arial, sans-serif; margin:auto; width:600px; min-width:600px; max-width:600px;"
    >
      <tr>
        <td style="padding:0;">
          ${renderHeaderSection(data)}
          ${renderProgressSection(data)}

          <table width="600" cellpadding="0" cellspacing="0" style="width:600px; border-collapse:collapse;">
            <tr>
              <td width="24" style="width:24px;"></td>
              <td style="padding-top:8px;">
                <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse; border:1px solid #dddddd; max-width:552px;">
                  <tr>
                    <td style="background:#fafafa; padding:20px 0 25px 0;">
                      ${renderLineItemSection(data)}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      ${renderTrackingSection(data)}
                    </td>
                  </tr>
                </table>
              </td>
              <td width="24" style="width:24px;"></td>
            </tr>
          </table>

          ${renderOrderDetailsSection(data)}
          ${renderPriceDetailsSection(data)}
          ${renderFooterSection(data)}
        </td>
      </tr>
    </table>
  `;
}
