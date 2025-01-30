import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'archery',
  exposes: {
    './Routes': 'apps/archery/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
