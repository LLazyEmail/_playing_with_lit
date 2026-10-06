import { html, type TemplateResult } from 'lit';
import type { GoodNewsEmailData } from '../types.js';
import { GOOD_NEWS_FONTS, GOOD_NEWS_PALETTE } from '../constants.js';

/**
 * Renders the white content card: headline, paragraphs, and signature.
 * Each paragraph is injected as-is (the source uses raw HTML to preserve
 * inline `<a>` tags and emoji).
 */
export function renderBodySection(
  data: Pick<GoodNewsEmailData, 'greeting' | 'paragraphs' | 'signature'>
): TemplateResult {
  return html`
    <tr>
      <td class="email-content" style="background-color: ${GOOD_NEWS_PALETTE.cardBg};">
        <table align="center" border="0" cellpadding="0" cellspacing="0" style="width:100%">
          <tbody>
            <tr>
              <td
                class="email-content-block copy"
                style="font-family: ${GOOD_NEWS_FONTS.stack} !important; padding-left: 25px; padding-right: 25px; padding-top: 50px;"
              >
                <h2 style="margin: 0 0 0.5rem 0; line-height: 1.25; font-family: ${GOOD_NEWS_FONTS.stack} !important; color: ${GOOD_NEWS_PALETTE.text}; font-size: 2rem; font-weight: 500; font-style: normal;">
                  ${data.greeting}
                </h2>
                ${data.paragraphs.map(
                  (p) => html`
                    <p style="margin-bottom: 15px; font-family: ${GOOD_NEWS_FONTS.stack} !important; font-weight: 400; font-size: 16px; line-height: 1.5;">
                      ${p}
                    </p>
                  `
                )}
                <p
                  class="signout light-type"
                  style="margin-bottom: 15px; font-family: ${GOOD_NEWS_FONTS.stack} !important; font-weight: 400; font-size: 16px; line-height: 1.5; color: ${GOOD_NEWS_PALETTE.muted};"
                >${data.signature}</p>
                <div class="padding-break" style="font-family: ${GOOD_NEWS_FONTS.stack} !important; margin-top: 50px;"></div>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  `;
}