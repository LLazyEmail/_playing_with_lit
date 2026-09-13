import { describe, expect, it } from 'vitest';
import { renderFooterBlock } from './footer.js';
import { renderFooterSection } from '../../hackernoon/sections/footer.compose.js';
import { renderFragment } from '../../../test/render-fragment.js';

describe('renderFooterBlock', () => {
  it('is the API the hackernoon footer section composes', () => {
    const viaSection = renderFragment(renderFooterSection({ year: 2099 }));
    const viaBlock = renderFragment(
      renderFooterBlock({ variant: 'hackernoon', year: 2099 })
    );
    expect(viaBlock).toBe(viaSection);
    expect(viaBlock).toContain('Copyright &#169; 2099 Hacker Noon. All rights reserved.');
  });
});
