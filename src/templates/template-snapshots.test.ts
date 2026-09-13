import { createHash } from 'node:crypto';
import { describe, expect, it } from 'vitest';
import { hackernoonEmailTemplate } from './hackernoon/index.js';
import { nomoretogoEmailTemplate } from './nomoretogo/index.js';
import { mailchimpEmailTemplate } from './mailchimp/index.js';
import {
  hackernoonRenderToString,
  mailchimpRenderToString,
  nomoretogoRenderToString,
} from '../renderer.js';
import { hackernoonData } from '../scripts/content/hackernoon-data.js';
import { nomoretogoData } from '../scripts/content/nomoretogo-data.js';
import { mailchimpData } from '../scripts/content/mailchimp-data.js';

function sha256(value: string): string {
  return createHash('sha256').update(value).digest('hex');
}

/**
 * SHA-256 of the full rendered HTML for the fixture data in
 * `src/scripts/content/*-data.ts`. Treat these digests as snapshots:
 * any markup change fails CI. After an intentional change, update the digest
 * to `sha256(html)` for that template.
 */
const RENDERED_HTML_SHA256 = {
  hackernoon:
    '9c80030e299d59f1739352e5747de3388d56c08dfc0b933b79aad46160be8996',
  nomoretogo:
    '1653b47fcc68f6a85135dffb3a5e6cbd03d94b228a5549890f280f3f673d6b4a',
  mailchimp:
    '6d1c3e6987ed8ae1443ec633d11d5877d4bb6ce19261bd4a340c942e0ada64e8',
} as const;

describe('assembled template snapshots', () => {
  it('hackernoonEmailTemplate rendered HTML matches snapshot digest', () => {
    const html = hackernoonRenderToString(
      hackernoonEmailTemplate(hackernoonData),
      hackernoonData
    );
    expect(html).toContain('<title>The Secrets of High-Performing DevOps teams</title>');
    expect(html).toContain(hackernoonData.title);
    expect(sha256(html)).toBe(RENDERED_HTML_SHA256.hackernoon);
  });

  it('nomoretogoEmailTemplate rendered HTML matches snapshot digest', () => {
    const html = nomoretogoRenderToString(
      nomoretogoEmailTemplate(nomoretogoData),
      nomoretogoData
    );
    expect(html).toContain(`<title>${nomoretogoData.title}</title>`);
    expect(html).toContain(nomoretogoData.date);
    expect(sha256(html)).toBe(RENDERED_HTML_SHA256.nomoretogo);
  });

  it('mailchimpEmailTemplate rendered HTML matches snapshot digest', () => {
    const html = mailchimpRenderToString(
      mailchimpEmailTemplate(mailchimpData),
      mailchimpData
    );
    expect(html).toContain(`<title>${mailchimpData.title}</title>`);
    expect(html).toContain(mailchimpData.brandName);
    expect(sha256(html)).toBe(RENDERED_HTML_SHA256.mailchimp);
  });
});
