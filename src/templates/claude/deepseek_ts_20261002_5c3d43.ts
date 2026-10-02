import { html, type TemplateResult } from 'lit';
import type {
  ClaudeEmailData,
  ClaudeFeature,
} from '../types.js';
import { CLAUDE_FONTS, CLAUDE_PALETTE } from '../constants.js';

const H1_STYLE = `margin: 0; font-size: 28px; font-family: ${CLAUDE_FONTS.serifDisplay}; color: ${CLAUDE_PALETTE.text}; line-height: 34px; font-weight: 400;`;
const H2_STYLE = `margin: 0; font-size: 24px; font-family: ${CLAUDE_FONTS.serifDisplay}; color: ${CLAUDE_PALETTE.text}; line-height: 30px; font-weight: 400;`;
const EYEBROW_STYLE = `margin: 0; font-size: 20px; font-family: ${CLAUDE_FONTS.uiSans}; color: ${CLAUDE_PALETTE.text}; line-height: 26px; font-weight: 500;`;
const BODY_STYLE = `font-size: 16px; line-height: 24px; font-family: ${CLAUDE_FONTS.sansText}; margin: 0; color: ${CLAUDE_PALETTE.text}; font-weight: 400;`;
const LINK_STYLE = `color: ${CLAUDE_PALETTE.text}; font-weight: 600; text-decoration: none;`;

const INLINE_CODE_STYLE = `font-family: ${CLAUDE_FONTS.mono}; font-size: 0.92em; background-color: #F0EEE6; border-radius: 4px; padding: 1px 5px; white-space: nowrap;`;

