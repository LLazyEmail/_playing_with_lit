import { ErrorCode, ErrorLayer } from './codes.js';

export interface FieldIssue {
  path: string;
  message: string;
}

export interface AppErrorOptions {
  code: ErrorCode;
  layer: ErrorLayer;
  message: string;
  issues?: FieldIssue[];
  details?: Record<string, unknown>;
  cause?: unknown;
  retryable?: boolean;
}

export interface AppErrorJson {
  name: string;
  code: ErrorCode;
  layer: ErrorLayer;
  message: string;
  issues: FieldIssue[];
  details: Record<string, unknown>;
  retryable: boolean;
}

/**
 * Root error for this project. Catch this to handle every first-party failure
 * without depending on `error.message` string matching.
 */
export class AppError extends Error {
  readonly code: ErrorCode;
  readonly layer: ErrorLayer;
  readonly issues: FieldIssue[];
  readonly details: Record<string, unknown>;
  readonly retryable: boolean;

  constructor(options: AppErrorOptions) {
    super(options.message, options.cause !== undefined ? { cause: options.cause } : undefined);
    this.name = new.target.name;
    this.code = options.code;
    this.layer = options.layer;
    this.issues = options.issues ?? [];
    this.details = options.details ?? {};
    this.retryable = options.retryable ?? false;
    Object.setPrototypeOf(this, new.target.prototype);
  }

  toJSON(): AppErrorJson {
    return {
      name: this.name,
      code: this.code,
      layer: this.layer,
      message: this.message,
      issues: this.issues,
      details: this.details,
      retryable: this.retryable,
    };
  }
}

export function isAppError(value: unknown): value is AppError {
  return value instanceof AppError;
}
