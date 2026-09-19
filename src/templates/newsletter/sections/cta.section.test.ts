import { describe, expect, it } from 'vitest';
import { renderCtaSection } from './cta.section.js';
import { renderFragment } from '../../../test/render-fragment.js';

describe('newsletter renderCtaSection', () => {
  it('renders the CTA label and href', () => {
    const html = renderFragment(
      renderCtaSection({
        ctaUrl: 'https://example.com/issue',
        ctaLabel: 'Read Now',
      })
    );
    expect(html).toContain('https://example.com/issue');
    expect(html).toContain('Read Now');
  });
});
