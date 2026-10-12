import '@lit-labs/ssr/lib/install-global-dom-shim.js';
import path from 'node:path';

import { getTemplate } from '../../rendering/template-registry.js';
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

const { sampleData } = getTemplate('google');
flag('input');
const output = flag('output') ?? 'generated/google-email.html';

try {
  await runViaGenerator({
    templateId: 'google',
    payload: sampleData,
    out: output,
  });
  console.log(`[google] written: ${path.resolve(output)}`);
} catch (error) {
  const message = error instanceof Error ? error.message : String(error);
  console.error(`google render failed: ${message}`);
  process.exitCode = 1;
}
