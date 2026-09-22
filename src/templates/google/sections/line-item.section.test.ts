import { describe, expect, it } from 'vitest';
import { googleShipmentData } from '../../../scripts/content/google-data.js';
import { renderFragment } from '../../../test/render-fragment.js';
import { renderLineItemSection } from './line-item.section.js';

describe('google renderLineItemSection', () => {
  const html = renderFragment(renderLineItemSection(googleShipmentData));

  it('renders the product name, id, price, and quantity', () => {
    expect(html).toContain('Google Home Mini (Chalk)');
    expect(html).toContain('ID number:');
    expect(html).toContain('6500500050');
    expect(html).toContain('$49.00');
    expect(html).toContain('Quantity: 1');
  });

  it('renders the product image', () => {
    expect(html).toContain(`src="${googleShipmentData.item.image}"`);
    expect(html).toContain('alt="Google Home Mini (Chalk)"');
    expect(html).toContain('id="itemDetails"');
  });
});
