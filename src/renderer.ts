import { render } from '@lit-labs/ssr';
import { collectResultSync } from '@lit-labs/ssr/lib/render-result.js';
import type { TemplateResult } from 'lit';
import type { EmailData, HackernoonEmailData, NomoretogoEmailData } from './types.js';

// ---------------------------------------------------------------------------
// CSS shared by all newsletter emails
// ---------------------------------------------------------------------------

const EMAIL_STYLES = `
  body {
    margin: 0;
    padding: 0;
    font-family: Arial, Helvetica, sans-serif;
    background-color: #f4f4f4;
  }
  .email-wrapper {
    width: 100%;
    background-color: #f4f4f4;
    padding: 20px 0;
  }
  .email-container {
    max-width: 600px;
    margin: 0 auto;
    background-color: #ffffff;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
  /* Header */
  .header {
    background-color: #1a73e8;
    padding: 30px 40px;
    text-align: center;
  }
  .header img {
    max-width: 160px;
    height: auto;
  }
  .header h1 {
    color: #ffffff;
    font-size: 26px;
    margin: 16px 0 0;
    font-weight: 700;
    letter-spacing: 0.5px;
  }
  /* Hero */
  .hero {
    background-color: #e8f0fe;
    padding: 40px;
    text-align: center;
  }
  .hero h2 {
    color: #1a73e8;
    font-size: 22px;
    margin: 0 0 12px;
  }
  .hero p {
    color: #444444;
    font-size: 16px;
    line-height: 1.6;
    margin: 0;
  }
  /* Content */
  .content {
    padding: 40px;
  }
  .content h3 {
    color: #222222;
    font-size: 18px;
    margin: 0 0 12px;
  }
  .content p {
    color: #555555;
    font-size: 15px;
    line-height: 1.7;
    margin: 0 0 20px;
  }
  /* CTA Button */
  .cta-container {
    text-align: center;
    padding: 0 40px 40px;
  }
  .cta-button {
    display: inline-block;
    background-color: #1a73e8;
    color: #ffffff;
    text-decoration: none;
    padding: 14px 32px;
    border-radius: 4px;
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 0.5px;
  }
  /* Articles */
  .articles {
    padding: 0 40px 40px;
    border-top: 1px solid #eeeeee;
  }
  .articles h3 {
    color: #222222;
    font-size: 18px;
    margin: 30px 0 16px;
  }
  .article-item {
    display: flex;
    gap: 16px;
    margin-bottom: 24px;
  }
  .article-item img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 4px;
    flex-shrink: 0;
  }
  .article-item h4 {
    color: #1a73e8;
    font-size: 15px;
    margin: 0 0 6px;
  }
  .article-item h4 a {
    color: inherit;
    text-decoration: none;
  }
  .article-item p {
    color: #666666;
    font-size: 13px;
    line-height: 1.5;
    margin: 0;
  }
  /* Footer */
  .footer {
    background-color: #f8f8f8;
    padding: 24px 40px;
    text-align: center;
    border-top: 1px solid #eeeeee;
  }
  .footer p {
    color: #999999;
    font-size: 12px;
    line-height: 1.6;
    margin: 0 0 8px;
  }
  .footer a {
    color: #1a73e8;
    text-decoration: none;
  }
`;

// ---------------------------------------------------------------------------
// Renderer
// ---------------------------------------------------------------------------

/**
 * Renders a Lit {@link TemplateResult} (expected to be the email body content)
 * to a complete HTML email string.
 *
 * Internally uses `@lit-labs/ssr` so no browser DOM is required – this runs
 * entirely in Node.js, making it suitable for server-side email generation.
 *
 * @param template  Lit TemplateResult for the email body content.
 * @param data      Email data used to populate the document <head>.
 */
