import { html, type TemplateResult } from 'lit';
import type {
  GoodNewsEmailData,
  GoodNewsSocialIcon,
} from '../types.js';
import { GOOD_NEWS_FONTS, GOOD_NEWS_PALETTE } from '../constants.js';

const ICON_STYLE = `-moz-transition: color 0.175s cubic-bezier(0.215, 0.61, 0.355, 1); -o-transition: color 0.175s cubic-bezier(0.215, 0.61, 0.355, 1); -webkit-transition: color 0.175s cubic-bezier(0.215, 0.61, 0.355, 1); transition: color 0.175s cubic-bezier(0.215, 0.61, 0.355, 1); color: ${GOOD_NEWS_PALETTE.blue}; padding: 0 5px; text-decoration: none;`;

function renderSocialIcon(icon: GoodNewsSocialIcon): TemplateResult {
  return html`
    <a
      class="email-social-bar-social-icon"
      href=${icon.href}
      style=${ICON_STYLE}
      target="_blank"
    >
      <img
        class="auto-width"
        height=${icon.height}
        src=${icon.src}
        alt=${icon.alt}
        style="width: ${icon.width ? `${icon.width}px` : 'auto'}; max-width: 100% !important; border: 0; height: ${icon.height}px;"
      />
    </a>
  `;
}

/**
 * Renders the blue social bar + the disclaimer block below it.
 * The source has two distinct sub-blocks in the footer area:
 *   - the blue social bar (address + unsubscribe + 4 icons)
 *   - the light disclaimer (sent-to + FDIC/Visa disclosures)
 */
export function renderFooterSection(
  data: Pick<GoodNewsEmailData, 'socialBar' | 'disclaimer'>
): TemplateResult {
  return html`
    <tr>
      <td>
        <table
          align="center"
          border="0"
          cellpadding="0"
          cellspacing="0"
          class="email-social-bar"
          style="background:${GOOD_NEWS_PALETTE.blue}; padding-bottom:25px; padding-left:50px; padding-right:50px; padding-top:25px; width:100%"
        >
          <tbody>
            <tr>
              <td
                class="email-social-bar-copy copy"
                style="font-family: ${GOOD_NEWS_FONTS.stack} !important;"
              >
                <p
                  class="ios-no-link"
                  style="margin-bottom: 15px; font-family: ${GOOD_NEWS_FONTS.stack} !important; font-weight: 400; font-size: 11px; line-height: 1.5; color: white !important; text-decoration: none !important;"
                >
                  ${data.socialBar.address.map(
                    (line, i) => html`
                      ${line}${i < data.socialBar.address.length - 1
                        ? html`<br style="font-family: ${GOOD_NEWS_FONTS.stack} !important;">`
                        : ''}
                    `
                  )}
                </p>
                <a
                  href=${data.socialBar.unsubscribe.url}
                  style="-moz-transition: color 0.175s cubic-bezier(0.215, 0.61, 0.355, 1); -o-transition: color 0.175s cubic-bezier(0.215, 0.61, 0.355, 1); -webkit-transition: color 0.175s cubic-bezier(0.215, 0.61, 0.355, 1); transition: color 0.175s cubic-bezier(0.215, 0.61, 0.355, 1); font-family: ${GOOD_NEWS_FONTS.stack} !important; font-size: 11px; color: white !important; text-decoration: none !important;"
                  target="_blank"
                >${data.socialBar.unsubscribe.label}</a>
              </td>
              <td class="email-social-bar-icons">
                <table align="center" border="0" cellpadding="0" cellspacing="0" style="width:100%">
                  <tbody>
                    <tr>
                      <td align="right">
                        ${data.socialBar.icons.map((icon) => renderSocialIcon(icon))}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <td
        align="center"
        class="email-disclaimer copy"
        style="font-family: ${GOOD_NEWS_FONTS.stack} !important; padding-left: 50px; padding-right: 50px; padding-top: 15px; padding-bottom: 15px;"
      >
        <p style="margin-bottom: 15px; font-family: ${GOOD_NEWS_FONTS.stack} !important; font-weight: 400; font-size: 11px; line-height: 1.5; color: ${GOOD_NEWS_PALETTE.muted}; margin-top: 0;">
          ${data.disclaimer.sentToLabel}
          <strong style="color:${GOOD_NEWS_PALETTE.muted}; font-family:${GOOD_NEWS_FONTS.ieStack} !important; font-size:11px; font-weight:500; margin-top:0">${data.disclaimer.sentToAddress}</strong>.
        </p>
        ${data.disclaimer.paragraphs.map(
          (p) => html`
            <p style="margin-bottom: 15px; font-family: ${GOOD_NEWS_FONTS.stack} !important; font-weight: 400; font-size: 11px; line-height: 1.5; color: ${GOOD_NEWS_PALETTE.muted};">
              ${p}
            </p>
          `
        )}
      </td>
    </tr>
  `;
}