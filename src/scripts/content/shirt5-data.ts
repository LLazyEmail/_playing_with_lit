import type { Shirt5EmailData } from '../../templates/shirt5/types.js';
import { SHIRT5_ASSETS, SHIRT5_BRAND_URL } from '../../templates/shirt5/constants.js';

const SHORT_SLEEVE_COLLECTION =
  'https://www.buckmason.com/collections/short-sleeve-comfort';

export const shirt5EmailData: Shirt5EmailData = {
  preheaderText: 'Short Sleeves. Just in Time.',
  preheaderSpacer:
    '                                                                                                                                                                                                                                            ',

  // The real shirt5.html tail contains more image blocks; append them here.
  images: [
    {
      src: SHIRT5_ASSETS.seeWhatsNew,
      alt: "See What's New",
      width: 600,
      url: SHORT_SLEEVE_COLLECTION,
    },
    {
      src: SHIRT5_ASSETS.drapedTwill,
      alt: 'Black Draped Twill Short Sleeve One Pocket Shirt',
      width: 600,
      url: 'https://www.buckmason.com/products/black-draped-twill-short-sleeve-one-pocket-shirt',
    },
    {
      src: SHIRT5_ASSETS.pimaHenley,
      alt: 'Baltic Venice Wash Pima Short Sleeve Henley',
      width: 600,
      url: 'https://www.buckmason.com/products/baltic-venice-wash-pima-short-sleeve-henley',
    },
    {
      src: SHIRT5_ASSETS.l005LightWash,
      alt: 'L005 Light Wash Short Sleeve One Pocket Shirt',
      width: 600,
      url: 'https://www.buckmason.com/products/l005-light-wash-short-sleeve-one-pocket-shirt',
    },
    // TODO: add the remaining image blocks from the tail of shirt5.html,
    // including the natural sueded cotton polo (source truncates here).
  ],

  footer: {
    brandName: 'Buck Mason',
    addressLine: 'Buck Mason · 1620 Abbot Kinney Blvd · Venice, CA 90291',
    year: 2024,
    unsubscribe: { label: 'Unsubscribe', url: '#' },
    preferences: { label: 'Manage preferences', url: '#' },
  },
};

// Kept for symmetry with the source links; not currently consumed.
export const SHIRT5_BRAND_URL_REF = SHIRT5_BRAND_URL;