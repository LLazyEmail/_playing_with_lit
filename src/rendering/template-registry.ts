import type { Renderer } from './renderer.js';
import type { Validator } from '../validation/validator.js';
import { HackernoonRenderer } from '../templates/hackernoon/hackernoon.renderer.js';
import { NomoretogoRenderer } from '../templates/nomoretogo/nomoretogo.renderer.js';
import { MailchimpRenderer } from '../templates/mailchimp/mailchimp.renderer.js';
import { HackernoonValidator } from '../validation/hackernoon.validator.js';
import { NomoretogoValidator } from '../validation/nomoretogo.validator.js';
import { MailchimpValidator } from '../validation/mailchimp.validator.js';
import { hackernoonData } from '../scripts/content/hackernoon-data.js';
import { nomoretogoData } from '../scripts/content/nomoretogo-data.js';
import { mailchimpData } from '../scripts/content/mailchimp-data.js';
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
