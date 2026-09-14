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
import { HackernoonValidator } from './hackernoon.validator.js';
import { MailchimpValidator } from './mailchimp.validator.js';
import { NewsletterValidator } from './newsletter.validator.js';
import { NomoretogoValidator } from './nomoretogo.validator.js';

const newsletterValidator = new NewsletterValidator();
const hackernoonValidator = new HackernoonValidator();
const nomoretogoValidator = new NomoretogoValidator();
const mailchimpValidator = new MailchimpValidator();

/** Validate newsletter data, then render. */
export function renderToString(
  template: TemplateResult,
  data: EmailData
): string {
  return renderNewsletterHtml(template, newsletterValidator.parse(data));
}

/** Validate Hacker Noon data, then render. */
export function hackernoonRenderToString(
  template: TemplateResult,
  data: HackernoonEmailData
): string {
  return renderHackernoonHtml(template, hackernoonValidator.parse(data));
}

/** Validate No More To-Go data, then render. */
export function nomoretogoRenderToString(
  template: TemplateResult,
  data: NomoretogoEmailData
): string {
  return renderNomoretogoHtml(template, nomoretogoValidator.parse(data));
}

/** Validate Mailchimp data, then render. */
export function mailchimpRenderToString(
  template: TemplateResult,
  data: MailchimpEmailData
): string {
  return renderMailchimpHtml(template, mailchimpValidator.parse(data));
}
