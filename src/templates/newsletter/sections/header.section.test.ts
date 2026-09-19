import { describe, expect, it } from 'vitest';
import { renderHeaderSection } from './header.section.js';
import { renderFragment } from '../../../test/render-fragment.js';

describe('newsletter renderHeaderSection', () => {
  it('renders the brand logo and heading', () => {
    const html = renderFragment(
      renderHeaderSection({
        logoUrl: 'https://example.com/logo.png',
        brandName: 'BrandZed',
      })
    );
    expect(html).toContain('https://example.com/logo.png');
    expect(html).toContain('BrandZed logo');
    expect(html).toContain('Monthly Newsletter');
  });
});
