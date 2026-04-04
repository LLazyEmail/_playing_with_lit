import { html, TemplateResult } from 'lit';
import type { MailchimpEmailData } from './types.js';
import { renderPreheaderSection } from './sections/preheader.section.js';
import { renderBrandingSection } from './sections/branding.section.js';
import { renderImageSection } from './sections/image.section.js';
import { renderTextSection } from './sections/text.section.js';
import { renderProductRowsSection } from './sections/product-row.section.js';
import { renderFooterSection } from './sections/footer.section.js';
import { renderDisclaimerSection } from './sections/disclaimer.section.js';

/**
 * Builds the full Mailchimp-style product email as a Lit
 * {@link TemplateResult}.
 *
 * Pass the result to {@link mailchimpRenderToString} (defined in
 * `renderer.ts`) to get a complete HTML email string ready for sending.
 *
 * The template is composed of seven sections that map 1-to-1 with the
 * original Mailchimp template zones:
 *  - Preheader  → {@link renderPreheaderSection}    (preview text + view-in-browser)
 *  - Branding   → {@link renderBrandingSection}     (brand name + nav links)
 *  - Image      → {@link renderImageSection}        (full-width hero image)
 *  - Text       → {@link renderTextSection}         (H1 heading + body paragraph)
 *  - Products   → {@link renderProductRowsSection}  (2-column product card rows)
 *  - Footer     → {@link renderFooterSection}       (three-column dark footer)
 *  - Disclaimer → {@link renderDisclaimerSection}   (company info + unsubscribe)
 *
 * @param data - All content and URLs for the email.
 * @returns    A Lit TemplateResult that can be server-side rendered via
 *             `@lit-labs/ssr`.
 */
export function mailchimpEmailTemplate(
  data: MailchimpEmailData
): TemplateResult {
  return html`
    <table border="0" cellpadding="0" cellspacing="0" width="100%" bgcolor="#eeeeee">
      <tr>
        <td align="center" valign="top" width="100%">
          <table align="center" border="0" cellpadding="0" cellspacing="0" width="600" class="full_wrapper">
            ${renderPreheaderSection(data)}
            ${renderBrandingSection(data)}
            ${renderImageSection(data)}
            ${renderTextSection(data)}
            ${renderProductRowsSection(data)}
            ${renderFooterSection(data)}
            ${renderDisclaimerSection(data)}
          </table>
        </td>
      </tr>
    </table>`;
}
