import { html, type TemplateResult } from 'lit';
import type { EmailData } from '../types.js';

/** Renders the greeting and hero subtitle. */
export function renderHeroSection(
  data: Pick<EmailData, 'recipientName' | 'heroSubtitle'>
): TemplateResult {
  return html`
        <!-- Hero -->
        <div class="hero">
          <h2>Hello, ${data.recipientName}! 👋</h2>
          <p>${data.heroSubtitle}</p>
        </div>
  `;
}
