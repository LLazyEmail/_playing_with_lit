import type { Shirt1EmailData } from './types.js';
import { SHIRT1_SUBJECT } from './constants.js';
import { shirt1EmailTemplate } from './index.js';
import { Renderer } from '../../rendering/renderer.js';
import { templateRegistry } from '../../rendering/template-registry.js';
import { Validator } from '../../validation/validator.js';
import { renderShirt1Email } from './shirt1.renderer.js';
import { shirt1EmailData } from '../../scripts/content/shirt1-data.js';

export interface Shirt1TemplateRegistration {
  id: 'shirt1';
  subject: string;
  build: (data: Shirt1EmailData) => unknown;
}

class Shirt1Renderer extends Renderer<Shirt1EmailData> {
  render(data: Shirt1EmailData): string {
    return renderShirt1Email(data).html;
  }
}

class Shirt1Validator extends Validator<Shirt1EmailData> {
  validateSchema(data: unknown): data is Shirt1EmailData {
    return typeof data === 'object' && data !== null && 'preheaderText' in data;
  }

  parse(data: unknown): Shirt1EmailData {
    if (!this.validateSchema(data)) {
      throw new Error('Invalid shirt1 payload');
    }
    return data;
  }
}

templateRegistry.register('shirt1', {
  renderer: new Shirt1Renderer(),
  validator: new Shirt1Validator(),
  sampleData: shirt1EmailData,
});

export const shirt1Registration = {
  id: 'shirt1' as const,
  subject: SHIRT1_SUBJECT,
  build: (data: Shirt1EmailData) => shirt1EmailTemplate(data),
};
