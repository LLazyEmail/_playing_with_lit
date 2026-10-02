import { html, type TemplateResult } from 'lit';
import type { ClaudeEmailData } from '../types.js';
import { CLAUDE_FONTS, CLAUDE_PALETTE } from '../constants.js';

/**
 * Renders the legal / unsubscribe footer.
 * The tail of claude.html was truncated; this is a reasonable
 * Anthropic‑style footer. Extend once you can see the real markup.
 */
export function renderFooterSection(
  data: Pick<ClaudeEmailData, 'footer'>
): TemplateResult {
  return html`
    <table role="none" cellpadding="0" cellspacing="0" border="0" width="700" style="width: 700px; background-color: ${CLAUDE_PALETTE.cardBg};" bgcolor=${CLAUDE_PALETTE.cardBg} class="full-width content footer">
      <tr>
        <td align="center" valign="top" style="padding: 40px 0 40px;">
          <table width="100%" border="0" cellspacing="0" cellpadding="0" style="width:100%;" role="presentation">
            <tr>
              <td align="center" valign="top" class="container" style="padding: 0 50px;">
                <table width="100%" border="0" cellspacing="0" cellpadding="0" style="width:100%;" role="presentation">
                  <tr>
                    <td align="center" class="footerCopy" style="font-family: ${CLAUDE_FONTS.uiSans}; font-size: 12px; line-height: 18px; color: ${CLAUDE_PALETTE.muted}; padding-bottom: 6px; text-align: center;">
                      © ${data.footer.year} ${data.footer.brandName}
                    </td>
                  </tr>
                  <tr>
                    <td align="center" class="footerCopy" style="font-family: ${CLAUDE_FONTS.uiSans}; font-size: 12px; line-height: 18px; color: ${CLAUDE_PALETTE.muted}; padding-bottom: 6px; text-align: center;">
                      ${data.footer.addressLine}
                    </td>
                  </tr>
                  <tr>
                    <td align="center" class="footerCopy" style="font-family: ${CLAUDE_FONTS.uiSans}; font-size: 12px; line-height: 18px; color: ${CLAUDE_PALETTE.muted}; text-align: center;">
                      <a href=${data.footer.unsubscribe.url} style="color: ${CLAUDE_PALETTE.muted}; text-decoration: underline;">${data.footer.unsubscribe.label}</a>
                      &nbsp;·&nbsp;
                      <a href=${data.footer.preferences.url} style="color: ${CLAUDE_PALETTE.muted}; text-decoration: underline;">${data.footer.preferences.label}</a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  `;
}