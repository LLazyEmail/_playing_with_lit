import type { TemplateResult } from 'lit';
import type { FooterColumn } from '../../../types.js';

/** Discriminated footer contract shared by every template. */
export type FooterBlockProps =
  | {
      variant: 'hackernoon';
      year: number;
    }
  | {
      variant: 'nomoretogo';
      unsubscribeUrl: string;
    }
  | {
      variant: 'mailchimp';
      footerColumns: [FooterColumn, FooterColumn, FooterColumn];
    };

/** Discriminated logo / branding contract. */
export type LogoBlockProps =
  | {
      variant: 'hackernoon';
    }
  | {
      variant: 'nomoretogo';
    }
  | {
      variant: 'mailchimp';
      brandName: string;
      navLinks: Array<{ label: string; url: string }>;
    };

export type FooterVariant = FooterBlockProps['variant'];
export type LogoVariant = LogoBlockProps['variant'];

export type FooterPresenter<K extends FooterVariant = FooterVariant> = (
  props: Extract<FooterBlockProps, { variant: K }>
) => TemplateResult;

export type LogoPresenter<K extends LogoVariant = LogoVariant> = (
  props: Extract<LogoBlockProps, { variant: K }>
) => TemplateResult;
