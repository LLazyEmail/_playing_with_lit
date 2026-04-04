import { html, TemplateResult } from 'lit';
import type { NomoretogoEmailData } from '../types.js';

/**
 * Renders the Facebook-group community block and the contact/help paragraph.
 *
 * @param data.facebookGroupUrl - URL for the members-only Facebook group page.
 * @param data.helpUrl          - URL for the "How Can We Help" support page.
 */
export function renderCommunitySection(
  data: Pick<NomoretogoEmailData, 'facebookGroupUrl' | 'helpUrl'>
): TemplateResult {
  return html`
    <table align="center" border="0" bgcolor="#ffffff" cellpadding="0" cellspacing="0" width="640" style="width:640px;min-width:640px;">
      <tbody><tr><td>
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640" style="width:640px;min-width:640px;">
          <tbody><tr><td height="40" style="line-height:40px;min-height:40px;"></td></tr></tbody>
        </table>
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640" style="width:640px;min-width:640px;">
          <tbody><tr>
            <td align="center" style="padding:0 40px;">
              <td class="bodyTitle" style="font-family:'Poppins',sans-serif;font-size:14px;line-height:150%;color:#6f6f6f;">
                <h4><strong>No More To-Go Facebook Users:</strong></h4>
                <p style="margin-top:0;margin-bottom:10px;line-height:150%;">
                  Connect with other home cooks on our closed group for No More To-Go Members Only
                  <a href="${data.facebookGroupUrl}" target="_blank" style="word-break:break-word;font-family:'Poppins',sans-serif;color:#09c269;text-decoration:underline;">Facebook Group Page</a>.
                </p>
                <p style="margin-top:0;margin-bottom:10px;line-height:150%;">
                  <strong>Have Questions?</strong><br>
                  Please contact us via the "<a href="${data.helpUrl}" target="_blank" style="word-break:break-word;font-family:'Poppins',sans-serif;color:#09c269;text-decoration:underline;">How Can We Help</a>" link at the bottom of each page on the site. Or, email us at
                  <a href="mailto:contact@nomoretogo.com" style="word-break:break-word;font-family:'Poppins',sans-serif;color:#09c269;text-decoration:underline;">contact@nomoretogo.com</a>.
                </p>
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
