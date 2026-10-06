import { describe, it, expect } from 'vitest';
import { render } from '@lit-labs/ssr';
import { collectResultSync } from '@lit-labs/ssr/lib/render-result.js';
import { renderHeaderSection } from './header.section.js';
import { lottieEmailData } from '../../../scripts/content/lottie-data.js';

const renderToString = (tpl: any) =>
  collectResultSync(render(tpl)).replace(/<!--lit-[^>]*-->/g, '');

describe('lottie header section', () => {
  it('renders the greeting', () => {
    const html = renderToString(renderHeaderSection(lottieEmailData));
    expect(html).toContain('Hey Smiles Davis,');
  });

  it('renders the hero GIF', () => {
    const html = renderToString(renderHeaderSection(lottieEmailData));
    expect(html).toContain('CONVERT-1-Jxk.gif');
  });

  it('renders the intro paragraph', () => {
    const html = renderToString(renderHeaderSection(lottieEmailData));
    expect(html).toContain('most-visited destination');
  });
});