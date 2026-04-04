import { html, TemplateResult } from 'lit';
import type { RecipeItem } from '../../types.js';

/**
 * Renders a single two-column recipe row.
 *
 * @param left  - Recipe card for the left column.
 * @param right - Recipe card for the right column.
 */
export function renderRecipeRow(left: RecipeItem, right: RecipeItem): TemplateResult {
  return html`
    <table align="center" border="0" bgcolor="#ffffff" cellpadding="0" cellspacing="0" width="640" style="width:640px;min-width:640px;">
      <tbody><tr><td>
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640" style="width:640px;min-width:640px;">
          <tbody><tr><td height="20" style="line-height:20px;min-height:20px;"></td></tr></tbody>
        </table>
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640" style="width:640px;min-width:640px;">
          <tbody><tr>
            <td align="center" style="padding:0 40px;">
              <table role="presentation" cellpadding="0" border="0" align="center" width="100%">
                <tbody><tr>
                  <td valign="top">
                    <!-- Left card -->
                    <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="left" width="267" style="width:267px;min-width:267px;">
                      <tbody>
                        <tr>
                          <td align="center">
                            <a href="${left.linkUrl}" target="_self">
                              <img src="${left.imageUrl}" border="0" alt="${left.imageAlt}" width="267" style="display:block;">
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td align="center" style="padding:0 20px;">
                            <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="100%">
                              <tbody>
                                <tr><td height="20"></td></tr>
                                <tr>
                                  <td align="left" class="bodyTitle" style="font-family:'Poppins',sans-serif;font-size:14px;line-height:150%;color:#6f6f6f;">
                                    <p style="margin-top:0;margin-bottom:0;line-height:150%;text-align:center;">
                                      <strong><span style="font-size:16px;">${left.title}</span></strong><br>${left.subtitle}
                                    </p>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <!-- Right card -->
                    <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="right" width="267" style="width:267px;min-width:267px;">
                      <tbody>
                        <tr>
                          <td align="center">
                            <a href="${right.linkUrl}" target="_self">
                              <img src="${right.imageUrl}" border="0" alt="${right.imageAlt}" width="267" style="display:block;">
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td align="center" style="padding:0 20px;">
                            <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="100%">
                              <tbody>
                                <tr><td height="20"></td></tr>
                                <tr>
                                  <td align="left" class="bodyTitle" style="font-family:'Poppins',sans-serif;font-size:14px;line-height:150%;color:#6f6f6f;">
                                    <p style="margin-top:0;margin-bottom:0;line-height:150%;text-align:center;">
                                      <strong><span style="font-size:16px;">${right.title}</span></strong><br>${right.subtitle}
                                    </p>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
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
          <tbody><tr><td height="20" style="line-height:20px;min-height:20px;"></td></tr></tbody>
        </table>
      </td></tr></tbody>
    </table>`;
}
