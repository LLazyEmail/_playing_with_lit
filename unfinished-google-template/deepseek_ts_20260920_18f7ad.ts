import type { GoogleEmailData } from '../../templates/google/types.js';

export const googleShipmentData: GoogleEmailData = {
  preheader: 'Your Google Store order has shipped.',

  greeting: 'Hi Smiles Davis,',
  intro: 'Your shipment was just dropped off. Go on. Open it and enjoy.',

  order: {
    number: 'SMLS.6500-5000-0050',
    orderedAt: 'Oct 24, 2019, 02:59 PM',
    orderedFrom: [
      'Google LLC',
      '1600