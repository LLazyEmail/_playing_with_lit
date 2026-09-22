import { ConfigError } from '../errors/index.js';
import type { Renderer } from './renderer.js';
import type { Validator } from '../validation/validator.js';

export interface TemplateEntry<T> {
  renderer: Renderer<T>;
  validator: Validator<T>;
  sampleData: T;
}

/**
 * Central registry of templates. Deliberately small and stable — templates
 * register themselves via their own `<name>.register.ts` file (imported for
 * side effects from `src/templates/register-all.ts`) rather than being
 * listed here, so adding a template never requires touching this file.
 */
class TemplateRegistry {
  private entries = new Map<string, TemplateEntry<unknown>>();

  register<T>(name: string, entry: TemplateEntry<T>): void {
    if (this.entries.has(name)) {
      throw new ConfigError({
        message: `Template "${name}" is already registered.`,
        details: { name },
      });
    }
    this.entries.set(name, entry as TemplateEntry<unknown>);
  }

  get(name: string): TemplateEntry<unknown> {
    const entry = this.entries.get(name);
    if (!entry) {
      throw new ConfigError({
        message: `Unknown template "${name}". Registered: ${this.list().join(', ')}`,
        details: { name },
      });
    }
    return entry;
  }

  has(name: string): boolean {
    return this.entries.has(name);
  }

  list(): string[] {
    return [...this.entries.keys()];
  }
}

export const templateRegistry = new TemplateRegistry();
