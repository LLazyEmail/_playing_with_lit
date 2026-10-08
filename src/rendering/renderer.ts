/**
 * Compatibility re-export.
 *
 * The real implementation lives in `src/email-renderer/` so it can be swapped
 * for an external module later without changing call sites.
 */
export { Renderer } from '../email-renderer/renderer.js';
