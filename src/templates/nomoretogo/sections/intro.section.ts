import { html, TemplateResult } from 'lit';
import type { NomoretogoEmailData } from '../types.js';

/**
 * Renders the welcome paragraph and closing signature.
 *
 * @param data.introText  - Main welcome copy.
 * @param data.signature  - Closing line (e.g. "Happy Cooking, Stacey…").
 */
export function renderIntroSection(
  data: Pick<NomoretogoEmailData, 'introText' | 'signature'>
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
              <td class="bodyTitle" style="font-family:'Poppins',sans-serif;font-size:14px;line-height:150%;color:#6f6f6f;">
                <p style="margin-top:0;margin-bottom:10px;line-height:150%;">${data.introText}</p>
                <p style="margin-top:0;margin-bottom:10px;line-height:150%;">${data.signature}</p>
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
