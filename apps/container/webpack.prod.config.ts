import { withModuleFederation } from '@nx/angular/module-federation';
import config from './module-federation.config';

export default withModuleFederation({
  ...config,
  /*
   * Remote overrides for production.
   * Each entry is a pair of a unique name and the URL where it is deployed.
   */
  remotes: [
    ['resume', 'https://resume.honeystonemountain.com/remoteEntry.js'],
    ['budgets', 'https://budgets.honeystonemountain.com/remoteEntry.js'],
    ['code-master', 'https://code-master.honeystonemountain.com/remoteEntry.js'],
    ['gallery', 'https://gallery.honeystonemountain.com/remoteEntry.js'],
    ['movies', 'https://movies.honeystonemountain.com/remoteEntry.js'],
    ['groups', 'https://groups.honeystonemountain.com/remoteEntry.js'],
  ]
});
