import { describe, expect, it } from 'vitest';
import { renderBrandingSection } from './branding.section.js';
import { renderFragment } from '../../../test/render-fragment.js';

describe('mailchimp renderBrandingSection', () => {
  it('renders brand name and each nav link', () => {
    const html = renderFragment(
      renderBrandingSection({
        brandName: 'BrandZed',
        navLinks: [
          { label: 'ShopNow', url: 'https://example.com/shop-now' },
          { label: 'OnSale', url: 'https://example.com/on-sale' },
        ],
      })
    );
    expect(html).toContain('BrandZed');
    expect(html).toContain('ShopNow');
    expect(html).toContain('https://example.com/shop-now');
    expect(html).toContain('OnSale');
    expect(html).toContain('https://example.com/on-sale');
  });
});