/** Renders a horizontal 1px divider row. */
function renderDivider(): TemplateResult {
  return html`
    <tr>
      <td align="center" valign="top" class="container" style="padding: 0 50px;">
        <table width="100%" border="0" cellspacing="0" cellpadding="0" style="width:100%;" role="presentation">
          <tr>
            <td align="center" valign="top" style="padding: 24px 0;">
              <table width="100%" border="0" cellspacing="0" cellpadding="0" style="width:100%;" role="presentation">
                <tr>
                  <td align="center" valign="top" class="ev-divider" style="font-size: 1px; line-height: 1px; height: 1px; width: 100%; background-color: ${CLAUDE_PALETTE.divider};" bgcolor=${CLAUDE_PALETTE.divider}>   </td>
                </tr>
              </table>
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

/** Renders the fake code‑editor card (`.cd-*` classes) for a feature. */
function renderCodeCard(card: ClaudeFeature['codeCard']): TemplateResult {
  if (!card) return html``;
  return html`
    <tr>
      <td align="center" valign="top" class="container" style="padding: 0 50px;">
        <table width="100%" border="0" cellspacing="0" cellpadding="0" style="width:100%;" role="presentation">
          <tr>
            <td align="center" valign="top" style="padding-top: 20px;">
              <table width="100%" border="0" cellspacing="0" cellpadding="0" style="width:100%;" role="presentation">
                <tr>
                  <td align="left" valign="top" class="cd-card" style="background-color: ${CLAUDE_PALETTE.pageBg}; border: 1px solid ${CLAUDE_PALETTE.divider}; border-radius: 8px; border-collapse: separate;" bgcolor=${CLAUDE_PALETTE.pageBg}>
                    <table width="100%" border="0" cellspacing="0" cellpadding="0" style="width:100%;" role="presentation">
                      <tr>
                        <td align="left" valign="middle" class="cd-bar" style="padding: 12px 20px 11px 20px; border-bottom: 1px solid ${CLAUDE_PALETTE.divider};">
                          <table width="100%" border="0" cellspacing="0" cellpadding="0" style="width:100%;" role="presentation">
                            <tr>
                              <td align="left" valign="middle" class="cd-chrome" style="font-family: ${CLAUDE_FONTS.mono}; font-size: 12px; line-height: 16px; color: ${CLAUDE_PALETTE.chrome}; mso-line-height-rule: exactly;">${card.path}</td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td align="left" valign="top" class="cd-line" style="padding: 16px 0 18px 0; color: ${CLAUDE_PALETTE.muted};">
                          <table width="100%" border="0" cellspacing="0" cellpadding="0" style="width:100%;" role="presentation">
                            ${card.lines.map(
                              (line) => html`
                                <tr>
                                  <td align="left" valign="top" class="cd-line cd-t-comment" style="padding: 0 20px; font-family: ${CLAUDE_FONTS.mono}; font-size: 13px; line-height: 21px; color: #87867F; word-break: break-word; mso-line-height-rule: exactly;">${line}</td>
                                </tr>
                              `
                            )}
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  `;
}

function renderFeature(feature: ClaudeFeature, index: number): TemplateResult {
  const isFirst = index === 0;
  const headingStyle = isFirst ? H1_STYLE : H2_STYLE;

  return html`
    ${index > 0 ? renderDivider() : ''}
    ${feature.eyebrow
      ? html`
          <tr>
            <td align="center" valign="top" class="container" style="padding: 0 50px;">
              <table width="100%" border="0" cellspacing="0" cellpadding="0" style="width:100%;" role="presentation">
                <tr>
                  <td align="left" valign="top" style="text-align: left; padding-top: ${isFirst ? '0' : '24px'};">
                    <h2 style=${EYEBROW_STYLE}>${feature.eyebrow}</h2>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        `
      : ''}
    <tr>
      <td align="center" valign="top" class="container" style="padding: 0 50px;">
        <table width="100%" border="0" cellspacing="0" cellpadding="0" style="width:100%;" role="presentation">
          <tr>
            <td align="left" valign="top" style="text-align: left; ${feature.eyebrow ? 'padding-top: 24px;' : ''}">
              <h${isFirst ? '1' : '2'} style=${headingStyle}>${feature.title}</h${isFirst ? '1' : '2'}>
            </td>
          </tr>
        </table>
      </td>
    </tr>
    ${feature.paragraphs.map(
      (p, i) => html`
        <tr>
          <td align="center" valign="top" class="container" style="padding: 0 50px;">
            <table width="100%" border="0" cellspacing="0" cellpadding="0" style="width:100%;" role="presentation">
              <tr>
                <td align="left" style="text-align: left; padding-top: ${i === 0 ? '12px' : '12px'};" valign="top">
                  <p style=${BODY_STYLE}>${p}</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      `
    )}
    ${feature.image
      ? html`
          <tr>
            <td align="center" valign="top" class="container" style="padding: 0 50px;">
              <table width="100%" border="0" cellspacing="0" cellpadding="0" style="width:100%;" role="presentation">
                <tr>
                  <td align="center" valign="top" style="padding: 16px 0 0 0;">
                    <a href=${feature.cta?.url ?? '#'} target="_blank" style="color: inherit; text-decoration: none;">
                      <img
                        src=${feature.image.src}
                        alt=${feature.image.alt}
                        class="full-width ${feature.image.outline ? 'ev-img-outline' : ''}"
                        width=${feature.image.width}
                        style="display: block; ${feature.image.outline ? `border: 1px solid ${CLAUDE_PALETTE.divider};` : 'border: 0;'} width: ${feature.image.width}px; max-width: ${feature.image.width}px; border-radius: 8px;"
                      />
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        `
      : ''}
    ${renderCodeCard(feature.codeCard)}
    ${feature.cta || feature.secondaryCta
      ? html`
          <tr>
            <td align="center" valign="top" class="container" style="padding: 0 50px;">
              <table width="100%" border="0" cellspacing="0" cellpadding="0" style="width:100%;" role="presentation">
                <tr>
                  <td align="left" style="text-align: left; padding-top: 20px;" valign="top">
                    <p style=${BODY_STYLE}>
                      ${feature.cta
                        ? html`<a href=${feature.cta.url} target="_blank" style=${feature.secondaryCta ? `color: ${CLAUDE_PALETTE.text}; font-weight: 600; text-decoration: underline;` : LINK_STYLE}>${feature.cta.label}</a>`
                        : ''}
                      ${feature.cta && feature.secondaryCta ? html` &nbsp;|&nbsp; ` : ''}
                      ${feature.secondaryCta
                        ? html`<a href=${feature.secondaryCta.url} target="_blank" style="color: ${CLAUDE_PALETTE.text}; font-weight: 600; text-decoration: underline;">${feature.secondaryCta.label}</a>`
                        : ''}
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        `
      : ''}
    <tr>
      <td align="center" valign="top" height="16" style="height: 16px; font-size: 16px; line-height: 16px;"> </td>
    </tr>
  `;
}

/**
 * Renders the main content stack: all features, with dividers between
 * them, plus the optional "Other news" callout.
 */
export function renderBodySection(
  data: Pick<ClaudeEmailData, 'features' | 'callout'>
): TemplateResult {
  return html`
    ${data.features.map((f, i) => renderFeature(f, i))}
    ${data.callout ? renderCallout(data.callout) : ''}
  `;
}

function renderCallout(
  callout: NonNullable<ClaudeEmailData['callout']>
): TemplateResult {
  // The callout is wrapped in its own table with `#f0eee6` bg in the layout.
  // Here we only render its inner rows; the layout wrapper adds the bg.
  return html`
    <tr>
      <td align="center" valign="top" class="container" style="padding: 0 50px;">
        <table width="100%" border="0" cellspacing="0" cellpadding="0" style="width:100%;" role="presentation">
          <tr>
            <td align="left" style="text-align: left;" valign="top">
              <h2 style="margin: 0; font-size: 20px; font-family: ${CLAUDE_FONTS.uiSans}; color: ${CLAUDE_PALETTE.text}; line-height: 26px; font-weight: 500;">${callout.title}</h2>
            </td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
      <td align="center" valign="top" class="container" style="padding: 0 50px;">
        <table width="100%" border="0" cellspacing="0" cellpadding="0" style="width:100%;" role="presentation">
          <tr>
            <td align="left" valign="top" style="padding-top: 12px;">
              <ul style="margin: 0 0 0 24px; padding: 0;">
                ${callout.items.map(
                  (item) => html`
                    <li style="font-size: 16px; line-height: 24px; font-family: ${CLAUDE_FONTS.sansText}; margin: 0; color: ${CLAUDE_PALETTE.text}; font-weight: 400; text-align: left;">${item}</li>
                  `
                )}
              </ul>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  `;
}

/** Re‑exported for tests and downstream tooling. */
export const CLAUDE_INLINE_CODE_STYLE = INLINE_CODE_STYLE;