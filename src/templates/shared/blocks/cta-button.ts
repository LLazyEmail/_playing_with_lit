import { html, type TemplateResult } from 'lit';

export interface CtaButtonProps {
  href: string;
  label: string;
  target?: '_blank' | '_self';
  className?: string;
  style: string;
}

/** Renders a styled email-safe call-to-action anchor. */
export function renderCtaButton({
  href,
  label,
  target = '_self',
  className,
  style,
}: CtaButtonProps): TemplateResult {
  return html`<a class="${className ?? ''}" href="${href}" style="${style}" target="${target}">${label}</a>`;
}
