/**
 * Render script – generates a real HTML email from the No More To-Go template
 * and writes it to `generated/nomoretogo-email.html` in the project root.
 *
 * Run via:
 *   npm run render:template
 */

import { writeFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

import '@lit-labs/ssr/lib/install-global-dom-shim.js';

import { nomoretogoEmailTemplate } from '../templates/nomoretogo-email.js';
import { nomoretogoRenderToString } from '../validation/guarded-render.js';
import { nomoretogoData } from './content/nomoretogo-data.js';

const template = nomoretogoEmailTemplate(nomoretogoData);
const renderedHtml = nomoretogoRenderToString(template, nomoretogoData);

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, '..', '..', 'generated');
mkdirSync(outDir, { recursive: true });

const outPath = join(outDir, 'nomoretogo-email.html');
writeFileSync(outPath, renderedHtml, 'utf-8');

console.log(`✅  No More To-Go email rendered successfully → ${outPath}`);
