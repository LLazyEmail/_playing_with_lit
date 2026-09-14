import { describe, expect, it } from 'vitest';
import { zurbData } from '../../../scripts/content/zurb-data.js';
import { renderFragment } from '../../../test/render-fragment.js';
import { renderTitleSection } from './title.section.js';

describe('zurb renderTitleSection', () => {
  it('renders the issue title', () => {
    const html = renderFragment(renderTitleSection(zurbData));
    expect(html).toContain('Foundation for Emails 2 is Here');
  });
});
