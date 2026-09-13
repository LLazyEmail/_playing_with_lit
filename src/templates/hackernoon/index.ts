import type { TemplateResult } from 'lit';
import type { HackernoonEmailData } from './types.js';
import { renderLogoSection } from './sections/logo.section.js';
import { renderHeaderSection } from './sections/header.section.js';
import { renderBodySection } from './sections/body.section.js';
import { renderFooterSection } from './sections/footer.compose.js';
import { renderLayoutSection } from './sections/layout.section.js';
import {
  hackernoonEmailDataSchema,
  parseEmailData,
} from '../../validation/index.js';

export function hackernoonEmailTemplate(
  data: HackernoonEmailData
): TemplateResult {
  const parsed = parseEmailData(hackernoonEmailDataSchema, data, 'Hacker Noon');
  return renderLayoutSection(
    parsed,
    renderLogoSection(),
    renderHeaderSection(parsed),
    renderBodySection(),
    renderFooterSection(parsed),
  );
}
