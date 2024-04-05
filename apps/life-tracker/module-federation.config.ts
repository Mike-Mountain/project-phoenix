import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'life-tracker',
  exposes: {
    './Routes': 'apps/life-tracker/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
