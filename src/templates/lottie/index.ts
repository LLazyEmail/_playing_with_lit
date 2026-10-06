import type { TemplateResult } from 'lit';
import type { LottieEmailData } from './types.js';
import { renderLogoSection } from './sections/logo.section.js';
import { renderHeaderSection } from './sections/header.section.js';
import { renderBodySection } from './sections/body.section.js';
import { renderFooterComposed } from './sections/footer.compose.js';
import { renderLayoutSection } from './sections/layout.section.js';

/**
 * Public entry point for the lottie template.
 * Returns a fully composed `TemplateResult` ready for `renderEmailBody`.
 */
export function lottieEmailTemplate(
  data: LottieEmailData
): TemplateResult {
  return renderLayoutSection(
    data,
    renderLogoSection(),
    renderHeaderSection(data),
    renderBodySection(data),
    renderFooterComposed(data)
  );
}

export type { LottieEmailData } from './types.js';
export { lottieRegistration } from './lottie.register.js';