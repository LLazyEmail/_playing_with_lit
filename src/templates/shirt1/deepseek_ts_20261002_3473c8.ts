import { describe, it, expect } from 'vitest';
import { renderShirt1Email } from './shirt1.renderer.js';
import { shirt1EmailData } from '../../scripts/content/shirt1-data.js';

describe('renderShirt1Email', () => {
  const { subject, html } = renderShirt1Email(shirt1EmailData);

  it('uses the expected subject', () => {
    expect(subject).toBe('Introducing the hnst-tee');
  });

  it('keeps the Klaviyo/XHTML document shell', () => {
    expect(html).toMatch(/XHTML 1\.0 Transitional/i);
    expect(html).toContain('id="bodyTable"');
    expect(html).toContain('id="bodyCell"');
    expect(html).toContain('class="templateContainer"');
  });

  it('renders every major section', () => {
    expect(html).toContain('View in Your Browser');
    expect(html).toContain('Introducing the hnst-tee');
    expect(html).toContain('097b41c0-dfaf-43d7-ac0e-2fcf0fd82eec.gif');
    expect(html).toContain('80% recycled cotton');
  });

  it('contains no leftover Lit hydration markers', () => {
    expect(html).not.toMatch(/<!--lit-part/);
    expect(html).not.toMatch(/<!--lit-node/);
  });
});