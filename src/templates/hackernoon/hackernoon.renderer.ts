import type { TemplateResult } from 'lit';
import type { HackernoonEmailData } from '../../types.js';
import { Renderer } from '../../rendering/renderer.js';
import { renderEmailBody } from '../../rendering/render-email-document.js';
import { HACKERNOON_STYLES } from '../styles/hackernoon.styles.js';
import { hackernoonEmailTemplate } from './index.js';

/**
 * Hacker Noon document shell. Lit cannot interpolate `<title>`, and the
 * original doctype, MSO comments, and font link are not the shared wrapper.
 */
export function hackernoonRenderToString(
  template: TemplateResult,
  data: Pick<HackernoonEmailData, 'title'>
): string {
  const bodyContent = renderEmailBody(template);

  return `<!doctype html>
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
    <head>
        <!-- NAME: 1 COLUMN -->
        <!--[if gte mso 15]>
        <xml>
            <o:OfficeDocumentSettings>
            <o:AllowPNG/>
            <o:PixelsPerInch>96</o:PixelsPerInch>
            </o:OfficeDocumentSettings>
        </xml>
        <![endif]-->
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>${data.title}</title>
    <style type="text/css">${HACKERNOON_STYLES}</style><!--[if !mso]><!--><link href="https://fonts.googleapis.com/css?family=Merriweather:400,400i,700,700i|Merriweather+Sans:400,400i,700,700i|Source+Sans+Pro:400,400i,700,700i" rel="stylesheet"><!--<![endif]--></head>
    <body style="height: 100%;margin: 0;padding: 0;width: 100%;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;background-color: #ffffff;">
        ${bodyContent}
    </body>
</html>`;
}

export class HackernoonRenderer extends Renderer<HackernoonEmailData> {
  render(data: HackernoonEmailData): string {
    return hackernoonRenderToString(hackernoonEmailTemplate(data), data);
  }
}
