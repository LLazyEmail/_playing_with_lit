import type { TemplateResult } from 'lit';
import type { EmailData } from './types.js';
import { renderHeaderSection } from './sections/header.section.js';
import { renderHeroSection } from './sections/hero.section.js';
import { renderContentSection } from './sections/content.section.js';
import { renderCtaSection } from './sections/cta.section.js';
import { renderArticlesSection } from './sections/articles.section.js';
import { renderFooterSection } from './sections/footer.section.js';
import { renderLayoutSection } from './sections/layout.section.js';
import { emailDataSchema, parseEmailData } from '../../validation/index.js';

export function newsletterEmailTemplate(data: EmailData): TemplateResult {
  const parsed = parseEmailData(emailDataSchema, data, 'newsletter');
  return renderLayoutSection(
    renderHeaderSection(parsed),
    renderHeroSection(parsed),
    renderContentSection(parsed),
    renderCtaSection(parsed),
    renderArticlesSection(parsed),
    renderFooterSection(parsed),
  );
}
