import { describe, expect, it } from 'vitest';
import { hackernoonData } from '../scripts/content/hackernoon-data.js';
import { HackernoonValidator } from './hackernoon.validator.js';
import { EmailDataValidationError } from './parse.js';

const validator = new HackernoonValidator();

describe('HackernoonValidator', () => {
  it('validateSchema narrows valid fixtures', () => {
    const data: unknown = hackernoonData;
    expect(validator.validateSchema(data)).toBe(true);
    if (validator.validateSchema(data)) {
      expect(data.title).toBe(hackernoonData.title);
    }
  });

  it('validateSchema rejects missing fields', () => {
    expect(validator.validateSchema({ title: 'x' })).toBe(false);
  });

  it('parse throws EmailDataValidationError on bad input', () => {
    expect(() => validator.parse({})).toThrow(EmailDataValidationError);
  });
});
