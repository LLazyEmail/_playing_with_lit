import type { Shirt1EmailData } from '../../templates/shirt1/types.js';
import { SHIRT1_ASSETS, SHIRT1_BRAND_URL } from '../../templates/shirt1/constants.js';

export const shirt1EmailData: Shirt1EmailData = {
  preheaderText:
    'The t-shirt is a heavy-weight, high quality t-shirt made of 80% recycled cotton and 20% organic cotton.',

  browserNotice: {
    text: "Can't see this email? ",
    label: 'View in Your Browser',
    url: '#',
  },

  logo: {
    src: SHIRT1_ASSETS.logo,
    alt: 'hnst',
    width: 546,
    url: SHIRT1_BRAND_URL,
  },

  headline: 'Introducing the hnst-tee',

  hero: {
    src: SHIRT1_ASSETS.heroGif,
    alt: 'hnst-tee',
    width: 582,
    url: SHIRT1_BRAND_URL,
  },

  footer: {
    brandName: 'hnst',
    addressLine: 'hnst · 123 Example Street · Example, CA 00000',
    year: 2024,
    unsubscribe: { label: 'Unsubscribe', url: '#' },
  },
};