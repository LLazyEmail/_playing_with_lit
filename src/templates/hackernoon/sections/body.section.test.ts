import { describe, expect, it } from 'vitest';
import { HACKERNOON_BRAND_URL } from '../constants.js';
import { renderBodySection } from './body.section.js';
import { renderFragment } from '../../../test/render-fragment.js';

describe('hackernoon renderBodySection', () => {
  it('closes with the brand logo linking home', () => {
    const html = renderFragment(renderBodySection());
    expect(html).toContain('id="templateBody"');
    expect(html).toContain(`${HACKERNOON_BRAND_URL}hackernoon.png`);
    expect(html).toContain('https://hackernoon.com/');
  });
});
