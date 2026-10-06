import type { LottieEmailData } from './types.js';
import { LOTTIE_SUBJECT } from './constants.js';
import { lottieEmailTemplate } from './index.js';

export interface LottieTemplateRegistration {
  id: 'lottie';
  subject: string;
  build: (data: LottieEmailData) => unknown;
}

/**
 * Registers the lottie template with the shared template registry.
 * Mirrors `hackernoon.register.ts` so both templates plug into the same
 * rendering pipeline without changes to the caller.
 */
export const lottieRegistration: LottieTemplateRegistration = {
  id: 'lottie',
  subject: LOTTIE_SUBJECT,
  build: (data) => lottieEmailTemplate(data),
};