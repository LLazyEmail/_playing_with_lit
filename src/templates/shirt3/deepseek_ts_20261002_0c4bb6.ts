import { describe, it, expect } from 'vitest';
import { renderShirt3Email } from './shirt3.renderer.js';
import { shirt3EmailData } from '../../scripts/content/shirt3-data.js';

describe('renderShirt3Email', () => {
  const { subject, html } = renderShirt3Email(shirt3EmailData);

  it('uses the expected subject', () => {
    expect(subject).toBe('Get Them for 15% Off!');
  });

  it('keeps the Shopify/BounceExchange document shell', () => {
    expect(html).toMatch(/^<!doctype html>/i);
    expect(html).toContain('LinetoCircularWeb');
    expect(html).toContain('PitchSansWeb');
    expect(html).toContain('ibx_no_webview');
  });

  it('renders every major section', () => {
    expect(html).toContain('Good News: We Saved Your Picks ;)');
    expect(html).toContain('And You Get Them For 15% Off');
    expect(html).toContain('Check Out With 15% Off');
    expect(html).toContain('patrick-denim-jacket-in-golden-khaki');
    expect(html).toContain('© 2024 Alex Mill');
  });

  it('contains no leftover Lit hydration markers', () => {
    expect(html).not.toMatch(/<!--lit-part/);
    expect(html).not.toMatch(/<!--lit-node/);
  });
});