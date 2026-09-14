import { html } from 'lit';
import { describe, expect, it } from 'vitest';
import { renderLayoutSection } from './layout.section.js';
import { renderFragment } from '../../../test/render-fragment.js';

describe('hackernoon renderLayoutSection', () => {
  it('injects preheader text and nests each slot', () => {
    const htmlOut = renderFragment(
      renderLayoutSection(
        {
          title: 'T',
          preheaderText: 'UNIQUE_PREHEADER_TOKEN',
          year: 2026,
        },
        html`<tr id="slot-logo"></tr>`,
        html`<tr id="slot-header"></tr>`,
        html`<tr id="slot-body"></tr>`,
        html`<tr id="slot-footer"></tr>`
      )
    );
    expect(htmlOut).toContain('UNIQUE_PREHEADER_TOKEN');
    expect(htmlOut).toContain('id="slot-logo"');
    expect(htmlOut).toContain('id="slot-header"');
    expect(htmlOut).toContain('id="slot-body"');
    expect(htmlOut).toContain('id="slot-footer"');
  });
});
