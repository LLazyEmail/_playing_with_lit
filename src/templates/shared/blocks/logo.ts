import type { TemplateResult } from 'lit';
import { CompositionError } from '../../../errors/index.js';
import type { LogoBlockProps, LogoPresenter, LogoVariant } from './types.js';

const presenters = new Map<LogoVariant, LogoPresenter>();

export function registerLogoPresenter<K extends LogoVariant>(
  variant: K,
  present: LogoPresenter<K>
): void {
  presenters.set(variant, present as LogoPresenter);
}

export function renderLogoBlock(props: LogoBlockProps): TemplateResult {
  const present = presenters.get(props.variant);
  if (!present) {
    throw new CompositionError({
      message: `No logo presenter registered for variant "${props.variant}". Import the template section module first.`,
      details: { block: 'logo', variant: props.variant },
    });
  }
  return present(props);
}
