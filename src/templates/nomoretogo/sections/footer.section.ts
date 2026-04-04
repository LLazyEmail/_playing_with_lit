import { html, TemplateResult } from 'lit';
import { BASE_IMAGE } from '../constants.js';
import type { NomoretogoEmailData } from '../types.js';

/**
 * Renders the email footer with the brand name, address, social icons, and
 * unsubscribe link.
 *
 * @param data.unsubscribeUrl - URL for the unsubscribe action.
 */
export function renderFooterSection(
  data: Pick<NomoretogoEmailData, 'unsubscribeUrl'>
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
    <!-- Footer content -->
    <table align="center" border="0" bgcolor="#ffffff" cellpadding="0" cellspacing="0" width="640" style="width:640px;min-width:640px;">
      <tbody><tr><td>
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640" style="width:640px;min-width:640px;">
          <tbody><tr><td height="10" style="line-height:10px;min-height:10px;"></td></tr></tbody>
        </table>
        <!-- Brand name row -->
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640" style="width:640px;min-width:640px;">
          <tbody><tr>
            <td align="center" style="padding:0 40px;">
              <td align="left" class="bodyTitle" style="font-family:'Poppins',sans-serif;font-size:14px;font-weight:700;line-height:150%;color:#111111;">
                No More To-Go
              </td>
            </td>
          </tr></tbody>
        </table>
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640" style="width:640px;min-width:640px;">
          <tbody><tr><td height="10"></td></tr></tbody>
        </table>
        <!-- Address + social | unsubscribe row -->
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640" style="width:640px;min-width:640px;">
          <tbody><tr>
            <td align="center" style="padding:0 40px;">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="100%">
                <tbody><tr>
                  <td align="center">
                    <!-- Left: address + social icons -->
                    <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="left" width="267" style="width:267px;min-width:267px;">
                      <tbody>
                        <tr>
                          <td align="left" class="bodyTitle" style="font-family:'Poppins',sans-serif;font-size:12px;line-height:150%;color:#111111;">
                            <p style="margin-top:0;margin-bottom:0;">Dallas,&nbsp;Texas United States</p>
                          </td>
                        </tr>
                        <tr><td height="25"></td></tr>
                        <tr>
                          <td align="center">
                            <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="left">
                              <tbody><tr>
                                <td align="center" width="24" style="padding:0 5px;">
                                  <a href="#" target="_self">
                                    <img width="24" alt="facebook" src="${BASE_IMAGE}facebook.webp" style="display:block;" border="0">
                                  </a>
                                </td>
                                <td align="center" width="24" style="padding:0 5px;">
                                  <a href="#" target="_self">
                                    <img width="24" alt="twitter" src="${BASE_IMAGE}twitter.webp" style="display:block;" border="0">
                                  </a>
                                </td>
                                <td align="center" width="24" style="padding:0 5px;">
                                  <a href="#" target="_self">
                                    <img width="24" alt="instagram" src="${BASE_IMAGE}instagram.webp" style="display:block;" border="0">
                                  </a>
                                </td>
                              </tr></tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <!-- Right: received note + unsubscribe -->
                    <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="right" width="267" style="width:267px;min-width:267px;">
                      <tbody>
                        <tr>
                          <td align="right" class="bodyTitle" style="font-family:'Poppins',sans-serif;font-size:12px;line-height:150%;color:#111111;">
                            <p style="margin-top:0;margin-bottom:0;">You received this email because you signed up on our website or made a purchase from us.</p>
                          </td>
                        </tr>
                        <tr><td height="10"></td></tr>
                        <tr>
                          <td align="right" class="bodyTitle" style="font-family:'Poppins',sans-serif;font-size:12px;line-height:150%;color:#111111;">
                            <a href="${data.unsubscribeUrl}" style="color:#111111;text-decoration:underline;">
                              <span style="color:#111111;">Unsubscribe</span>
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr></tbody>
              </table>
            </td>
          </tr></tbody>
        </table>
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640" style="width:640px;min-width:640px;">
          <tbody><tr><td height="40" style="line-height:40px;min-height:40px;"></td></tr></tbody>
        </table>
      </td></tr></tbody>
    </table>`;
}
