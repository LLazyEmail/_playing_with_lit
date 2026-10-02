import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { shirt1EmailData } from './content/shirt1-data.js';
import { renderShirt1Email } from '../templates/shirt1/shirt1.renderer.js';

const outPath = resolve(process.cwd(), 'dist/shirt1.html');
mkdirSync(dirname(outPath), { recursive: true });

const { subject, html } = renderShirt1Email(shirt1EmailData);
writeFileSync(outPath, html, 'utf8');

console.log(`[shirt1] subject: ${subject}`);
console.log(`[shirt1] written: ${outPath}`);