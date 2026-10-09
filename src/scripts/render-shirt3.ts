import '@lit-labs/ssr/lib/install-global-dom-shim.js';

import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { shirt3EmailData } from './content/shirt3-data.js';
import { renderShirt3Email } from '../templates/shirt3/shirt3.renderer.js';

const outPath = resolve(process.cwd(), 'generated/shirt3-email.html');
mkdirSync(dirname(outPath), { recursive: true });

const { subject, html } = renderShirt3Email(shirt3EmailData);
writeFileSync(outPath, html, 'utf8');

console.log(`[shirt3] subject: ${subject}`);
console.log(`[shirt3] written: ${outPath}`);
