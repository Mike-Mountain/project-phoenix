import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'movies',
  exposes: {
    './Routes': 'apps/movies/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
