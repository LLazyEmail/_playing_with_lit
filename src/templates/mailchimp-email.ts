/**
 * Backward-compatibility re-export for the Mailchimp-style email template.
 *
 * The implementation lives in the modular folder structure at
 * `./mailchimp/index.ts`. This file exists so that imports of
 * `'./templates/mailchimp-email.js'` continue to work without changes.
 *
 * Usage
 * -----
 * ```ts
 * import { mailchimpEmailTemplate } from './templates/mailchimp-email.js';
 * import { mailchimpRenderToString } from './renderer.js';
 *
 * const html = mailchimpRenderToString(mailchimpEmailTemplate(data), data);
 * ```
 */
export { mailchimpEmailTemplate } from './mailchimp/index.js';
