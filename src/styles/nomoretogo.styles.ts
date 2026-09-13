/** No More To-Go email styles. */
export const NOMORETOGO_STYLES = `
  .ReadMsgBody { width: 100%; }
  .ExternalClass { width: 100%; }
  .ExternalClass * { line-height: 100%; }
  .ExternalClass, .ExternalClass p, .ExternalClass td, .ExternalClass div,
  .ExternalClass span, .ExternalClass font { line-height: 100%; }
  body { margin: 0; padding: 0; }
  body, table, td, p, a, li { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
  table td { border-collapse: collapse; }
  table { border-spacing: 0; border-collapse: collapse; }
  p, a, li, td, blockquote { mso-line-height-rule: exactly; }
  p, a, li, td, body, table, blockquote { -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; }
  img, a img { border: 0; outline: none; text-decoration: none; }
  img { -ms-interpolation-mode: bicubic; }
  a[href^=tel], a[href^=sms], a[href^=mailto], a[href^=date] {
    color: inherit; cursor: pointer; text-decoration: none;
  }
  @media screen {
    body { font-family: 'Poppins', sans-serif; }
  }
  @media only screen and (min-width: 768px) {
    .mlEmailContainer { width: 640px !important; }
  }
  @media only screen and (max-width: 640px) {
    .mlTemplateContainer { padding: 10px 10px 0 10px; }
    .mlContentCenter { min-width: 10% !important; margin: 0 !important; float: none !important; }
    .mlContentTable { width: 100% !important; min-width: 10% !important; margin: 0 !important; float: none !important; }
    .mlContentBlock { display: block !important; width: 100% !important; min-width: 10% !important; margin: 0 !important; float: none !important; }
    .mlContentImage img { height: auto !important; width: 100% !important; }
    .mlContentButton a { display: block !important; width: auto !important; }
    .mobileHide { display: none !important; }
    .mobileShow { display: block !important; }
    .alignCenter { height: auto !important; text-align: center !important; }
    .marginBottom { margin-bottom: 15px !important; }
  }
`;
