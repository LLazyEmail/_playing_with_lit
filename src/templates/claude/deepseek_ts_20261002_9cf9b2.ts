import { html, type TemplateResult } from 'lit';
import {
  registerLogoPresenter,
  renderLogoBlock,
} from '../../shared/blocks/logo.js';
import { CLAUDE_ASSETS, CLAUDE_BRAND_URL } from '../constants.js';

/**
 * Renders the Claude wordmark. In the source, the light logo is a
 * `<img>` with `.light-logo` and is hidden in dark mode by CSS; a
 * sibling `.dark-logo` img would be shown instead. We render both if a
 * dark source is provided.
 */
function presentClaudeLogo(): TemplateResult {
  return html`
    <tr>
      <td
        align="center"
        valign="top"
        class="container-header-evo"
        style="padding: 40px 48px 12px;"
      >
        <table width="100%" border="0" cellspacing="0" cellpadding="0" style="width:100%;" role="presentation">
          <tr>
            <td align="left" valign="middle" style="text-align: left;">
              <a href=${CLAUDE_BRAND_URL} target="_blank" style="text-decoration: none;">
                <img
                  src=${CLAUDE_ASSETS.logoLight}
                  alt="Claude"
                  class="light-logo"
                  width="133"
                  style="display: block; border: 0; width: 133px; max-width: 133px;"
                />
              </a>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  `;
}

registerLogoPresenter('claude', () => presentClaudeLogo());

export function renderLogoSection(): TemplateResult {
  return renderLogoBlock({ variant: 'claude' });
}