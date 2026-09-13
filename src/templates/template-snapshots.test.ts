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

describe('assembled template snapshots', () => {
  it('hackernoonEmailTemplate rendered HTML matches snapshot', () => {
    const html = hackernoonRenderToString(
      hackernoonEmailTemplate(hackernoonData),
      hackernoonData
    );
    expect(html).toMatchSnapshot();
  });

  it('nomoretogoEmailTemplate rendered HTML matches snapshot', () => {
    const html = nomoretogoRenderToString(
      nomoretogoEmailTemplate(nomoretogoData),
      nomoretogoData
    );
    expect(html).toMatchSnapshot();
  });

  it('mailchimpEmailTemplate rendered HTML matches snapshot', () => {
    const html = mailchimpRenderToString(
      mailchimpEmailTemplate(mailchimpData),
      mailchimpData
    );
    expect(html).toMatchSnapshot();
  });
});
