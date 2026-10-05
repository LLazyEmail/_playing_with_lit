import type { Shirt2EmailData } from './types.js';
import { SHIRT2_SUBJECT } from './constants.js';
import { shirt2EmailTemplate } from './index.js';

export interface Shirt2TemplateRegistration {
  id: 'shirt2';
  subject: string;
  build: (data: Shirt2EmailData) => unknown;
}

/**
 * Registers the shirt2 template with the shared template registry.
 * Mirrors `hackernoon.register.ts` so both templates plug into the same
 * rendering pipeline without changes to the caller.
 */
export const shirt2Registration: Shirt2TemplateRegistration = {
  id: 'shirt2',
  subject: SHIRT2_SUBJECT,
  build: (data) => shirt2EmailTemplate(data),
};