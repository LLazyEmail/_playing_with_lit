import { describe, expect, it } from 'vitest';
import { renderFooterSection } from './footer.section.js';
import { renderFragment } from '../../../test/render-fragment.js';

describe('hackernoon renderFooterSection', () => {
  it('renders the copyright year from data.year', () => {
    const html = renderFragment(renderFooterSection({ year: 2099 }));
    expect(html).toContain('Copyright &#169; 2099 Hacker Noon. All rights reserved.');
    expect(html).not.toContain('2098');
  });

  it('includes social follow destinations', () => {
    const html = renderFragment(renderFooterSection({ year: 2021 }));
    expect(html).toContain('https://twitter.com/hackernoon');
    expect(html).toContain('https://www.facebook.com/hackernoon');
  });
});
