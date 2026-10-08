/**
 * Isolated email rendering module.
 *
 * Public API for the current Lit-based SSR implementation.
 * Intended to be replaceable by an external package in the future
 * by updating the re-exports in `src/rendering/` (or this barrel).
 */
export { Renderer } from './renderer.js';
export {
  renderEmailBody,
  renderEmailDocument,
  stripLitMarkers,
} from './render-email-document.js';
export type { EmailDocumentOptions } from './render-email-document.js';
