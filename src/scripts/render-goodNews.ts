import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { goodNewsEmailData } from './content/goodNews-data.js';
import { renderGoodNewsEmail } from '../templates/good-news/goodNews.renderer.js';

const outPath = resolve(process.cwd(), 'dist/good-news.html');
mkdirSync(dirname(outPath), { recursive: true });

const { subject, html } = renderGoodNewsEmail(goodNewsEmailData);
writeFileSync(outPath, html, 'utf8');

console.log(`[good-news] subject: ${subject}`);
console.log(`[good-news] written: ${outPath}`);