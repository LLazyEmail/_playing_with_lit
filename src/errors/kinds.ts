import { AppError } from './app-error.js';
import { ErrorCode, ErrorLayer } from './codes.js';
import type { FieldIssue } from './app-error.js';

/** Incoming template payload failed its runtime schema. */
export class ValidationError extends AppError {
  constructor(options: {
    message: string;
    issues?: FieldIssue[];
    details?: Record<string, unknown>;
    cause?: unknown;
  }) {
    super({
      code: ErrorCode.VALIDATION_FAILED,
      layer: ErrorLayer.Validation,
      retryable: false,
      ...options,
    });
  }
}

/**
 * Backward-compatible name used by Phase 3 callers.
 * Prefer {@link ValidationError} for new code.
 */
export class EmailDataValidationError extends ValidationError {
  constructor(templateName: string, issueLines: string[]) {
    super({
      message: `Invalid ${templateName} email data:\n${issueLines
        .map((issue) => `  - ${issue}`)
        .join('\n')}`,
      issues: issueLines.map((line) => {
        const sep = line.indexOf(': ');
        if (sep === -1) {
          return { path: '(root)', message: line };
        }
        return { path: line.slice(0, sep), message: line.slice(sep + 2) };
      }),
      details: { templateName },
    });
  }
}

/** Shared block variant has no registered presenter. */
export class CompositionError extends AppError {
  constructor(options: {
    message: string;
    details?: Record<string, unknown>;
    cause?: unknown;
  }) {
    super({
      code: ErrorCode.BLOCK_PRESENTER_MISSING,
      layer: ErrorLayer.Composition,
      retryable: false,
      ...options,
    });
  }
}

/** Lit SSR or document-shell assembly failed. Reserved for later phases. */
export class RenderError extends AppError {
  constructor(options: {
    message: string;
    details?: Record<string, unknown>;
    cause?: unknown;
  }) {
    super({
      code: ErrorCode.RENDER_FAILED,
      layer: ErrorLayer.Render,
      retryable: false,
      ...options,
    });
  }
}

/** Juice / minify / comb pipeline failed. Reserved for Phase 4. */
export class PipelineError extends AppError {
  constructor(options: {
    message: string;
    details?: Record<string, unknown>;
    cause?: unknown;
    retryable?: boolean;
  }) {
    super({
      code: ErrorCode.PIPELINE_FAILED,
      layer: ErrorLayer.Pipeline,
      retryable: options.retryable ?? false,
      message: options.message,
      details: options.details,
      cause: options.cause,
    });
  }
}

/** Missing env, asset base URL, or other configuration. Reserved for Phase 6. */
export class ConfigError extends AppError {
  constructor(options: {
    message: string;
    details?: Record<string, unknown>;
    cause?: unknown;
  }) {
    super({
      code: ErrorCode.CONFIG_INVALID,
      layer: ErrorLayer.Config,
      retryable: false,
      ...options,
    });
  }
}

export function isValidationError(value: unknown): value is ValidationError {
  return value instanceof ValidationError;
}

export function isCompositionError(value: unknown): value is CompositionError {
  return value instanceof CompositionError;
}
