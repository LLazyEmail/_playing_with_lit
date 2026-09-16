# Zurb / Foundation for Emails 2 — zone map

Source: `reference/zurb.html`.

This is **not** a Hacker Noon campaign. It is a Foundation for Emails 2 announcement
(Inky/Zurb table layout, purple `#232547` body, footer background image from Campaign Monitor).
Zones below are named for what they are in this file, not for HN/Mailchimp section names.

## Document chrome

The file is a nested HTML document: an outer `lang=en` page whose `<body>` contains a second
XHTML-strict document (`xmlns`, `table.body`, `center`, `table.container` at 580px).

- Outer `<title>`: `Foundation for Emails 2 is Here! 🐙`
- Inner body background: `#232547` + `footer-background.jpg`
- Responsive CSS lives in a `<style>` inside the inner body (Foundation ink breakpoints at 596px)

## Zones (top → bottom)

| Zone (this template) | Markup cue | Dynamic vs static |
|---|---|---|
| **Masthead** | `table.row.header`, Foundation logo / wordmark | Logo URL + home link are data (`ImageRef` + `Link`). Visual table stays Zurb-only. |
| **Title block** | `.title-heading` / `.title-subheading` | `title` + `preheaderText` / subheading. |
| **Hero** | heading `Foundation for Emails 2` + supporting copy | Hero headline + body paragraph are data. Surrounding Inky columns stay static. |
| **Primary CTA** | `table.button.large` | `ctaLabel` + `ctaUrl` (`Link`). |
| **Feature callouts** | `.feature-callout` × 3 (`large-4` columns) | List of `{ title, body }` items. Column chrome is static. |
| **Footer** | `table.row.footer` | `year` + optional unsubscribe `Link`. No HN copyright block. |

## What is not a zone mapping

Do not reuse `hackernoon/sections/footer.section.ts` or Mailchimp footer columns.
The footer here is a Foundation `row` on a dark background. Same English word, different design.

## Sample campaign values (from the source file)

- title: `Foundation for Emails 2 is Here! 🐙`
- hero heading: `Foundation for Emails 2`
- years present in the file: 2013, 2014, 2019 (treat footer year as data; default 2019)
- no Mailchimp `mcnPreviewText` preheader; use the title-subheading as `preheaderText`
