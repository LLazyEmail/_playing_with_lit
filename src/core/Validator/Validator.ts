/**
 * Schema-check contract for every email template.
 * Moved from `src/validation/validator.ts` — that file re-exports this class.
 */
export abstract class Validator<T> {
  abstract validateSchema(data: unknown): data is T;

  abstract parse(data: unknown): T;
}
