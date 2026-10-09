/**
 * Document `<head>` builders for the imported templates.
 * Styles stay here so renderer files only wrap the body.
 */
import {
  ANTHROPIC_BASE_CSS,
  ANTHROPIC_RESPONSIVE_CSS,
  anthropicDarkRules,
  prefixOgsc,
} from './anthropic-dark.styles.js';
import {
  KLAVIYO_MOBILE_CSS,
  KLAVIYO_MSO_CSS,
  klaviyoGlobalReset,
} from './klaviyo.styles.js';
import { msoStyle, styleTag } from './shared.js';
import {
  OMETRIA_FONTS_CSS,
  OMETRIA_INTERACTION_CSS,
  OMETRIA_RESET_CSS,
  OMETRIA_RESPONSIVE_CSS,
} from './ometria.styles.js';
import {
  POSTCARDS_ENCODED_ENDIF,
  POSTCARDS_ENCODED_IF_NOT_MSO,
  POSTCARDS_ENCODED_MSO_PIXELS,
  POSTCARDS_ENCODED_MSO_STYLE,
  POSTCARDS_RESET_CSS,
  POSTCARDS_SM_CSS,
  POSTCARDS_XS_CSS,
  postcardsKarlaFontFaces,
} from './postcards.styles.js';
import { SIMPLE_ITERABLE_CSS } from './simple-iterable.styles.js';
import {
  SHOPIFY_BOUNCE_FONTS_CSS,
  SHOPIFY_BOUNCE_RESET_CSS,
  SHOPIFY_BOUNCE_RESPONSIVE_CSS,
} from './shopify-bounce.styles.js';

const SHOPIFY_BOUNCE_MSO_PIXELS = `<xml><o:OfficeDocumentSettings><o:AllowPNG/><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml>`;

export interface KlaviyoHeadOptions {
  title: string;
  pageBg: string;
  cardBg: string;
  text: string;
  headingFont: string;
  bodyFont: string;
}

/** shirt1 Klaviyo head: mobile, MSO, and the global reset. */
export function shirt1Head(opts: KlaviyoHeadOptions): string {
  return `<head>
    <meta content="text/html; charset=utf-8" http-equiv="Content-Type">
    <meta content="width=device-width, initial-scale=1" name="viewport">
    <title>${opts.title}</title>
    ${styleTag(KLAVIYO_MOBILE_CSS)}
    ${msoStyle(KLAVIYO_MSO_CSS)}
    ${styleTag(
      klaviyoGlobalReset({
        pageBg: opts.pageBg,
        cardBg: opts.cardBg,
        headingColor: opts.text,
        bodyColor: opts.text,
        headingFont: opts.headingFont,
        bodyFont: opts.bodyFont,
        linkColor: opts.text,
      })
    )}
  </head>`;
}

/** shirt2 / shirt3 Shopify Bounce head. */
export function shopifyBounceHead(title: string): string {
  return `<head>
    <meta http-equiv="Content-Type" content="text/html;" charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <![if !mso]>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <![endif]>
    <title>${title}</title>
    <style>
      ${SHOPIFY_BOUNCE_FONTS_CSS}
      ${SHOPIFY_BOUNCE_RESET_CSS}
      ${SHOPIFY_BOUNCE_RESPONSIVE_CSS}
    </style>
    <!--[if gte mso 9]>${SHOPIFY_BOUNCE_MSO_PIXELS}<![endif]-->
  </head>`;
}

export interface Shirt4HeadOptions {
  title: string;
  googleHref: string;
  gothicRegularWoff2: string;
  gothicBoldWoff2: string;
  pageBg: string;
  black: string;
}

/** shirt4 Ometria head, including the empty yahoo-app-fix head. */
export function shirt4Heads(opts: Shirt4HeadOptions): string {
  return `<head>
    <!--yahoo-app-fix-->
  </head>
  <head>
    <meta charset="utf-8" />
    <meta content="width=device-width, initial-scale=1.0, user-scalable=yes" name="viewport" />
    <meta content="telephone=no, date=no, address=no, email=no, url=no" name="format-detection" />
    <meta name="x-apple-disable-message-reformatting" />
    <meta content="noindex, nofollow" name="robots" />
    <title>${opts.title}</title>

    <!--[if mso]>
    <noscript><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml></noscript>
    <![endif]-->

    <style type="text/css">${OMETRIA_RESET_CSS}</style>
    <style type="text/css">${OMETRIA_RESPONSIVE_CSS}</style>

    <!--[if !mso]><!-->
    <link href="https://fonts.googleapis.com" media="screen" rel="preconnect" />
    <link href="https://fonts.gstatic.com" media="screen" rel="preconnect" />
    <link href="${opts.googleHref}" media="screen" rel="stylesheet" />
    <!--<![endif]-->

    <style type="text/css">
      ${OMETRIA_FONTS_CSS({
        gothicRegularWoff2: opts.gothicRegularWoff2,
        gothicBoldWoff2: opts.gothicBoldWoff2,
      })}
    </style>
    <style type="text/css">
      ${OMETRIA_INTERACTION_CSS({
        pageBg: opts.pageBg,
        black: opts.black,
      })}
    </style>
  </head>`;
}

