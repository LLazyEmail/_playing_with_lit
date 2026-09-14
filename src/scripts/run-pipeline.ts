import { BuildPipeline } from '../rendering/build-pipeline.js';
import { ConsoleLogger } from '../logging/logger.js';
import { templateRegistry } from '../rendering/template-registry.js';
import type { BuildConfig } from '../rendering/build-pipeline.js';

const pipeline = new BuildPipeline(templateRegistry, new ConsoleLogger());

export async function runCampaign(config: BuildConfig): Promise<void> {
  const result = await pipeline.run(config);
  if (!result.success) {
    process.exitCode = 1;
  }
}
