import { describe, it, expect } from 'vitest';
import { render } from '@lit-labs/ssr';
import { collectResultSync } from '@lit-labs/ssr/lib/render-result.js';
import { renderHeaderSection } from './header.section.js';
import { shirt2EmailData } from '../../../scripts/content/shirt2-data.js';

const renderToString = (tpl: any) =>
  collectResultSync(render(tpl)).replace(/<!--lit-[^>]*-->/g, '');

describe('shirt2 header section', () => {
  it('renders the eyebrow, headline and CTA', () => {
    const html = renderToString(renderHeaderSection(shirt2EmailData));
    expect(html).toContain('Good News: We Saved Your Picks ;)');
    expect(html).toContain('And You Get Them For 15% Off');
    expect(html).toContain('Check Out With 15% Off');
  });

  it('uses the CTA link on every hero anchor', () => {
    const html = renderToString(renderHeaderSection(shirt2EmailData));
    const matches = html.match(/https:\/\/www\.alexmill\.com\//g) ?? [];
    expect(matches.length).toBeGreaterThanOrEqual(3);
  });
});