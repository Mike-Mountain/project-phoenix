import { withModuleFederation } from '@nx/angular/module-federation';
import config from './module-federation.config';

export default withModuleFederation({
  ...config,
  /*
   * Remote overrides for production.
   * Each entry is a pair of a unique name and the URL where it is deployed.
   */
  remotes: [
    ['resume', 'https://resume.honeystonemountain.com'],
    ['budgets', 'https://budgets.honeystonemountain.com'],
    ['code-master', 'https://code-master.honeystonemountain.com'],
    ['gallery', 'https://gallery.honeystonemountain.com'],
    ['movies', 'https://movies.honeystonemountain.com'],
    ['groups', 'https://groups.honeystonemountain.com'],
  ]
});
