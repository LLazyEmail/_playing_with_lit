import { describe, it, expect } from 'vitest';
import { render } from '@lit-labs/ssr';
import { collectResultSync } from '@lit-labs/ssr/lib/render-result.js';
import { renderHeaderSection } from './header.section.js';
import { shirt4EmailData } from '../../../scripts/content/shirt4-data.js';

const renderToString = (tpl: any) =>
  collectResultSync(render(tpl)).replace(/<!--lit-[^>]*-->/g, '');

describe('shirt4 header section', () => {
  it('renders the top bar message', () => {
    const html = renderToString(renderHeaderSection(shirt4EmailData));
    expect(html).toContain('FREE UK AND EU RETURNS ON ORDERS OVER £295');
  });

  it('renders every nav link', () => {
    const html = renderToString(renderHeaderSection(shirt4EmailData));
    expect(html).toContain('MENSWEAR');
    expect(html).toContain('SWIM');
    expect(html).toContain('POLOS');
  });

  it('applies the red 4px stripe', () => {
    const html = renderToString(renderHeaderSection(shirt4EmailData));
    expect(html).toContain('background-color:#ff0032');
  });
});