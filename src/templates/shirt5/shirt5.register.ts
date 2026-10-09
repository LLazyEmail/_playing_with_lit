import type { Shirt5EmailData } from './types.js';
import { SHIRT5_SUBJECT } from './constants.js';
import { shirt5EmailTemplate } from './index.js';
import { Renderer } from '../../rendering/renderer.js';
import { templateRegistry } from '../../rendering/template-registry.js';
import { Validator } from '../../validation/validator.js';
import { renderShirt5Email } from './shirt5.renderer.js';
import { shirt5EmailData } from '../../scripts/content/shirt5-data.js';

export interface Shirt5TemplateRegistration {
  id: 'shirt5';
  subject: string;
  build: (data: Shirt5EmailData) => unknown;
}

class Shirt5Renderer extends Renderer<Shirt5EmailData> {
  render(data: Shirt5EmailData): string {
    return renderShirt5Email(data).html;
  }
}

class Shirt5Validator extends Validator<Shirt5EmailData> {
  validateSchema(data: unknown): data is Shirt5EmailData {
    return typeof data === 'object' && data !== null && 'preheaderText' in data;
  }

  parse(data: unknown): Shirt5EmailData {
    if (!this.validateSchema(data)) {
      throw new Error('Invalid shirt5 payload');
    }
    return data;
  }
}

templateRegistry.register('shirt5', {
  renderer: new Shirt5Renderer(),
  validator: new Shirt5Validator(),
  sampleData: shirt5EmailData,
});

export const shirt5Registration = {
  id: 'shirt5' as const,
  subject: SHIRT5_SUBJECT,
  build: (data: Shirt5EmailData) => shirt5EmailTemplate(data),
};
