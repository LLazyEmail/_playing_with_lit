import { templateRegistry } from '../../rendering/template-registry.js';
import { ZurbRenderer } from './zurb.renderer.js';
import { ZurbValidator } from '../../validation/zurb.validator.js';
import { zurbData } from '../../scripts/content/zurb-data.js';

templateRegistry.register('zurb', {
  renderer: new ZurbRenderer(),
  validator: new ZurbValidator(),
  sampleData: zurbData,
});
