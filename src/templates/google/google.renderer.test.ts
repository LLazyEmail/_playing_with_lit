import { describe, expect, it } from 'vitest';
import { googleShipmentData } from '../../scripts/content/google-data.js';
import { googleEmailTemplate } from './index.js';
import { googleRenderToString } from './google.renderer.js';

describe('googleRenderToString', () => {
  const html = googleRenderToString(googleEmailTemplate(googleShipmentData));

  it('keeps the Google document shell', () => {
    expect(html).toMatch(/^<!doctype html public/i);
    expect(html).toContain('<html dir="ltr">');
    expect(html).toContain('<!--[if mso]>');
    expect(html).toContain('<title>Your Google Store order has shipped</title>');
  });

  it('renders every major section', () => {
    expect(html).toContain('Hi Smiles Davis,');
    expect(html).toContain('Ordered');
    expect(html).toContain('Shipped');
    expect(html).toContain('Delivered');
    expect(html).toContain('Google Home Mini (Chalk)');
    expect(html).toContain('Track Shipment');
    expect(html).toContain('SMLS.6500-5000-0050');
    expect(html).toContain('Payment method');
    expect(html).toContain('Visa •••• 6500');
    expect(html).toContain('© 2019 Google | All Rights Reserved.');
  });

  it('contains no leftover Lit hydration markers', () => {
    expect(html).not.toMatch(/<!--lit-part/);
    expect(html).not.toMatch(/<!--lit-node/);
  });
});
