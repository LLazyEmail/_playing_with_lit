import { describe, expect, it } from 'vitest';
import { googleShipmentData } from '../../../scripts/content/google-data.js';
import { renderFragment } from '../../../test/render-fragment.js';
import { renderHeaderSection } from './header.section.js';

describe('google renderHeaderSection', () => {
  it('renders the greeting and intro', () => {
    const html = renderFragment(renderHeaderSection(googleShipmentData));
    expect(html).toContain('Hi Smiles Davis,');
    expect(html).toContain(
      'Your shipment was just dropped off. Go on. Open it and enjoy.'
    );
  });

  it('renders the Google Store logo link', () => {
    const html = renderFragment(renderHeaderSection(googleShipmentData));
    expect(html).toContain('https://store.google.com/');
    expect(html).toContain('googleg_standard_color_32dp.png');
  });
});
