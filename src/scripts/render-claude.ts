import '@lit-labs/ssr/lib/install-global-dom-shim.js';

import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { claudeEmailData } from './content/claude-data.js';
import { renderClaudeEmail } from '../templates/claude/claude.renderer.js';

const outPath = resolve(process.cwd(), 'generated/claude-email.html');
mkdirSync(dirname(outPath), { recursive: true });

const { subject, html } = renderClaudeEmail(claudeEmailData);
writeFileSync(outPath, html, 'utf8');

console.log(`[claude] subject: ${subject}`);
console.log(`[claude] written: ${outPath}`);
