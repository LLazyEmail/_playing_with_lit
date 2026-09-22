import { html } from 'lit';
import { describe, expect, it } from 'vitest';
import { renderFragment } from '../../../test/render-fragment.js';
import { renderShipmentCardSection } from './shipment-card.section.js';

describe('google renderShipmentCardSection', () => {
  it('places the line item above the tracking row inside the border', () => {
    const rendered = renderFragment(
      renderShipmentCardSection(
        html`<div id="slot-item"></div>`,
        html`<div id="slot-tracking"></div>`,
      ),
    );

    expect(rendered).toContain('border:1px solid #dddddd');
    expect(rendered.indexOf('id="slot-item"')).toBeGreaterThan(-1);
    expect(rendered.indexOf('id="slot-item"')).toBeLessThan(
      rendered.indexOf('id="slot-tracking"'),
    );
  });
});
