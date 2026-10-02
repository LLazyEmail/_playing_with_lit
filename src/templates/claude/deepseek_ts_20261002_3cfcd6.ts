import type { ClaudeEmailData } from './types.js';
import { CLAUDE_SUBJECT } from './constants.js';
import { claudeEmailTemplate } from './index.js';

export interface ClaudeTemplateRegistration {
  id: 'claude';
  subject: string;
  build: (data: ClaudeEmailData) => unknown;
}

/**
 * Registers the claude template with the shared template registry.
 * Mirrors `hackernoon.register.ts` so both templates plug into the same
 * rendering pipeline without changes to the caller.
 */
export const claudeRegistration: ClaudeTemplateRegistration = {
  id: 'claude',
  subject: CLAUDE_SUBJECT,
  build: (data) => claudeEmailTemplate(data),
};