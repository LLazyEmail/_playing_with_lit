import { writeGeneratedFile, MarkupGeneratorError } from 'markup-generator';
import { isAppError } from '../errors/index.js';
import type { Logger } from '../logging/logger.js';
import { finalizeHtml } from '../pipeline/index.js';
import {
  isTemplateName,
  templateRegistry,
  type TemplateName,
} from './template-registry.js';

export interface BuildConfig {
  templateName: string;
  data: unknown;
  outDir?: string;
  /** Stable filename. Defaults to `{templateName}-email.html`. */
  fileName?: string;
}

export interface BuildResult {
  success: boolean;
  outputPath?: string;
  errors?: string[];
}

type WriteGeneratedFile = typeof writeGeneratedFile;

export class BuildPipeline {
  constructor(
    private readonly registry: typeof templateRegistry = templateRegistry,
    private readonly logger: Logger,
    private readonly writeFile: WriteGeneratedFile = writeGeneratedFile
  ) {}

  async run(config: BuildConfig): Promise<BuildResult> {
    const name = config.templateName;
    if (!isTemplateName(name) || !(name in this.registry)) {
      const error = `Unknown template: ${name}`;
      this.logger.error(error);
      return { success: false, errors: [error] };
    }

    const entry = this.registry[name as TemplateName];
    this.logger.debug(`Validating data for template "${name}"`);
    if (!entry.validator.validateSchema(config.data)) {
      try {
        entry.validator.parse(config.data);
      } catch (err) {
        const message = isAppError(err)
          ? err.message
          : `Schema validation failed for ${name}`;
        this.logger.error(message);
        return { success: false, errors: [message] };
      }
      const error = `Schema validation failed for ${name}`;
      this.logger.error(error);
      return { success: false, errors: [error] };
    }

    try {
      this.logger.debug(`Rendering template "${name}"`);
      const parsed = entry.validator.parse(config.data);
      const html = await finalizeHtml(entry.renderer.render(parsed));

      const fileName = config.fileName ?? `${name}-email.html`;
      const dir = config.outDir ?? 'generated';
      this.logger.debug(`Writing output for "${name}" → ${dir}/${fileName}`);
      const outputPath = await this.writeFile({
        content: html,
        fileName,
        dir,
      });
      this.logger.info(`rendered ${name} → ${outputPath}`);
      return { success: true, outputPath };
    } catch (err) {
      if (err instanceof MarkupGeneratorError) {
        const message = `Failed to write ${name} [${err.code}]: ${err.message}`;
        this.logger.error(message);
        return { success: false, errors: [message] };
      }
      if (isAppError(err)) {
        this.logger.error(err.message);
        return { success: false, errors: [err.message] };
      }
      throw err;
    }
  }
}
