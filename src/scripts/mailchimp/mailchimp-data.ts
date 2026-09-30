import type { MailchimpEmailData } from '../../types.js';

export const mailchimpData: MailchimpEmailData = {
  title: 'Summer Sale – Up to 40% Off Selected Products',
  preheaderText: 'Enim ad minim veniam, quis nostrud exercitation ullamco',
  viewInBrowserUrl: '#',
  brandName: 'Brandname',
  navLinks: [
    { label: 'Shop', url: '#' },
    { label: 'Sale', url: '#' },
    { label: 'New In', url: '#' },
    { label: 'Help', url: '#' },
  ],
  heroImageUrl: 'https://placehold.co/600x350',
  heroImageAlt: 'Summer Sale banner',
  contentHeading: 'Headline H1',
  contentBody:
    'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.',
  productRows: [
    [
      {
        imageUrl: 'https://placehold.co/264x264',
        imageAlt: 'Product one',
        meta: 'In Stock - 2-3 day delivery',
        title: 'Product Title',
        description: 'Collaboratively administrate em powered markets.',
        previousPrice: '$1599',
        price: '$1299',
        buyUrl: '#',
      },
      {
        imageUrl: 'https://placehold.co/264x264',
        imageAlt: 'Product two',
        meta: 'In Stock - 2-3 day delivery',
        title: 'Product Title',
        description: 'Collaboratively administrate em powered markets.',
        previousPrice: '$1599',
        price: '$1299',
        buyUrl: '#',
      },
    ],
    [
      {
        imageUrl: 'https://placehold.co/264x264',
        imageAlt: 'Product three',
        meta: 'In Stock - 2-3 day delivery',
        title: 'Product Title',
        description: 'Collaboratively administrate em powered markets.',
        previousPrice: '$1599',
        price: '$1299',
        buyUrl: '#',
      },
      {
        imageUrl: 'https://placehold.co/264x264',
        imageAlt: 'Product four',
        meta: 'In Stock - 2-3 day delivery',
        title: 'Product Title',
        description: 'Collaboratively administrate em powered markets.',
        previousPrice: '$1599',
        price: '$1299',
        buyUrl: '#',
      },
    ],
  ],
  footerColumns: [
    {
      title: 'Section Title',
      description:
        'Scelerisque congue eros eu posuere. Praesent in felis ut velit pretium lobortis rhoncus ut erat.',
    },
    {
      title: 'Section Title',
      description:
        'Scelerisque congue eros eu posuere. Praesent in felis ut velit pretium lobortis rhoncus ut erat.',
    },
    {
      title: 'Section Title',
      description:
        'Scelerisque congue eros eu posuere. Praesent in felis ut velit pretium lobortis rhoncus ut erat.',
    },
  ],
  companyName: 'Company Name A/S',
  companyAddress: '123 Example Street, City, Country',
  unsubscribeUrl: '#',
  updateProfileUrl: '#',
};
