import { describe, it, expect } from 'vitest';
import { renderLottieEmail } from './lottie.renderer.js';
import { lottieEmailData } from '../../scripts/content/lottie-data.js';

describe('renderLottieEmail', () => {
  const { subject, html } = renderLottieEmail(lottieEmailData);

  it('uses the expected subject', () => {
    expect(subject).toBe('LottieFiles — ship your own beautiful motion');
  });

  it('keeps the Postcards document shell', () => {
    expect(html).toMatch(/^<!DOCTYPE html>\n<!doctype html="">/);
    expect(html).toContain('xmlns:v="urn:schemas-microsoft-com:vml"');
    expect(html).toContain('.pc-email-container');
    expect(html).toContain('.pc-fb-font');
    expect(html).toContain('@media screen and (max-width:620px)');
    expect(html).toContain('@media screen and (max-width:525px)');
  });

  it('keeps the Karla font-face block for every weight', () => {
    expect(html).toContain("font-family: 'Karla'");
    expect(html).toContain('font-weight: 300');
    expect(html).toContain('font-weight: 400');
    expect(html).toContain('font-weight: 500');
    expect(html).toContain('font-weight: 700');
    expect(html).toContain('font-weight: 800');
  });

  it('renders every major section', () => {
    expect(html).toContain('lottiefiles_logo_for_white_bg-waS.png');
    expect(html).toContain('Hey Smiles Davis,');
    expect(html).toContain('CONVERT-1-Jxk.gif');
    expect(html).toContain('Here are 3 steps');
    expect(html).toContain('© 2024 LottieFiles');
  });

  it('contains no leftover Lit hydration markers', () => {
    expect(html).not.toMatch(/<!--lit-part/);
    expect(html).not.toMatch(/<!--lit-node/);
  });
});