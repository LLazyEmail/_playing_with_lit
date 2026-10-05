import { html, type TemplateResult } from 'lit';
import type { Shirt5EmailData } from '../types.js';
import { renderFooterSection } from './footer.section.js';

/**
 * Composes the footer row for the layout wrapper.
 * Kept separate from `footer.section.ts` so the row markup can be swapped
 * without touching the layout contract.
 */
export function renderFooterComposed(
  data: Pick<Shirt5EmailData, 'footer'>
): TemplateResult {
  return html`
    <tr>
      <td align="center" valign="top">
        <table
          border="0"
          cellpadding="0"
          cellspacing="0"
          class="templateRow"
          width="100%"
        >
          <tbody>
            <tr>
              <td class="rowContainer kmFloatLeft" valign="top">
                ${renderFooterSection(data)}
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  `;
}