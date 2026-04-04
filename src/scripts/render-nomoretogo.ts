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

// Install a lightweight DOM shim so @lit-labs/ssr can run in Node.js
import '@lit-labs/ssr/lib/install-global-dom-shim.js';

import { nomoretogoEmailTemplate } from '../templates/nomoretogo-email.js';
import { nomoretogoRenderToString } from '../renderer.js';
import { nomoretogoData } from './content/nomoretogo-data.js';

// ---------------------------------------------------------------------------
// Render and write output
// ---------------------------------------------------------------------------

const template = nomoretogoEmailTemplate(nomoretogoData);
const renderedHtml = nomoretogoRenderToString(template, nomoretogoData);

// Resolve output path relative to project root (two levels up from dist/scripts/)
const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, '..', '..', 'generated');
mkdirSync(outDir, { recursive: true });

const outPath = join(outDir, 'nomoretogo-email.html');
writeFileSync(outPath, renderedHtml, 'utf-8');

console.log(`✅  No More To-Go email rendered successfully → ${outPath}`);
