import type { GoodNewsEmailData } from './types.js';
import { GOOD_NEWS_SUBJECT } from './constants.js';
import { goodNewsEmailTemplate } from './index.js';
import { Renderer } from '../../rendering/renderer.js';
import { templateRegistry } from '../../rendering/template-registry.js';
import { Validator } from '../../validation/validator.js';
import { renderGoodNewsEmail } from './goodNews.renderer.js';
import { goodNewsEmailData } from '../../scripts/content/goodNews-data.js';

export interface GoodNewsTemplateRegistration {
  id: 'good-news';
  subject: string;
  build: (data: GoodNewsEmailData) => unknown;
}

class GoodNewsRenderer extends Renderer<GoodNewsEmailData> {
  render(data: GoodNewsEmailData): string {
    return renderGoodNewsEmail(data).html;
  }
}

class GoodNewsValidator extends Validator<GoodNewsEmailData> {
  validateSchema(data: unknown): data is GoodNewsEmailData {
    return typeof data === 'object' && data !== null && 'preheaderText' in data;
  }

  parse(data: unknown): GoodNewsEmailData {
    if (!this.validateSchema(data)) {
      throw new Error('Invalid good-news payload');
    }
    return data;
  }
}

templateRegistry.register('good-news', {
  renderer: new GoodNewsRenderer(),
  validator: new GoodNewsValidator(),
  sampleData: goodNewsEmailData,
});

export const goodNewsRegistration = {
  id: 'good-news' as const,
  subject: GOOD_NEWS_SUBJECT,
  build: (data: GoodNewsEmailData) => goodNewsEmailTemplate(data),
};
