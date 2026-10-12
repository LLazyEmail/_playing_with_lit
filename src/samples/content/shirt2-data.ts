import type { Shirt2EmailData } from '../../templates/shirt2/types.js';
import { SHIRT2_ASSETS, SHIRT2_BRAND_URL } from '../../templates/shirt2/constants.js';

export const shirt2EmailData: Shirt2EmailData = {
  preheaderText: 'Check Out With Exclusive Offer',
  title: 'Get Them for 15% Off!',

  logo: {
    src: SHIRT2_ASSETS.logo,
    alt: 'Alex Mill',
    width: 161,
    url: SHIRT2_BRAND_URL,
  },

  hero: {
    eyebrow: 'Good News: We Saved Your Picks ;)',
    headline: 'And You Get Them For 15% Off',
    cta: {
      label: 'Check Out With 15% Off',
      url: SHIRT2_BRAND_URL,
    },
  },

  // The real shirt2.html tail contains more products; add them here.
  products: [
    {
      image: {
        src: SHIRT2_ASSETS.heroJacket,
        alt: 'Patrick Denim Jacket in Golden Khaki',
      },
      url: 'https://www.alexmill.com/collections/womens-jackets-outerwear/products/patrick-denim-jacket-in-golden-khaki',
      name: 'Patrick Denim Jacket',
      color: 'Golden Khaki',
      price: '$198.00',
      cta: {
        label: 'Shop Now',
        url: 'https://www.alexmill.com/collections/womens-jackets-outerwear/products/patrick-denim-jacket-in-golden-khaki',
      },
    },
  ],

  footer: {
    brandName: 'Alex Mill',
    addressLine: 'Alex Mill · 39 W 38th St · New York, NY 10018',
    year: 2024,
    unsubscribe: { label: 'Unsubscribe', url: '#' },
    preferences: { label: 'Manage preferences', url: '#' },
  },
};