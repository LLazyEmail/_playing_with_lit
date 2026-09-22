// Side-effect imports: each file registers itself with `templateRegistry`.
// Import this module once (e.g. at the top of any script/CLI entry point)
// before calling `templateRegistry.get(...)`.
import './hackernoon/hackernoon.register.js';
import './nomoretogo/nomoretogo.register.js';
import './mailchimp/mailchimp.register.js';
import './zurb/zurb.register.js';
import './google/google.register.js';
