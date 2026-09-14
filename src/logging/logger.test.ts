import { afterEach, describe, expect, it, vi } from 'vitest';
import { ConsoleLogger } from './logger.js';

afterEach(() => {
  vi.restoreAllMocks();
});

describe('ConsoleLogger', () => {
  it('hides debug when verbose is false', () => {
    const log = vi.spyOn(console, 'log').mockImplementation(() => {});
    const logger = new ConsoleLogger(false);
    logger.debug('hidden');
    logger.info('shown');
    expect(log).toHaveBeenCalledTimes(1);
    expect(log).toHaveBeenCalledWith('[info] shown');
  });

  it('prints debug when verbose is true', () => {
    const log = vi.spyOn(console, 'log').mockImplementation(() => {});
    const logger = new ConsoleLogger(true);
    logger.debug('trace');
    expect(log).toHaveBeenCalledWith('[debug] trace');
  });
});
