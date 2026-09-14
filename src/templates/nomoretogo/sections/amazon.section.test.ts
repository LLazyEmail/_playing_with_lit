import { describe, expect, it } from 'vitest';
import { BASE_IMAGE } from '../constants.js';
import { renderAmazonSection } from './amazon.section.js';
import { renderFragment } from '../../../test/render-fragment.js';

describe('nomoretogo renderAmazonSection', () => {
  it('renders the Amazon banner from the asset base', () => {
    const html = renderFragment(renderAmazonSection());
    expect(html).toContain(`${BASE_IMAGE}amazon.png`);
    expect(html).toContain('alt="Amazon"');
  });
});
