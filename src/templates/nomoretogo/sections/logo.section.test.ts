import { describe, expect, it } from 'vitest';
import { renderLogoSection } from './logo.section.js';
import { renderFragment } from '../../../test/render-fragment.js';
import { BASE_IMAGE } from '../constants.js';

describe('nomoretogo renderLogoSection', () => {
  it('renders the brand logo image', () => {
    const html = renderFragment(renderLogoSection());
    expect(html).toContain(`${BASE_IMAGE}logo.jpeg`);
    expect(html).toContain('alt="No More To-Go"');
  });
});
