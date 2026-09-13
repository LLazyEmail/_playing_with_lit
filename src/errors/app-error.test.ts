import { describe, expect, it } from 'vitest';
import {
  AppError,
  CompositionError,
  EmailDataValidationError,
  ErrorCode,
  ErrorLayer,
  ValidationError,
  isAppError,
  isValidationError,
} from './index.js';

describe('AppError hierarchy', () => {
  it('serializes a stable JSON contract', () => {
    const error = new ValidationError({
      message: 'bad payload',
      issues: [{ path: 'title', message: 'Required' }],
      details: { templateName: 'Hacker Noon' },
    });

    expect(error).toBeInstanceOf(AppError);
    expect(error).toBeInstanceOf(Error);
    expect(isAppError(error)).toBe(true);
    expect(isValidationError(error)).toBe(true);
    expect(error.toJSON()).toEqual({
      name: 'ValidationError',
      code: ErrorCode.VALIDATION_FAILED,
      layer: ErrorLayer.Validation,
      message: 'bad payload',
      issues: [{ path: 'title', message: 'Required' }],
      details: { templateName: 'Hacker Noon' },
      retryable: false,
    });
  });

  it('keeps EmailDataValidationError as a ValidationError subclass',
    () => {
      const error = new EmailDataValidationError('Hacker Noon', [
        'preheaderText: Required',
      ]);
      expect(error).toBeInstanceOf(ValidationError);
      expect(error.code).toBe(ErrorCode.VALIDATION_FAILED);
      expect(error.issues).toEqual([
        { path: 'preheaderText', message: 'Required' },
      ]);
      expect(error.details.templateName).toBe('Hacker Noon');
    }
  );

  it('marks a missing presenter as composition, not validation', () => {
    const error = new CompositionError({
      message: 'No footer presenter registered for variant "hackernoon".',
      details: { block: 'footer', variant: 'hackernoon' },
    });
    expect(error.layer).toBe(ErrorLayer.Composition);
    expect(error.code).toBe(ErrorCode.BLOCK_PRESENTER_MISSING);
    expect(isValidationError(error)).toBe(false);
  });
});
