import { html, type TemplateResult } from 'lit';
import type { Shirt1EmailData } from '../types.js';

/**
 * Renders the main hero row: headline ("Introducing the hnst-tee") and the
 * animated hero image (maps to the article body row).
 */
export function renderBodySection(
  data: Pick<Shirt1EmailData, 'headline' | 'hero'>
): TemplateResult {
  return html`
    <table border="0" cellpadding="0" cellspacing="0" class="kmTextBlock" width="100%">
      <tbody class="kmTextBlockOuter">
        <tr>
          <td class="kmTextBlockInner" valign="top">
            <table align="left" border="0" cellpadding="0" cellspacing="0" class="kmTextContentContainer" width="100%">
              <tbody>
                <tr>
                  <td class="kmTextContent" style="padding:9px 18px;" valign="top">
                    <p style="padding-bottom:0; text-align:center">
                      <span style="font-size:16px;">${data.headline}</span>
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>

    <table border="0" cellpadding="0" cellspacing="0" class="kmImageBlock" style="min-width:100%" width="100%">
      <tbody class="kmImageBlockOuter">
        <tr>
          <td class="kmImageBlockInner" style="padding:0 9px;" valign="top">
            <table align="left" border="0" cellpadding="0" cellspacing="0" class="kmImageContentContainer" style="min-width:100%" width="100%">
              <tbody>
                <tr>
                  <td class="kmImageContent" style="padding:0; text-align:center;" valign="top">
                    <a href=${data.hero.url} target="_self">
                      <img
                        align="center"
                        alt=${data.hero.alt}
                        class="kmImage"
                        src=${data.hero.src}
                        style="max-width:1240px; padding:0; border-width:0;"
                        width=${data.hero.width}
                      />
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  `;
}