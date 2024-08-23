import { withModuleFederation } from '@nx/angular/module-federation';
import config from './module-federation.config';

export default withModuleFederation({
  ...config,
  /*
   * Remote overrides for production.
   * Each entry is a pair of a unique name and the URL where it is deployed.
   */
  remotes: [
    ['resume', 'http://resume'],
    ['budgets', 'http://budgets'],
    ['code-master', 'http://code-master'],
    ['gallery', 'http://gallery'],
    ['movies', 'http://movies'],
    ['groups', 'http://groups'],
  ]
});
