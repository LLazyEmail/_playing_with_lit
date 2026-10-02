export interface Shirt4NavLink {
  label: string;
  url: string;
}

export interface Shirt4Product {
  image: { src: string; alt: string };
  url: string;
  name: string;
  price: string;
  cta: { label: string; url: string };
}

export interface Shirt4EmailData {
  preheaderText: string;
  title: string;

  topBar: {
    stripColor: string;
    message: string;
  };

  logo: {
    src: string;
    alt: string;
    width: number;
    url: string;
  };

  nav: Shirt4NavLink[];

  hero: {
    image: { src: string; alt: string; width: number };
    url: string;
  };

  intro: {
    headline: string;
    body: string;
    cta: { label: string; url: string };
  };

  products: Shirt4Product[];

  footer: {
    brandName: string;
    addressLine: string;
    year: number;
    unsubscribe: { label: string; url: string };
    preferences: { label: string; url: string };
  };
}