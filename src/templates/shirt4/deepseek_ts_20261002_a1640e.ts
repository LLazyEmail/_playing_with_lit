import { describe, it, expect } from 'vitest';
import { renderShirt4Email } from './shirt4.renderer.js';
import { shirt4EmailData } from '../../scripts/content/shirt4-data.js';

describe('renderShirt4Email', () => {
  const { subject, html } = renderShirt4Email(shirt4EmailData);

  it('uses the expected subject', () => {
    expect(subject).toBe(
      'Orlebar Brown | New Shirts: Add a Layer to Your Look'
    );
  });

  it('keeps the Ometria/HTML5 document shell', () => {
    expect(html).toMatch(/^<!DOCTYPE html>/i);
    expect(html).toContain('Crafted by Ometria.com');
    expect(html).toContain('xmlns:v="urn:schemas-microsoft-com:vml"');
    expect(html).toContain('@font-face');
    expect(html).toContain('Gothic720');
  });

  it('renders every major section', () => {
    expect(html).toContain('FREE UK AND EU RETURNS ON ORDERS OVER £295');
    expect(html).toContain('ob-logo-nonstack.png');
    expect(html).toContain('MENSWEAR');
    expect(html).toContain('SWIM');
    expect(html).toContain('POLOS');
    expect(html).toContain('The Art of Shirting');
    expect(html).toContain('22064b6c6901f5305adc740937d5492d.gif');
    expect(html).toContain('Shop Shirting');
  });

  it('contains no leftover Lit hydration markers', () => {
    expect(html).not.toMatch(/<!--lit-part/);
    expect(html).not.toMatch(/<!--lit-node/);
  });
});