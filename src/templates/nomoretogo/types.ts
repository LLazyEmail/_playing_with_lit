/**
 * Type re-exports for the No More To-Go email template.
 *
 * All template-specific types are defined in the root `src/types.ts` and
 * re-exported here so that section modules can import from a single,
 * template-local path.
 */
export type { NomoretogoEmailData, RecipeItem } from '../../types.js';
