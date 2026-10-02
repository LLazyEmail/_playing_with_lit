import { html, type TemplateResult } from 'lit';
import type { ClaudeEmailData } from '../types.js';
import { renderFooterSection } from './footer.section.js';

/**
 * Composes the footer row for the layout wrapper.
 * Kept separate from `footer.section.ts` so the row markup can be swapped
 * without touching the layout contract.
 */
export function renderFooterComposed(
  data: Pick<ClaudeEmailData, 'footer'>
): TemplateResult {
  return renderFooterSection(data);
}