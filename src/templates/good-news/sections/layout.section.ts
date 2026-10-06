import { html, type TemplateResult } from 'lit';
import type { GoodNewsEmailData } from '../types.js';
import { GOOD_NEWS_FONTS, GOOD_NEWS_PALETTE } from '../constants.js';

/**
 * Wraps the ordered good-news sections in the Simple shell:
 *   - the outer `<table class="body">` centered wrapper
 *   - a fixed 550px content column (with the responsive padding that
 *     switches at `min-width: 550px`)
 *   - the responsive `<style>` block matching the source exactly
 *   - the Iterable open-tracking pixel (optional)
 */
export function renderLayoutSection(
  data: GoodNewsEmailData,
  logo: TemplateResult,
  header: TemplateResult,
  body: TemplateResult,
  footer: TemplateResult
): TemplateResult {
  return html`
    <span
      style="color:transparent;visibility:hidden;display:none;opacity:0;height:0;width:0;font-size:0;"
    >${data.preheaderText}</span>

    ${data.trackingPixel
      ? html`<img
          src=${data.trackingPixel.src}
          style="border:0;width:1px;height:1px;"
          width="1"
          height="1"
          alt=""
        />`
      : ''}

    <table
      align="center"
      border="0"
      cellpadding="0"
      cellspacing="0"
      class="body"
      style="background-color:${GOOD_NEWS_PALETTE.pageBg}; height:100%; padding-bottom:25px; padding-left:0; padding-right:0; padding-top:25px; width:100%"
    >
      <tbody>
        <tr>
          <td>
            <table align="center" border="0" cellpadding="0" cellspacing="0">
              <tbody>
                <tr>
                  <td width="550">
                    <table align="center" border="0" cellpadding="0" cellspacing="0" style="width:100%">
                      <tbody>
                        <tr>
                          <td>
                            <table align="center" border="0" cellpadding="0" cellspacing="0" style="width:100%">
                              <tbody>
                                ${logo}
                              </tbody>
                            </table>
                          </td>
                        </tr>
                        ${header}
                        ${body}
                        ${footer}
                      </tbody>
                    </table>
                    <table align="center" border="0" cellpadding="0" cellspacing="0" style="width:100%">
                      <tbody></tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>

    <style type="text/css">
      @media(min-width:550px){
        .hero-image{ top:0!important }
        table[class="body"]{
          padding-bottom:50px!important;
          padding-top:50px!important
        }
        .email-logo-masthead{
          display:inline!important;
          height:35px!important;
          margin-left:0!important;
          margin-right:0!important
        }
        .email-content{
          border-left:1px solid #dadfe1!important;
          border-right:1px solid #dadfe1!important
        }
        .email-content-block{
          padding-left:50px!important;
          padding-right:50px!important
        }
      }
      .email-social-bar-copy p,
      .email-social-bar-copy a,
      .email-social-bar-copy .ios-no-link{
        color:white!important;
        text-decoration:none!important
      }
    </style>
  `;
}