import type { TemplateResult } from 'lit';
import type { NomoretogoEmailData } from './types.js';
import { renderLogoSection } from './sections/logo.section.js';
import { renderNavSection } from './sections/nav.section.js';
import { renderIntroSection } from './sections/intro.section.js';
import { renderRecipeGridSection } from './sections/recipe-grid.section.js';
import { renderCtaSection } from './sections/cta.section.js';
import { renderPrepInfoSection } from './sections/prep-info.section.js';
import { renderCommunitySection } from './sections/community.section.js';
import { renderAmazonSection } from './sections/amazon.section.js';
import { renderFooterSection } from './sections/footer.section.js';
import { renderLayoutSection } from './sections/layout.section.js';

/**
 * Builds the full No More To-Go weekly menu email as a Lit
 * {@link TemplateResult}.
 *
 * Pass the result to {@link nomoretogoRenderToString} (defined in
 * `renderer.ts`) to get a complete HTML email string ready for sending.
 *
 * @param data - All content and URLs for the email.
 * @returns    A Lit TemplateResult that can be server-side rendered via
 *             `@lit-labs/ssr`.
 */
export function nomoretogoEmailTemplate(
  data: NomoretogoEmailData
): TemplateResult {
  return renderLayoutSection(
    data,
    renderLogoSection(),
    renderNavSection(data),
    renderIntroSection(data),
    renderRecipeGridSection(data),
    renderCtaSection(data),
    renderPrepInfoSection(data),
    renderCommunitySection(data),
    renderAmazonSection(),
    renderFooterSection(data),
  );
}
