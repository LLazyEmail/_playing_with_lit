import { readFile } from 'node:fs/promises';
import { extname } from 'node:path';

import { getTemplate } from '../src/rendering/template-registry.js';
import type { RenderTarget } from './catalog.js';

export interface PayloadRequest {
  readonly target: RenderTarget;
  readonly input?: string;
  readonly payload?: string;
}

/** Strategy. First source that can resolve wins. */
export interface PayloadSource {
  canResolve(request: PayloadRequest): boolean;
  resolve(request: PayloadRequest): Promise<unknown>;
}

/** `--payload '{"title":"..."}'` for ad-hoc data passed on the command line. */
export class InlineJsonPayloadSource implements PayloadSource {
  canResolve(request: PayloadRequest): boolean {
    return typeof request.payload === 'string' && request.payload.trim().startsWith('{');
  }

  async resolve(request: PayloadRequest): Promise<unknown> {
    return JSON.parse(request.payload as string);
  }
}

/**
 * `--input path.json` when a caller passes data from outside.
 * Non-JSON inputs (the action currently passes the script path) are ignored
 * so the next source can run.
 */
export class FilePayloadSource implements PayloadSource {
  canResolve(request: PayloadRequest): boolean {
    return typeof request.input === 'string' && extname(request.input) === '.json';
  }

  async resolve(request: PayloadRequest): Promise<unknown> {
    const raw = await readFile(request.input as string, 'utf8');
    return JSON.parse(raw);
  }
}

/** Campaign-specific payload declared on the catalog entry. */
export class TargetPayloadSource implements PayloadSource {
  canResolve(request: PayloadRequest): boolean {
    return typeof request.target.loadPayload === 'function';
  }

  async resolve(request: PayloadRequest): Promise<unknown> {
    return request.target.loadPayload?.();
  }
}

/** Registered sample data. The default when nothing is passed in. */
export class SamplePayloadSource implements PayloadSource {
  canResolve(): boolean {
    return true;
  }

  async resolve(request: PayloadRequest): Promise<unknown> {
    return getTemplate(request.target.templateId).sampleData;
  }
}

export class PayloadResolver {
  constructor(private readonly sources: readonly PayloadSource[]) {}

  async resolve(request: PayloadRequest): Promise<unknown> {
    for (const source of this.sources) {
      if (source.canResolve(request)) {
        return source.resolve(request);
      }
    }
    throw new Error(`No payload source for "${request.target.id}"`);
  }
}

export const defaultPayloadResolver = new PayloadResolver([
  new InlineJsonPayloadSource(),
  new FilePayloadSource(),
  new TargetPayloadSource(),
  new SamplePayloadSource(),
]);
