import type { TemplateResult } from 'lit';
import type { LogoBlockProps, LogoPresenter, LogoVariant } from './types.js';

const presenters = new Map<LogoVariant, LogoPresenter>();

/**
 * Register the template-owned HTML presenter for a logo / branding variant.
 */
export function registerLogoPresenter<K extends LogoVariant>(
  variant: K,
  present: LogoPresenter<K>
): void {
  presenters.set(variant, present as LogoPresenter);
}

/**
 * Render a logo or branding banner through the shared block API.
 */
export function renderLogoBlock(props: LogoBlockProps): TemplateResult {
  const present = presenters.get(props.variant);
  if (!present) {
    throw new Error(
      `No logo presenter registered for variant "${props.variant}". Import the template section module first.`
    );
  }
  return present(props);
}
