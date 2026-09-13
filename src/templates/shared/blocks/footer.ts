import type { TemplateResult } from 'lit';
import { CompositionError } from '../../../errors/index.js';
import type {
  FooterBlockProps,
  FooterPresenter,
  FooterVariant,
} from './types.js';

const presenters = new Map<FooterVariant, FooterPresenter>();

export function registerFooterPresenter<K extends FooterVariant>(
  variant: K,
  present: FooterPresenter<K>
): void {
  presenters.set(variant, present as FooterPresenter);
}

export function renderFooterBlock(props: FooterBlockProps): TemplateResult {
  const present = presenters.get(props.variant);
  if (!present) {
    throw new CompositionError({
      message: `No footer presenter registered for variant "${props.variant}". Import the template section module first.`,
      details: { block: 'footer', variant: props.variant },
    });
  }
  return present(props);
}
