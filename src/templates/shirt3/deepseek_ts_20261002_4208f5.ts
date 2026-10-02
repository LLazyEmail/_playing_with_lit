export interface Shirt3Product {
  image: { src: string; alt: string };
  url: string;
  name: string;
  color: string;
  price: string;
  cta: { label: string; url: string };
}

export interface Shirt3EmailData {
  preheaderText: string;
  title: string;

  logo: {
    src: string;
    alt: string;
    width: number;
    url: string;
  };

  hero: {
    eyebrow: string;
    headline: string;
    cta: { label: string; url: string };
  };

  products: Shirt3Product[];

  footer: {
    brandName: string;
    addressLine: string;
    year: number;
    unsubscribe: { label: string; url: string };
    preferences: { label: string; url: string };
  };
}