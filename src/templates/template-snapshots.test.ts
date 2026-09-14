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

/**
 * File snapshots of full rendered HTML for the fixture data in
 * `src/scripts/content/*-data.ts`. Markup changes fail CI.
 * After an intentional change:
 * `npx vitest run -u src/templates/template-snapshots.test.ts`
 */
describe('assembled template snapshots', () => {
  it('hackernoonEmailTemplate rendered HTML matches snapshot', async () => {
    const html = hackernoonRenderToString(
      hackernoonEmailTemplate(hackernoonData),
      hackernoonData
    );
    expect(html).toContain(
      '<title>The Secrets of High-Performing DevOps teams</title>'
    );
    await expect(html).toMatchFileSnapshot(
      './__snapshots__/hackernoon-email.snap.html'
    );
  });

  it('nomoretogoEmailTemplate rendered HTML matches snapshot', async () => {
    const html = nomoretogoRenderToString(
      nomoretogoEmailTemplate(nomoretogoData),
      nomoretogoData
    );
    expect(html).toContain(`<title>${nomoretogoData.title}</title>`);
    await expect(html).toMatchFileSnapshot(
      './__snapshots__/nomoretogo-email.snap.html'
    );
  });

  it('mailchimpEmailTemplate rendered HTML matches snapshot', async () => {
    const html = mailchimpRenderToString(
      mailchimpEmailTemplate(mailchimpData),
      mailchimpData
    );
    expect(html).toContain(`<title>${mailchimpData.title}</title>`);
    await expect(html).toMatchFileSnapshot(
      './__snapshots__/mailchimp-email.snap.html'
    );
  });
});
