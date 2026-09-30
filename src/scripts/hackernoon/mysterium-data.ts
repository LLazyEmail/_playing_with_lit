import type { HackernoonEmailData } from '../../types.js';

/**
 * Sample data for the Hacker Noon / Mysterium VPN-leak issue.
 *
 * Title and preheader come from `mysterium_1.html`.
 * Same `HackernoonEmailData` shape as `hackernoon-data.ts` — not a new template.
 */
export const mysteriumData: HackernoonEmailData = {
  title: 'VPNs Leaked 1.2TB of Your Data: Who Can You Even Trust?',
  preheaderText:
    '20 Million VPN users across seven different VPN services were compromised and had their data (including personally identifiable information) end up on the dark web. What do you make of this? Where do you go from here? Your average tech-bro (and a rapidly growing subset of tech-gals) advise using VPNs and the Tor Network to protect your privacy.',
  year: 2021,
};
