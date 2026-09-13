import { writeFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

import '@lit-labs/ssr/lib/install-global-dom-shim.js';

import { mailchimpEmailTemplate } from '../templates/mailchimp-email.js';
import { mailchimpRenderToString } from '../validation/guarded-render.js';
import { mailchimpData } from './content/mailchimp-data.js';
import { finalizeHtml, isMinifyEnabled } from '../pipeline/index.js';

const template = mailchimpEmailTemplate(mailchimpData);
const renderedHtml = await finalizeHtml(
  mailchimpRenderToString(template, mailchimpData)
);

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, '..', '..', 'generated');
mkdirSync(outDir, { recursive: true });

const outPath = join(outDir, 'mailchimp-email.html');
writeFileSync(outPath, renderedHtml, 'utf-8');

const mode = isMinifyEnabled() ? 'minified' : 'debug';
console.log(`✅  Mailchimp email rendered (${mode}) → ${outPath}`);
