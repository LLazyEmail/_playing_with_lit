import { describe, it, expect } from 'vitest';
import { render } from '@lit-labs/ssr';
import { collectResultSync } from '@lit-labs/ssr/lib/render-result.js';
import { renderHeaderSection } from './header.section.js';
import { claudeEmailData } from '../../../scripts/content/claude-data.js';

const renderToString = (tpl: any) =>
  collectResultSync(render(tpl)).replace(/<!--lit-[^>]*-->/g, '');

describe('claude header section', () => {
  it('renders the greeting', () => {
    const html = renderToString(renderHeaderSection(claudeEmailData));
    expect(html).toContain('Hey!');
  });

  it('renders the intro paragraph', () => {
    const html = renderToString(renderHeaderSection(claudeEmailData));
    expect(html).toContain('Two big features shipped in beta this week');
  });
});