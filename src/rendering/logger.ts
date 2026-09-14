export interface Logger {
  debug(message: string): void;
  error(message: string): void;
}

/** Stdout/stderr logger used by render scripts. */
export class ConsoleLogger implements Logger {
  debug(message: string): void {
    console.log(message);
  }

  error(message: string): void {
    console.error(message);
  }
}

/** No-op logger for tests. */
export class SilentLogger implements Logger {
  debug(_message: string): void {}
  error(_message: string): void {}
}
