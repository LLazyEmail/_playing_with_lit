import { html, type TemplateResult } from 'lit';

/** 600px Google Store shell. Slots stay in document order. */
export function renderLayoutSection(
  preheader: TemplateResult,
  header: TemplateResult,
  progress: TemplateResult,
  shipmentCard: TemplateResult,
  orderDetails: TemplateResult,
  priceDetails: TemplateResult,
  footer: TemplateResult,
): TemplateResult {
  return html`
    ${preheader}
    <table
      width="600"
      align="center"
      cellpadding="0"
      cellspacing="0"
      style="border-collapse:collapse; font-family:Arial, sans-serif; margin:auto; width:600px; min-width:600px; max-width:600px;"
    >
      <tr>
        <td style="padding:0;">
          ${header}
          ${progress}
          ${shipmentCard}
          ${orderDetails}
          ${priceDetails}
          ${footer}
        </td>
      </tr>
    </table>
  `;
}
