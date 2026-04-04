import { html, TemplateResult } from 'lit';
import { BASE_IMAGE } from '../constants.js';

/**
 * Renders the top logo banner.
 */
export function renderLogoSection(): TemplateResult {
  return html`
    <table align="center" border="0" bgcolor="#ffffff" cellpadding="0" cellspacing="0" width="640" style="width:640px;min-width:640px;">
      <tbody><tr><td>
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640" style="width:640px;min-width:640px;">
          <tbody><tr>
            <td align="center" style="padding:0 40px;">
              <img src="${BASE_IMAGE}logo.jpeg" id="logoBlock-4" border="0" alt="No More To-Go" width="560" style="display:block;">
            </td>
          </tr></tbody>
        </table>
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640" style="width:640px;min-width:640px;">
          <tbody><tr><td height="10" style="line-height:10px;min-height:10px;"></td></tr></tbody>
        </table>
      </td></tr></tbody>
    </table>`;
}
