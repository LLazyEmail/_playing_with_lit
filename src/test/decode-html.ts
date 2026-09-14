/** Decode the entity forms Lit/minifiers emit so tests can assert readable copy. */
export function decodeHtml(html: string): string {
  return html
    .replace(/&#39;|&#x27;|&apos;/gi, "'")
    .replace(/&quot;|&#34;|&#x22;/gi, '"')
    .replace(/&amp;|&#38;|&#x26;/gi, '&')
    .replace(/&lt;|&#60;|&#x3c;/gi, '<')
    .replace(/&gt;|&#62;|&#x3e;/gi, '>')
    .replace(/&nbsp;|&#160;|&#xa0;/gi, ' ');
}
