import { createHash } from 'node:crypto';
import { describe, expect, it } from 'vitest';
import { hackernoonEmailTemplate } from './hackernoon/index.js';
import { nomoretogoEmailTemplate } from './nomoretogo/index.js';
import { mailchimpEmailTemplate } from './mailchimp/index.js';
import {
  hackernoonRenderToString,
  mailchimpRenderToString,
  nomoretogoRenderToString,
} from '../validation/guarded-render.js';
import { hackernoonData } from '../scripts/content/hackernoon-data.js';
import { nomoretogoData } from '../scripts/content/nomoretogo-data.js';
import { mailchimpData } from '../scripts/content/mailchimp-data.js';

function sha256(value: string): string {
  return createHash('sha256').update(value).digest('hex');
}

/**
 * Committed Vitest snapshots of the SHA-256 of each assembled template.
 * Full HTML is too large to review in git (~87KB for Hacker Noon);
 * the digest still fails CI on any markup change.
 *
 * Update after an intentional markup change:
 * `npx vitest run -u src/templates/template-snapshots.test.ts`
 */
describe('assembled template snapshots', () => {
  it('hackernoonEmailTemplate rendered HTML matches snapshot', () => {
    const html = hackernoonRenderToString(
      hackernoonEmailTemplate(hackernoonData),
      hackernoonData
    );
    expect(html).toContain(
      '<title>The Secrets of High-Performing DevOps teams</title>'
    );
    expect(sha256(html)).toMatchSnapshot();
  });

  it('nomoretogoEmailTemplate rendered HTML matches snapshot', () => {
    const html = nomoretogoRenderToString(
      nomoretogoEmailTemplate(nomoretogoData),
      nomoretogoData
    );
    expect(html).toContain(`<title>${nomoretogoData.title}</title>`);
    expect(sha256(html)).toMatchSnapshot();
  });

  it('mailchimpEmailTemplate rendered HTML matches snapshot', () => {
    const html = mailchimpRenderToString(
      mailchimpEmailTemplate(mailchimpData),
      mailchimpData
    );
    expect(html).toContain(`<title>${mailchimpData.title}</title>`);
    expect(sha256(html)).toMatchSnapshot();
  });
});
