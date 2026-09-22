import { templateRegistry } from '../../rendering/template-registry.js';
import { GoogleRenderer } from './google.renderer.js';
import { GoogleValidator } from '../../validation/google.validator.js';
import { googleShipmentData } from '../../scripts/content/google-data.js';

templateRegistry.register('google', {
  renderer: new GoogleRenderer(),
  validator: new GoogleValidator(),
  sampleData: googleShipmentData,
});
