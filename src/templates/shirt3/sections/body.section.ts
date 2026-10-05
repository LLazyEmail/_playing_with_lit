import { html, type TemplateResult } from 'lit';
import type { Shirt3EmailData, Shirt3Product } from '../types.js';

function renderProductBlock(product: Shirt3Product): TemplateResult {
  return html`
    <table
      align="center"
      cellpadding="0"
      cellspacing="0"
      border="0"
      role="presentation"
      bgcolor="#ffffff"
      style="width:640px;margin:0 auto;"
      class="full firstItem"
    >
      <tr>
        <td align="center">
          <a href=${product.url} style="text-decoration:none;" target="_blank">
            <img
              src=${product.image.src}
              width="640"
              alt=${product.image.alt}
              class="full"
              style="display:block;margin:0 auto;white-space:pre;text-align:center;border:0;"
            />
          </a>
        </td>
      </tr>
      <tr>
        <td align="center" class="yahooHalf" style="padding:25px 0;">
          <table
            align="center"
            cellpadding="0"
            cellspacing="0"
            border="0"
            role="presentation"
            style="width:90%;margin:0 auto;"
          >
            <tr>
              <td
                align="center"
                class="prodCopy"
                style="padding:0!important;font-family:Helvetica, Arial, sans-serif, LinetoCircularWeb;font-size:16px;mso-line-height-rule:exactly;line-height:20px;letter-spacing:0.43px;-webkit-font-smoothing:antialiased;"
              >
                <a href=${product.url} style="text-decoration:none;color:#0F1B55;" target="_blank">
                  <strong>${product.name}</strong><br />
                  ${product.color}<br />
                  ${product.price}
                </a>
              </td>
            </tr>
            <tr>
              <td align="center" style="padding:20px 0 0;">
                <table
                  align="center"
                  cellpadding="0"
                  cellspacing="0"
                  border="0"
                  bgcolor="#1203B0"
                  role="presentation"
                  style="width:220px;margin:0 auto;"
                  class="cta"
                >
                  <tr>
                    <td align="center" valign="middle" height="44" style="text-align:center;">
                      <a
                        href=${product.cta.url}
                        style="color:#fffffe;text-decoration:none;font-family:Helvetica, Arial, sans-serif;font-size:14px;letter-spacing:1px;"
                        target="_blank"
                      >${product.cta.label}</a>
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

/**
 * Renders the main product grid.
 * `shirt3.html` matches shirt2 and is truncated after the first product,
 * so this loops over `data.products` — add entries to `shirt3-data.ts`
 * to match the real tail.
 */
export function renderBodySection(
  data: Pick<Shirt3EmailData, 'products'>
): TemplateResult {
  return html`
    ${data.products.map((p) => renderProductBlock(p))}
  `;
}