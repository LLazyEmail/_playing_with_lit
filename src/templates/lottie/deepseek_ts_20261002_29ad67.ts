import type { LottieEmailData } from '../../templates/lottie/types.js';
import { LOTTIE_ASSETS } from '../../templates/lottie/constants.js';

export const lottieEmailData: LottieEmailData = {
  preheaderText:
    'LottieFiles is now the most-visited destination for Lottie animations worldwide.',

  logo: {
    src: LOTTIE_ASSETS.logo,
    alt: 'LottieFiles',
    width: 130,
    url: 'http://example.com',
  },

  hero: {
    image: {
      src: LOTTIE_ASSETS.heroGif,
      alt: 'Convert',
      width: 380,
    },
  },

  greeting: 'Hey Smiles Davis,',
  intro:
    'LottieFiles is now the most-visited destination for Lottie animations worldwide.\n\nEvery nine seconds a new animation goes through LottieFiles’ workflow. Be it onboarding motion, product walkthroughs, infographics, presentations, in app animations, reactions and marketing assets all are turning to Lottie.',

  stepsHeadline:
    'Here are 3 steps you can take to ship your own beautiful Motion graphic:',

  // The real lottie.html tail contains the actual step modules; add them here.
  steps: [
    {
      title: 'Step 1 — Download the LottieFiles plugin',
      body:
        'Install the LottieFiles plugin for your favourite design tool and browse thousands of ready-to-ship animations.',
      cta: { label: 'Get the plugin', url: 'http://example.com' },
    },
    {
      title: 'Step 2 — Customise your motion',
      body:
        'Edit colors, speed, and timing directly in the plugin, then export a JSON that works everywhere.',
      cta: { label: 'Browse animations', url: 'http://example.com' },
    },
    {
      title: 'Step 3 — Ship to every platform',
      body:
        'Drop your Lottie into web, iOS, Android, React Native — or hand it off to your developer with one click.',
      cta: { label: 'Read the docs', url: 'http://example.com' },
    },
  ],

  footer: {
    brandName: 'LottieFiles',
    addressLine: 'LottieFiles · 440 N Barranca Ave · Covina, CA 91723',
    year: 2024,
    unsubscribe: { label: 'Unsubscribe', url: '#' },
    preferences: { label: 'Manage preferences', url: '#' },
  },
};