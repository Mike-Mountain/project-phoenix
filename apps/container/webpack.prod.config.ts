import { withModuleFederation } from '@nx/angular/module-federation';
import config from './module-federation.config';

export default withModuleFederation({
  ...config,
  /*
   * Remote overrides for production.
   * Each entry is a pair of a unique name and the URL where it is deployed.
   */
  remotes: [
    ['resume', 'http://172.18.0.7:80'],
    ['budgets', 'http://172.18.0.3:80'],
    ['code-master', 'http://172.18.0.9:80'],
    ['gallery', 'http://172.18.0.8:80'],
    ['movies', 'http://172.18.0.6:80'],
    ['groups', 'http://172.18.0.5:80'],
  ]
});
