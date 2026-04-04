import { html, TemplateResult } from 'lit';
import { BASE_IMAGE } from '../constants.js';

/**
 * Renders the Amazon sponsored-products banner.
 */
export function renderAmazonSection(): TemplateResult {
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
    <!-- Amazon image -->
    <table align="center" border="0" bgcolor="#ffffff" cellpadding="0" cellspacing="0" width="640" style="width:640px;min-width:640px;">
      <tbody><tr><td>
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640" style="width:640px;min-width:640px;">
          <tbody><tr><td height="20" style="line-height:20px;min-height:20px;"></td></tr></tbody>
        </table>
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640" style="width:640px;min-width:640px;">
          <tbody><tr>
            <td align="center" style="padding:0 40px;">
              <td align="center" id="imageBlock-40">
                <img src="${BASE_IMAGE}amazon.png" border="0" alt="Amazon" width="200" style="display:block;">
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
