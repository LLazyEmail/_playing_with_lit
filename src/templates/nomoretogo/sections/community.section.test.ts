import { describe, expect, it } from 'vitest';
import { renderCommunitySection } from './community.section.js';
import { renderFragment } from '../../../test/render-fragment.js';

describe('nomoretogo renderCommunitySection', () => {
  it('renders Facebook group and help URLs', () => {
    const html = renderFragment(
      renderCommunitySection({
        facebookGroupUrl: 'https://example.com/fb-group-test',
        helpUrl: 'https://example.com/help-test',
      })
    );
    expect(html).toContain('https://example.com/fb-group-test');
    expect(html).toContain('https://example.com/help-test');
    expect(html).toContain('contact@nomoretogo.com');
  });
});
