import type { TemplateResult } from 'lit';
import type { Shirt4EmailData } from './types.js';
import { renderLogoSection } from './sections/logo.section.js';
import { renderHeaderSection } from './sections/header.section.js';
import { renderBodySection } from './sections/body.section.js';
import { renderFooterComposed } from './sections/footer.compose.js';
import { renderLayoutSection } from './sections/layout.section.js';

/**
 * Public entry point for the shirt4 template.
 * Returns a fully composed `TemplateResult` ready for `renderEmailBody`.
 */
export function shirt4EmailTemplate(
  data: Shirt4EmailData
): TemplateResult {
  return renderLayoutSection(
    data,
    renderLogoSection(),
    renderHeaderSection(data),
    renderBodySection(data),
    renderFooterComposed(data)
  );
}

export type { Shirt4EmailData } from './types.js';
export { shirt4Registration } from './shirt4.register.js';