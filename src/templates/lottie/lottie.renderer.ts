import { renderEmailBody } from '../../rendering/render-email-document.js';
import { lottieHead } from '../../rendering/email-styles/index.js';
import { LOTTIE_SUBJECT, LOTTIE_FONTS, LOTTIE_PALETTE } from './constants.js';
import type { LottieEmailData } from './types.js';
import { lottieEmailTemplate } from './index.js';

export interface RenderedLottieEmail {
  subject: string;
  html: string;
}

/** Renders the lottie (Postcards/Designmodo) email. */
export function renderLottieEmail(data: LottieEmailData): RenderedLottieEmail {
  const body = renderEmailBody(lottieEmailTemplate(data));
  return {
    subject: LOTTIE_SUBJECT,
    html: wrapLottieDocument(body),
  };
}

function wrapLottieDocument(bodyContent: string): string {
  return `<!DOCTYPE html>
<!doctype html="">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml">
  ${lottieHead(LOTTIE_FONTS.karlaWeights)}
  <body
    style="margin: 0px; padding: 0px; -webkit-font-smoothing: antialiased; text-size-adjust: 100%; background-color: ${LOTTIE_PALETTE.pageBg}; cursor: auto; width: 100% !important;"
  >
    ${bodyContent}
  </body>
</html>`;
}
