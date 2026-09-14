export interface Logger {
  debug(message: string): void;
  info(message: string): void;
  warn(message: string): void;
  error(message: string): void;
}

/**
 * Stdout/stderr logger. `debug` is silent unless `DEBUG=true`.
 * No files, no extra levels, no third-party logger.
 */
export class ConsoleLogger implements Logger {
  constructor(private readonly verbose = process.env.DEBUG === 'true') {}

  debug(message: string): void {
    if (this.verbose) {
      console.log(`[debug] ${message}`);
    }
  }

  info(message: string): void {
    console.log(`[info] ${message}`);
  }

  warn(message: string): void {
    console.warn(`[warn] ${message}`);
  }

  error(message: string): void {
    console.error(`[error] ${message}`);
  }
}

/** No-op logger for tests. */
export class SilentLogger implements Logger {
  debug(_message: string): void {}
  info(_message: string): void {}
  warn(_message: string): void {}
  error(_message: string): void {}
}
