import type { Renderer } from './renderer.js';
import type { Validator } from '../validation/validator.js';
import { HackernoonRenderer } from '../templates/hackernoon/hackernoon.renderer.js';
import { NomoretogoRenderer } from '../templates/nomoretogo/nomoretogo.renderer.js';
import { MailchimpRenderer } from '../templates/mailchimp/mailchimp.renderer.js';
import { ZurbRenderer } from '../templates/zurb/zurb.renderer.js';
import { GoogleRenderer } from '../templates/google/google.renderer.js';
import { HackernoonValidator } from '../validation/hackernoon.validator.js';
import { NomoretogoValidator } from '../validation/nomoretogo.validator.js';
import { MailchimpValidator } from '../validation/mailchimp.validator.js';
import { ZurbValidator } from '../validation/zurb.validator.js';
import { GoogleValidator } from '../validation/google.validator.js';
import { hackernoonData } from '../scripts/content/hackernoon-data.js';
import { nomoretogoData } from '../scripts/content/nomoretogo-data.js';
import { mailchimpData } from '../scripts/content/mailchimp-data.js';
import { zurbData } from '../scripts/content/zurb-data.js';
import { googleShipmentData } from '../scripts/content/google-data.js';
import { ConfigError } from '../errors/index.js';

export interface TemplateEntry<T> {
  renderer: Renderer<T>;
  validator: Validator<T>;
  sampleData: T;
}

export const templateRegistry = {
  hackernoon: {
    renderer: new HackernoonRenderer(),
    validator: new HackernoonValidator(),
    sampleData: hackernoonData,
  },
  nomoretogo: {
    renderer: new NomoretogoRenderer(),
    validator: new NomoretogoValidator(),
    sampleData: nomoretogoData,
  },
  mailchimp: {
    renderer: new MailchimpRenderer(),
    validator: new MailchimpValidator(),
    sampleData: mailchimpData,
  },
  zurb: {
    renderer: new ZurbRenderer(),
    validator: new ZurbValidator(),
    sampleData: zurbData,
  },
  google: {
    renderer: new GoogleRenderer(),
    validator: new GoogleValidator(),
    sampleData: googleShipmentData,
  },
} as const;

export type TemplateName = keyof typeof templateRegistry;

export function isTemplateName(name: string): name is TemplateName {
  return Object.prototype.hasOwnProperty.call(templateRegistry, name);
}

export function listTemplateNames(): TemplateName[] {
  return Object.keys(templateRegistry) as TemplateName[];
}

export function getTemplate<K extends TemplateName>(
  name: K
): (typeof templateRegistry)[K] {
  if (!isTemplateName(name)) {
    throw new ConfigError({
      message: `Unknown template "${name}". Registered: ${listTemplateNames().join(', ')}`,
      details: { name },
    });
  }
  return templateRegistry[name];
}
