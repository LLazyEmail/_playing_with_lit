import type { Shirt5EmailData } from './types.js';
import { SHIRT5_SUBJECT } from './constants.js';
import { shirt5EmailTemplate } from './index.js';

export interface Shirt5TemplateRegistration {
  id: 'shirt5';
  subject: string;
  build: (data: Shirt5EmailData) => unknown;
}

/**
 * Registers the shirt5 template with the shared template registry.
 * Mirrors `hackernoon.register.ts` so both templates plug into the same
 * rendering pipeline without changes to the caller.
 */
export const shirt5Registration: Shirt5TemplateRegistration = {
  id: 'shirt5',
  subject: SHIRT5_SUBJECT,
  build: (data) => shirt5EmailTemplate(data),
};