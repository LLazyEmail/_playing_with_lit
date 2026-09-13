import { render } from '@lit-labs/ssr';
import { collectResultSync } from '@lit-labs/ssr/lib/render-result.js';
import type { TemplateResult } from 'lit';
import type { EmailData, HackernoonEmailData, NomoretogoEmailData, MailchimpEmailData } from './types.js';
import { EMAIL_STYLES } from './styles/email.styles.js';
import { NOMORETOGO_STYLES } from './styles/nomoretogo.styles.js';
import { MAILCHIMP_STYLES } from './styles/mailchimp.styles.js';

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
// Ported verbatim from the <style> block in reference/hackernoon.html
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
 * of the original `reference/hackernoon.html` reference file.
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
// Ported from the email-specific <style> block in reference/nomoretogo.html
// ---------------------------------------------------------------------------



// ---------------------------------------------------------------------------
// No More To-Go renderer
// ---------------------------------------------------------------------------

/**
 * Renders a Lit {@link TemplateResult} (the No More To-Go email body) to a
 * complete, email-client-compatible HTML string that matches the structure of
 * the original `reference/nomoretogo.html` reference file.
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

// ---------------------------------------------------------------------------
// Mailchimp-style product email styles
// Ported verbatim from the <style> block in reference/email-template-mailchimp (1).html
// ---------------------------------------------------------------------------



// ---------------------------------------------------------------------------
// Mailchimp-style product email renderer
// ---------------------------------------------------------------------------

/**
 * Renders a Lit {@link TemplateResult} (the Mailchimp-style email body) to a
 * complete, email-client-compatible HTML string.
 *
 * The document shell — DOCTYPE, meta tags, Google Fonts link, and the
 * Mailchimp-specific CSS — is built here rather than inside the Lit template
 * so the SSR parser only handles body content.
 *
 * @param template  Lit TemplateResult produced by {@link mailchimpEmailTemplate}.
 * @param data      Mailchimp email data (title used in the &lt;title&gt; tag).
 */
export function mailchimpRenderToString(
  template: TemplateResult,
  data: Pick<MailchimpEmailData, 'title'>
): string {
  const rawBodyContent = collectResultSync(render(template));
  // Strip Lit SSR hydration markers – not needed in email HTML.
  const bodyContent = stripLitMarkers(rawBodyContent);

  return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
  <head>
    <title>${data.title}</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <!--[if !mso]><!-->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:100,300,400" type="text/css" />
    <!--<![endif]-->
    <!--[if mso]>
    <style type="text/css">
      body, table, td { font-family: Arial, Helvetica, sans-serif !important; }
    </style>
    <![endif]-->
    <style type="text/css">${MAILCHIMP_STYLES}</style>
  </head>
  <body>
    ${bodyContent}
  </body>
</html>`;
}
