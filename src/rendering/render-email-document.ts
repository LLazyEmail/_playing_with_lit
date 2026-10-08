/**
 * Compatibility re-export.
 *
 * The real implementation lives in `src/email-renderer/` so it can be swapped
 * for an external module later without changing call sites.
 */
export {
  renderEmailBody,
  renderEmailDocument,
  stripLitMarkers,
} from '../email-renderer/render-email-document.js';
export type { EmailDocumentOptions } from '../email-renderer/render-email-document.js';
