import { describe, expect, it } from 'vitest';
import { renderNavSection } from './nav.section.js';
import { renderFragment } from '../../../test/render-fragment.js';

describe('nomoretogo renderNavSection', () => {
  it('renders the weekly menu URL and issue date', () => {
    const html = renderFragment(
      renderNavSection({
        weeklyMenuUrl: 'https://example.com/weekly-menu-test',
        date: 'September 14th, 2099',
      })
    );
    expect(html).toContain('https://example.com/weekly-menu-test');
    expect(html).toContain('Weekly Menu');
    expect(html).toContain('September 14th, 2099');
  });
});
