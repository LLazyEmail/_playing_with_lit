import { html, type TemplateResult } from 'lit';
import type { ClaudeEmailData } from '../types.js';
import { CLAUDE_FONTS, CLAUDE_PALETTE } from '../constants.js';

const paragraphStyle = `font-size: 18px; line-height: 27px; font-family: ${CLAUDE_FONTS.sansText}; margin: 0; color: ${CLAUDE_PALETTE.text}; font-weight: 400;`;

/**
 * Renders the greeting + intro paragraph rows that sit directly under
 * the logo, before the first feature divider.
 */
export function renderHeaderSection(
  data: Pick<ClaudeEmailData, 'greeting' | 'intro'>
): TemplateResult {
  return html`
    <tr>
      <td align="center" valign="top" class="container" style="padding: 0 50px;">
        <table width="100%" border="0" cellspacing="0" cellpadding="0" style="width:100%;" role="presentation">
          <tr>
            <td align="left" style="text-align: left;" valign="top">
              <p style=${paragraphStyle}>${data.greeting}</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
      <td align="center" valign="top" class="container" style="padding: 0 50px;">
        <table width="100%" border="0" cellspacing="0" cellpadding="0" style="width:100%;" role="presentation">
          <tr>
            <td align="left" style="text-align: left; padding-top: 12px;" valign="top">
              <p style=${paragraphStyle}>${data.intro}</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
      <td align="center" valign="top" height="16" style="height: 16px; font-size: 16px; line-height: 16px;"> </td>
    </tr>
  `;
}