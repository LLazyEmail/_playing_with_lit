import { describe, expect, it } from 'vitest';
import { renderIntroSection } from './intro.section.js';
import { renderFragment } from '../../../test/render-fragment.js';

describe('nomoretogo renderIntroSection', () => {
  it('renders intro copy and signature', () => {
    const html = renderFragment(
      renderIntroSection({
        introText: 'INTRO_TOKEN_ABC',
        signature: 'SIG_TOKEN_XYZ',
      })
    );
    expect(html).toContain('INTRO_TOKEN_ABC');
    expect(html).toContain('SIG_TOKEN_XYZ');
  });
});
