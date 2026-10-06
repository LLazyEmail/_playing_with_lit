import type { Shirt4EmailData } from './types.js';
import { SHIRT4_SUBJECT } from './constants.js';
import { shirt4EmailTemplate } from './index.js';

export interface Shirt4TemplateRegistration {
  id: 'shirt4';
  subject: string;
  build: (data: Shirt4EmailData) => unknown;
}

/**
 * Registers the shirt4 template with the shared template registry.
 * Mirrors `hackernoon.register.ts` so both templates plug into the same
 * rendering pipeline without changes to the caller.
 */
export const shirt4Registration: Shirt4TemplateRegistration = {
  id: 'shirt4',
  subject: SHIRT4_SUBJECT,
  build: (data) => shirt4EmailTemplate(data),
};