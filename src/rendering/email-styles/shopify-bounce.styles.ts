/**
 * Shared CSS for the Shopify/Bounce Exchange cart‑abandonment shells
 * (shirt2 and shirt3 — they are byte‑identical in the visible region).
 */

export const SHOPIFY_BOUNCE_FONTS_CSS = `
  @font-face {
    font-family: 'LinetoCircularWeb';
    src: url('https://cdn.shopify.com/s/files/1/0295/5521/t/19/assets/lineto-circular-book.woff2') format('woff2');
    font-weight: 400;
  }
  @font-face {
    font-family: 'LinetoCircularWeb';
    src: url('https://cdn.shopify.com/s/files/1/0295/5521/t/19/assets/lineto-circular-bold.woff2') format('woff2');
    font-weight: 700;
  }
  @font-face {
    font-family: 'PitchSansWeb';
    src: url('https://cdn.shopify.com/s/files/1/0295/5521/t/19/assets/PitchSansWeb-Medium.woff2') format('woff2');
    font-weight: 400;
  }
  [style*="LinetoCircularWeb"] { font-family: 'LinetoCircularWeb', Helvetica, Arial, sans-serif !important; }
  [style*="PitchSansWeb"] { font-family: 'PitchSansWeb', 'Courier New', Courier, monospace !important; }
`;

export const SHOPIFY_BOUNCE_RESET_CSS = `
  body { margin: 0 !important; }
  div[style*="margin: 16px 0"] { margin: 0 !important; }
  a { text-decoration: none; color: inherit; }
  .footer a { color: #0F1B55 !important; }
  .cta { transition: 0.2s !important; }
  .hero .cta:hover, .firstItem .cta:hover { background-color: #0F1B55 !important; transition: 0.2s !important; }
  .prod:hover .cta { background-color: #0F1B55 !important; transition: 0.2s !important; }
  .cat:hover a { text-decoration: underline !important; }
`;

export const SHOPIFY_BOUNCE_RESPONSIVE_CSS = `
  @media screen and (min-device-width: 768px) and (max-device-width:1024px) {
    .props div.ipad { width: 548px !important; }
  }
  @media screen and (min-device-width: 10px) and (max-width:640px) {
    .full { width: 100% !important; height: auto !important; }
    .hide { width: 0 !important; height: 0 !important; font-size: 0 !important; line-height: 0 !important; overflow: hidden !important; float: left !important; display: none !important; }
    .show { display: block !important; width: 100% !important; height: auto !important; overflow: visible !important; float: none !important; clear: both !important; }
    .footer br.show { display: inline !important; }
    table.show { display: table !important; }
    .block { display: block !important; }
    .center { margin: 0 auto !important; text-align: center !important; float: none !important; clear: both !important; }
    .box { width: 90% !important; }
    .yahooHero { padding: 40px 0 !important; }
    .yahooHalf { padding: 20px 0 !important; }
    .prodCopy { padding: 13px 0 !important; font-size: 15px !important; line-height: 19px !important; }
    .noPad { padding: 0 !important; }
    .noBord { border: 0 !important; }
    .footer { line-height: 19px !important; }
    .footer .height { line-height: 30px !important; }
  }
  @media screen and (min-device-width:10px) and (max-width:450px) {
    .fullSm { width: 100% !important; height: auto !important; }
    .boxSm { width: 90% !important; }
    .header { padding: 20px 0 15px !important; }
    .hero .pad { padding-top: 25px !important; }
    h1 { font-size: 33px !important; line-height: 1.2 !important; }
  }
  @media screen and (min-device-width:10px) and (max-width:380px) {
    .props .yahooHalf { line-height: 25px !important; }
  }
  .ibx_no_webview { display: none !important; }
`;