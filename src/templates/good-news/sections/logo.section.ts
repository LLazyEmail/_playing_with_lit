import { html, type TemplateResult } from 'lit';
import {
  registerLogoPresenter,
  renderLogoBlock,
} from '../../shared/blocks/logo.js';
import { GOOD_NEWS_ASSETS, GOOD_NEWS_BRAND_URL } from '../constants.js';

/**
 * Renders the Simple masthead logo row that sits above the hero.
 */
function presentGoodNewsLogo(): TemplateResult {
  return html`
    <tr>
      <td>
        <img
          class="email-logo-masthead"
          height="35"
          src=${GOOD_NEWS_ASSETS.logo}
          alt="Simple"
          style="width: auto; max-width: 100% !important; display: block; height: 30px; margin-bottom: 25px; margin-left: auto; margin-right: auto;"
        />
      </td>
    </tr>
  `;
}

registerLogoPresenter('good-news', () => presentGoodNewsLogo());

export function renderLogoSection(): TemplateResult {
  return renderLogoBlock({ variant: 'good-news' });
}