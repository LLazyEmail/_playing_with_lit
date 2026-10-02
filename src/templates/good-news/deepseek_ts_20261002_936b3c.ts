export interface GoodNewsSocialIcon {
  src: string;
  alt: string;
  href: string;
  /** Optional intrinsic width hint; source has some hardcoded (e.g. facebook=6.89px). */
  width?: number;
  height: number;
}

export interface GoodNewsEmailData {
  preheaderText: string;
  /** Iterable open-tracking pixel; usually empty in dev/QA. */
  trackingPixel?: { src: string };

  logo: {
    src: string;
    alt: string;
    height: number;
    url: string;
  };

  hero: {
    src: string;
    alt: string;
    width: number;
  };

  greeting: string;
  paragraphs: string[];
  signature: string;

  socialBar: {
    address: string[];
    unsubscribe: { label: string; url: string };
    icons: GoodNewsSocialIcon[];
  };

  disclaimer: {
    sentToLabel: string;
    sentToAddress: string;
    paragraphs: string[];
  };
}