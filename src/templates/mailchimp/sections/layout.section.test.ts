import { html } from 'lit';
import { describe, expect, it } from 'vitest';
import { renderLayoutSection } from './layout.section.js';
import { renderFragment } from '../../../test/render-fragment.js';

describe('mailchimp renderLayoutSection', () => {
  it('nests every section slot in order', () => {
    const htmlOut = renderFragment(
      renderLayoutSection(
        html`<tr id="slot-preheader"></tr>`,
        html`<tr id="slot-branding"></tr>`,
        html`<tr id="slot-image"></tr>`,
        html`<tr id="slot-text"></tr>`,
        html`<tr id="slot-products"></tr>`,
        html`<tr id="slot-footer"></tr>`,
        html`<tr id="slot-disclaimer"></tr>`
      )
    );
    for (const id of [
      'slot-preheader',
      'slot-branding',
      'slot-image',
      'slot-text',
      'slot-products',
      'slot-footer',
      'slot-disclaimer',
    ]) {
      expect(htmlOut).toContain(`id="${id}"`);
    }
  });
});
