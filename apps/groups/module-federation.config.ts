import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'groups',
  exposes: {
    './Routes': 'apps/groups/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
