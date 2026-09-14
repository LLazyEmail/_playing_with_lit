import type { HackernoonEmailData } from '../types.js';
import { hackernoonEmailDataSchema } from './schemas.js';
import { parseEmailData } from './parse.js';
import { Validator } from './validator.js';

export class HackernoonValidator extends Validator<HackernoonEmailData> {
  validateSchema(data: unknown): data is HackernoonEmailData {
    return hackernoonEmailDataSchema.safeParse(data).success;
  }

  parse(data: unknown): HackernoonEmailData {
    return parseEmailData(hackernoonEmailDataSchema, data, 'Hacker Noon');
  }
}
