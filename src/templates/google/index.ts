import type { TemplateResult } from 'lit';
import type { GoogleEmailData } from './types.js';
import { renderFooterSection } from './sections/footer.section.js';
import { renderHeaderSection } from './sections/header.section.js';
import { renderLayoutSection } from './sections/layout.section.js';
import { renderLineItemSection } from './sections/line-item.section.js';
import { renderOrderDetailsSection } from './sections/order-details.section.js';
import { renderPreheaderSection } from './sections/preheader.section.js';
import { renderPriceDetailsSection } from './sections/price-details.section.js';
import { renderProgressSection } from './sections/progress.section.js';
import { renderShipmentCardSection } from './sections/shipment-card.section.js';
import { renderTrackingSection } from './sections/tracking.section.js';

/** Composer only. Markup lives in the section files. */
export function googleEmailTemplate(data: GoogleEmailData): TemplateResult {
  return renderLayoutSection(
    renderPreheaderSection(data),
    renderHeaderSection(data),
    renderProgressSection(data),
    renderShipmentCardSection(
      renderLineItemSection(data),
      renderTrackingSection(data),
    ),
    renderOrderDetailsSection(data),
    renderPriceDetailsSection(data),
    renderFooterSection(data),
  );
}
