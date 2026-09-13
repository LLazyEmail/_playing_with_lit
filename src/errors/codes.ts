/**
 * Stable, machine-readable error codes.
 * Add new codes here — never rename an existing one once it has shipped.
 */
export const ErrorCode = {
  VALIDATION_FAILED: 'EMAIL_VALIDATION_FAILED',
  BLOCK_PRESENTER_MISSING: 'BLOCK_PRESENTER_MISSING',
  RENDER_FAILED: 'RENDER_FAILED',
  PIPELINE_FAILED: 'PIPELINE_FAILED',
  CONFIG_INVALID: 'CONFIG_INVALID',
} as const;

export type ErrorCode = (typeof ErrorCode)[keyof typeof ErrorCode];

/** Which part of the system produced the failure. */
export const ErrorLayer = {
  Validation: 'validation',
  Composition: 'composition',
  Render: 'render',
  Pipeline: 'pipeline',
  Config: 'config',
} as const;

export type ErrorLayer = (typeof ErrorLayer)[keyof typeof ErrorLayer];
