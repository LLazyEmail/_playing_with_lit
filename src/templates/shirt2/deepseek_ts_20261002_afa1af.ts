import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { shirt2EmailData } from './content/shirt2-data.js';
import { renderShirt2Email } from '../templates/shirt2/shirt2.renderer.js';

const outPath = resolve(process.cwd(), 'dist/shirt2.html');
mkdirSync(dirname(outPath), { recursive: true });

const { subject, html } = renderShirt2Email(shirt2EmailData);
writeFileSync(outPath, html, 'utf8');

console.log(`[shirt2] subject: ${subject}`);
console.log(`[shirt2] written: ${outPath}`);