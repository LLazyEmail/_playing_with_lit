import type { Shirt3EmailData } from './types.js';
import { SHIRT3_SUBJECT } from './constants.js';
import { shirt3EmailTemplate } from './index.js';

export interface Shirt3TemplateRegistration {
  id: 'shirt3';
  subject: string;
  build: (data: Shirt3EmailData) => unknown;
}

/**
 * Registers the shirt3 template with the shared template registry.
 * Mirrors `hackernoon.register.ts` so both templates plug into the same
 * rendering pipeline without changes to the caller.
 */
export const shirt3Registration: Shirt3TemplateRegistration = {
  id: 'shirt3',
  subject: SHIRT3_SUBJECT,
  build: (data) => shirt3EmailTemplate(data),
};