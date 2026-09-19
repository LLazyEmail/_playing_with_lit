import { describe, expect, it } from 'vitest';
import { renderContentSection } from './content.section.js';
import { renderFragment } from '../../../test/render-fragment.js';

describe('newsletter renderContentSection', () => {
  it('renders the digest heading and body text', () => {
    const html = renderFragment(
      renderContentSection({ bodyText: 'Unique digest body XYZ' })
    );
    expect(html).toContain('Your Personalised Digest');
    expect(html).toContain('Unique digest body XYZ');
  });
});
