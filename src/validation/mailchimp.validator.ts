import type { MailchimpEmailData } from '../types.js';
import { mailchimpEmailDataSchema } from './schemas.js';
import { parseEmailData } from './parse.js';
import { Validator } from './validator.js';

export class MailchimpValidator extends Validator<MailchimpEmailData> {
  validateSchema(data: unknown): data is MailchimpEmailData {
    return mailchimpEmailDataSchema.safeParse(data).success;
  }

  parse(data: unknown): MailchimpEmailData {
    return parseEmailData(mailchimpEmailDataSchema, data, 'Mailchimp');
  }
}
