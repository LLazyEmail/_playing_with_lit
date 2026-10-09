import type { LottieEmailData } from './types.js';
import { LOTTIE_SUBJECT } from './constants.js';
import { lottieEmailTemplate } from './index.js';
import { Renderer } from '../../rendering/renderer.js';
import { templateRegistry } from '../../rendering/template-registry.js';
import { Validator } from '../../validation/validator.js';
import { renderLottieEmail } from './lottie.renderer.js';
import { lottieEmailData } from '../../scripts/content/lottie-data.js';

export interface LottieTemplateRegistration {
  id: 'lottie';
  subject: string;
  build: (data: LottieEmailData) => unknown;
}

class LottieRenderer extends Renderer<LottieEmailData> {
  render(data: LottieEmailData): string {
    return renderLottieEmail(data).html;
  }
}

class LottieValidator extends Validator<LottieEmailData> {
  validateSchema(data: unknown): data is LottieEmailData {
    return typeof data === 'object' && data !== null && 'preheaderText' in data;
  }

  parse(data: unknown): LottieEmailData {
    if (!this.validateSchema(data)) {
      throw new Error('Invalid lottie payload');
    }
    return data;
  }
}

templateRegistry.register('lottie', {
  renderer: new LottieRenderer(),
  validator: new LottieValidator(),
  sampleData: lottieEmailData,
});

export const lottieRegistration = {
  id: 'lottie' as const,
  subject: LOTTIE_SUBJECT,
  build: (data: LottieEmailData) => lottieEmailTemplate(data),
};
