import { html, TemplateResult } from 'lit';
import type { NomoretogoEmailData } from '../types.js';
import { renderRecipeRow } from './recipe-grid/recipe-row.js';

/**
 * Renders all six recipe cards as three two-column rows.
 *
 * @param data.recipes - Array of exactly six {@link RecipeItem} objects.
 */
export function renderRecipeGridSection(
  data: Pick<NomoretogoEmailData, 'recipes'>
): TemplateResult {
  const [r1, r2, r3, r4, r5, r6] = data.recipes;
  return html`
    ${renderRecipeRow(r1, r2)}
    ${renderRecipeRow(r3, r4)}
    ${renderRecipeRow(r5, r6)}`;
}
