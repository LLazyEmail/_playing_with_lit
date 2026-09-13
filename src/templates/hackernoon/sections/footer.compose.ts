import type { TemplateResult } from 'lit';
import type { HackernoonEmailData } from '../types.js';
import {
  registerFooterPresenter,
  renderFooterBlock,
} from '../../shared/blocks/footer.js';
import { renderFooterSection as presentHackernoonFooter } from './footer.section.js';

registerFooterPresenter('hackernoon', ({ year }) =>
  presentHackernoonFooter({ year })
);

/** Shared-block entry used by the composer. Markup stays in footer.section.ts. */
export function renderFooterSection(
  data: Pick<HackernoonEmailData, 'year'>
): TemplateResult {
  return renderFooterBlock({ variant: 'hackernoon', year: data.year });
}
