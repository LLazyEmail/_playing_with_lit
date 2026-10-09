import { describe, it, expect } from 'vitest';
import { render } from '@lit-labs/ssr';
import { collectResultSync } from '@lit-labs/ssr/lib/render-result.js';
import { renderBodySection } from './body.section.js';
import { shirt5EmailData } from '../../../scripts/content/shirt5-data.js';

const renderToString = (tpl: any) =>
  collectResultSync(render(tpl)).replace(/<!--lit-[^>]*-->/g, '');

describe('shirt5 body section', () => {
  it('renders every image block', () => {
    const html = renderToString(renderBodySection(shirt5EmailData));
    expect(html).toContain('See What&#39;s New');
    expect(html).toContain('Draped Twill');
    expect(html).toContain('Pima Short Sleeve Henley');
    expect(html).toContain('L005 Light Wash');
  });

  it('appends the Klaviyo tracking query to every href', () => {
    const html = renderToString(renderBodySection(shirt5EmailData));
    expect(html).toContain(
      'utm_campaign=Elevated%20Comfort&amp;utm_medium=campaign-email'
    );
  });
});