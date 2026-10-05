import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { shirt5EmailData } from './content/shirt5-data.js';
import { renderShirt5Email } from '../templates/shirt5/shirt5.renderer.js';

const outPath = resolve(process.cwd(), 'dist/shirt5.html');
mkdirSync(dirname(outPath), { recursive: true });

const { subject, html } = renderShirt5Email(shirt5EmailData);
writeFileSync(outPath, html, 'utf8');

console.log(`[shirt5] subject: ${subject}`);
console.log(`[shirt5] written: ${outPath}`);