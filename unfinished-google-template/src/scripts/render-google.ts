import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { googleShipmentData } from './content/google-data.js';
import { renderGoogleEmail } from '../templates/google/google.renderer.js';

const outPath = resolve(process.cwd(), 'dist/google.html');
mkdirSync(dirname(outPath), { recursive: true });

const { subject, html } = renderGoogleEmail(googleShipmentData);
writeFileSync(outPath, html, 'utf8');

console.log(`[google] subject: ${subject}`);
console.log(`[google] written: ${outPath}`);