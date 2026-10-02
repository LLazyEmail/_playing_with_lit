export interface Shirt2Product {
  image: { src: string; alt: string };
  url: string;
  name: string;
  color: string;
  price: string;
  cta: { label: string; url: string };
}

export interface Shirt2EmailData {
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

  products: Shirt2Product[];

  footer: {
    brandName: string;
    addressLine: string;
    year: number;
    unsubscribe: { label: string; url: string };
    preferences: { label: string; url: string };
  };
}