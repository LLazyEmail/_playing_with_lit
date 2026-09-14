import { describe, expect, it } from 'vitest';
import { ConfigError } from '../errors/index.js';
import { hackernoonData } from '../scripts/content/hackernoon-data.js';
import {
  getTemplate,
  isTemplateName,
  listTemplateNames,
  templateRegistry,
} from './template-registry.js';

describe('templateRegistry', () => {
  it('registers the three templates and no campaign aliases', () => {
    expect(listTemplateNames().sort()).toEqual(
      ['hackernoon', 'mailchimp', 'nomoretogo'].sort()
    );
    expect(isTemplateName('mysterium')).toBe(false);
    expect(isTemplateName('flat-file-7')).toBe(false);
  });

  it('looks up hackernoon by name', () => {
    const entry = getTemplate('hackernoon');
    expect(entry).toBe(templateRegistry.hackernoon);
    expect(entry.validator.validateSchema(hackernoonData)).toBe(true);
  });

  it('throws ConfigError for an unknown name', () => {
    expect(() => getTemplate('mysterium' as 'hackernoon')).toThrow(ConfigError);
  });
});
