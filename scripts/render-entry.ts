import '@lit-labs/ssr/lib/install-global-dom-shim.js';
import path from 'node:path';

import { runViaGenerator } from '../src/generation/preferred-generator.js';

function flag(name: string): string | undefined {
  const inline = process.argv.find((arg) => arg.startsWith(`--${name}=`));
  if (inline) return inline.slice(name.length + 3);
  const index = process.argv.indexOf(`--${name}`);
  if (index !== -1 && process.argv[index + 1] && !process.argv[index + 1].startsWith('--')) {
    return process.argv[index + 1];
  }
  return undefined;
}

/** Thin CLI entry used by every root script. --input is accepted and ignored. */
export async function renderEntry(options: {
  templateId: string;
  label: string;
  payload: unknown;
  defaultOutput: string;
}): Promise<void> {
  flag('input');
  const output = flag('output') ?? options.defaultOutput;
  try {
    await runViaGenerator({
      templateId: options.templateId,
      payload: options.payload,
      out: output,
    });
    console.log(`[${options.label}] written: ${path.resolve(output)}`);
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error(`${options.label} render failed: ${message}`);
    process.exitCode = 1;
  }
}
