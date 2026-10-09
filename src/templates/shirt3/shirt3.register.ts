import type { Shirt3EmailData } from './types.js';
import { SHIRT3_SUBJECT } from './constants.js';
import { shirt3EmailTemplate } from './index.js';
import { Renderer } from '../../rendering/renderer.js';
import { templateRegistry } from '../../rendering/template-registry.js';
import { Validator } from '../../validation/validator.js';
import { renderShirt3Email } from './shirt3.renderer.js';
import { shirt3EmailData } from '../../scripts/content/shirt3-data.js';

export interface Shirt3TemplateRegistration {
  id: 'shirt3';
  subject: string;
  build: (data: Shirt3EmailData) => unknown;
}

class Shirt3Renderer extends Renderer<Shirt3EmailData> {
  render(data: Shirt3EmailData): string {
    return renderShirt3Email(data).html;
  }
}

class Shirt3Validator extends Validator<Shirt3EmailData> {
  validateSchema(data: unknown): data is Shirt3EmailData {
    return typeof data === 'object' && data !== null && 'preheaderText' in data;
  }

  parse(data: unknown): Shirt3EmailData {
    if (!this.validateSchema(data)) {
      throw new Error('Invalid shirt3 payload');
    }
    return data;
  }
}

templateRegistry.register('shirt3', {
  renderer: new Shirt3Renderer(),
  validator: new Shirt3Validator(),
  sampleData: shirt3EmailData,
});

export const shirt3Registration = {
  id: 'shirt3' as const,
  subject: SHIRT3_SUBJECT,
  build: (data: Shirt3EmailData) => shirt3EmailTemplate(data),
};
