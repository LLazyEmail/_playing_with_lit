import { BuildPipeline } from '../rendering/build-pipeline.js';
import { ConsoleLogger } from '../rendering/logger.js';
import { templateRegistry } from '../rendering/template-registry.js';
import type { BuildConfig } from '../rendering/build-pipeline.js';

const pipeline = new BuildPipeline(templateRegistry, new ConsoleLogger());

export async function runCampaign(config: BuildConfig): Promise<void> {
  const result = await pipeline.run(config);
  if (!result.success) {
    for (const error of result.errors ?? []) {
      console.error(`❌ ${error}`);
    }
    process.exitCode = 1;
    return;
  }
  console.log(`✅  rendered → ${result.outputPath}`);
}
