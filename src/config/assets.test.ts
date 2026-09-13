import { afterEach, describe, expect, it } from 'vitest';
import { ConfigError } from '../errors/index.js';
import { getAssetBaseUrl, joinAssetUrl, resolveAppEnv } from './index.js';

const tracked = [
  'EMAIL_ENV',
  'NODE_ENV',
  'EMAIL_ASSET_BASE_NOMORETOGO_IMAGES',
  'EMAIL_ASSET_BASE_HACKERNOON_BRAND',
] as const;

const snapshot = Object.fromEntries(
  tracked.map((key) => [key, process.env[key]])
);

afterEach(() => {
  for (const key of tracked) {
    const value = snapshot[key];
    if (value === undefined) {
      delete process.env[key];
    } else {
      process.env[key] = value;
    }
  }
});

describe('resolveAppEnv', () => {
  it('maps aliases', () => {
    expect(resolveAppEnv('prod')).toBe('production');
    expect(resolveAppEnv('stage')).toBe('staging');
    expect(resolveAppEnv('dev')).toBe('development');
  });

  it('throws ConfigError on garbage', () => {
    expect(() => resolveAppEnv('nightly')).toThrow(ConfigError);
  });
});

describe('getAssetBaseUrl', () => {
  it('returns the historical production host for No More To-Go images', () => {
    expect(getAssetBaseUrl('nomoretogo.images', 'production')).toBe(
      'https://raw.githubusercontent.com/LLazyEmail/nomoretogo_email_template/main/data/images/'
    );
  });

  it('lets EMAIL_ASSET_BASE_* override the catalog without touching constants.ts', () => {
    process.env.EMAIL_ASSET_BASE_NOMORETOGO_IMAGES =
      'https://cdn.staging.example/nmtg';
    expect(getAssetBaseUrl('nomoretogo.images', 'staging')).toBe(
      'https://cdn.staging.example/nmtg/'
    );
  });

  it('joins a relative asset onto the resolved base', () => {
    expect(joinAssetUrl('hackernoon.brand', 'hackernoon.png', 'production')).toBe(
      'https://gitlab.com/hackernoon/newsletters-archive/-/raw/master/content/logos/brand/hackernoon.png'
    );
  });
});
