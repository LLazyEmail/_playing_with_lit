import { html } from 'lit';
import { describe, expect, it } from 'vitest';
import { renderFragment } from '../../../test/render-fragment.js';
import { renderLayoutSection } from './layout.section.js';

describe('google renderLayoutSection', () => {
  it('nests each slot in order inside the 600px shell', () => {
    const rendered = renderFragment(
      renderLayoutSection(
        html`<div id="slot-preheader"></div>`,
        html`<div id="slot-header"></div>`,
        html`<div id="slot-progress"></div>`,
        html`<div id="slot-shipment"></div>`,
        html`<div id="slot-order"></div>`,
        html`<div id="slot-price"></div>`,
        html`<div id="slot-footer"></div>`,
      ),
    );

    expect(rendered).toContain('width:600px');
    const ids = [
      'slot-preheader',
      'slot-header',
      'slot-progress',
      'slot-shipment',
      'slot-order',
      'slot-price',
      'slot-footer',
    ];
    const positions = ids.map((id) => rendered.indexOf(`id="${id}"`));
    expect(positions.every((position) => position >= 0)).toBe(true);
    expect(positions).toEqual([...positions].sort((a, b) => a - b));
  });
});
