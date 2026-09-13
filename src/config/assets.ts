import { ConfigError } from '../errors/index.js';
import {
  ASSET_CATALOG,
  ASSET_ENV_KEYS,
  type AssetBucket,
} from './catalog.js';
import { resolveAppEnv, type AppEnv } from './env.js';

function ensureTrailingPath(base: string, bucket: AssetBucket): string {
  const trimmed = base.trim();
  if (!trimmed) {
    throw new ConfigError({
      message: `Asset base URL for "${bucket}" is empty.`,
      details: { bucket },
    });
  }
  if (bucket === 'mailchimp.placeholder') {
    return trimmed.replace(/\/+$/, '');
  }
  return trimmed.endsWith('/') ? trimmed : `${trimmed}/`;
}

export function getAssetBaseUrl(
  bucket: AssetBucket,
  env: AppEnv | string = resolveAppEnv()
): string {
  const resolved = resolveAppEnv(env);
  const override = process.env[ASSET_ENV_KEYS[bucket]]?.trim();
  const fromCatalog = ASSET_CATALOG[resolved][bucket];
  const raw = override && override.length > 0 ? override : fromCatalog;

  if (!raw) {
    throw new ConfigError({
      message: `No asset base URL configured for "${bucket}" in ${resolved}.`,
      details: { bucket, env: resolved },
    });
  }

  return ensureTrailingPath(raw, bucket);
}

export function joinAssetUrl(
  bucket: AssetBucket,
  relativePath: string,
  env?: AppEnv | string
): string {
  const base = getAssetBaseUrl(bucket, env);
  const path = relativePath.replace(/^\/+/, '');
  if (bucket === 'mailchimp.placeholder') {
    return `${base}/${path}`;
  }
  return `${base}${path}`;
}
