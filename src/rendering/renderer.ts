/**
 * Common render contract for every email template.
 *
 * No implementation lives here — subclasses wrap the existing composer +
 * `*RenderToString` functions so a future BuildPipeline / registry can call
 * `renderer.render(data)` without knowing which template it is.
 */
export abstract class Renderer<T> {
  abstract render(data: T): string;
}
