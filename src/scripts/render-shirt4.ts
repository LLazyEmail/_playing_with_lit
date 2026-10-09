import '@lit-labs/ssr/lib/install-global-dom-shim.js';

import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { shirt4EmailData } from './content/shirt4-data.js';
import { renderShirt4Email } from '../templates/shirt4/shirt4.renderer.js';

const outPath = resolve(process.cwd(), 'generated/shirt4-email.html');
mkdirSync(dirname(outPath), { recursive: true });

const { subject, html } = renderShirt4Email(shirt4EmailData);
writeFileSync(outPath, html, 'utf8');

console.log(`[shirt4] subject: ${subject}`);
console.log(`[shirt4] written: ${outPath}`);
