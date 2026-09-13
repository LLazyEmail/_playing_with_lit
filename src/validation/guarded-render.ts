import type { TemplateResult } from 'lit';
import type {
  EmailData,
  HackernoonEmailData,
  MailchimpEmailData,
  NomoretogoEmailData,
} from '../types.js';
import {
  hackernoonRenderToString as renderHackernoonHtml,
  mailchimpRenderToString as renderMailchimpHtml,
  nomoretogoRenderToString as renderNomoretogoHtml,
  renderToString as renderNewsletterHtml,
} from '../renderer.js';
import {
  emailDataSchema,
  hackernoonEmailDataSchema,
  mailchimpEmailDataSchema,
  nomoretogoEmailDataSchema,
} from './schemas.js';
import { parseEmailData } from './parse.js';

/** Validate newsletter data, then render. */
export function renderToString(
  template: TemplateResult,
  data: EmailData
): string {
  const parsed = parseEmailData(emailDataSchema, data, 'newsletter');
  return renderNewsletterHtml(template, parsed);
}

/** Validate Hacker Noon data, then render. */
export function hackernoonRenderToString(
  template: TemplateResult,
  data: HackernoonEmailData
): string {
  const parsed = parseEmailData(
    hackernoonEmailDataSchema,
    data,
    'Hacker Noon'
  );
  return renderHackernoonHtml(template, parsed);
}

/** Validate No More To-Go data, then render. */
export function nomoretogoRenderToString(
  template: TemplateResult,
  data: NomoretogoEmailData
): string {
  const parsed = parseEmailData(
    nomoretogoEmailDataSchema,
    data,
    'No More To-Go'
  );
  return renderNomoretogoHtml(template, parsed);
}

/** Validate Mailchimp data, then render. */
export function mailchimpRenderToString(
  template: TemplateResult,
  data: MailchimpEmailData
): string {
  const parsed = parseEmailData(mailchimpEmailDataSchema, data, 'Mailchimp');
  return renderMailchimpHtml(template, parsed);
}
