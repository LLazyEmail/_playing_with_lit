import { templateRegistry } from '../../rendering/template-registry.js';
import { NomoretogoRenderer } from './nomoretogo.renderer.js';
import { NomoretogoValidator } from '../../validation/nomoretogo.validator.js';
import { nomoretogoData } from '../../scripts/content/nomoretogo-data.js';

templateRegistry.register('nomoretogo', {
  renderer: new NomoretogoRenderer(),
  validator: new NomoretogoValidator(),
  sampleData: nomoretogoData,
});
