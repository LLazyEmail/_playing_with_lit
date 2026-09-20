import { describe, it, expect } from 'vitest';
import { renderGoogleEmail } from './google.renderer.js';
import { googleShipmentData } from '../../scripts/content/google-data.js';

describe('renderGoogleEmail', () => {
  const { subject, html } = renderGoogleEmail(googleShipmentData);

  it('uses the expected subject', () => {
    expect(subject).toBe('Your Google Store order has shipped');
  });

  it('keeps the Google document shell', () => {
    expect(html).toMatch(/^<!doctype html public/i);
    expect(html).toContain('<html dir="ltr">');
    expect(html).toContain('<!--[if mso]>');
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