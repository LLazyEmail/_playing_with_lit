/**
 * Common render contract for every email template.
 *
 * No implementation lives here — subclasses wrap the existing composer +
 * `*RenderToString` functions so a future BuildPipeline / registry can call
 * `renderer.render(data)` without knowing which template it is.
 *
 * This module is intentionally isolated so it can later be replaced by an
 * external package without changes to the rest of the project.
 */
export abstract class Renderer<T> {
  abstract render(data: T): string;
}
