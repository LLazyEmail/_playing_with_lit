import { html } from 'lit';
import type { Section } from '../../../types.js';
import type { ZurbEmailData } from '../types.js';

export const renderFeaturesSection: Section<ZurbEmailData> = (data) => html`
  <table class="row" width="100%" cellpadding="0" cellspacing="0">
    <tr>
      ${data.features.map(
        (feature) => html`
          <td class="columns large-4 feature-callout" width="33%">
            <h3>${feature.title}</h3>
            <p>${feature.body}</p>
          </td>
        `
      )}
    </tr>
  </table>
`;
