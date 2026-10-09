import type { ClaudeEmailData } from './types.js';
import { CLAUDE_SUBJECT } from './constants.js';
import { claudeEmailTemplate } from './index.js';
import { Renderer } from '../../rendering/renderer.js';
import { templateRegistry } from '../../rendering/template-registry.js';
import { Validator } from '../../validation/validator.js';
import { renderClaudeEmail } from './claude.renderer.js';
import { claudeEmailData } from '../../scripts/content/claude-data.js';

export interface ClaudeTemplateRegistration {
  id: 'claude';
  subject: string;
  build: (data: ClaudeEmailData) => unknown;
}

class ClaudeRenderer extends Renderer<ClaudeEmailData> {
  render(data: ClaudeEmailData): string {
    return renderClaudeEmail(data).html;
  }
}

class ClaudeValidator extends Validator<ClaudeEmailData> {
  validateSchema(data: unknown): data is ClaudeEmailData {
    return typeof data === 'object' && data !== null && 'preheaderText' in data;
  }

  parse(data: unknown): ClaudeEmailData {
    if (!this.validateSchema(data)) {
      throw new Error('Invalid claude payload');
    }
    return data;
  }
}

templateRegistry.register('claude', {
  renderer: new ClaudeRenderer(),
  validator: new ClaudeValidator(),
  sampleData: claudeEmailData,
});

export const claudeRegistration = {
  id: 'claude' as const,
  subject: CLAUDE_SUBJECT,
  build: (data: ClaudeEmailData) => claudeEmailTemplate(data),
};
