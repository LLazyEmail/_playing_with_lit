/**
 * Type re-exports for the Mailchimp-style email template.
 *
 * All template-specific types are defined in the root `src/types.ts` and
 * re-exported here so that section modules can import from a single,
 * template-local path.
 */
export type { MailchimpEmailData, ProductItem, FooterColumn } from '../../types.js';
