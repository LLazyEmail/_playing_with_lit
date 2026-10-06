import { html, type TemplateResult } from 'lit';
import {
  registerLogoPresenter,
  renderLogoBlock,
} from '../../shared/blocks/logo.js';
import { LOTTIE_ASSETS, LOTTIE_BRAND_URL } from '../constants.js';

/**
 * Renders the LottieFiles logo row (maps to the top of `Header 5`).
 */
function presentLottieLogo(): TemplateResult {
  return html`
    <tr>
      <td
        align="center"
        style="padding: 10px;"
        valign="top"
      >
        <a href=${LOTTIE_BRAND_URL} style="text-decoration: none;">
          <img
            alt=""
            src=${LOTTIE_ASSETS.logo}
            width="130"
            style="max-width: 100%; height: auto; border: 0; line-height: 100%; outline: 0; -ms-interpolation-mode: bicubic; font-size: 14px; color: #1B1B1B;"
          />
        </a>
      </td>
    </tr>
  `;
}

registerLogoPresenter('lottie', () => presentLottieLogo());

export function renderLogoSection(): TemplateResult {
  return renderLogoBlock({ variant: 'lottie' });
}