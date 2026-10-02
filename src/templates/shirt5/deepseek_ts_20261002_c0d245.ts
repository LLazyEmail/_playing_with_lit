import { html, type TemplateResult } from 'lit';
import type { Shirt5EmailData } from '../types.js';

/**
 * Shirt5's header section is intentionally empty: the source has no
 * separate "top bar" or "can't see this email?" row — the brand banner
 * image (rendered by the logo section) plays that role. We keep the
 * function so `index.ts` keeps the same shape as every other template.
 */
export function renderHeaderSection(
  _data: Pick<Shirt5EmailData, 'images'>
): TemplateResult {
  return html``;
}