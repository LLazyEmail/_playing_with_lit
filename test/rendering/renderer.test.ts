import { createHash } from 'node:crypto';
import { describe, expect, it } from 'vitest';
import { hackernoonEmailTemplate } from '../../src/templates/hackernoon/index.js';
import { nomoretogoEmailTemplate } from '../../src/templates/nomoretogo/index.js';
import { mailchimpEmailTemplate } from '../../src/templates/mailchimp/index.js';
import {
  hackernoonRenderToString,
  mailchimpRenderToString,
  nomoretogoRenderToString,
} from '../../src/validation/guarded-render.js';
import { hackernoonData } from '../../src/samples/hackernoon/hackernoon-data.js';
import { nomoretogoData } from '../../src/samples/nomoretogo/nomoretogo-data.js';
import { mailchimpData } from '../../src/samples/mailchimp/mailchimp-data.js';
import { HackernoonRenderer } from '../../src/templates/hackernoon/hackernoon.renderer.js';
import { NomoretogoRenderer } from '../../src/templates/nomoretogo/nomoretogo.renderer.js';
import { MailchimpRenderer } from '../../src/templates/mailchimp/mailchimp.renderer.js';

function sha256(value: string): string {
  return createHash('sha256').update(value).digest('hex');
}

describe('Renderer wrappers match existing *RenderToString output', () => {
  it('HackernoonRenderer equals hackernoonRenderToString and the snapshot digest', () => {
    const viaFn = hackernoonRenderToString(
      hackernoonEmailTemplate(hackernoonData),
      hackernoonData
    );
    const viaClass = new HackernoonRenderer().render(hackernoonData);
    expect(viaClass).toBe(viaFn);
    expect(sha256(viaClass)).toMatchSnapshot();
  });

  it('NomoretogoRenderer equals nomoretogoRenderToString and the snapshot digest', () => {
    const viaFn = nomoretogoRenderToString(
      nomoretogoEmailTemplate(nomoretogoData),
      nomoretogoData
    );
    const viaClass = new NomoretogoRenderer().render(nomoretogoData);
    expect(viaClass).toBe(viaFn);
    expect(sha256(viaClass)).toMatchSnapshot();
  });

  it('MailchimpRenderer equals mailchimpRenderToString and the snapshot digest', () => {
    const viaFn = mailchimpRenderToString(
      mailchimpEmailTemplate(mailchimpData),
      mailchimpData
    );
    const viaClass = new MailchimpRenderer().render(mailchimpData);
    expect(viaClass).toBe(viaFn);
    expect(sha256(viaClass)).toMatchSnapshot();
  });
});
