import type { Shirt4EmailData } from './types.js';
import { SHIRT4_SUBJECT } from './constants.js';
import { shirt4EmailTemplate } from './index.js';
import { Renderer } from '../../rendering/renderer.js';
import { templateRegistry } from '../../rendering/template-registry.js';
import { Validator } from '../../validation/validator.js';
import { renderShirt4Email } from './shirt4.renderer.js';
import { shirt4EmailData } from '../../scripts/content/shirt4-data.js';

export interface Shirt4TemplateRegistration {
  id: 'shirt4';
  subject: string;
  build: (data: Shirt4EmailData) => unknown;
}

class Shirt4Renderer extends Renderer<Shirt4EmailData> {
  render(data: Shirt4EmailData): string {
    return renderShirt4Email(data).html;
  }
}

class Shirt4Validator extends Validator<Shirt4EmailData> {
  validateSchema(data: unknown): data is Shirt4EmailData {
    return typeof data === 'object' && data !== null && 'preheaderText' in data;
  }

  parse(data: unknown): Shirt4EmailData {
    if (!this.validateSchema(data)) {
      throw new Error('Invalid shirt4 payload');
    }
    return data;
  }
}

templateRegistry.register('shirt4', {
  renderer: new Shirt4Renderer(),
  validator: new Shirt4Validator(),
  sampleData: shirt4EmailData,
});

export const shirt4Registration = {
  id: 'shirt4' as const,
  subject: SHIRT4_SUBJECT,
  build: (data: Shirt4EmailData) => shirt4EmailTemplate(data),
};
