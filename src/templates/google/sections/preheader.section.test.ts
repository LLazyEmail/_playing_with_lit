import { describe, expect, it } from 'vitest';
import { googleShipmentData } from '../../../scripts/content/google-data.js';
import { renderFragment } from '../../../test/render-fragment.js';
import { renderPreheaderSection } from './preheader.section.js';

describe('google renderPreheaderSection', () => {
  it('renders the hidden inbox preview text', () => {
    const html = renderFragment(renderPreheaderSection(googleShipmentData));
    expect(html).toContain('display:none');
    expect(html).toContain('Your Google Store order has shipped.');
  });
});
