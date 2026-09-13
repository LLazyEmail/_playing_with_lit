import { html, type TemplateResult } from 'lit';

/** Renders the Mailchimp-style product email chrome around its ordered sections. */
export function renderLayoutSection(
  preheader: TemplateResult,
  branding: TemplateResult,
  image: TemplateResult,
  text: TemplateResult,
  productRows: TemplateResult,
  footer: TemplateResult,
  disclaimer: TemplateResult,
): TemplateResult {
  return html`
    <table border="0" cellpadding="0" cellspacing="0" width="100%" bgcolor="#eeeeee">
      <tr>
        <td align="center" valign="top" width="100%">
          <table align="center" border="0" cellpadding="0" cellspacing="0" width="600" class="full_wrapper">
            ${preheader}
            ${branding}
            ${image}
            ${text}
            ${productRows}
            ${footer}
            ${disclaimer}
          </table>
        </td>
      </tr>
    </table>`;
}
