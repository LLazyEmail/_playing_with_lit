import { describe, expect, it } from 'vitest';
import { renderFooterSection } from './footer.section.js';
import { renderFragment } from '../../../test/render-fragment.js';

describe('newsletter renderFooterSection', () => {
  it('renders brand, year, and legal links', () => {
    const html = renderFragment(
      renderFooterSection({
        brandName: 'BrandZed',
        unsubscribeUrl: 'https://example.com/unsub',
        privacyUrl: 'https://example.com/privacy',
        contactUrl: 'https://example.com/contact',
        year: 2026,
      })
    );
    expect(html).toContain('BrandZed');
    expect(html).toContain('2026');
    expect(html).toContain('https://example.com/unsub');
    expect(html).toContain('https://example.com/privacy');
    expect(html).toContain('https://example.com/contact');
  });
});
