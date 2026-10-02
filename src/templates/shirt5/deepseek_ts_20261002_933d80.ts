export interface Shirt5Image {
  src: string;
  alt: string;
  width: number;
  url: string;
  /** Optional per‑block padding override; Klaviyo emits per‑block tweaks. */
  padding?: string;
  /** Optional background color (Klaviyo sometimes tints individual blocks). */
  bgColor?: string;
}

export interface Shirt5EmailData {
  preheaderText: string;
  /** Long invisible spacer Klaviyo appends after the preheader for preview text alignment. */
  preheaderSpacer?: string;

  images: Shirt5Image[];

  footer: {
    brandName: string;
    addressLine: string;
    year: number;
    unsubscribe: { label: string; url: string };
    preferences: { label: string; url: string };
  };
}