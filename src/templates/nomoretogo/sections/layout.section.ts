import { html, type TemplateResult } from 'lit';
import type { NomoretogoEmailData } from '../types.js';

/** Renders the No More To-Go email chrome around its ordered content sections. */
export function renderLayoutSection(
  data: NomoretogoEmailData,
  logo: TemplateResult,
  nav: TemplateResult,
  intro: TemplateResult,
  recipeGrid: TemplateResult,
  cta: TemplateResult,
  prepInfo: TemplateResult,
  community: TemplateResult,
  amazon: TemplateResult,
  footer: TemplateResult,
): TemplateResult {
  return html`
    <div role="article" aria-roledescription="email" aria-label="${data.title}" style="font-size:medium;">
      <table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#f6f8f9" style="background-color:#f6f8f9;">
        <tbody><tr>
          <td align="center" style="padding:20px 0;">
            <table align="center" border="0" cellpadding="0" cellspacing="0" style="border-radius:5px;overflow:hidden;" width="640">
              <tbody><tr>
                <td bgcolor="#ffffff">
                  ${logo}
                  ${nav}
                  ${intro}
                  ${recipeGrid}
                  ${cta}
                  ${prepInfo}
                  ${community}
                  ${amazon}
                  ${footer}
                </td>
              </tr></tbody>
            </table>
          </td>
        </tr></tbody>
      </table>
    </div>`;
}
