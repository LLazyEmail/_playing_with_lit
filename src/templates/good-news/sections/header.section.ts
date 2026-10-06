import { html, type TemplateResult } from 'lit';
import type { GoodNewsEmailData } from '../types.js';

/**
 * Renders the hero image row. Simple's hero has a distinctive 5px blue
 * bottom border that ties into the social bar's blue background.
 */
export function renderHeaderSection(
  data: Pick<GoodNewsEmailData, 'hero'>
): TemplateResult {
  return html`
    <tr>
      <td>
        <img
          class="hero-image"
          src=${data.hero.src}
          alt=${data.hero.alt}
          width=${data.hero.width}
          style="width: 100%; max-width: 100% !important; position: relative; border-bottom: 5px solid #0d97ff; display: block; top: -1px;"
        />
      </td>
    </tr>
  `;
}