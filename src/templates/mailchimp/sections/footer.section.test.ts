import { describe, expect, it } from 'vitest';
import { renderFooterSection } from './footer.section.js';
import { renderFragment } from '../../../test/render-fragment.js';

describe('mailchimp renderFooterSection', () => {
  it('renders all three footer columns from data', () => {
    const html = renderFragment(
      renderFooterSection({
        footerColumns: [
          { title: 'About Col', description: 'About copy' },
          { title: 'Support Col', description: 'Support copy' },
          { title: 'Legal Col', description: 'Legal copy' },
        ],
      })
    );
    expect(html).toContain('About Col');
    expect(html).toContain('Support Col');
    expect(html).toContain('Legal Col');
    expect(html).toContain('About copy');
  });
});
