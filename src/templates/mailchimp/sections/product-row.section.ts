import { html, TemplateResult } from 'lit';
import type { MailchimpEmailData, ProductItem } from '../types.js';
import { renderProductCard } from './product-row/product-card.js';

/**
 * Renders all product rows for the Mailchimp-style email.
 *
 * Each row contains two {@link ProductItem} cards rendered side-by-side.
 * The number of rows is driven entirely by `data.productRows`, so you can
 * pass as many (or as few) rows as you need.
 *
 * @param data - Requires `productRows` (an array of two-product tuples).
 */
export function renderProductRowsSection(
  data: Pick<MailchimpEmailData, 'productRows'>
): TemplateResult {
  return html`
    ${data.productRows.map(([left, right]: [ProductItem, ProductItem]) => renderProductRow(left, right))}`;
}

/**
 * Renders a single two-column product row.
 *
 * @param left  - Left product card.
 * @param right - Right product card.
 */
function renderProductRow(left: ProductItem, right: ProductItem): TemplateResult {
  return html`
    <tr class="product">
      <td align="center" valign="top" width="100%" class="product-row">
        <table class="table-inner" align="center" border="0" cellpadding="0" cellspacing="0" width="600">
          <tr>
            <td align="left" valign="top" width="96%" bgcolor="#f5f5f5" class="product-col" style="padding-top:20px;">
              ${renderProductCard(left)}
              ${renderProductCard(right)}
            </td>
          </tr>
        </table>
      </td>
    </tr>`;
}
