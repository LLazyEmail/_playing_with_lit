import { describe, it, expect } from 'vitest';
import { render } from '@lit-labs/ssr';
import { collectResultSync } from '@lit-labs/ssr/lib/render-result.js';
import { renderBodySection } from './body.section.js';
import { goodNewsEmailData } from '../../../scripts/content/goodNews-data.js';

const renderToString = (tpl: any) =>
  collectResultSync(render(tpl)).replace(/<!--lit-[^>]*-->/g, '');

describe('good-news body section', () => {
  it('renders the greeting and every paragraph', () => {
    const html = renderToString(renderBodySection(goodNewsEmailData));
    expect(html).toContain('Good news today, Smiles Davis!');
    expect(html).toContain('Simple Shared accounts');
    expect(html).toContain('Hooray!');
    expect(html).toContain('Thanks for hanging in there.');
  });

  it('renders the signature in muted color', () => {
    const html = renderToString(renderBodySection(goodNewsEmailData));
    expect(html).toContain('— The Team at Simple');
    expect(html).toContain('#788991');
  });
});