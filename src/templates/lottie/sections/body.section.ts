import { html, type TemplateResult } from 'lit';
import type { LottieEmailData, LottieStep } from '../types.js';

/**
 * Renders the `Content 5` headline plus the `Content 11+` step modules.
 * The source truncates inside the first `Content 11` block; append entries
 * to `data.steps` to match the real tail.
 */
export function renderBodySection(
  data: Pick<LottieEmailData, 'stepsHeadline' | 'steps'>
): TemplateResult {
  return html`
    <!-- BEGIN MODULE: Content 5 -->
    <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
      <tbody>
        <tr>
          <td height="8" style="font-size: 1px; line-height: 1px;"> </td>
        </tr>
      </tbody>
    </table>
    <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
      <tbody>
        <tr>
          <td
            bgcolor="#ffffff"
            pc-default-class="pc-sm-p-30-10-15 pc-xs-p-20-0-5"
            pc-default-padding="35px 20px 20px"
            style="padding: 23px 20px 2px; background-color: #ffffff"
            valign="top"
          >
            <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
              <tbody>
                <tr>
                  <td
                    align="center"
                    class="pc-fb-font"
                    style="padding: 5px 20px; font-family: 'Karla', Helvetica, Arial, sans-serif; font-size: 22px; font-weight: 700; line-height: 34px; letter-spacing: -0.4px; color: #000000"
                    valign="top"
                  >${data.stepsHeadline}</td>
                </tr>
                <tr>
                  <td height="5" style="font-size: 1px; line-height: 1px;"> </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- END MODULE: Content 5 -->

    ${data.steps.map((step) => renderStep(step))}
  `;
}

function renderStep(step: LottieStep): TemplateResult {
  return html`
    <!-- BEGIN MODULE: Content 11 -->
    <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
      <tbody>
        <tr>
          <td
            bgcolor="#ffffff"
            pc-default-class="pc-sm-p-25-10-15 pc-xs-p-25-20"
            pc-default-padding="30px 25px 20px"
            style="padding: 25px 25px 5px; background-color: #ffffff"
            valign="top"
          >
            <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
              <tbody>
                <tr>
                  <td
                    class="pc-fb-font"
                    style="padding: 0 5px 12px; font-family: 'Karla', Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 700; line-height: 28px; letter-spacing: -0.3px; color: #000000;"
                    valign="top"
                  >${step.title}</td>
                </tr>
                <tr>
                  <td
                    class="pc-fb-font"
                    style="padding: 0 5px; font-family: 'Karla', Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 300; line-height: 28px; letter-spacing: -0.2px; color: #000000;"
                    valign="top"
                  >
                    <p>${step.body}</p>
                  </td>
                </tr>
                ${step.image
                  ? html`
                      <tr>
                        <td align="center" style="padding: 16px 5px 0;" valign="top">
                          <img
                            alt=${step.image.alt}
                            src=${step.image.src}
                            width=${step.image.width}
                            style="border: 0; line-height: 100%; outline: 0; -ms-interpolation-mode: bicubic; border-radius: 6px; max-width: 100%; height: auto; display: block; Margin: 0 auto; color: #1B1B1B;"
                          />
                        </td>
                      </tr>
                    `
                  : ''}
                ${step.cta
                  ? html`
                      <tr>
                        <td align="center" style="padding: 20px 5px 10px;" valign="top">
                          <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="margin: 0 auto;">
                            <tbody>
                              <tr>
                                <td
                                  align="center"
                                  bgcolor="#000000"
                                  style="border-radius: 6px; padding: 12px 22px;"
                                  valign="middle"
                                >
                                  <a
                                    href=${step.cta.url}
                                    style="color: #ffffff; font-family: 'Karla', Helvetica, Arial, sans-serif; font-size: 14px; font-weight: 700; letter-spacing: 0.4px; text-decoration: none; text-transform: uppercase;"
                                  >${step.cta.label}</a>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    `
                  : ''}
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- END MODULE: Content 11 -->
  `;
}