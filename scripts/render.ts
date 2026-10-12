import '@lit-labs/ssr/lib/install-global-dom-shim.js';
import path from 'node:path';

import { runViaGenerator } from '../src/generation/preferred-generator.js';
import { parseRenderArgs } from './args.js';
import { getTarget, listTargets } from './catalog.js';
import { defaultPayloadResolver } from './payloads.js';

async function main(): Promise<void> {
  const args = parseRenderArgs(process.argv.slice(2));
  const target = getTarget(args.template);
  const payload = await defaultPayloadResolver.resolve({
    target,
    input: args.input,
    payload: args.payload,
  });
  const output = args.output ?? target.defaultOutput;

  const html = await runViaGenerator({
    templateId: target.templateId,
    payload,
    out: output,
  });
  if (!html) {
    throw new Error(`Empty HTML for "${target.id}"`);
  }
  console.log(`[${target.id}] written: ${path.resolve(output)}`);
}

main().catch((error: unknown) => {
  const message = error instanceof Error ? error.message : String(error);
  console.error(`render failed: ${message}`);
  console.error(`known targets: ${listTargets().map((target) => target.id).join(', ')}`);
  process.exitCode = 1;
});
