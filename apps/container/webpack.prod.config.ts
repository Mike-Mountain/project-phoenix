import { withModuleFederation } from '@nx/angular/module-federation';
import config from './module-federation.config';

export default withModuleFederation({
  ...config,
  /*
   * Remote overrides for production.
   * Each entry is a pair of a unique name and the URL where it is deployed.
   */
  remotes: [
    ['resume', 'https://resume'],
    ['budgets', 'https://budgets'],
    ['code-master', 'https://code-master'],
    ['gallery', 'https://gallery'],
    ['movies', 'https://movies'],
    ['groups', 'https://groups'],
  ]
});
