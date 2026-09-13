import { describe, expect, it } from 'vitest';
import { renderHeaderSection } from './header.section.js';
import { renderFragment } from '../../../test/render-fragment.js';

describe('hackernoon renderHeaderSection', () => {
  it('renders data.title as the article headline', () => {
    const title = 'Unique DevOps Headline XYZ';
    const html = renderFragment(renderHeaderSection({ title }));
    expect(html).toContain(title);
  });
});
