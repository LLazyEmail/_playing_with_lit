import { describe, expect, it } from 'vitest';
import { renderImageSection } from './image.section.js';
import { renderFragment } from '../../../test/render-fragment.js';

describe('mailchimp renderImageSection', () => {
  it('renders the hero image URL and alt text', () => {
    const html = renderFragment(
      renderImageSection({
        heroImageUrl: 'https://cdn.example/hero-unique.png',
        heroImageAlt: 'Hero alt unique',
      })
    );
    expect(html).toContain('https://cdn.example/hero-unique.png');
    expect(html).toContain('alt="Hero alt unique"');
  });
});
