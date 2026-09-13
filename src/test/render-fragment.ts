import { render } from '@lit-labs/ssr';
import { collectResultSync } from '@lit-labs/ssr/lib/render-result.js';
import type { TemplateResult } from 'lit';

/** SSR a Lit fragment and strip hydration markers (same rules as renderer.ts). */
export function renderFragment(template: TemplateResult): string {
  return collectResultSync(render(template))
    .replace(/<!--lit-part[^>]*-->/g, '')
    .replace(/<!--\/lit-part-->/g, '')
    .replace(/<!--lit-node[^>]*-->/g, '');
}
