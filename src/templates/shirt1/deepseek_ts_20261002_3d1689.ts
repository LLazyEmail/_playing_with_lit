import { describe, it, expect } from 'vitest';
import { render } from '@lit-labs/ssr';
import { collectResultSync } from '@lit-labs/ssr/lib/render-result.js';
import { renderHeaderSection } from './header.section.js';
import { shirt1EmailData } from '../../../scripts/content/shirt1-data.js';

const renderToString = (tpl: any) =>
  collectResultSync(render(tpl)).replace(/<!--lit-[^>]*-->/g, '');

describe('shirt1 header section', () => {
  it('renders the browser-view notice', () => {
    const html = renderToString(renderHeaderSection(shirt1EmailData));
    expect(html).toContain("Can't see this email?");
    expect(html).toContain('View in Your Browser');
  });

  it('renders the red top divider', () => {
    const html = renderToString(renderHeaderSection(shirt1EmailData));
    expect(html).toContain('border-top:1px solid #FF0000');
  });
});