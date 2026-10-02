import { html, type TemplateResult } from 'lit';
import type { LottieEmailData } from '../types.js';
import { LOTTIE_ASSETS } from '../constants.js';

/**
 * Renders `Header 5`:
 *   - the CONVERT gif
 *   - "Hey Smiles Davis," greeting
 *   - the intro paragraph
 */
export function renderHeaderSection(
  data: Pick<LottieEmailData, 'hero' | 'greeting' | 'intro'>
): TemplateResult {
  return html`
    <table
      border="0"
      cellpadding="0"
      cellspacing="0"
      role="presentation"
      width="100%"
    >
      <tbody>
        <tr>
          <td
            bgcolor="#ffffff"
            pc-default-class="pc-sm-p-20-25-35 pc-xs-p-15"
            pc-default-padding="20px 35px 35px"
            style="padding: 20px 35px 7px; background-color: #ffffff"
            valign="top"
          >
            <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
              <tbody>
                <tr>
                  <td align="center" style="padding: 0 5px;" valign="top">
                    <img
                      alt=""
                      src=${data.hero.image.src}
                      width=${data.hero.image.width}
                      style="border: 0; line-height: 100%; outline: 0; -ms-interpolation-mode: bicubic; border-radius: 6px; max-width: 100%; height: auto; display: block; Margin: 0 auto; color: #1B1B1B;"
                    />
                  </td>
                </tr>
                <tr>
                  <td height="13" style="font-size: 1px; line-height: 1px"> </td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td
                    class="pc-xs-fs-30 pc-xs-lh-42 pc-fb-font"
                    style="padding: 0 5px; font-family: 'Fira Sans', Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 800; line-height: 46px; letter-spacing: -0.6px; color: #000000; text-align: center"
                    valign="top"
                  >${data.greeting}</td>
                </tr>
                <tr>
                  <td height="0" style="font-size: 1px; line-height: 1px"> </td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td
                    class="pc-fb-font"
                    style="padding: 0 5px; font-family: 'Fira Sans', Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 300; line-height: 28px; letter-spacing: -0.2px; color: #000000; text-align: center"
                    valign="top"
                  >
                    <p>${data.intro}</p>
                  </td>
                </tr>
                <tr>
                  <td height="0" style="line-height: 1px; font-size: 1px"> </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  `;
}

/** Referenced from header but kept exported for symmetry. */
export const LOTTIE_HERO_GIF = LOTTIE_ASSETS.heroGif;