import { html, type TemplateResult } from 'lit';
import type { Shirt1EmailData } from '../types.js';

/**
 * Renders the "Can't see this email?" browser-view row plus the top
 * divider (maps to `templatePreheader` content).
 */
export function renderHeaderSection(
  data: Pick<Shirt1EmailData, 'browserNotice'>
): TemplateResult {
  return html`
    <table border="0" cellpadding="0" cellspacing="0" class="kmTextBlock" width="100%">
      <tbody class="kmTextBlockOuter">
        <tr>
          <td class="kmTextBlockInner" valign="top">
            <table align="left" border="0" cellpadding="0" cellspacing="0" class="kmTextContentContainer" width="100%">
              <tbody>
                <tr>
                  <td
                    class="kmTextContent"
                    style="font-size:12px;color:#727272;padding:9px 18px;text-align:center;"
                    valign="top"
                  >
                    <p style="padding-bottom:0; text-align:center">
                      <span style="font-family:century gothic,applegothic,sans-serif;">
                        <span style="font-size:9px;">
                          <span style="color:#F0D2B7;">
                            ${data.browserNotice.text}
                            <a
                              class="web-view"
                              style="color:#FF0000;font-weight:lighter;text-decoration:underline;"
                              href=${data.browserNotice.url}
                            >${data.browserNotice.label}</a>
                          </span>
                        </span>
                      </span>
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>

    <table border="0" cellpadding="0" cellspacing="0" class="kmDividerBlock" width="100%">
      <tbody class="kmDividerBlockOuter">
        <tr>
          <td class="kmDividerBlockInner" style="padding:18px;">
            <table
              border="0"
              cellpadding="0"
              cellspacing="0"
              class="kmDividerContent"
              style="border-top:1px solid #FF0000;"
              width="100%"
            >
              <tbody><tr><td><span></span></td></tr></tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  `;
}