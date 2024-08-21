import { withModuleFederation } from '@nx/angular/module-federation';
import config from './module-federation.config';

export default withModuleFederation({
  ...config,
  /*
   * Remote overrides for production.
   * Each entry is a pair of a unique name and the URL where it is deployed.
   */
  remotes: [
    ['resume', 'resume:80'],
    ['budgets', 'budgets:80'],
    ['code-master', 'code-master:80'],
    ['gallery', 'gallery:80'],
    ['movies', 'movies:80'],
    ['groups', 'groups:80'],
  ]
});
