import { describe, it, expect } from 'vitest';
import { renderGoodNewsEmail } from './goodNews.renderer.js';
import { goodNewsEmailData } from '../../scripts/content/goodNews-data.js';

describe('renderGoodNewsEmail', () => {
  const { subject, html } = renderGoodNewsEmail(goodNewsEmailData);

  it('uses the expected subject', () => {
    expect(subject).toBe('Simple Shared accounts… coming your way');
  });

  it('keeps the Simple document shell', () => {
    expect(html).toMatch(/^<!DOCTYPE html>/i);
    expect(html).toContain('@media(min-width:550px)');
    expect(html).toContain('table[class="body"]');
    expect(html).toContain('email-logo-masthead');
    expect(html).toContain('email-social-bar-copy');
  });

  it('renders every major section', () => {
    expect(html).toContain('simple-logo.png');
    expect(html).toContain('shared-hero.gif');
    expect(html).toContain('Good news today, Smiles Davis!');
    expect(html).toContain('Simple Finance Technology Corp.');
    expect(html).toContain('Portland, OR 97228');
    expect(html).toContain('icon-facebook.png');
    expect(html).toContain('icon-twitter.png');
    expect(html).toContain('icon-pinterest.png');
    expect(html).toContain('icon-instagram.png');
    expect(html).toContain('Members FDIC');
  });

  it('contains no leftover Lit hydration markers', () => {
    expect(html).not.toMatch(/<!--lit-part/);
    expect(html).not.toMatch(/<!--lit-node/);
  });
});