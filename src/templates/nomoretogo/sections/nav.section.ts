import { html, TemplateResult } from 'lit';
import type { NomoretogoEmailData } from '../types.js';

/**
 * Renders the navigation bar row containing the "Weekly Menu" link and the
 * issue date.
 *
 * @param data.weeklyMenuUrl - URL for the "Weekly Menu" link.
 * @param data.date          - Human-readable date string (e.g. "April 22nd, 2021").
 */
export function renderNavSection(
  data: Pick<NomoretogoEmailData, 'weeklyMenuUrl' | 'date'>
): TemplateResult {
  return html`
    <table align="center" border="0" bgcolor="#ffffff" cellpadding="0" cellspacing="0" width="640" style="width:640px;min-width:640px;">
      <tbody><tr><td>
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640" style="width:640px;min-width:640px;">
          <tbody><tr><td height="20" style="line-height:20px;min-height:20px;"></td></tr></tbody>
        </table>
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640" style="width:640px;min-width:640px;">
          <tbody><tr>
            <td align="center" style="padding:0 40px;">
              <td align="center" class="bodyTitle" style="font-family:'Poppins',sans-serif;font-size:28px;font-weight:700;line-height:150%;color:#111111;text-align:center;">
                <a href="${data.weeklyMenuUrl}" style="text-decoration:none;color:#111111;">Weekly Menu</a>
              </td>
            </td>
          </tr></tbody>
        </table>
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640" style="width:640px;min-width:640px;">
          <tbody><tr>
            <td align="center" style="padding:0 40px;">
              <td align="center" class="bodyTitle" style="font-family:'Poppins',sans-serif;font-size:19px;font-weight:400;line-height:150%;color:#111111;text-align:center;">
                ${data.date}
              </td>
            </td>
          </tr></tbody>
        </table>
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640" style="width:640px;min-width:640px;">
          <tbody><tr><td height="10" style="line-height:10px;min-height:10px;"></td></tr></tbody>
        </table>
      </td></tr></tbody>
    </table>`;
}
