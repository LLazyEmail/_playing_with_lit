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
import {
  nomoretogoEmailDataSchema,
  parseEmailData,
} from '../../validation/index.js';

export function nomoretogoEmailTemplate(
  data: NomoretogoEmailData
): TemplateResult {
  const parsed = parseEmailData(
    nomoretogoEmailDataSchema,
    data,
    'No More To-Go'
  );
  return renderLayoutSection(
    parsed,
    renderLogoSection(),
    renderNavSection(parsed),
    renderIntroSection(parsed),
    renderRecipeGridSection(parsed),
    renderCtaSection(parsed),
    renderPrepInfoSection(parsed),
    renderCommunitySection(parsed),
    renderAmazonSection(),
    renderFooterSection(parsed),
  );
}
