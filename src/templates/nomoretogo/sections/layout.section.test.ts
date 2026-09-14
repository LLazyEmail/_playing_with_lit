import { html } from 'lit';
import { describe, expect, it } from 'vitest';
import { nomoretogoData } from '../../../scripts/content/nomoretogo-data.js';
import { renderLayoutSection } from './layout.section.js';
import { renderFragment } from '../../../test/render-fragment.js';

describe('nomoretogo renderLayoutSection', () => {
  it('uses data.title as the article label and nests each slot', () => {
    const htmlOut = renderFragment(
      renderLayoutSection(
        { ...nomoretogoData, title: 'LAYOUT_TITLE_TOKEN' },
        html`<div id="slot-logo"></div>`,
        html`<div id="slot-nav"></div>`,
        html`<div id="slot-intro"></div>`,
        html`<div id="slot-recipes"></div>`,
        html`<div id="slot-cta"></div>`,
        html`<div id="slot-prep"></div>`,
        html`<div id="slot-community"></div>`,
        html`<div id="slot-amazon"></div>`,
        html`<div id="slot-footer"></div>`
      )
    );
    expect(htmlOut).toContain('aria-label="LAYOUT_TITLE_TOKEN"');
    for (const id of [
      'slot-logo',
      'slot-nav',
      'slot-intro',
      'slot-recipes',
      'slot-cta',
      'slot-prep',
      'slot-community',
      'slot-amazon',
      'slot-footer',
    ]) {
      expect(htmlOut).toContain(`id="${id}"`);
    }
  });
});
