/**
 * Backward-compatibility re-export for the generic newsletter template.
 *
 * The implementation lives in the modular folder structure at
 * `./newsletter/index.ts`. This file exists so that imports of
 * `'./templates/newsletter.js'` continue to work without changes.
 *
 * Usage
 * -----
 * ```ts
 * import { newsletterEmailTemplate } from './templates/newsletter.js';
 * import { renderToString } from './renderer.js';
 *
 * const html = renderToString(newsletterEmailTemplate(data), data);
 * ```
 */
export { newsletterEmailTemplate } from './newsletter/index.js';
