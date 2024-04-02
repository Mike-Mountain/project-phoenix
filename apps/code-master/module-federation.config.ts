import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'code-master',
  exposes: {
    './Routes': 'apps/code-master/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
