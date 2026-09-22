import { templateRegistry } from '../../rendering/template-registry.js';
import { HackernoonRenderer } from './hackernoon.renderer.js';
import { HackernoonValidator } from '../../validation/hackernoon.validator.js';
import { hackernoonData } from '../../scripts/content/hackernoon-data.js';

templateRegistry.register('hackernoon', {
  renderer: new HackernoonRenderer(),
  validator: new HackernoonValidator(),
  sampleData: hackernoonData,
});
