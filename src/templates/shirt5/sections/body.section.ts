import { html, type TemplateResult } from 'lit';
import type { Shirt5EmailData, Shirt5Image } from '../types.js';
import { SHIRT5_KLAVIYO_QUERY } from '../constants.js';

function renderImageBlock(image: Shirt5Image): TemplateResult {
  const padding = image.padding ?? '0px';
  const bgColor = image.bgColor ?? '#FFFFFF';

  return html`
    <table
      border="0"
      cellpadding="0"
      cellspacing="0"
      class="kmImageBlock"
      width="100%"
      style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;table-layout:fixed;min-width:100%"
    >
      <tbody class="kmImageBlockOuter">
        <tr>
          <td
            class="kmImageBlockInner"
            style="padding:${padding};padding-right:0px;padding-left:0px;background-color:${bgColor};"
            valign="top"
          >
            <table
              align="left"
              border="0"
              cellpadding="0"
              cellspacing="0"
              class="kmImageContentContainer"
              width="100%"
              style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;table-layout:fixed;min-width:100%"
            >
              <tbody>
                <tr>
                  <td
                    class="kmImageContent"
                    valign="top"
                    style="padding:0;font-size:0;text-align:center;"
                  >
                    <a
                      href=${image.url + SHIRT5_KLAVIYO_QUERY}
                      target="_self"
                      style="word-wrap:break-word;max-width:100%;color:#000;font-weight:normal;text-decoration:underline"
                    >
                      <img
                        align="center"
                        alt=${image.alt}
                        class="kmImage"
                        src=${image.src}
                        width=${image.width}
                        style="border:0;height:auto;line-height:100%;outline:none;text-decoration:none;max-width:100%;display:inline;vertical-align:top;font-size:12px;width:100%;max-width:1200px;padding:0;border-width:0;"
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

/**
 * Renders the product‑image stack. `shirt5.html` truncates inside the 6th
 * block; append entries to `data.images` to match the real tail.
 */
export function renderBodySection(
  data: Pick<Shirt5EmailData, 'images'>
): TemplateResult {
  return html`
    ${data.images.map((image) => renderImageBlock(image))}
  `;
}