import { withModuleFederation } from '@nx/angular/module-federation';
import config from './module-federation.config';

export default withModuleFederation({
  ...config,
  /*
   * Remote overrides for production.
   * Each entry is a pair of a unique name and the URL where it is deployed.
   */
  remotes: [
    ['resume', 'https://phoenix-resume.firebaseapp.com'],
    ['budgets', 'https://phoenix-budgets.firebaseapp.com'],
    ['code-master', 'https://phoenix-code-master.firebaseapp.com'],
    ['gallery', 'https://phoenix-gallery.firebaseapp.com'],
    ['movies', 'https://phoenix-movie-app.firebaseapp.com'],
  ]
});
