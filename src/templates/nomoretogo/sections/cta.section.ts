import { html, TemplateResult } from 'lit';
import type { NomoretogoEmailData } from '../types.js';

/**
 * Renders the "Get This Week's Menu" call-to-action button.
 *
 * @param data.ctaUrl - URL the button points to.
 */
export function renderCtaSection(
  data: Pick<NomoretogoEmailData, 'ctaUrl'>
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
              <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="width:100%;min-width:100%;">
                <tbody><tr>
                  <td align="center" class="mlContentButton" style="font-family:'Poppins',sans-serif;">
                    <a class="mlContentButton" href="${data.ctaUrl}" style="font-family:'Poppins',sans-serif;background-color:#d6685e;border-radius:3px;color:#ffffff;display:inline-block;font-size:17px;font-weight:400;line-height:23px;padding:15px 0;text-align:center;text-decoration:none;width:260px;" target="_self">Get This Week's Menu</a>
                  </td>
                </tr></tbody>
              </table>
            </td>
          </tr></tbody>
        </table>
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640" style="width:640px;min-width:640px;">
          <tbody><tr><td height="20" style="line-height:20px;min-height:20px;"></td></tr></tbody>
        </table>
      </td></tr></tbody>
    </table>`;
}
