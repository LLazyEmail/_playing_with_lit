import { html, type TemplateResult } from 'lit';

export interface FooterColumnProps {
  className: string;
  description: string;
  title: string;
  width?: string;
}

/** Renders one table-based column in a multi-column email footer. */
export function renderFooterColumn({
  className,
  description,
  title,
  width = '31%',
}: FooterColumnProps): TemplateResult {
  return html`<table class="table-full" align="left" border="0" cellpadding="0" cellspacing="0" width="${width}">
                <tr>
                  <td valign="top" class="${className}">
                    <h3>${title}</h3>
                    <p>${description}</p>
                  </td>
                </tr>
              </table>`;
}
