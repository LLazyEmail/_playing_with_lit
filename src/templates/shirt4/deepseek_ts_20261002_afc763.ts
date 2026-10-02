import type { Shirt4EmailData } from '../../templates/shirt4/types.js';
import { SHIRT4_ASSETS, SHIRT4_BRAND_URL, SHIRT4_PALETTE } from '../../templates/shirt4/constants.js';

export const shirt4EmailData: Shirt4EmailData = {
  preheaderText: 'The Art of Shirting',
  title: 'Orlebar Brown | New Shirts: Add a Layer to Your Look',

  topBar: {
    stripColor: SHIRT4_PALETTE.red,
    message: 'FREE UK AND EU RETURNS ON ORDERS OVER £295',
  },

  logo: {
    src: SHIRT4_ASSETS.logo,
    alt: 'Orlebar Brown',
    width: 300,
    url: SHIRT4_BRAND_URL,
  },

  nav: [
    { label: 'MENSWEAR', url: SHIRT4_BRAND_URL },
    { label: 'SWIM', url: SHIRT4_BRAND_URL },
    { label: 'POLOS', url: SHIRT4_BRAND_URL },
  ],

  hero: {
    image: {
      src: SHIRT4_ASSETS.heroGif,
      alt: 'The Art of Shirting',
      width: 540,
    },
    url: SHIRT4_BRAND_URL,
  },

  intro: {
    headline: 'The Art of Shirting',
    body:
      'It’s what you wear and how you wear it. Shirts under shirts, or shirts under knitwear and outerwear. Layered looks for gentle men.',
    cta: { label: 'Shop Shirting', url: SHIRT4_BRAND_URL },
  },

  // The real shirt4.html tail contains more product blocks; add them here.
  products: [],

  footer: {
    brandName: 'Orlebar Brown',
    addressLine: 'Orlebar Brown · 305 Wandsworth Bridge Rd · London SW6 2TZ',
    year: 2024,
    unsubscribe: { label: 'Unsubscribe', url: '#' },
    preferences: { label: 'Manage preferences', url: '#' },
  },
};