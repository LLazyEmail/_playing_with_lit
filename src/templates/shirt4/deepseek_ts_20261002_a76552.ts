import { html, type TemplateResult } from 'lit';
import type { Shirt4EmailData, Shirt4Product } from '../types.js';
import { SHIRT4_BRAND_URL } from '../constants.js';

function renderProductBlock(product: Shirt4Product): TemplateResult {
  return html`
    <table
      border="0"
      cellpadding="0"
      cellspacing="0"
      role="presentation"
      style="background-color:#fbfbf5; min-width:100%; width:100%;"
    >
      <tr>
        <td align="center" class="plr15" style="padding:0;">
          <a href=${product.url} style="color:#000000; display:block; text-decoration:none;" target="_blank">
            <img
              border="0"
              class="wf"
              height="auto"
              src=${product.image.src}
              alt=${product.image.alt}
              style="display:block; height:auto; margin:0 auto; max-width:100%; padding:0;"
              width="540"
            />
          </a>
        </td>
      </tr>
      <tr>
        <td align="center">
          <table
            align="center"
            border="0"
            cellpadding="0"
            cellspacing="0"
            role="presentation"
            style="margin:0 auto; min-width:100%; width:100%;"
          >
            <tr>
              <td align="left" class="plr15" style="padding:20px 30px 30px 30px;">
                <h2 style="color:#000000; font-size:22px; font-weight:bold; margin:0 0 8px; text-transform:uppercase;">
                  <a href=${product.url} style="color:#000000; text-decoration:none; text-transform:uppercase;" target="_blank">${product.name}</a>
                </h2>
                <p style="color:#6e6e6e; font-size:14px; margin:0;">${product.price}</p>
                <p style="margin:16px 0 0;">
                  <a
                    href=${product.cta.url}
                    style="background-color:#000000; color:#ffffff; display:inline-block; font-size:12px; font-weight:bold; padding:12px 18px; text-align:center; text-decoration:none; text-transform:uppercase;"
                    target="_blank"
                  >${product.cta.label}</a>
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  `;
}

/**
 * Renders the hero GIF, the "The Art of Shirting" intro copy, the black
 * CTA, and the product grid. Extend `data.products` to match the tail of
 * shirt4.html.
 */
export function renderBodySection(
  data: Pick<Shirt4EmailData, 'hero' | 'intro' | 'products'>
): TemplateResult {
  return html`
    <table
      border="0"
      cellpadding="0"
      cellspacing="0"
      role="presentation"
      style="background-color:#fbfbf5; min-width:100%; width:100%;"
    >
      <tr>
        <td align="center" class="plr15" style="padding:0px;">
          <a
            href=${data.hero.url}
            style="color:#000000; display:block; text-decoration:none;"
            target="_blank"
          >
            <img
              border="0"
              class="wf"
              height="auto"
              src=${data.hero.image.src}
              alt=${data.hero.image.alt}
              style="display:block; height:auto; margin:0 auto; max-width:100%; padding:0;"
              width=${data.hero.image.width}
            />
          </a>
        </td>
      </tr>
    </table>

    <table
      border="0"
      cellpadding="0"
      cellspacing="0"
      role="presentation"
      style="background-color:#fbfbf5; min-width:100%; width:100%;"
    >
      <tr>
        <td align="center">
          <table
            align="center"
            border="0"
            cellpadding="0"
            cellspacing="0"
            role="presentation"
            style="margin:0 auto; min-width:100%; width:100%;"
          >
            <tr>
              <td align="left" class="plr15" style="padding:20px 30px 0px 30px;">
                <h1 style="color:#000000; font-size:28px; font-weight:bold; margin:0 0 12px; text-transform:uppercase;">
                  <a href=${data.hero.url} style="color:#000000; font-weight:bold; text-decoration:none; text-transform:uppercase;" target="_blank">${data.intro.headline}</a>
                </h1>
                <p style="color:#6e6e6e; font-size:16px; font-weight:normal; margin:0 0 12px;">
                  ${data.intro.body}
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>

    <table
      border="0"
      cellpadding="0"
      cellspacing="0"
      role="presentation"
      style="background-color:#fbfbf5; min-width:100%; width:100%;"
    >
      <tr>
        <td class="plr15" style="padding:0 30px;">
          <table
            align="center"
            border="0"
            cellpadding="0"
            cellspacing="0"
            role="presentation"
            style="margin:0 auto; min-width:100%; width:100%;"
          >
            <tr>
              <td style="padding-top:6px; padding-bottom:6px; text-align:left;">
                <a
                  href=${data.intro.cta.url}
                  style="background-color:#000000; border-radius:0em; color:#ffffff; display:inline-block; font-size:12px; font-weight:bold; padding:16px 20px; mso-padding-alt:0; text-align:center; text-decoration:none; text-transform:uppercase;"
                  target="_blank"
                >${data.intro.cta.label}</a>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>

    ${data.products.map((p) => renderProductBlock(p))}
  `;
}