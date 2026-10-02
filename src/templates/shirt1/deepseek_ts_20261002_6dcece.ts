export interface Shirt1EmailData {
  preheaderText: string;
  browserNotice: {
    text: string;
    label: string;
    url: string;
  };
  logo: {
    src: string;
    alt: string;
    width: number;
    url: string;
  };
  headline: string;
  hero: {
    src: string;
    alt: string;
    width: number;
    url: string;
  };
  footer: {
    brandName: string;
    addressLine: string;
    year: number;
    unsubscribe: { label: string; url: string };
  };
}