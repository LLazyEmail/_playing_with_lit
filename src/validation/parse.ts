import type { z } from 'zod';

/** Thrown when incoming email payload fails the runtime schema. */
export class EmailDataValidationError extends Error {
  readonly issues: string[];

  constructor(templateName: string, issues: string[]) {
    super(
      `Invalid ${templateName} email data:\n${issues.map((issue) => `  - ${issue}`).join('\n')}`
    );
    this.name = 'EmailDataValidationError';
    this.issues = issues;
  }
}

/**
 * Parse unknown input with a Zod schema and throw
 * {@link EmailDataValidationError} with field paths on failure.
 */
export function parseEmailData<T>(
  schema: z.ZodType<T>,
  data: unknown,
  templateName: string
): T {
  const result = schema.safeParse(data);
  if (result.success) {
    return result.data;
  }

  const issues = result.error.issues.map((issue) => {
    const path = issue.path.length > 0 ? issue.path.join('.') : '(root)';
    return `${path}: ${issue.message}`;
  });
  throw new EmailDataValidationError(templateName, issues);
}
