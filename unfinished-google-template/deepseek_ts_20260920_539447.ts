import { describe, it, expect } from 'vitest';
import { render } from '@lit-labs/ssr';
import { collectResultSync } from '@lit-labs/ssr/lib/render-result.js';
import { renderHeaderSection } from './header.section.js';
import { googleShipmentData } from '../../../scripts/content/google-data.js';

const renderToString = (tpl: any) =>
  collectResultSync(render(tpl)).replace(/<!--lit-[^>]*-->/g, '');

describe('google header section', () => {
  it('renders the greeting and intro', () => {
    const html = renderToString(renderHeaderSection(googleShipmentData));
    expect(html).toContain('Hi Smiles Davis,');
    expect(html).toContain(
      'Your shipment was just dropped off. Go on. Open it and enjoy.'
    );
  });

  it('renders the Google Store logo link', () => {
    const html = renderToString(renderHeaderSection(googleShipmentData));
    expect(html).toContain('https://store.google.com/');
    expect(html).toContain('googleg_standard_color_32dp.png');
  });
});