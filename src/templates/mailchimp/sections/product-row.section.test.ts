import { describe, expect, it } from 'vitest';
import { renderProductRowsSection } from './product-row.section.js';
import { renderFragment } from '../../../test/render-fragment.js';

const product = (title: string, price: string) => ({
  imageUrl: `https://cdn.example/${title}.png`,
  imageAlt: `${title} alt`,
  meta: 'In Stock',
  title,
  description: `${title} description`,
  previousPrice: '$99',
  price,
  buyUrl: `https://example.com/buy/${title}`,
});

describe('mailchimp renderProductRowsSection', () => {
  it('renders titles, prices, and buy URLs from each product', () => {
    const html = renderFragment(
      renderProductRowsSection({
        productRows: [
          [product('WidgetLeft', '$11'), product('WidgetRight', '$22')],
        ],
      })
    );
    expect(html).toContain('WidgetLeft');
    expect(html).toContain('WidgetRight');
    expect(html).toContain('$11');
    expect(html).toContain('$22');
    expect(html).toContain('https://example.com/buy/WidgetLeft');
    expect(html).toContain('https://example.com/buy/WidgetRight');
  });
});
