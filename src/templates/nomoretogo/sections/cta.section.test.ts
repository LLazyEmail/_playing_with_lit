import { describe, expect, it } from 'vitest';
import { renderCtaSection } from './cta.section.js';
import { decodeHtml } from '../../../test/decode-html.js';
import { renderFragment } from '../../../test/render-fragment.js';

describe('nomoretogo renderCtaSection', () => {
  it('renders the CTA URL and label', () => {
    const html = renderFragment(
      renderCtaSection({ ctaUrl: 'https://example.com/get-menu-test' })
    );
    expect(html).toContain('https://example.com/get-menu-test');
    expect(decodeHtml(html)).toContain("Get This Week's Menu");
  });
});
