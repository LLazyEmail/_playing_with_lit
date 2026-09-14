import { describe, expect, it } from 'vitest';
import { renderPreheaderSection } from './preheader.section.js';
import { renderFragment } from '../../../test/render-fragment.js';

describe('mailchimp renderPreheaderSection', () => {
  it('renders preview text and the view-in-browser URL', () => {
    const html = renderFragment(
      renderPreheaderSection({
        preheaderText: 'PREVIEW_COPY_XYZ',
        viewInBrowserUrl: 'https://example.com/view-in-browser',
      })
    );
    expect(html).toContain('PREVIEW_COPY_XYZ');
    expect(html).toContain('https://example.com/view-in-browser');
    expect(html).toContain('View this e-mail in your browser');
  });
});
