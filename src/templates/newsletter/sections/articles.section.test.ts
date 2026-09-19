import { describe, expect, it } from 'vitest';
import { renderArticlesSection } from './articles.section.js';
import { renderFragment } from '../../../test/render-fragment.js';

describe('newsletter renderArticlesSection', () => {
  it('renders each article title, excerpt, and url', () => {
    const html = renderFragment(
      renderArticlesSection({
        articles: [
          {
            imageUrl: 'https://example.com/a.png',
            imageAlt: 'Story A',
            title: 'Unique Article Title XYZ',
            excerpt: 'Unique excerpt ABC',
            url: 'https://example.com/story-a',
          },
        ],
      })
    );
    expect(html).toContain('Top Stories This Month');
    expect(html).toContain('Unique Article Title XYZ');
    expect(html).toContain('Unique excerpt ABC');
    expect(html).toContain('https://example.com/story-a');
    expect(html).toContain('https://example.com/a.png');
  });
});
