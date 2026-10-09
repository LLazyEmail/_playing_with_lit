import '@lit-labs/ssr/lib/install-global-dom-shim.js';

import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { lottieEmailData } from './content/lottie-data.js';
import { renderLottieEmail } from '../templates/lottie/lottie.renderer.js';

const outPath = resolve(process.cwd(), 'generated/lottie-email.html');
mkdirSync(dirname(outPath), { recursive: true });

const { subject, html } = renderLottieEmail(lottieEmailData);
writeFileSync(outPath, html, 'utf8');

console.log(`[lottie] subject: ${subject}`);
console.log(`[lottie] written: ${outPath}`);
