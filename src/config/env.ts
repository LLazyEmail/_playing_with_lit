import { ConfigError } from '../errors/index.js';

export const AppEnv = {
  Development: 'development',
  Staging: 'staging',
  Production: 'production',
} as const;

export type AppEnv = (typeof AppEnv)[keyof typeof AppEnv];

const ALIASES: Record<string, AppEnv> = {
  development: 'development',
  dev: 'development',
  local: 'development',
  test: 'development',
  staging: 'staging',
  stage: 'staging',
  production: 'production',
  prod: 'production',
};

export function resolveAppEnv(explicit?: string): AppEnv {
  const raw = (explicit ?? process.env.EMAIL_ENV ?? process.env.NODE_ENV ?? 'development')
    .trim()
    .toLowerCase();

  const mapped = ALIASES[raw];
  if (!mapped) {
    throw new ConfigError({
      message: `Unknown environment "${raw}". Use development, staging, or production.`,
      details: { value: raw },
    });
  }
  return mapped;
}
