import { html, type TemplateResult } from 'lit';
import type { GoodNewsEmailData } from '../types.js';
import { renderFooterSection } from './footer.section.js';

/**
 * Composes the footer rows for the layout wrapper.
 * Kept separate from `footer.section.ts` so the row markup can be swapped
 * without touching the layout contract.
 */
export function renderFooterComposed(
  data: Pick<GoodNewsEmailData, 'socialBar' | 'disclaimer'>
): TemplateResult {
  return renderFooterSection(data);
}