export function renderToString(
  template: TemplateResult,
  data: Pick<EmailData, 'brandName'>
): string {
  const rawBodyContent = collectResultSync(render(template));
  // Strip Lit SSR hydration markers – not needed in email HTML.
  const bodyContent = stripLitMarkers(rawBodyContent);

  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>${data.brandName} – Monthly Newsletter</title>
    <style>${EMAIL_STYLES}</style>
  </head>
  <body>
    ${bodyContent}
  </body>
</html>`;
}

/**
 * Removes Lit SSR hydration comment markers from an HTML string.
 * These are only useful for client-side hydration and should be stripped
 * before sending email.
 */
function stripLitMarkers(html: string): string {
  return html
    .replace(/<!--lit-part[^>]*-->/g, '')
    .replace(/<!--\/lit-part-->/g, '')
    .replace(/<!--lit-node[^>]*-->/g, '');
}

// ---------------------------------------------------------------------------
// Hacker Noon newsletter styles
// Ported verbatim from the <style> block in hackernoon.html
// ---------------------------------------------------------------------------

const HACKERNOON_STYLES = `
		p{
			margin:10px 0;
			padding:0;
		}
		table{
			border-collapse:collapse;
		}
		h1,h2,h3,h4,h5,h6{
			display:block;
			margin:0;
			padding:0;
		}
		img,a img{
			border:0;
			height:auto;
			outline:none;
			text-decoration:none;
		}
		body,#bodyTable,#bodyCell{
			height:100%;
			margin:0;
			padding:0;
			width:100%;
		}
		.mcnPreviewText{
			display:none !important;
		}
		#outlook a{
			padding:0;
		}
		img{
			-ms-interpolation-mode:bicubic;
		}
		table{
			mso-table-lspace:0pt;
			mso-table-rspace:0pt;
		}
		.ReadMsgBody{
			width:100%;
		}
		.ExternalClass{
			width:100%;
		}
		p,a,li,td,blockquote{
			mso-line-height-rule:exactly;
		}
		a[href^=tel],a[href^=sms]{
			color:inherit;
			cursor:default;
			text-decoration:none;
		}
		p,a,li,td,body,table,blockquote{
			-ms-text-size-adjust:100%;
			-webkit-text-size-adjust:100%;
		}
		.ExternalClass,.ExternalClass p,.ExternalClass td,.ExternalClass div,.ExternalClass span,.ExternalClass font{
			line-height:100%;
		}
		a[x-apple-data-detectors]{
			color:inherit !important;
			text-decoration:none !important;
			font-size:inherit !important;
			font-family:inherit !important;
			font-weight:inherit !important;
			line-height:inherit !important;
		}
		#bodyCell{
			padding:10px;
		}
		.templateContainer{
			max-width:600px !important;
		}
		a.mcnButton{
			display:block;
		}
		.mcnImage,.mcnRetinaImage{
			vertical-align:bottom;
		}
		.mcnTextContent{
			word-break:break-word;
		}
		.mcnTextContent img{
			height:auto !important;
		}
		.mcnDividerBlock{
			table-layout:fixed !important;
		}
		body,#bodyTable{
			background-color:#ffffff;
		}
		#bodyCell{
			border-top:0;
		}
		.templateContainer{
			border:0;
		}
		h1{
			color:#111111;
			font-family:'Merriweather Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
			font-size:26px;
			font-style:normal;
			font-weight:bold;
			line-height:125%;
			letter-spacing:normal;
			text-align:left;
		}
		h2{
			color:#202020;
			font-family:Helvetica;
			font-size:22px;
			font-style:normal;
			font-weight:bold;
			line-height:125%;
			letter-spacing:normal;
			text-align:left;
		}
		h3{
			color:#202020;
			font-family:Helvetica;
			font-size:20px;
			font-style:normal;
			font-weight:bold;
			line-height:125%;
			letter-spacing:normal;
			text-align:left;
		}
		h4{
			color:#202020;
			font-family:Helvetica;
			font-size:18px;
			font-style:normal;
			font-weight:bold;
			line-height:125%;
			letter-spacing:normal;
			text-align:left;
		}
		#templatePreheader{
			background-color:#ffffff;
			background-image:none;
			background-repeat:no-repeat;
			background-position:center;
			background-size:cover;
			border-top:0;
			border-bottom:0;
			padding-top:9px;
			padding-bottom:9px;
		}
		#templatePreheader .mcnTextContent,#templatePreheader .mcnTextContent p{
			color:#656565;
			font-family:Helvetica;
			font-size:12px;
			line-height:150%;
			text-align:left;
		}
		#templatePreheader .mcnTextContent a,#templatePreheader .mcnTextContent p a{
			color:#656565;
			font-weight:normal;
			text-decoration:underline;
		}
		#templateHeader{
			background-color:#ffffff;
			background-image:none;
			background-repeat:no-repeat;
			background-position:center;
			background-size:cover;
			border-top:0;
			border-bottom:0;
			padding-top:9px;
			padding-bottom:0;
		}
		#templateHeader .mcnTextContent,#templateHeader .mcnTextContent p{
			color:#111111;
			font-family:'Source Sans Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif;
			font-size:18px;
			line-height:150%;
			text-align:left;
		}
		#templateHeader .mcnTextContent a,#templateHeader .mcnTextContent p a{
			color:#111111;
			font-weight:bold;
			text-decoration:underline;
		}
		#templateBody{
			background-color:#ffffff;
			background-image:none;
			background-repeat:no-repeat;
			background-position:center;
			background-size:cover;
			border-top:0;
			border-bottom:4px solid #00ff00;
			padding-top:0;
			padding-bottom:9px;
		}
		#templateBody .mcnTextContent,#templateBody .mcnTextContent p{
			color:#111111;
			font-family:'Source Sans Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif;
			font-size:18px;
			line-height:150%;
			text-align:left;
		}
		#templateBody .mcnTextContent a,#templateBody .mcnTextContent p a{
			color:#111111;
			font-weight:bold;
			text-decoration:underline;
		}
		#templateFooter{
			background-color:#ffffff;
			background-image:none;
			background-repeat:no-repeat;
			background-position:center;
			background-size:cover;
			border-top:0;
			border-bottom:0;
			padding-top:9px;
			padding-bottom:9px;
		}
		#templateFooter .mcnTextContent,#templateFooter .mcnTextContent p{
			color:#656565;
			font-family:'Source Sans Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif;
			font-size:12px;
			line-height:150%;
			text-align:center;
		}
		#templateFooter .mcnTextContent a,#templateFooter .mcnTextContent p a{
			color:#656565;
			font-weight:normal;
			text-decoration:underline;
		}
	@media only screen and (min-width:768px){
		.templateContainer{
			width:600px !important;
		}

}	@media only screen and (max-width: 480px){
		body,table,td,p,a,li,blockquote{
			-webkit-text-size-adjust:none !important;
		}

}	@media only screen and (max-width: 480px){
		body{
			width:100% !important;
			min-width:100% !important;
		}

}	@media only screen and (max-width: 480px){
		.mcnRetinaImage{
			max-width:100% !important;
		}

}	@media only screen and (max-width: 480px){
		.mcnImage{
			width:100% !important;
		}

}	@media only screen and (max-width: 480px){
		.mcnCartContainer,.mcnCaptionTopContent,.mcnRecContentContainer,.mcnCaptionBottomContent,.mcnTextContentContainer,.mcnBoxedTextContentContainer,.mcnImageGroupContentContainer,.mcnCaptionLeftTextContentContainer,.mcnCaptionRightTextContentContainer,.mcnCaptionLeftImageContentContainer,.mcnCaptionRightImageContentContainer,.mcnImageCardLeftTextContentContainer,.mcnImageCardRightTextContentContainer,.mcnImageCardLeftImageContentContainer,.mcnImageCardRightImageContentContainer{
			max-width:100% !important;
			width:100% !important;
		}

}	@media only screen and (max-width: 480px){
		.mcnBoxedTextContentContainer{
			min-width:100% !important;
		}

}	@media only screen and (max-width: 480px){
		.mcnImageGroupContent{
			padding:9px !important;
		}

}	@media only screen and (max-width: 480px){
		.mcnCaptionLeftContentOuter .mcnTextContent,.mcnCaptionRightContentOuter .mcnTextContent{
			padding-top:9px !important;
		}

}	@media only screen and (max-width: 480px){
		.mcnImageCardTopImageContent,.mcnCaptionBottomContent:last-child .mcnCaptionBottomImageContent,.mcnCaptionBlockInner .mcnCaptionTopContent:last-child .mcnTextContent{
			padding-top:18px !important;
		}

}	@media only screen and (max-width: 480px){
		.mcnImageCardBottomImageContent{
			padding-bottom:9px !important;
		}

}	@media only screen and (max-width: 480px){
		.mcnImageGroupBlockInner{
			padding-top:0 !important;
			padding-bottom:0 !important;
		}

}	@media only screen and (max-width: 480px){
		.mcnImageGroupBlockOuter{
			padding-top:9px !important;
			padding-bottom:9px !important;
		}

}	@media only screen and (max-width: 480px){
		.mcnTextContent,.mcnBoxedTextContentColumn{
			padding-right:18px !important;
			padding-left:18px !important;
		}

}	@media only screen and (max-width: 480px){
		.mcnImageCardLeftImageContent,.mcnImageCardRightImageContent{
			padding-right:18px !important;
			padding-bottom:0 !important;
			padding-left:18px !important;
		}

}	@media only screen and (max-width: 480px){
		.mcpreview-image-uploader{
			display:none !important;
			width:100% !important;
		}

}	@media only screen and (max-width: 480px){
		h1{
			font-size:22px !important;
			line-height:125% !important;
		}

}	@media only screen and (max-width: 480px){
		h2{
			font-size:20px !important;
			line-height:125% !important;
		}

}	@media only screen and (max-width: 480px){
		h3{
			font-size:18px !important;
			line-height:125% !important;
		}

}	@media only screen and (max-width: 480px){
		h4{
			font-size:16px !important;
			line-height:150% !important;
		}

}	@media only screen and (max-width: 480px){
		.mcnBoxedTextContentContainer .mcnTextContent,.mcnBoxedTextContentContainer .mcnTextContent p{
			font-size:14px !important;
			line-height:150% !important;
		}

}	@media only screen and (max-width: 480px){
		#templatePreheader{
			display:block !important;
		}

}	@media only screen and (max-width: 480px){
		#templatePreheader .mcnTextContent,#templatePreheader .mcnTextContent p{
			font-size:14px !important;
			line-height:150% !important;
		}

}	@media only screen and (max-width: 480px){
		#templateHeader .mcnTextContent,#templateHeader .mcnTextContent p{
			font-size:16px !important;
			line-height:150% !important;
		}

}	@media only screen and (max-width: 480px){
		#templateBody .mcnTextContent,#templateBody .mcnTextContent p{
			font-size:16px !important;
			line-height:150% !important;
		}

}	@media only screen and (max-width: 480px){
		#templateFooter .mcnTextContent,#templateFooter .mcnTextContent p{
			font-size:14px !important;
			line-height:150% !important;
		}

}`;

// ---------------------------------------------------------------------------
// Hacker Noon renderer
// ---------------------------------------------------------------------------

/**
 * Renders a Lit {@link TemplateResult} (the Hacker Noon email body) to a
 * complete, email-client-compatible HTML string that matches the structure
 * of the original `hackernoon.html` reference file.
 *
 * The document shell is built here (DOCTYPE, xmlns attributes, MSO
 * conditionals, Google Fonts link, hackernoon-specific CSS) rather than
 * inside the Lit template so the SSR parser only handles body content.
 *
 * @param template  Lit TemplateResult produced by {@link hackernoonEmailTemplate}.
 * @param data      Hacker Noon email data (title used in the &lt;title&gt; tag).
 */
export function hackernoonRenderToString(
  template: TemplateResult,
  data: Pick<HackernoonEmailData, 'title'>
): string {
  const rawBodyContent = collectResultSync(render(template));
  // Strip Lit SSR hydration markers – not needed in email HTML.
  const bodyContent = stripLitMarkers(rawBodyContent);

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

// ---------------------------------------------------------------------------
// No More To-Go newsletter styles
// Ported from the email-specific <style> block in nomoretogo.html
// ---------------------------------------------------------------------------

const NOMORETOGO_STYLES = `
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

