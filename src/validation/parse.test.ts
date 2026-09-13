import { describe, expect, it } from 'vitest';
import { hackernoonData } from '../scripts/content/hackernoon-data.js';
import { nomoretogoData } from '../scripts/content/nomoretogo-data.js';
import { mailchimpData } from '../scripts/content/mailchimp-data.js';
import {
  EmailDataValidationError,
  emailDataSchema,
  hackernoonEmailDataSchema,
  mailchimpEmailDataSchema,
  nomoretogoEmailDataSchema,
  parseEmailData,
} from './index.js';

describe('parseEmailData', () => {
  it('accepts the Hacker Noon fixture', () => {
    expect(parseEmailData(hackernoonEmailDataSchema, hackernoonData, 'Hacker Noon')).toEqual(
      hackernoonData
    );
  });

  it('accepts the No More To-Go fixture', () => {
    expect(
      parseEmailData(nomoretogoEmailDataSchema, nomoretogoData, 'No More To-Go')
    ).toEqual(nomoretogoData);
  });

  it('accepts the Mailchimp fixture', () => {
    expect(
      parseEmailData(mailchimpEmailDataSchema, mailchimpData, 'Mailchimp')
    ).toEqual(mailchimpData);
  });

  it('throws an actionable error when a required field is missing', () => {
    expect(() =>
      parseEmailData(
        hackernoonEmailDataSchema,
        { title: 'ok', year: 2021 },
        'Hacker Noon'
      )
    ).toThrow(EmailDataValidationError);

    try {
      parseEmailData(
        hackernoonEmailDataSchema,
        { title: 'ok', year: 2021 },
        'Hacker Noon'
      );
    } catch (error) {
      expect(error).toBeInstanceOf(EmailDataValidationError);
      const message = (error as Error).message;
      expect(message).toContain('Invalid Hacker Noon email data');
      expect(message).toContain('preheaderText');
    }
  });

  it('rejects an empty brandName on the generic newsletter schema', () => {
    expect(() =>
      parseEmailData(
        emailDataSchema,
        {
          recipientName: 'A',
          brandName: '',
          logoUrl: 'https://example.com/logo.png',
          heroSubtitle: 'Hi',
          bodyText: 'Body',
          ctaLabel: 'Go',
          ctaUrl: 'https://example.com',
          articles: [],
          year: 2026,
          unsubscribeUrl: 'https://example.com/unsub',
          privacyUrl: 'https://example.com/privacy',
          contactUrl: 'https://example.com/contact',
        },
        'newsletter'
      )
    ).toThrow(/brandName/);
  });
});
