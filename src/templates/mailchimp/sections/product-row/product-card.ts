import { html, TemplateResult } from 'lit';
import type { ProductItem } from '../../types.js';

/**
 * Renders a single product card column for the Mailchimp-style product grid.
 *
 * Each card shows:
 *  - A product image
 *  - Availability meta text
 *  - Product title (H2)
 *  - Short description
 *  - Crossed-out previous price + current price
 *  - A "Buy Now" button
 *
 * @param product - Data for a single product.
 */
export function renderProductCard(product: ProductItem): TemplateResult {
  return html`
    <table class="product-outer" align="left" border="0" cellpadding="0" cellspacing="0" width="46%">
      <tr>
        <td valign="top" class="product-image">
          <img src="${product.imageUrl}" alt="${product.imageAlt}" />
        </td>
      </tr>
      <tr>
        <td valign="middle" bgcolor="#ffffff" class="product-inner">
          <p class="meta">${product.meta}</p>
          <h2>${product.title}</h2>
          <p>${product.description}</p>
          <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%">
            <tr>
              <td valign="middle" class="prices">
                <small>${product.previousPrice}</small>
                <p class="price">${product.price}</p>
              </td>
              <td valign="top" width="100" align="left" class="btn-col">
                <table width="100%" border="0" cellspacing="0" cellpadding="0">
                  <tr>
                    <td>
                      <a href="${product.buyUrl}" class="product-button">Buy Now</a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
      <tr>
        <td valign="top" class="space"></td>
      </tr>
    </table>`;
}
