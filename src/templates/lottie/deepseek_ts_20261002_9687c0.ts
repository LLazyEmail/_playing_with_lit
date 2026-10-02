export interface LottieStep {
  title: string;
  body: string;
  image?: { src: string; alt: string; width: number };
  cta?: { label: string; url: string };
}

export interface LottieEmailData {
  preheaderText: string;

  logo: {
    src: string;
    alt: string;
    width: number;
    url: string;
  };

  hero: {
    image: { src: string; alt: string; width: number };
  };

  greeting: string;
  intro: string;

  stepsHeadline: string;
  steps: LottieStep[];

  footer: {
    brandName: string;
    addressLine: string;
    year: number;
    unsubscribe: { label: string; url: string };
    preferences: { label: string; url: string };
  };
}