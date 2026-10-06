import { html, type TemplateResult } from 'lit';
import type { ClaudeEmailData } from '../types.js';
import { CLAUDE_PALETTE } from '../constants.js';

/**
 * Wraps the ordered claude sections in Anthropic's 700px shell.
 * The source uses three sibling tables (header / content / content /
 * content) — we emit the same structure so byte‑compatibility holds.
 */
export function renderLayoutSection(
  data: ClaudeEmailData,
  logo: TemplateResult,
  header: TemplateResult,
  body: TemplateResult,
  footer: TemplateResult
): TemplateResult {
  return html`
    <span style="color:transparent;visibility:hidden;display:none;opacity:0;height:0;width:0;font-size:0;"></span>

    <div style="display: none !important; font-size: 1px; line-height: 1px; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden; mso-hide: all; font-family:'Inter', Helvetica, Arial;">${data.preheaderText}</div>
    <div style="display: none !important; font-size: 1px; line-height: 1px; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden; mso-hide: all; font-family:'Inter', Helvetica, Arial;">${data.preheaderSpacer ?? ''}</div>

    <table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin: 0 auto !important">
      <tr>
        <td align="center" valign="top">
          <div role="article" aria-roledescription="email" aria-label="Email from Anthropic" lang="en" dir="ltr">
            <table role="none" cellpadding="0" cellspacing="0" border="0" width="100%">
              <tr>
                <td align="center">
                  <table role="none" cellpadding="0" cellspacing="0" border="0" width="700" style="width: 700px; background-color: ${CLAUDE_PALETTE.cardBg};" bgcolor=${CLAUDE_PALETTE.cardBg} class="full-width header">
                    <tr>
                      <td align="center" valign="top" style="padding: 24px 0 0;">
                        ${logo}
                      </td>
                    </tr>
                  </table>

                  <table role="none" cellpadding="0" cellspacing="0" border="0" width="700" style="width: 700px; background-color: ${CLAUDE_PALETTE.cardBg};" bgcolor=${CLAUDE_PALETTE.cardBg} class="full-width content">
                    <tr>
                      <td align="center" valign="top" style="padding: 32px 0 0px;">
                        <table width="100%" border="0" cellspacing="0" cellpadding="0" style="width:100%;" role="presentation">
                          ${header}
                          ${body}
                          <tr>
                            <td align="center" valign="top" height="40" style="height: 40px; font-size: 40px; line-height: 40px;"> </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>

                  ${data.callout
                    ? html`
                        <table role="none" cellpadding="0" cellspacing="0" border="0" width="700" style="width: 700px; background-color: ${CLAUDE_PALETTE.cardAlt};" bgcolor=${CLAUDE_PALETTE.cardAlt} class="full-width content wbg-1c1c1b">
                          <tr>
                            <td align="center" valign="top" style="padding: 40px 0 40px;">
                              <table width="100%" border="0" cellspacing="0" cellpadding="0" style="width:100%;" role="presentation">
                              </table>
                            </td>
                          </tr>
                        </table>
                      `
                    : ''}

                  ${footer}
                </td>
              </tr>
            </table>
          </div>
        </td>
      </tr>
    </table>
  `;
}