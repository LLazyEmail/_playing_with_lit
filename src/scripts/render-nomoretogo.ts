import { writeFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

import '@lit-labs/ssr/lib/install-global-dom-shim.js';

import { nomoretogoEmailTemplate } from '../templates/nomoretogo-email.js';
import { nomoretogoRenderToString } from '../validation/guarded-render.js';
import { nomoretogoData } from './content/nomoretogo-data.js';
import { finalizeHtml, isMinifyEnabled } from '../pipeline/index.js';

const template = nomoretogoEmailTemplate(nomoretogoData);
const renderedHtml = await finalizeHtml(
  nomoretogoRenderToString(template, nomoretogoData)
);

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, '..', '..', 'generated');
mkdirSync(outDir, { recursive: true });

const outPath = join(outDir, 'nomoretogo-email.html');
writeFileSync(outPath, renderedHtml, 'utf-8');

const mode = isMinifyEnabled() ? 'minified' : 'debug';
console.log(`✅  No More To-Go email rendered (${mode}) → ${outPath}`);
