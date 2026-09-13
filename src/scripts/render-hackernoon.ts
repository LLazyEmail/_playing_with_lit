import { writeFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

import '@lit-labs/ssr/lib/install-global-dom-shim.js';

import { hackernoonEmailTemplate } from '../templates/hackernoon-email.js';
import { hackernoonRenderToString } from '../validation/guarded-render.js';
import { hackernoonData } from './content/hackernoon-data.js';
import { finalizeHtml, isMinifyEnabled } from '../pipeline/index.js';

const template = hackernoonEmailTemplate(hackernoonData);
const renderedHtml = await finalizeHtml(
  hackernoonRenderToString(template, hackernoonData)
);

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, '..', '..', 'generated');
mkdirSync(outDir, { recursive: true });

const outPath = join(outDir, 'hackernoon-email.html');
writeFileSync(outPath, renderedHtml, 'utf-8');

const mode = isMinifyEnabled() ? 'minified' : 'debug';
console.log(`✅  Hacker Noon email rendered (${mode}) → ${outPath}`);
