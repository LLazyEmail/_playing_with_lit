import { describe, expect, it } from 'vitest';
import { HACKERNOON_BRAND_URL } from '../constants.js';
import { renderLogoSection } from './logo.section.js';
import { renderFragment } from '../../../test/render-fragment.js';

describe('hackernoon renderLogoSection', () => {
  it('renders the brand logo pointing at hackernoon.com', () => {
    const html = renderFragment(renderLogoSection());
    expect(html).toContain(`${HACKERNOON_BRAND_URL}hackernoon.png`);
    expect(html).toContain('http://www.hackernoon.com');
    expect(html).toContain('id="templatePreheader"');
  });
});
