import { html, type TemplateResult } from 'lit';

/** Bordered card that holds the line item above the tracking row. */
export function renderShipmentCardSection(
  lineItem: TemplateResult,
  tracking: TemplateResult,
): TemplateResult {
  return html`
    <table width="600" cellpadding="0" cellspacing="0" style="width:600px; border-collapse:collapse;">
      <tr>
        <td width="24" style="width:24px;"></td>
        <td style="padding-top:8px;">
          <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse; border:1px solid #dddddd; max-width:552px;">
            <tr>
              <td style="background:#fafafa; padding:20px 0 25px 0;">
                ${lineItem}
              </td>
            </tr>
            <tr>
              <td>
                ${tracking}
              </td>
            </tr>
          </table>
        </td>
        <td width="24" style="width:24px;"></td>
      </tr>
    </table>
  `;
}
