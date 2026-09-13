import { describe, expect, it } from 'vitest';
import { renderDisclaimerSection } from './disclaimer.section.js';
import { renderFragment } from '../../../test/render-fragment.js';

describe('mailchimp renderDisclaimerSection', () => {
  it('renders company details and compliance links', () => {
    const html = renderFragment(
      renderDisclaimerSection({
        companyName: 'Widgets Inc.',
        companyAddress: '1 Widget Lane',
        unsubscribeUrl: 'https://example.com/unsub',
        updateProfileUrl: 'https://example.com/profile',
      })
    );
    expect(html).toContain('Widgets Inc.');
    expect(html).toContain('1 Widget Lane');
    expect(html).toContain('https://example.com/unsub');
    expect(html).toContain('https://example.com/profile');
  });
});
