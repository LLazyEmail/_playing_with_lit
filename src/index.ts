/**
 * Entry point – renders the newsletter email template to an HTML file using
 * Lit's server-side rendering.
 *
 * Run:
 *   npm run render
 *
 * Output:
 *   dist/rendered-email.html
 */

import { writeFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

// Install a lightweight DOM shim so @lit-labs/ssr can run in Node.js
import '@lit-labs/ssr/lib/install-global-dom-shim.js';

import { newsletterEmailTemplate } from './templates/newsletter.js';
import { hackernoonEmailTemplate } from './templates/hackernoon.js';
import { renderToString, hackernoonRenderToString } from './renderer.js';
import type { EmailData, HackernoonEmailData } from './types.js';

// ---------------------------------------------------------------------------
// Sample data – swap these values for real subscriber / campaign data
// ---------------------------------------------------------------------------
const emailData: EmailData = {
  recipientName: 'John Doe',
  brandName: 'MyBrand',
  logoUrl: 'https://via.placeholder.com/160x40/ffffff/1a73e8?text=MyBrand',
  heroSubtitle:
    "Here's what's been happening at MyBrand this month — curated just for you.",
  bodyText:
    "We've rounded up the most interesting stories, product updates, and tips to keep you in the loop. Dive in and let us know what you think!",
  ctaLabel: 'Read the Full Issue',
  ctaUrl: 'https://example.com/newsletter',
  articles: [
    {
      imageUrl: 'https://via.placeholder.com/80x80/1a73e8/ffffff?text=1',
      imageAlt: 'Article 1',
      title: 'Getting Started with Lit Templates',
      excerpt:
        "Discover how Lit's simple and expressive templating system can supercharge your HTML workflows.",
      url: 'https://example.com/article-1',
    },
    {
      imageUrl: 'https://via.placeholder.com/80x80/34a853/ffffff?text=2',
      imageAlt: 'Article 2',
      title: 'Building Reactive UIs with Web Components',
      excerpt:
        'A deep dive into building performant and reusable UI elements using the Web Components standard.',
      url: 'https://example.com/article-2',
    },
    {
      imageUrl: 'https://via.placeholder.com/80x80/ea4335/ffffff?text=3',
      imageAlt: 'Article 3',
      title: 'Server-Side Rendering with @lit-labs/ssr',
      excerpt:
        'Learn how to pre-render Lit templates on the server for blazing fast initial page loads.',
      url: 'https://example.com/article-3',
    },
  ],
  year: new Date().getFullYear(),
  unsubscribeUrl: 'https://example.com/unsubscribe',
  privacyUrl: 'https://example.com/privacy',
  contactUrl: 'https://example.com/contact',
};

// ---------------------------------------------------------------------------
// Render – generic newsletter
// ---------------------------------------------------------------------------
const template = newsletterEmailTemplate(emailData);
const html = renderToString(template, emailData);

// Write output
const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, '..', 'dist');
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, 'rendered-email.html');
writeFileSync(outPath, html, 'utf-8');

console.log(`✅  Email rendered successfully → ${outPath}`);

// ---------------------------------------------------------------------------
// Hacker Noon newsletter data
// ---------------------------------------------------------------------------
const hackernoonData: HackernoonEmailData = {
  title: 'The Secrets of High-Performing DevOps teams',
  preheaderText:
    'Ultra-fast innovation holds the key for conglomerates like Apple, Microsoft, and Tencent, known as the pacesetters in the modern markets. However, they all faced challenges that are typical for established companies. For the most obvious examples, Laggard, tricky releases and a gap between dev and ops plugged them into implementing a radical DevOps strategy.',
  year: 2021,
};

// ---------------------------------------------------------------------------
// Render – Hacker Noon newsletter
// ---------------------------------------------------------------------------
const hackernoonTemplate = hackernoonEmailTemplate(hackernoonData);
const hackernoonHtml = hackernoonRenderToString(hackernoonTemplate, hackernoonData);

const hackernoonOutPath = join(outDir, 'rendered-hackernoon.html');
writeFileSync(hackernoonOutPath, hackernoonHtml, 'utf-8');

console.log(`✅  Hacker Noon email rendered successfully → ${hackernoonOutPath}`);
