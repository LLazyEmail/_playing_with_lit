import { html, type TemplateResult } from 'lit';
import type { ZurbEmailData } from './types.js';
import { renderMastheadSection } from './sections/masthead.section.js';
import { renderTitleSection } from './sections/title.section.js';
import { renderHeroSection } from './sections/hero.section.js';
import { renderCtaSection } from './sections/cta.section.js';
import { renderFeaturesSection } from './sections/features.section.js';
import { renderFooterSection } from './sections/footer.section.js';

/** Composer only — no raw markup here. */
export function zurbEmailTemplate(data: ZurbEmailData): TemplateResult {
  return html`
    <center>
      <table class="container text-center" width="580" cellpadding="0" cellspacing="0">
        <tr>
          <td>
            ${renderMastheadSection(data)}
            ${renderTitleSection(data)}
            ${renderHeroSection(data)}
            ${renderCtaSection(data)}
            ${renderFeaturesSection(data)}
            ${renderFooterSection(data)}
          </td>
        </tr>
      </table>
    </center>
  `;
}
