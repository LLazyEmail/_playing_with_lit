import { readFileSync } from 'node:fs';

/** Read a JSON file. `markup-generator` does not export a JSON reader. */
export function readJsonFile<T = unknown>(jsonPath: string): T {
  return JSON.parse(readFileSync(jsonPath, 'utf8')) as T;
}
