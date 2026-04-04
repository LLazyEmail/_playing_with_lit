/**
 * Backward-compatibility re-export for the No More To-Go email template.
 *
 * The implementation has been moved to the modular folder structure at
 * `./nomoretogo/index.ts`. This file exists solely so that existing imports
 * of `'./templates/nomoretogo-email.js'` continue to work without changes.
 *
 * Usage
 * -----
 * ```ts
 * import { nomoretogoEmailTemplate } from './templates/nomoretogo-email.js';
 * import { nomoretogoRenderToString } from './renderer.js';
 *
 * const html = nomoretogoRenderToString(nomoretogoEmailTemplate(data), data);
 * ```
 */
export { nomoretogoEmailTemplate } from './nomoretogo/index.js';
