import type { EmailData } from '../types.js';
import { emailDataSchema } from './schemas.js';
import { parseEmailData } from './parse.js';
import { Validator } from './validator.js';

export class NewsletterValidator extends Validator<EmailData> {
  validateSchema(data: unknown): data is EmailData {
    return emailDataSchema.safeParse(data).success;
  }

  parse(data: unknown): EmailData {
    return parseEmailData(emailDataSchema, data, 'newsletter');
  }
}
