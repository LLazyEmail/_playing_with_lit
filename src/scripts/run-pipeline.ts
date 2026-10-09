import path from 'node:path';
import '../templates/register-all.js';
import { BuildPipeline } from '../rendering/build-pipeline.js';
import { ConsoleLogger } from '../logging/logger.js';
import { templateRegistry } from '../rendering/template-registry.js';
import type { BuildConfig } from '../rendering/build-pipeline.js';

const pipeline = new BuildPipeline(templateRegistry, new ConsoleLogger());

function flag(name: string): string | undefined {
  const inline = process.argv.find((arg) => arg.startsWith(`--${name}=`));
  if (inline) return inline.slice(name.length + 3);
  const index = process.argv.indexOf(`--${name}`);
  if (index !== -1 && process.argv[index + 1] && !process.argv[index + 1].startsWith('--')) {
    return process.argv[index + 1];
  }
  return undefined;
}

export async function runCampaign(config: BuildConfig): Promise<void> {
  const output = flag('output');
  const next: BuildConfig = { ...config };
  if (output) {
    next.outDir = path.dirname(output);
    next.fileName = path.basename(output);
  }
  // Accepted so email-template-workflows can pass --input. These scripts
  // still render their registered sample payload, not a markdown source.
  flag('input');
  const result = await pipeline.run(next);
  if (!result.success) {
    process.exitCode = 1;
  }
}
