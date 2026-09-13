import { describe, expect, it } from 'vitest';
import { renderTextSection } from './text.section.js';
import { renderFragment } from '../../../test/render-fragment.js';

describe('mailchimp renderTextSection', () => {
  it('renders heading and body from data', () => {
    const html = renderFragment(
      renderTextSection({
        contentHeading: 'Headline Fixture',
        contentBody: 'Body fixture paragraph.',
      })
    );
    expect(html).toContain('<h1>Headline Fixture</h1>');
    expect(html).toContain('Body fixture paragraph.');
  });
});
