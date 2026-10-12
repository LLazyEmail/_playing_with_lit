import type { Shirt3EmailData } from '../../templates/shirt3/types.js';
import { SHIRT3_ASSETS, SHIRT3_BRAND_URL } from '../../templates/shirt3/constants.js';

export const shirt3EmailData: Shirt3EmailData = {
  preheaderText: 'Check Out With Exclusive Offer',
  title: 'Get Them for 15% Off!',

  logo: {
    src: SHIRT3_ASSETS.logo,
    alt: 'Alex Mill',
    width: 161,
    url: SHIRT3_BRAND_URL,
  },

  hero: {
    eyebrow: 'Good News: We Saved Your Picks ;)',
    headline: 'And You Get Them For 15% Off',
    cta: {
      label: 'Check Out With 15% Off',
      url: SHIRT3_BRAND_URL,
    },
  },

  // The real shirt3.html tail contains more products; add them here.
  products: [
    {
      image: {
        src: SHIRT3_ASSETS.heroJacket,
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