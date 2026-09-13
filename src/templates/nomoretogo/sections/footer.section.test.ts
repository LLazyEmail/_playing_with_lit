import { describe, expect, it } from 'vitest';
import { renderFooterSection } from './footer.section.js';
import { renderFragment } from '../../../test/render-fragment.js';

describe('nomoretogo renderFooterSection', () => {
  it('renders the unsubscribe URL from data', () => {
    const unsubscribeUrl = 'https://example.com/unsub-test';
    const html = renderFragment(renderFooterSection({ unsubscribeUrl }));
    expect(html).toContain(`href="${unsubscribeUrl}"`);
    expect(html).toContain('Unsubscribe');
    expect(html).toContain('No More To-Go');
  });
});
