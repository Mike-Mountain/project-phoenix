import { withModuleFederation } from '@nx/angular/module-federation';
import config from './module-federation.config';

export default withModuleFederation({
  ...config,
  /*
   * Remote overrides for production.
   * Each entry is a pair of a unique name and the URL where it is deployed.
   */
  remotes: [
    ['resume', 'http://resume:80'],
    ['budgets', 'http://budgets:80'],
    ['code-master', 'http://code-master:80'],
    ['gallery', 'http://gallery:80'],
    ['movies', 'http://movies:80'],
    ['groups', 'http://groups:80'],
  ]
});
