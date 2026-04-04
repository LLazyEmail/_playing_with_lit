/**
 * Backward-compatibility re-export for the Hacker Noon email template.
 *
 * The implementation has been moved to the modular folder structure at
 * `./hackernoon/index.ts`. This file exists solely so that existing imports
 * of `'./templates/hackernoon-email.js'` continue to work without changes.
 *
 * Usage
 * -----
 * ```ts
 * import { hackernoonEmailTemplate } from './templates/hackernoon-email.js';
 * import { hackernoonRenderToString } from './renderer.js';
 *
 * const html = hackernoonRenderToString(hackernoonEmailTemplate(data), data);
 * ```
 */
export { hackernoonEmailTemplate } from './hackernoon/index.js';
