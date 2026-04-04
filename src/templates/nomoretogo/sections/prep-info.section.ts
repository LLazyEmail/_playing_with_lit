import { html, TemplateResult } from 'lit';
import type { NomoretogoEmailData } from '../types.js';

/**
 * Renders the ingredients spotlight and weekend prep-tips block.
 *
 * @param data.ingredientsSpotlight - Featured ingredient description.
 * @param data.weekendPrepText      - Weekend prep tips paragraph.
 * @param data.makeAheadText        - Make-ahead / refrigerate instructions.
 */
export function renderPrepInfoSection(
  data: Pick<
    NomoretogoEmailData,
    'ingredientsSpotlight' | 'weekendPrepText' | 'makeAheadText'
  >
): TemplateResult {
  return html`
    <!-- Divider -->
    <table align="center" border="0" bgcolor="#ffffff" cellpadding="0" cellspacing="0" width="640" style="width:640px;min-width:640px;">
      <tbody><tr><td>
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640" style="width:640px;min-width:640px;">
          <tbody><tr>
            <td align="center">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="100%" style="border-top:1px solid #ededf3;border-collapse:initial;">
                <tbody><tr><td height="20" style="line-height:20px;min-height:20px;"></td></tr></tbody>
              </table>
            </td>
          </tr></tbody>
        </table>
      </td></tr></tbody>
    </table>
    <!-- Prep info content -->
    <table align="center" border="0" bgcolor="#ffffff" cellpadding="0" cellspacing="0" width="640" style="width:640px;min-width:640px;">
      <tbody><tr><td>
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640" style="width:640px;min-width:640px;">
          <tbody><tr><td height="20" style="line-height:20px;min-height:20px;"></td></tr></tbody>
        </table>
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640" style="width:640px;min-width:640px;">
          <tbody><tr>
            <td align="center" style="padding:0 40px;">
              <td class="bodyTitle" style="font-family:'Poppins',sans-serif;font-size:14px;line-height:150%;color:#6f6f6f;">
                <p style="margin-top:0;margin-bottom:10px;line-height:150%;"><strong>Ingredients</strong></p>
                <p style="margin-top:0;margin-bottom:10px;line-height:150%;">${data.ingredientsSpotlight}</p>
                <p style="margin-top:0;margin-bottom:10px;line-height:150%;"><strong>Weekend Prep</strong></p>
                <p style="margin-top:0;margin-bottom:10px;line-height:150%;">${data.weekendPrepText}</p>
                <p style="margin-top:0;margin-bottom:0;line-height:150%;">${data.makeAheadText}</p>
              </td>
            </td>
          </tr></tbody>
        </table>
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640" style="width:640px;min-width:640px;">
          <tbody><tr><td height="20" style="line-height:20px;min-height:20px;"></td></tr></tbody>
        </table>
      </td></tr></tbody>
    </table>`;
}
