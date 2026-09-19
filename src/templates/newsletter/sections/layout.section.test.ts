import { describe, expect, it } from 'vitest';
import { html } from 'lit';
import { renderLayoutSection } from './layout.section.js';
import { renderFragment } from '../../../test/render-fragment.js';

describe('newsletter renderLayoutSection', () => {
  it('wraps sections in the email chrome', () => {
    const htmlOut = renderFragment(
      renderLayoutSection(
        html`<div id="header-slot"></div>`,
        html`<div id="hero-slot"></div>`,
        html`<div id="content-slot"></div>`,
        html`<div id="cta-slot"></div>`,
        html`<div id="articles-slot"></div>`,
        html`<div id="footer-slot"></div>`,
      )
    );
    expect(htmlOut).toContain('email-wrapper');
    expect(htmlOut).toContain('email-container');
    expect(htmlOut).toContain('id="header-slot"');
    expect(htmlOut).toContain('id="footer-slot"');
  });
});
