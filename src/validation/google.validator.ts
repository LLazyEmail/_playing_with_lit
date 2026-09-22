import type { GoogleEmailData } from '../types.js';
import { googleEmailDataSchema } from './schemas.js';
import { parseEmailData } from './parse.js';
import { Validator } from './validator.js';

export class GoogleValidator extends Validator<GoogleEmailData> {
  validateSchema(data: unknown): data is GoogleEmailData {
    return googleEmailDataSchema.safeParse(data).success;
  }

  parse(data: unknown): GoogleEmailData {
    return parseEmailData(googleEmailDataSchema, data, 'Google');
  }
}