// ---------------------------------------------------------------------------
// No More To-Go renderer
// ---------------------------------------------------------------------------

/**
 * Renders a Lit {@link TemplateResult} (the No More To-Go email body) to a
 * complete, email-client-compatible HTML string that matches the structure of
 * the original `nomoretogo.html` reference file.
 *
 * The document shell — DOCTYPE, meta tags, Google Fonts link, and
 * nomoretogo-specific CSS — is built here rather than inside the Lit template
 * so the SSR parser only handles body content.
 *
 * @param template  Lit TemplateResult produced by {@link nomoretogoEmailTemplate}.
 * @param data      No More To-Go email data (title used in the &lt;title&gt; tag).
 */
export function nomoretogoRenderToString(
  template: TemplateResult,
  data: Pick<NomoretogoEmailData, 'title'>
): string {
  const rawBodyContent = collectResultSync(render(template));
  // Strip Lit SSR hydration markers – not needed in email HTML.
  const bodyContent = stripLitMarkers(rawBodyContent);

  return `<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 3.2//EN">
<html lang="en">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="format-detection" content="address=no">
    <meta name="format-detection" content="telephone=no">
    <meta name="format-detection" content="email=no">
    <meta name="x-apple-disable-message-reformatting">
    <title>${data.title}</title>
    <!--[if !mso]><!-->
    <style type="text/css">
      @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap");
    </style>
    <!--<![endif]-->
    <style type="text/css">${NOMORETOGO_STYLES}</style>
  </head>
  <body class="mlBodyBackground" style="padding:0;margin:0;-webkit-font-smoothing:antialiased;background-color:#f6f8f9;-webkit-text-size-adjust:none;">
    ${bodyContent}
  </body>
</html>`;
}
