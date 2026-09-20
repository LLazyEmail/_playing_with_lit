export interface GoogleEmailData {
  preheader: string;

  greeting: string;
  intro: string;

  order: {
    number: string;
    orderedAt: string;
    orderedFrom: string[];
    shippingAddress: string[];
  };

  progress: {
    orderedDate: string;
    shippedDate: string;
    deliveredDate: string;
  };

  item: {
    name: string;
    image: string;
    idNumber: string;
    price: string;
    quantity: number;
  };

  shipment: {
    carrier: string;
    trackingNumber: string;
    trackingUrl: string;
  };

  totals: {
    shipping: string;
    discount: string;
    tax: string;
    total: string;
  };

  payment: {
    method: string;
  };

  footer: {
    year: number;
    addressLine: string;
    copyright: string;
    links: {
      account: string;
      orderHistory: string;
      contactUs: string;
      termsOfSale: string;
      termsOfService: string;
    };
  };
}