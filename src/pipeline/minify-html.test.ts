import { afterEach, describe, expect, it } from 'vitest';
import { finalizeHtml, isMinifyEnabled } from './minify-html.js';

const originalMinify = process.env.EMAIL_MINIFY;
const originalNodeEnv = process.env.NODE_ENV;

afterEach(() => {
  if (originalMinify === undefined) {
    delete process.env.EMAIL_MINIFY;
  } else {
    process.env.EMAIL_MINIFY = originalMinify;
  }
  process.env.NODE_ENV = originalNodeEnv;
});

describe('isMinifyEnabled', () => {
  it('is off by default so local debug output stays readable', () => {
    delete process.env.EMAIL_MINIFY;
    process.env.NODE_ENV = 'test';
    expect(isMinifyEnabled()).toBe(false);
  });

  it('can be forced on or off by the call site', () => {
    expect(isMinifyEnabled({ minify: true })).toBe(true);
    expect(isMinifyEnabled({ minify: false })).toBe(false);
  });

  it('turns on when EMAIL_MINIFY=1', () => {
    process.env.EMAIL_MINIFY = '1';
    process.env.NODE_ENV = 'test';
    expect(isMinifyEnabled()).toBe(true);
  });

  it('EMAIL_MINIFY=0 wins over NODE_ENV=production', () => {
    process.env.EMAIL_MINIFY = '0';
    process.env.NODE_ENV = 'production';
    expect(isMinifyEnabled()).toBe(false);
  });
});

describe('finalizeHtml', () => {
  const pretty = `<!DOCTYPE html>
<html>
  <head>
    <title>Hello</title>
    <!--[if mso]><xml></xml><![endif]-->
  </head>
  <body>
    <p>Readable debug copy</p>
  </body>
</html>`;

  it('returns the original HTML when minify is off', async () => {
    const out = await finalizeHtml(pretty, { minify: false });
    expect(out).toBe(pretty);
  });

  it('collapses whitespace when minify is on and keeps MSO comments', async () => {
    const out = await finalizeHtml(pretty, { minify: true });
    expect(out).not.toBe(pretty);
    expect(out.length).toBeLessThan(pretty.length);
    expect(out).toContain('<!--[if mso]>');
    expect(out).toContain('Readable debug copy');
  });
});
