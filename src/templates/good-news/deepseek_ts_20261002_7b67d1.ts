import type { GoodNewsEmailData } from '../../templates/goodNews/types.js';
import {
  GOOD_NEWS_ASSETS,
  GOOD_NEWS_TRACKING,
} from '../../templates/goodNews/constants.js';

export const goodNewsEmailData: GoodNewsEmailData = {
  preheaderText:
    'On the other side of your move from The Bancorp Bank to BBVA Compass: Simple Shared accounts.',

  trackingPixel: { src: GOOD_NEWS_TRACKING.openPixel },

  logo: {
    src: GOOD_NEWS_ASSETS.logo,
    alt: 'Simple',
    height: 35,
    url: 'https://simple.com',
  },

  hero: {
    src: GOOD_NEWS_ASSETS.heroGif,
    alt: 'Simple Shared',
    width: 550,
  },

  greeting: 'Good news today, Smiles Davis!',
  paragraphs: [
    `It’s finally time! Say, “hello!” to Simple Shared accounts. But wait—you’re right in the middle of moving your account from our current partner bank, The Bancorp Bank, to our new one, BBVA Compass.`,
    `Don’t fret, a sparkly, new Simple Shared account—should you want one—is waiting for you on the other side. Hooray! 🎉`,
    `You can learn more about Simple Shared <a href="https://simple.com/shared" style="color: #0d97ff; font-family: 'Avenir Next', 'Avenir', 'Helvetica', sans-serif !important;" target="_blank">here</a>.`,
    `Thanks for hanging in there.`,
  ],
  signature: '— The Team at Simple',

  socialBar: {
    address: [
      'Simple Finance Technology Corp.',
      'PO Box 28462',
      'Portland, OR 97228',
    ],
    unsubscribe: {
      label: 'Unsubscribe',
      url: 'https://simple.com/unsubscribe',
    },
    icons: [
      {
        src: GOOD_NEWS_ASSETS.iconFacebook,
        alt: 'Facebook',
        href: 'https://facebook.com/simple',
        width: 6.89062,
        height: 15,
      },
      {
        src: GOOD_NEWS_ASSETS.iconTwitter,
        alt: 'Twitter',
        href: 'https://twitter.com/simple',
        height: 15,
      },
      {
        src: GOOD_NEWS_ASSETS.iconPinterest,
        alt: 'Pinterest',
        href: 'https://pinterest.com/simple',
        height: 15,
      },
      {
        src: GOOD_NEWS_ASSETS.iconInstagram,
        alt: 'Instagram',
        href: 'https://instagram.com/simple',
        height: 15,
      },
    ],
  },

  disclaimer: {
    sentToLabel: 'This email was sent to',
    sentToAddress: 'hello@SmilesDavis.yeah',
    paragraphs: [
      'Banking services are provided by Compass Bank and The Bancorp Bank; Members FDIC. BBVA Compass is a trade name of Compass Bank. Banking services associated with the Simple Shared account are available only through Compass Bank.',
      'The Simple Visa<sup style="font-family: \'Avenir Next\', \'Avenir\', \'Helvetica\', sans-serif !important; font-size: 11px; color: #788991; margin-top: 0;">®</sup> Card is issued by Compass Bank pursuant to a license from Visa U.S.A. Inc. and may be used everywhere Visa debit cards are accepted.',
    ],
  },
};