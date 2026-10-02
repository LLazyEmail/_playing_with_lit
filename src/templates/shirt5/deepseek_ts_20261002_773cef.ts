import { describe, it, expect } from 'vitest';
import { renderShirt5Email } from './shirt5.renderer.js';
import { shirt5EmailData } from '../../scripts/content/shirt5-data.js';

describe('renderShirt5Email', () => {
  const { subject, html } = renderShirt5Email(shirt5EmailData);

  it('uses the expected subject', () => {
    expect(subject).toBe('Short Sleeves. Just in Time.');
  });

  it('keeps the Klaviyo/XHTML document shell', () => {
    expect(html).toMatch(/XHTML 1\.0 Transitional/i);
    expect(html).toContain('id="bodyTable"');
    expect(html).toContain('id="bodyCell"');
    expect(html).toContain('data-upload-file-url="/ajax/email-editor/file/upload"');
    expect(html).toContain('class="templateContainer"');
    expect(html).toContain('class="templateContainerInner"');
  });

  it('renders every major section', () => {
    expect(html).toContain('Short Sleeves. Just in Time.');
    expect(html).toContain('777c997a-0624-4b73-8530-dd4ef74ff720.jpeg');
    expect(html).toContain('df6d8312-c61a-44b2-a2e0-0fbd4b0e7538.jpeg');
    expect(html).toContain('© 2024 Buck Mason');
  });

  it('contains no leftover Lit hydration markers', () => {
    expect(html).not.toMatch(/<!--lit-part/);
    expect(html).not.toMatch(/<!--lit-node/);
  });
});