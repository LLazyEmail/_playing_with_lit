/**
 * Type re-exports for the claude email template.
 *
 * All template-specific types are defined in the root `src/types.ts` and
 * re-exported here so that section modules can import from a single,
 * template-local path.
 */
export type { ClaudeEmailData } from '../../types.js';