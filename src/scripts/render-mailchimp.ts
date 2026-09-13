/**
 * Render script – generates a real HTML email from the Mailchimp-style
 * template and writes it to `generated/mailchimp-email.html` in the project
 * root.
 *
 * Run via:
 *   npm run render:mailchimp
 */

import { writeFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

import '@lit-labs/ssr/lib/install-global-dom-shim.js';

import { mailchimpEmailTemplate } from '../templates/mailchimp-email.js';
import { mailchimpRenderToString } from '../validation/guarded-render.js';
import { mailchimpData } from './content/mailchimp-data.js';

const template = mailchimpEmailTemplate(mailchimpData);
const renderedHtml = mailchimpRenderToString(template, mailchimpData);

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, '..', '..', 'generated');
mkdirSync(outDir, { recursive: true });

const outPath = join(outDir, 'mailchimp-email.html');
writeFileSync(outPath, renderedHtml, 'utf-8');

console.log(`✅  Mailchimp email rendered successfully → ${outPath}`);
