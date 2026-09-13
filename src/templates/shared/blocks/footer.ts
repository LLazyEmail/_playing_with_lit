import type { TemplateResult } from 'lit';
import type {
  FooterBlockProps,
  FooterPresenter,
  FooterVariant,
} from './types.js';

const presenters = new Map<FooterVariant, FooterPresenter>();

/**
 * Register the template-owned HTML presenter for a footer variant.
 * Presenters keep their original table markup; this module is only the contract.
 */
export function registerFooterPresenter<K extends FooterVariant>(
  variant: K,
  present: FooterPresenter<K>
): void {
  presenters.set(variant, present as FooterPresenter);
}

/**
 * Render a footer through the shared block API.
 * Template sections map EmailData → FooterBlockProps, then call this.
 */
export function renderFooterBlock(props: FooterBlockProps): TemplateResult {
  const present = presenters.get(props.variant);
  if (!present) {
    throw new Error(
      `No footer presenter registered for variant "${props.variant}". Import the template section module first.`
    );
  }
  return present(props);
}
