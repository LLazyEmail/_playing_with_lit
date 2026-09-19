import { html, type TemplateResult } from 'lit';

/** Renders the generic newsletter chrome around its ordered sections. */
export function renderLayoutSection(
  header: TemplateResult,
  hero: TemplateResult,
  content: TemplateResult,
  cta: TemplateResult,
  articles: TemplateResult,
  footer: TemplateResult,
): TemplateResult {
  return html`
    <div class="email-wrapper">
      <div class="email-container">
        ${header}
        ${hero}
        ${content}
        ${cta}
        ${articles}
        ${footer}
      </div>
    </div>
  `;
}
