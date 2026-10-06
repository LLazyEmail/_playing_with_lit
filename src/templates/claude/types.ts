/**
 * Type re-exports for the claude email template.
 *
 * All template-specific types are defined in the root `src/types.ts` and
 * re-exported here so section modules can import from a single,
 * template-local path.
 */
export type { ClaudeEmailData, ClaudeFeature } from '../../types.js';
