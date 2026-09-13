/**
 * Render script – generates a real HTML email from the Hacker Noon template
 * and writes it to `generated/hackernoon-email.html` in the project root.
 *
 * Run via:
 *   npm run render:hackernoon
 */

import { writeFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

import '@lit-labs/ssr/lib/install-global-dom-shim.js';

import { hackernoonEmailTemplate } from '../templates/hackernoon-email.js';
import { hackernoonRenderToString } from '../validation/guarded-render.js';
import { hackernoonData } from './content/hackernoon-data.js';

const template = hackernoonEmailTemplate(hackernoonData);
const renderedHtml = hackernoonRenderToString(template, hackernoonData);

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, '..', '..', 'generated');
mkdirSync(outDir, { recursive: true });

const outPath = join(outDir, 'hackernoon-email.html');
writeFileSync(outPath, renderedHtml, 'utf-8');

console.log(`✅  Hacker Noon email rendered successfully → ${outPath}`);
