import type { Shirt1EmailData } from './types.js';
import { SHIRT1_SUBJECT } from './constants.js';
import { shirt1EmailTemplate } from './index.js';

export interface Shirt1TemplateRegistration {
  id: 'shirt1';
  subject: string;
  build: (data: Shirt1EmailData) => unknown;
}

/**
 * Registers the shirt1 template with the shared template registry.
 * Mirrors `hackernoon.register.ts` so both templates plug into the same
 * rendering pipeline without changes to the caller.
 */
export const shirt1Registration: Shirt1TemplateRegistration = {
  id: 'shirt1',
  subject: SHIRT1_SUBJECT,
  build: (data) => shirt1EmailTemplate(data),
};