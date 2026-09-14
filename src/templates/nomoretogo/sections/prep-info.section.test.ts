import { describe, expect, it } from 'vitest';
import { renderPrepInfoSection } from './prep-info.section.js';
import { renderFragment } from '../../../test/render-fragment.js';

describe('nomoretogo renderPrepInfoSection', () => {
  it('renders spotlight, weekend prep, and make-ahead copy', () => {
    const html = renderFragment(
      renderPrepInfoSection({
        ingredientsSpotlight: 'SPOTLIGHT_SAFFRON',
        weekendPrepText: 'WEEKEND_CHOP',
        makeAheadText: 'MAKEAHEAD_RICE',
      })
    );
    expect(html).toContain('SPOTLIGHT_SAFFRON');
    expect(html).toContain('WEEKEND_CHOP');
    expect(html).toContain('MAKEAHEAD_RICE');
  });
});