export function shirt5Head(title: string, pageBg: string): string {
  return `<head>
    <meta content="text/html; charset=utf-8" http-equiv="Content-Type">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${title}</title>
    ${styleTag(KLAVIYO_MOBILE_CSS)}
    ${msoStyle(KLAVIYO_MSO_CSS.replace('#FFF', pageBg))}
  </head>`;
}

/** good-news keeps the original outer head plus the nested Iterable head. */
export function goodNewsHeads(title: string): string {
  return `<head>
  <meta charset="UTF-8">
  <title>${title}</title>
</head>

<body>
  <head>
  <title></title>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta name="viewport" content="width=device-width">
  <style type="text/css">${SIMPLE_ITERABLE_CSS}</style>
</head>`;
}

export function lottieHead(karlaWeights: readonly string[]): string {
  return `<head>

    ${POSTCARDS_ENCODED_IF_NOT_MSO}
    ${POSTCARDS_ENCODED_ENDIF}
    <title></title>
    <style type="text/css">
      @media screen {
${postcardsKarlaFontFaces(karlaWeights)}
      }
    </style>
    <style type="text/css">${POSTCARDS_RESET_CSS}</style>
    <style type="text/css">${POSTCARDS_SM_CSS}</style>
    <style type="text/css">${POSTCARDS_XS_CSS}</style>

    ${POSTCARDS_ENCODED_MSO_STYLE}
    ${POSTCARDS_ENCODED_MSO_PIXELS}
  </head>`;
}

const CLAUDE_MSO_RESET = `<style>li{text-align:-webkit-match-parent;display:list-item!important;text-indent:-1em!important}a{text-decoration:none!important}</style> <xml> <o:OfficeDocumentSettings> <o:PixelsPerInch>96</o:PixelsPerInch> </o:OfficeDocumentSettings> </xml>`;
const CLAUDE_MSO_FILL = `<style>.keep-white{mso-style-textfill-type:gradient;mso-style-textfill-fill-gradientfill-stoplist:'0 \\#FFFFFF 0 100000\\,100000 \\#FFFFFF 0 100000';color:#000!important}</style>`;

export interface ClaudeHeadOptions {
  title: string;
  orange: string;
  cardBg: string;
  dark: {
    header: string;
    content: string;
    footer: string;
    divider: string;
    muted: string;
    codeBg: string;
    codeBorder: string;
    codeBar: string;
    codeLine: string;
    codeHi: string;
    codeHiBar: string;
    inlineCodeBg: string;
  };
}

export function claudeHead(opts: ClaudeHeadOptions): string {
  const darkRules = anthropicDarkRules({
    header: opts.dark.header,
    content: opts.dark.content,
    footer: opts.dark.footer,
    divider: opts.dark.divider,
    muted: opts.dark.muted,
    codeBg: opts.dark.codeBg,
    codeBorder: opts.dark.codeBorder,
    codeBar: opts.dark.codeBar,
    codeLine: opts.dark.codeLine,
    codeHi: opts.dark.codeHi,
    codeHiBar: opts.dark.codeHiBar,
    inlineCodeBg: opts.dark.inlineCodeBg,
    orange: opts.orange,
    cardBg: opts.cardBg,
  });

  return `<head>
    <title>${opts.title}</title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="author" content="Anthropic Email Template">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="format-detection" content="telephone=no, date=no, address=no, email=no">
    <meta name="x-apple-disable-message-reformatting">
    <meta name="color-scheme" content="light dark">
    <meta name="supported-color-schemes" content="light dark">

    <!--[if mso]>${CLAUDE_MSO_RESET}<![endif]-->

    <style>
      ${ANTHROPIC_BASE_CSS}
      ${ANTHROPIC_RESPONSIVE_CSS}
      @media(prefers-color-scheme:dark) {${darkRules}}
      ${prefixOgsc(darkRules)}
    </style>

    <!--[if mso]><style>table{mso-table-lspace:0;mso-table-rspace:0}</style><![endif]-->
    <!--[if gte mso 16]>${CLAUDE_MSO_FILL}<![endif]-->
  </head>`;
}
