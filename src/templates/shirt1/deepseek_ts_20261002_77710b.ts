import type { TemplateResult } from 'lit';
import type { Shirt1EmailData } from './types.js';
import { renderLogoSection } from './sections/logo.section.js';
import { renderHeaderSection } from './sections/header.section.js';
import { renderBodySection } from './sections/body.section.js';
import { renderFooterComposed } from './sections/footer.compose.js';
import { renderLayoutSection } from './sections/layout.section.js';

/**
 * Public entry point for the shirt1 template.
 * Returns a fully composed `TemplateResult` ready for `renderEmailBody`.
 */
export function shirt1EmailTemplate(
  data: Shirt1EmailData
): TemplateResult {
  return renderLayoutSection(
    data,
    renderLogoSection(),
    renderHeaderSection(data),
    renderBodySection(data),
    renderFooterComposed(data)
  );
}

export type { Shirt1EmailData } from './types.js';
export { shirt1Registration } from './shirt1.register.js';