import type { NomoretogoEmailData } from '../types.js';
import { nomoretogoEmailDataSchema } from './schemas.js';
import { parseEmailData } from './parse.js';
import { Validator } from './validator.js';

export class NomoretogoValidator extends Validator<NomoretogoEmailData> {
  validateSchema(data: unknown): data is NomoretogoEmailData {
    return nomoretogoEmailDataSchema.safeParse(data).success;
  }

  parse(data: unknown): NomoretogoEmailData {
    return parseEmailData(nomoretogoEmailDataSchema, data, 'No More To-Go');
  }
}
