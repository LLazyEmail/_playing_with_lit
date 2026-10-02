export interface ClaudeFeature {
  /** Small heading above the feature title (e.g. "Get more out of Claude Code"). */
  eyebrow?: string;
  title: string;
  paragraphs: string[];
  image?: {
    src: string;
    alt: string;
    width: number;
    /** Add `.ev-img-outline` class if the source image has a border. */
    outline?: boolean;
  };
  cta?: { label: string; url: string };
  /** Secondary CTA rendered on the same line as the primary, separated by `|`. */
  secondaryCta?: { label: string; url: string };
  /** Optional code block rendered as a mock editor card. */
  codeCard?: {
    path: string;
    lines: string[];
  };
}

export interface ClaudeEmailData {
  preheaderText: string;
  preheaderSpacer?: string;

  logo: {
    /** Shown in light mode. */
    src: string;
    alt: string;
    width: number;
    url: string;
    /** Optional dark‑mode logo (rendered with `.dark-logo`). */
    darkSrc?: string;
  };

  greeting: string;
  intro: string;

  /** Feature sections separated by `<hr>` dividers. */
  features: ClaudeFeature[];

  /** Optional callout row (e.g. "Other news") rendered on `#f0eee6`. */
  callout?: {
    title: string;
    items: string[];
  };

  footer: {
    brandName: string;
    addressLine: string;
    year: number;
    unsubscribe: { label: string; url: string };
    preferences: { label: string; url: string };
  };
}