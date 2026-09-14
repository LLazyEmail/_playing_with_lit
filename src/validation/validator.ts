/**
 * Schema-check contract for every email template.
 *
 * `validateSchema` is a type predicate so callers get `T` after a successful
 * check. Throwing parse stays on {@link parse} so guarded render can keep the
 * existing EmailDataValidationError behaviour.
 */
export abstract class Validator<T> {
  abstract validateSchema(data: unknown): data is T;

  /** Throw {@link EmailDataValidationError} when the payload is not `T`. */
  abstract parse(data: unknown): T;
}
