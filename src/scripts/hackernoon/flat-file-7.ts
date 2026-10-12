import '@lit-labs/ssr/lib/install-global-dom-shim.js';
import path from 'node:path';

import { flatFile7Data } from './flat-file-7-data.js';
import { runViaGenerator } from '../../generation/preferred-generator.js';

function flag(name: string): string | undefined {
  const inline = process.argv.find((arg) => arg.startsWith(`--${name}=`));
  if (inline) return inline.slice(name.length + 3);
  const index = process.argv.indexOf(`--${name}`);
  if (index !== -1 && process.argv[index + 1] && !process.argv[index + 1].startsWith('--')) {
    return process.argv[index + 1];
  }
  return undefined;
}

flag('input');
const output = flag('output') ?? 'generated/flat-file-7-email.html';

try {
  await runViaGenerator({
    templateId: 'hackernoon',
    payload: flatFile7Data,
    out: output,
  });
  console.log(`[flat-file-7] written: ${path.resolve(output)}`);
} catch (error) {
  const message = error instanceof Error ? error.message : String(error);
  console.error(`flat-file-7 render failed: ${message}`);
  process.exitCode = 1;
}
