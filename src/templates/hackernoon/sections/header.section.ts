import { html, TemplateResult } from 'lit';
import type { HackernoonEmailData } from '../types.js';
import { BRIDGECREW_LOGO_URL, BRIDGECREW_SPONSOR_URL, HACKERNOON_MEMES_URL } from '../constants.js';

/**
 * Renders the sponsor card and main article body row
 * (maps to the `templateHeader` section).
 *
 * Contains:
 *  - Bridgecrew sponsor card with logo and tagline
 *  - Main article headline (`data.title`)
 *  - Article body sections (DevOps secrets: 4 key points)
 *  - Closing sponsor card
 *
 * @param data.title - The article headline rendered as an `<h1>`.
 */
export function renderHeaderSection(
  data: Pick<HackernoonEmailData, 'title'>
): TemplateResult {
  return html`
                                <td valign="top" id="templateHeader" style="background:#ffffff none no-repeat center/cover;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;background-color: #ffffff;background-image: none;background-repeat: no-repeat;background-position: center;background-size: cover;border-top: 0;border-bottom: 0;padding-top: 9px;padding-bottom: 0;"><table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnImageCardBlock" style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
    <tbody class="mcnImageCardBlockOuter">
        <tr>
            <td class="mcnImageCardBlockInner" valign="top" style="padding-top: 9px;padding-right: 18px;padding-bottom: 9px;
            padding-left: 18px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">

<table border="0" cellpadding="0" cellspacing="0" class="mcnImageCardRightContentOuter" width="100%"
style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
    <tbody><tr>
        <td align="center" valign="top" class="mcnImageCardRightContentInner" style="padding: 0;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
            <table align="left" border="0" cellpadding="0" cellspacing="0"
            class="mcnImageCardRightImageContentContainer" width="200" style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                <tbody><tr>
                    <td class="mcnImageCardRightImageContent" align="center" valign="top"
                    style="padding-top: 18px;padding-right: 0;padding-bottom: 18px;padding-left: 18px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                        <a href="${BRIDGECREW_SPONSOR_URL}" title="" class="" target="_blank"
                        style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                        <img alt="" src="${BRIDGECREW_LOGO_URL}"
                        width="150" style="max-width: 150px;border-radius: 0%;border: 0;height: auto;outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;vertical-align: bottom;" class="mcnImage">
                        </a>
                    </td>
                </tr>
            </tbody></table>
            <table class="mcnImageCardRightTextContentContainer" align="right" border="0" cellpadding="0" cellspacing="0" width="346"
            style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                <tbody><tr>
                    <td valign="top" class="mcnTextContent" style="padding-right: 18px;padding-top: 18px;padding-bottom: 18px;color: #F2F2F2;font-family: Helvetica;font-size: 14px;font-weight: normal;text-align: center;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;word-break: break-word;line-height: 150%;">
                        <h1 class="mc-toc-title" style="text-align: center;display: block;margin: 0;padding: 0;color: #111111;font-family: 'Merriweather Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size: 26px;font-style: normal;font-weight: bold;line-height: 125%;letter-spacing: normal;"><br>
                          <a href="${BRIDGECREW_SPONSOR_URL}" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #111111;font-weight: bold;text-decoration: underline;">
                            <strong id="docs-inte">The security-as-code platform for developers</strong></a>
                          </h1>
                    </td>
                </tr>
            </tbody></table>
        </td>
    </tr>
</tbody></table>

            </td>
        </tr>
    </tbody>
</table><table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnDividerBlock" style="min-width: 100%;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;table-layout: fixed !important;">
    <tbody class="mcnDividerBlockOuter">
        <tr>
            <td class="mcnDividerBlockInner" style="min-width: 100%;padding: 12px 18px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                <table class="mcnDividerContent" border="0" cellpadding="0" cellspacing="0" width="100%" style="min-width: 100%;border-top: 2px none #EAEAEA;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                    <tbody><tr>
                        <td style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                            <span></span>
                        </td>
                    </tr>
                </tbody></table>
            </td>
        </tr>
    </tbody>
</table><table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnTextBlock" style="min-width: 100%;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
    <tbody class="mcnTextBlockOuter">
        <tr>
            <td valign="top" class="mcnTextBlockInner" style="padding-top: 9px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
              	<!--[if mso]>
				<table align="left" border="0" cellspacing="0" cellpadding="0" width="100%" style="width:100%;">
				<tr>
				<![endif]-->

				<!--[if mso]>
				<td valign="top" width="600" style="width:600px;">
				<![endif]-->
                <table align="left" border="0" cellpadding="0" cellspacing="0" style="max-width: 100%;min-width: 100%;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;" width="100%" class="mcnTextContentContainer">
                    <tbody><tr>
                        <td valign="top" class="mcnTextContent" style="padding: 0px 18px 9px;line-height: 150%;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;word-break: break-word;color: #111111;font-family: 'Source Sans Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size: 18px;text-align: left;">
                            <h1 class="null" dir="ltr" style="text-align: center;display: block;margin: 0;padding: 0;color: #111111;font-family: 'Merriweather Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size: 26px;font-style: normal;font-weight: bold;line-height: 125%;letter-spacing: normal;">${data.title}</h1>
                            <br>
                            <div dir="ltr" style="text-align: justify;"><span style="font-size:15px"><span style="font-family:trebuchet ms,lucida grande,lucida sans unicode,lucida sans,tahoma,sans-serif">Ultra-fast innovation holds the key for conglomerates like <a href="https://hackernoon.com/tagged/apple" target="_blank" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #0000EE ;font-weight: bold;text-decoration: underline;">Apple</a>, <a href="https://hackernoon.com/tagged/microsoft" target="_blank" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #0000EE ;font-weight: bold;text-decoration: underline;">Microsoft</a>, and <a href="https://hackernoon.com/tagged/china" target="_blank" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #0000EE ;font-weight: bold;text-decoration: underline;">Tencent</a> known as the pacesetters in the modern markets. However, they all <a href="https://hackernoon.com/how-to-reduce-software-development-costs-h3153t9u" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #0000EE;font-weight: bold;text-decoration: underline;">faced challenges</a> that are typical for established companies. For the most obvious examples, Laggard, tricky releases and a gap between dev and ops plugged them into implementing a <a href="https://hackernoon.com/how-to-make-a-devops-strategy-pk153uyb" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #0000EE;font-weight: bold;text-decoration: underline;">radical DevOps strategy</a>.</span></span></div>
                            <br>
                            <div dir="ltr" style="text-align: justify;"><span style="font-size:15px"><span style="font-family:trebuchet ms,lucida grande,lucida sans unicode,lucida sans,tahoma,sans-serif">Before <a href="https://hackernoon.com/how-the-devops-model-redefines-qa-best-practices-8f1t3t7u" target="_blank" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #0000EE ;font-weight: bold;text-decoration: underline;">Superman aka DevOps</a> came on stage, organizations used to have walled-off teams that had little to no idea of what was going on at other departments.  As a result, developers would spend several months' worth of work and pass their <a href="https://hackernoon.com/how-the-devops-model-redefines-qa-best-practices-8f1t3t7u" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #0000EE;font-weight: bold;text-decoration: underline;">code on to QA</a>. Guess what came next? Yep, <a href="https://hackernoon.com/how-goji-investments-enhances-developer-experience-via-observability-641f3w2q" target="_blank" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #0000EE ;font-weight: bold;text-decoration: underline;">bugs, bugs, and...lots of bugs</a>. Surely, that classic cop-out "It works fine on my computer" was a <a href="https://hackernoon.com/a-z-of-devops-managing-multiple-environments-with-the-help-of-these-tools-n6x3thm" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #0000EE;font-weight: bold;text-decoration: underline;"> go-to for developers</a>. As for Ops, they would <a href="https://hackernoon.com/4-skills-you-need-to-become-a-distinguished-developer-ly2d3tjl" target="_blank" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #0000EE ;font-weight: bold;text-decoration: underline;">get the same lame code</a> lame code, swallow their pride, and <a href="https://hackernoon.com/9-functional-programming-concepts-everyone-should-know-uy503u21" target="_blank" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #0000EE ;font-weight: bold;text-decoration: underline;">clean up the mess</a>.</span></span></div>
                            <br>
                            <div dir="ltr" style="text-align: center;"><span style="font-family:georgia,times,times new roman,serif"><span style="font-size:17px"><a href="https://hackernoon.com/10-best-object-oriented-online-programming-and-design-courses-2020-updated-wv83uff" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #111111;font-weight: bold;text-decoration: underline;"><img data-file-id="1168" alt="" height="220" src="${HACKERNOON_MEMES_URL}image4.gif" style="border: 0px initial;width: 220px;height: 220px;margin: 0px;outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;" width="220"></a></span></span></div>
                            <br>
                            <div dir="ltr" style="text-align: justify;"><span style="font-size:15px"><span style="font-family:trebuchet ms,lucida grande,lucida sans unicode,lucida sans,tahoma,sans-serif">Luckily, we have the <a href="https://hackernoon.com/the-highest-paying-jobs-in-america-dlj3uaw" target="_blank" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #0000EE ;font-weight: bold;text-decoration: underline;">DevOps</a> approach that allows companies to keep the <a href="https://hackernoon.com/10-best-object-oriented-online-programming-and-design-courses-2020-updated-wv83uff" target="_blank" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #0000EE ;font-weight: bold;text-decoration: underline;">delivery process</a> in full gear and improve products at a <a href="https://hackernoon.com/10-best-object-oriented-online-programming-and-design-courses-2020-updated-wv83uff" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #0000EE;font-weight: bold;text-decoration: underline;">supersonic speed</a>. However, implementing a DevOps philosophy is not enough. Only <a href="https://hackernoon.com/rework-costs-your-company-millions-how-to-cut-back-nwq3wdv" target="_blank" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #0000EE ;font-weight: bold;text-decoration: underline;">high-performing DevOps teams</a> that have mastered some key capabilities can <a href="https://hackernoon.com/tagged/jfrog" target="_blank" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #0000EE ;font-weight: bold;text-decoration: underline;">deliver faster</a>, more accurately, and with <a href="https://hackernoon.com/data-persistent-prometheus-grafana-intergration-with-jenkins-5d263uvv" target="_blank" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #0000EE ;font-weight: bold;text-decoration: underline;">less downtime</a>. We have curated some secrets that differentiate <a href="https://hackernoon.com/ryan-dawson-on-open-source-tools-and-mlops-a-noonie-nom-interview-1hcy3u7x" target="_blank" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #0000EE ;font-weight: bold;text-decoration: underline;">DevOps leaders from laggards</a>.</span></span></div>

                            <br>
                            <div dir="ltr" style="text-align: center;"><span style="font-family:georgia,times,times new roman,serif"><span style="font-size:17px"><a href="https://hackernoon.com/how-to-build-an-effective-and-sustainable-on-call-schedule-for-your-team-3p11a3txy" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #111111;font-weight: bold;text-decoration: underline;"><img data-file-id="101168" alt="" height="220" src="${HACKERNOON_MEMES_URL}image1.gif" style="border: 0px initial;width: 220px;height: 220px;margin: 0px;outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;" width="220"></a></span></span></div>

                        </td>
                    </tr>
                </tbody></table>
				<!--[if mso]>
				</td>
				<![endif]-->

				<!--[if mso]>
				</tr>
				</table>
				<![endif]-->
            </td>
        </tr>
    </tbody>

</table><table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnTextBlock" style="min-width: 100%;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
    <tbody class="mcnTextBlockOuter">
        <tr>
            <td valign="top" class="mcnTextBlockInner" style="padding-top: 9px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
              	<!--[if mso]>
				<table align="left" border="0" cellspacing="0" cellpadding="0" width="100%" style="width:100%;">
				<tr>
				<![endif]-->

				<!--[if mso]>
				<td valign="top" width="600" style="width:600px;">
				<![endif]-->
                <table align="left" border="0" cellpadding="0" cellspacing="0" style="max-width: 100%;min-width: 100%;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;" width="100%" class="mcnTextContentContainer">
                    <tbody><tr>

                        <td valign="top" class="mcnTextContent" style="padding: 0px 18px 9px;line-height: 150%;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;word-break: break-word;color: #111111;font-family: 'Source Sans Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size: 18px;text-align: left;">

                              <h2 dir="ltr" style="text-align: left;display: block;margin: 0;padding: 0;color: #202020;font-family: Helvetica;font-size: 22px;font-style: normal;font-weight: bold;line-height: 125%;letter-spacing: normal;"><span style="font-family:trebuchet ms,lucida grande,lucida sans unicode,lucida sans,tahoma,sans-serif"><span style="font-size:18px"><strong id="docs-internal-guid-ad61fada-7fff-b292-7d14-a7cfddaa65b1">Going beyond the average drivers</strong></span></span></h2>
                              <br>
                              <div dir="ltr" style="text-align: justify;"><span style="font-size:15px"><span style="font-family:trebuchet ms,lucida grande,lucida sans unicode,lucida sans,tahoma,sans-serif"> <a href="https://hackernoon.com/kubernetes-monitoring-with-prometheus-and-thanos-z91w3uc2" target="_blank" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #0000EE ;font-weight: bold;text-decoration: underline;">Finger-pointing generates gridlocks</a> that hamper innovation. In the world of <a href="https://hackernoon.com/5-easy-ways-software-development-managers-can-turn-their-1-on-1s-reports-into-success-w3173wxy" target="_blank" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #0000EE ;font-weight: bold;text-decoration: underline;">Agile workflow</a> and SaaS products, you don't stand a chance unless you know and use the secrets of <a href="https://hackernoon.com/effective-ways-to-get-more-out-of-vessel-framework-slv3tci" target="_blank" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #0000EE ;font-weight: bold;text-decoration: underline;">high-performing DevOps teams</a>.</span></span></div>
                              <br>

                              <h2 dir="ltr" style="text-align: left;display: block;margin: 0;padding: 0;color: #202020;font-family: Helvetica;font-size: 22px;font-style: normal;font-weight: bold;line-height: 125%;letter-spacing: normal;"><span style="font-family:trebuchet ms,lucida grande,lucida sans unicode,lucida sans,tahoma,sans-serif"><span style="font-size:18px"><strong id="docs-inte-a7cfddaa65b1">1.  <a href="https://hackernoon.com/how-to-build-an-effective-and-sustainable-on-call-schedule-for-your-team-3p11a3txy" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #0000EE;font-weight: bold;text-decoration: underline;"> Top-performing teams </a> release faster without sacrificing quality</strong></span></span></h2>

                              <br>
                              <div dir="ltr" style="text-align: justify;"><span style="font-size:15px"><span style="font-family:trebuchet ms,lucida grande,lucida sans unicode,lucida sans,tahoma,sans-serif">Successful dev teams release software to production multiple times a week, whereas low-performing crews do the same closer to <a href="https://hackernoon.com/ori-keren-got-busy-doing-very-important-work-on-his-new-personal-computer-8yy3t7f" target="_blank" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #0000EE ;font-weight: bold;text-decoration: underline;">once a month</a>. High velocity is a crucial factor since it leaves more time to <a href="https://hackernoon.com/getting-started-with-api-testing-801n3u5u" target="_blank" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #0000EE ;font-weight: bold;text-decoration: underline;">hypothesize, act, and get user feedback</a>. Dev crews that <a href="https://hackernoon.com/ryan-dawson-on-open-source-tools-and-mlops-a-noonie-nom-interview-1hcy3u7x" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #0000EE;font-weight: bold;text-decoration: underline;"> deliver top-grade code</a> regularly are able to perform on a more effective learning loop.</span></span></div>
                              <br>

                              <h2 dir="ltr" style="text-align: left;display: block;margin: 0;padding: 0;color: #202020;font-family: Helvetica;font-size: 22px;font-style: normal;font-weight: bold;line-height: 125%;letter-spacing: normal;"><span style="font-family:trebuchet ms,lucida grande,lucida sans unicode,lucida sans,tahoma,sans-serif"><span style="font-size:18px"><strong id="docfff-b292">2.  They fetch and finetune UX at the initial stages</strong></span></span></h2>

                              <br>
                              <div dir="ltr" style="text-align: justify;"><span style="font-size:15px"><span style="font-family:trebuchet ms,lucida grande,lucida sans unicode,lucida sans,tahoma,sans-serif">Big power teams tend to weave quality into all phases of the <a href="https://hackernoon.com/automation-testing-with-selenium-cucumber-tool-and-testng-q8e3uu4" target="_blank" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #0000EE ;font-weight: bold;text-decoration: underline;">software delivery lifecycle</a>.  Therefore, they outline and test UX early in the development. This allows <a href="https://hackernoon.com/false-positives-are-considered-enemies-but-can-they-be-your-friends-aj1x3wmk" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #0000EE;font-weight: bold;text-decoration: underline;">perfecting the solution</a> solution and staying au courant with <a href="https://hackernoon.com/why-data-quality-is-key-to-successful-ml-ops-e61v3tle" target="_blank" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #0000EE ;font-weight: bold;text-decoration: underline;">user objectives</a>. <a href="https://hackernoon.com/will-microsofts-project-xcloud-fail-like-stadia-ss4s3t8l" target="_blank" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #0000EE ;font-weight: bold;text-decoration: underline;">High-performance teams</a> also tend to include nonfunctional requirements into user stories during the early stages.</span></span></div>
                              <br>
                              <div dir="ltr" style="text-align: center;"><span style="font-family:georgia,times,times new roman,serif"><span style="font-size:17px"><a href="https://hackernoon.com/7-best-devops-security-practices-devsecops-and-its-merits-mr2p3unk" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #111111;font-weight: bold;text-decoration: underline;"><img data-file-id="1041168" alt="" height="220" src="${HACKERNOON_MEMES_URL}image3.gif" style="border: 0px initial;width: 220px;height: 220px;margin: 0px;outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;" width="220"></a></span></span></div>

                        </td>
                    </tr>
                </tbody></table>
				<!--[if mso]>
				</td>
				<![endif]-->

				<!--[if mso]>
				</tr>
				</table>
				<![endif]-->
            </td>
        </tr>
        <tr>
            <td valign="top" class="mcnTextBlockInner" style="padding-top: 9px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                <!--[if mso]>
        <table align="left" border="0" cellspacing="0" cellpadding="0" width="100%" style="width:100%;">
        <tr>
        <![endif]-->

        <!--[if mso]>
        <td valign="top" width="600" style="width:600px;">
        <![endif]-->
                <table align="left" border="0" cellpadding="0" cellspacing="0" style="max-width: 100%;min-width: 100%;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;" width="100%" class="mcnTextContentContainer">
                    <tbody><tr>

                        <td valign="top" class="mcnTextContent" style="padding: 0px 18px 9px;line-height: 150%;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;word-break: break-word;color: #111111;font-family: 'Source Sans Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size: 18px;text-align: left;">

                                        <h2 dir="ltr" style="text-align: left;display: block;margin: 0;padding: 0;color: #202020;font-family: Helvetica;font-size: 22px;font-style: normal;font-weight: bold;line-height: 125%;letter-spacing: normal;"><span style="font-family:trebuchet ms,lucida grande,lucida sans unicode,lucida sans,tahoma,sans-serif"><span style="font-size:18px"><strong id="doc5b1">3. They focus on relevant tasks</strong></span></span></h2>

                                        <br>
                                        <div dir="ltr" style="text-align: justify;"><span style="font-size:15px"><span style="font-family:trebuchet ms,lucida grande,lucida sans unicode,lucida sans,tahoma,sans-serif">All too often, full-gear <a href="https://hackernoon.com/7-best-devops-security-practices-devsecops-and-its-merits-mr2p3unk" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #0000EE;font-weight: bold;text-decoration: underline;">software delivery</a> means partaking in side tasks. Just imagine: developers can allocate from two to four hours per week to building <a href="https://hackernoon.com/data-persistent-prometheus-grafana-intergration-with-jenkins-5d263uvv" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #0000EE;font-weight: bold;text-decoration: underline;">higher-quality</a> new features, cutting on <a href="https://hackernoon.com/getting-started-with-api-testing-801n3u5u" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #0000EE;font-weight: bold;text-decoration: underline;">technical debt</a>, and <a href="https://hackernoon.com/rework-costs-your-company-millions-how-to-cut-back-nwq3wdv" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #0000EE;font-weight: bold;text-decoration: underline;">enhancing the processes</a> With that said, it's not surprising that <a href="https://hackernoon.com/3-reasons-why-teams-fail-avx3ta7" target="_blank" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #0000EE ;font-weight: bold;text-decoration: underline;">unlike mediocre-performing teams</a>, <a href="https://www.hackernoon.com/artifactory-a-great-devops-tool-that-will-help-you-release-at-the-speed-of-light-b61l3wy8" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #0000EE;font-weight: bold;text-decoration: underline;">leading DevOps</a> spend 5% to 10% less time on side tasks like administration and allot more time to actually <a href="https://hackernoon.com/automation-testing-with-selenium-cucumber-tool-and-testng-q8e3uu4" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #0000EE;font-weight: bold;text-decoration: underline;">performing tests</a>.</span></span></div>
                                        <br>

                                        <h2 dir="ltr" style="text-align: left;display: block;margin: 0;padding: 0;color: #202020;font-family: Helvetica;font-size: 22px;font-style: normal;font-weight: bold;line-height: 125%;letter-spacing: normal;"><span style="font-family:trebuchet ms,lucida grande,lucida sans unicode,lucida sans,tahoma,sans-serif"><span style="font-size:18px"><strong id="do5b1">4. They fetch UI feedback earlier</strong></span></span></h2>

                                        <br>
                                        <div dir="ltr" style="text-align: justify;"><span style="font-size:15px"><span style="font-family:trebuchet ms,lucida grande,lucida sans unicode,lucida sans,tahoma,sans-serif"> <a href="https://hackernoon.com/heres-why-you-should-take-the-aws-certified-cloud-practitioner-exam-25473tsh" target="_blank" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #0000EE ;font-weight: bold;text-decoration: underline;">High-performing squads</a> are more likely to implement early UI feedback than their straggling colleagues. This allows teams to step back and reflect on the code's impact on the <a href="https://hackernoon.com/introducing-my-new-app-journey-with-heroku-ww1d3tv5" target="_blank" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #0000EE ;font-weight: bold;text-decoration: underline;">user experience</a>. As a result, <a href="https://hackernoon.com/how-goji-investments-enhances-developer-experience-via-observability-641f3w2q" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #0000EE;font-weight: bold;text-decoration: underline;">developers get a chance </a> to act on a more <a href="https://hackernoon.com/how-to-reduce-software-development-costs-h3153t9u" target="_blank" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #0000EE ;font-weight: bold;text-decoration: underline;">foolproof release process</a>. </span></span></div>
                                        <br>
                                        <div dir="ltr" style="text-align: center;"><span style="font-size:15px">
                                          <span style="font-family:trebuchet ms,lucida grande,lucida sans unicode,lucida sans,tahoma,sans-serif">
                                            <em>
                                            Join us to welcome today newsletter's sponsor - <a href="${BRIDGECREW_SPONSOR_URL}" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #0000EE;font-weight: bold;text-decoration: underline;">Bridgecrew</a>. <a href="${BRIDGECREW_SPONSOR_URL}" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #0000EE;font-weight: bold;text-decoration: underline;">Bridgecrew</a> is changing the way teams secure their cloud infrastructure. Our platform leverages automation and delivers policy-as-code to streamline security from commit to cloud.
                                            </em>
                                          </span>
                                          </span>
                                          </div>
                                        <br>
                                        <div dir="ltr" style="text-align: center;"><span style="font-family:georgia,times,times new roman,serif"><span style="font-size:17px"><a href="https://hackernoon.com/are-you-telling-the-story-of-your-software-mc133w92" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #111111;font-weight: bold;text-decoration: underline;"><img data-file-id="1041168" alt="" height="220" src="${HACKERNOON_MEMES_URL}image2.gif"  style="border: 0px initial;width: 220px;height: 220px;margin: 0px;outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;" width="220"></a></span></span></div>

                        </td>
                    </tr>
                </tbody></table>
        <!--[if mso]>
        </td>
        <![endif]-->

        <!--[if mso]>
        </tr>
        </table>
        <![endif]-->
            </td>
        </tr>
        <tr>
            <td valign="top" class="mcnTextBlockInner" style="padding-top: 9px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                <!--[if mso]>
        <table align="left" border="0" cellspacing="0" cellpadding="0" width="100%" style="width:100%;">
        <tr>
        <![endif]-->

        <!--[if mso]>
        <td valign="top" width="600" style="width:600px;">
        <![endif]-->
                <table align="left" border="0" cellpadding="0" cellspacing="0" style="max-width: 100%;min-width: 100%;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;" width="100%" class="mcnTextContentContainer">
                    <tbody><tr>

                        <td valign="top" class="mcnTextContent" style="padding: 0px 18px 9px;line-height: 150%;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;word-break: break-word;color: #111111;font-family: 'Source Sans Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size: 18px;text-align: left;">

                            <h2 dir="ltr" style="text-align: left;display: block;margin: 0;padding: 0;color: #202020;font-family: Helvetica;font-size: 22px;font-style: normal;font-weight: bold;line-height: 125%;letter-spacing: normal;"><span style="font-family:trebuchet ms,lucida grande,lucida sans unicode,lucida sans,tahoma,sans-serif"><span style="font-size:18px"><strong id="docs-internal-guid-ad61fada-7fff-b292-7d14-a7cfddaa65b1">Your team can do it</strong></span></span></h2>
                            <br>
                            <div dir="ltr" style="text-align: justify;"><span style="font-size:15px"><span style="font-family:trebuchet ms,lucida grande,lucida sans unicode,lucida sans,tahoma,sans-serif">In the long run, <a href="https://hackernoon.com/aws-vs-azure-key-differences-and-business-benefits-8h1a3u3l" target="_blank" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #0000EE ;font-weight: bold;text-decoration: underline;">high-performance teams</a> are able to <a href="https://hackernoon.com/are-you-telling-the-story-of-your-software-mc133w92" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #0000EE;font-weight: bold;text-decoration: underline;">update the software</a> every few days, because they aren't knee-deep in overhead tasks. Instead, they spend more time on actual, <a href="https://www.hackernoon.com/artifactory-a-great-devops-tool-that-will-help-you-release-at-the-speed-of-light-b61l3wy8" target="_blank" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #0000EE ;font-weight: bold;text-decoration: underline;">performance-changing tasks</a> like early user feedback and surefire hypothesis. Keeping your team in the third gear is possible if they engraft <a href="https://hackernoon.com/full-stack-coders-vs-devops-developers-whom-to-hire-for-your-next-project-1ik3xoc" target="_blank" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #0000EE ;font-weight: bold;text-decoration: underline;">fast feedback loops</a> loops across the <a href="https://hackernoon.com/u/patrickleet" target="_blank" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #0000EE ;font-weight: bold;text-decoration: underline;">development cycle</a>. This will ensure your teams get a leg up in the competitive tech market. Stay tuned for part 2 of our top secrets for DevOps teams.</span></span></div>
                            <br>
                            <div dir="ltr" style="text-align: center;"><span style="font-family:georgia,times,times new roman,serif"><span style="font-size:17px"><a href="https://media.giphy.com/media/cEYFeE4wJ6jdDVBiiIM/giphy-downsized.gif" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #111111;font-weight: bold;text-decoration: underline;"><img data-file-id="1041168" alt="" height="220" src="${HACKERNOON_MEMES_URL}image5.gif" style="border: 0px initial;width: 220px;height: 220px;margin: 0px;outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;" width="220"></a></span></span></div>
                            <br>
                            <div dir="ltr" style="text-align:  center;"><span style="font-size:15px"><span style="font-family:trebuchet ms,lucida grande,lucida sans unicode,lucida sans,tahoma,sans-serif">***</span></span></div>
                            <br>
                            <div dir="ltr" style="text-align: justify;"><span style="font-size:15px"><span style="font-family:trebuchet ms,lucida grande,lucida sans unicode,lucida sans,tahoma,sans-serif"><a href="https://hackernoon.com/signup" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #0000EE;font-weight: bold;text-decoration: underline;">Got a tech story to share with our readers?</a> Everything you've ever wanted to know about how to get published on Hacker Noon - <a href="https://sponsor.hackernoon.com/blog/guide-to-guest-post-on-hacker-noon" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #0000EE;font-weight: bold;text-decoration: underline;">get it here</a>.</span></span></div>
                            <br>
                            <div dir="ltr" style="text-align: center;"><span style="font-family:georgia,times,times new roman,serif"><span style="font-size:17px"><a href="https://sponsor.hackernoon.com/blog/guide-to-guest-post-on-hacker-noon" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #111111;font-weight: bold;text-decoration: underline;"><img data-file-id="1041168" alt="" height="220" src="${HACKERNOON_MEMES_URL}image55.gif" style="border: 0px initial;width: 220px;height: 220px;margin: 0px;outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;" width="220"></a></span></span></div>

                        </td>
                    </tr>
                </tbody></table>
        <!--[if mso]>
        </td>
        <![endif]-->

        <!--[if mso]>
        </tr>
        </table>
        <![endif]-->
            </td>
        </tr>
    </tbody>
</table><table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnImageCardBlock" style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
    <tbody class="mcnImageCardBlockOuter">
        <tr>
            <td class="mcnImageCardBlockInner" valign="top" style="padding-top: 9px;padding-right: 18px;padding-bottom: 9px;padding-left: 18px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">

<table border="0" cellpadding="0" cellspacing="0" class="mcnImageCardRightContentOuter" width="100%" style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
    <tbody><tr>
        <td align="center" valign="top" class="mcnImageCardRightContentInner" style="padding: 0;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
            <table align="left" border="0" cellpadding="0" cellspacing="0" class="mcnImageCardRightImageContentContainer" width="200" style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                <tbody><tr>
                    <td class="mcnImageCardRightImageContent" align="center" valign="top" style="padding-top: 18px;padding-right: 0;padding-bottom: 18px;padding-left: 18px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                      <a href="${BRIDGECREW_SPONSOR_URL}" title="" class="" target="_blank"
                      style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                      <img alt="" src="${BRIDGECREW_LOGO_URL}"
                      width="150" style="max-width: 150px;border-radius: 0%;border: 0;height: auto;outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;vertical-align: bottom;" class="mcnImage">
                      </a>
                    </td>
                </tr>
            </tbody></table>
            <table class="mcnImageCardRightTextContentContainer" align="right" border="0" cellpadding="0" cellspacing="0" width="346" style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                <tbody><tr>
                    <td valign="top" class="mcnTextContent" style="padding-right: 18px;padding-top: 18px;padding-bottom: 18px;color: #F2F2F2;font-family: Helvetica;font-size: 14px;font-weight: normal;text-align: center;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;word-break: break-word;line-height: 150%;">
                        <h1 class="null" style="text-align: center;display: block;margin: 0;padding: 0;color: #111111;font-family: 'Merriweather Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size: 26px;font-style: normal;font-weight: bold;line-height: 125%;letter-spacing: normal;"><br>
<a href="${BRIDGECREW_SPONSOR_URL}" target="_blank" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #111111;font-weight: bold;text-decoration: underline;"><strong>The security-as-code platform for developers</strong></a></h1>
                    </td>
                </tr>
            </tbody></table>
        </td>
    </tr>
</tbody></table>

            </td>
        </tr>
    </tbody>
</table></td>
                            </tr>`;
}
