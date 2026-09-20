import { describe, expect, it } from 'vitest';
import { ConfigError } from '../errors/index.js';
import { hackernoonData } from '../scripts/content/hackernoon-data.js';
import { zurbData } from '../scripts/content/zurb-data.js';
import {
  getTemplate,
  isTemplateName,
  listTemplateNames,
  templateRegistry,
} from './template-registry.js';

describe('templateRegistry', () => {
  it('registers the four templates and no campaign aliases', () => {
    expect(listTemplateNames().sort()).toEqual(
      ['hackernoon', 'mailchimp', 'nomoretogo', 'zurb'].sort()
    );
    expect(isTemplateName('mysterium')).toBe(false);
    expect(isTemplateName('flat-file-7')).toBe(false);
  });

  it('looks up hackernoon by name', () => {
    const entry = getTemplate('hackernoon');
    expect(entry).toBe(templateRegistry.hackernoon);
    expect(entry.validator.validateSchema(hackernoonData)).toBe(true);
  });

  it('looks up zurb by name', () => {
    const entry = getTemplate('zurb');
    expect(entry).toBe(templateRegistry.zurb);
    expect(entry.validator.validateSchema(zurbData)).toBe(true);
  });

  it('throws ConfigError for an unknown name', () => {
    expect(() => getTemplate('mysterium' as 'hackernoon')).toThrow(ConfigError);
  });
});
