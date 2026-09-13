import type { TemplateResult } from 'lit';
import type { MailchimpEmailData } from './types.js';
import { renderPreheaderSection } from './sections/preheader.section.js';
import { renderBrandingSection } from './sections/branding.section.js';
import { renderImageSection } from './sections/image.section.js';
import { renderTextSection } from './sections/text.section.js';
import { renderProductRowsSection } from './sections/product-row.section.js';
import { renderFooterSection } from './sections/footer.section.js';
import { renderDisclaimerSection } from './sections/disclaimer.section.js';
import { renderLayoutSection } from './sections/layout.section.js';
import {
  mailchimpEmailDataSchema,
  parseEmailData,
} from '../../validation/index.js';

export function mailchimpEmailTemplate(
  data: MailchimpEmailData
): TemplateResult {
  const parsed = parseEmailData(mailchimpEmailDataSchema, data, 'Mailchimp');
  return renderLayoutSection(
    renderPreheaderSection(parsed),
    renderBrandingSection(parsed),
    renderImageSection(parsed),
    renderTextSection(parsed),
    renderProductRowsSection(parsed),
    renderFooterSection(parsed),
    renderDisclaimerSection(parsed),
  );
}
