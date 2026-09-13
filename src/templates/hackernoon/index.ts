import type { TemplateResult } from 'lit';
import type { HackernoonEmailData } from './types.js';
import { renderLogoSection } from './sections/logo.section.js';
import { renderHeaderSection } from './sections/header.section.js';
import { renderBodySection } from './sections/body.section.js';
import { renderFooterSection } from './sections/footer.compose.js';
import { renderLayoutSection } from './sections/layout.section.js';

/**
 * Builds the full Hacker Noon newsletter email as a Lit {@link TemplateResult}.
 *
 * Pass the result to {@link hackernoonRenderToString} (defined in
 * `renderer.ts`) to get a complete HTML email string ready for sending.
 *
 * The template is composed of four sections that map 1-to-1 with the original
 * Mailchimp template zones:
 *  - `templatePreheader` → {@link renderLogoSection}   (brand logo banner)
 *  - `templateHeader`    → {@link renderHeaderSection} (sponsor + article body)
 *  - `templateBody`      → {@link renderBodySection}   (closing divider + logo)
 *  - `templateFooter`    → {@link renderFooterSection} (social icons + copyright)
 *
 * @param data - Content and metadata for the email issue.
 * @returns    A Lit TemplateResult that can be server-side rendered via
 *             `@lit-labs/ssr`.
 */
export function hackernoonEmailTemplate(
  data: HackernoonEmailData
): TemplateResult {
  return renderLayoutSection(
    data,
    renderLogoSection(),
    renderHeaderSection(data),
    renderBodySection(),
    renderFooterSection(data),
  );
}
