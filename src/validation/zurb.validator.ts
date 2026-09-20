import type { ZurbEmailData } from '../types.js';
import { zurbEmailDataSchema } from './schemas.js';
import { parseEmailData } from './parse.js';
import { Validator } from './validator.js';

export class ZurbValidator extends Validator<ZurbEmailData> {
  validateSchema(data: unknown): data is ZurbEmailData {
    return zurbEmailDataSchema.safeParse(data).success;
  }

  parse(data: unknown): ZurbEmailData {
    return parseEmailData(zurbEmailDataSchema, data, 'Zurb');
  }
}
