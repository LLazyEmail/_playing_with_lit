import { describe, expect, it } from 'vitest';

import { parseRenderArgs } from '../../scripts/args.js';
import { getTarget, listTargets } from '../../scripts/catalog.js';
import {
  FilePayloadSource,
  InlineJsonPayloadSource,
  PayloadResolver,
  SamplePayloadSource,
  TargetPayloadSource,
} from '../../scripts/payloads.js';

describe('render catalog', () => {
  it('lists every current target and resolves campaigns onto their template', () => {
    const ids = listTargets().map((target) => target.id);
    expect(ids).toEqual(
      expect.arrayContaining([
        'hackernoon',
        'nomoretogo',
        'mailchimp',
        'zurb',
        'google',
        'shirt1',
        'shirt2',
        'shirt3',
        'shirt4',
        'shirt5',
        'lottie',
        'claude',
        'good-news',
        'mysterium',
        'flat-file-7',
      ])
    );
    expect(getTarget('mysterium').templateId).toBe('hackernoon');
    expect(getTarget('flat-file-7').templateId).toBe('hackernoon');
  });

  it('rejects an unknown target with the known ids', () => {
    expect(() => getTarget('missing')).toThrow(/Unknown render target "missing"/);
  });
});

describe('render args', () => {
  it('reads flags and a positional template', () => {
    expect(parseRenderArgs(['--template', 'shirt1', '--output', 'out.html'])).toEqual({
      template: 'shirt1',
      input: undefined,
      output: 'out.html',
      payload: undefined,
    });
    expect(parseRenderArgs(['--template=zurb', '--input=data.json']).template).toBe('zurb');
  });
});

describe('payload strategy chain', () => {
  const target = getTarget('hackernoon');
  const resolver = new PayloadResolver([
    new InlineJsonPayloadSource(),
    new FilePayloadSource(),
    new TargetPayloadSource(),
    new SamplePayloadSource(),
  ]);

  it('prefers inline JSON over the registered sample', async () => {
    const payload = await resolver.resolve({
      target,
      payload: '{"title":"from outside"}',
    });
    expect(payload).toEqual({ title: 'from outside' });
  });

  it('uses the target override for a campaign when no external data is passed', async () => {
    const payload = await resolver.resolve({ target: getTarget('mysterium') });
    expect(payload).toMatchObject({ title: expect.stringContaining('VPN') });
  });

  it('falls back to the registered sample', async () => {
    const payload = await resolver.resolve({ target, input: 'scripts/render.ts' });
    expect(payload).toBeTruthy();
  });
});
