import type { Shirt2EmailData } from './types.js';
import { SHIRT2_SUBJECT } from './constants.js';
import { shirt2EmailTemplate } from './index.js';
import { Renderer } from '../../rendering/renderer.js';
import { templateRegistry } from '../../rendering/template-registry.js';
import { Validator } from '../../validation/validator.js';
import { renderShirt2Email } from './shirt2.renderer.js';
import { shirt2EmailData } from '../../scripts/content/shirt2-data.js';

export interface Shirt2TemplateRegistration {
  id: 'shirt2';
  subject: string;
  build: (data: Shirt2EmailData) => unknown;
}

class Shirt2Renderer extends Renderer<Shirt2EmailData> {
  render(data: Shirt2EmailData): string {
    return renderShirt2Email(data).html;
  }
}

class Shirt2Validator extends Validator<Shirt2EmailData> {
  validateSchema(data: unknown): data is Shirt2EmailData {
    return typeof data === 'object' && data !== null && 'preheaderText' in data;
  }

  parse(data: unknown): Shirt2EmailData {
    if (!this.validateSchema(data)) {
      throw new Error('Invalid shirt2 payload');
    }
    return data;
  }
}

templateRegistry.register('shirt2', {
  renderer: new Shirt2Renderer(),
  validator: new Shirt2Validator(),
  sampleData: shirt2EmailData,
});

export const shirt2Registration = {
  id: 'shirt2' as const,
  subject: SHIRT2_SUBJECT,
  build: (data: Shirt2EmailData) => shirt2EmailTemplate(data),
};
