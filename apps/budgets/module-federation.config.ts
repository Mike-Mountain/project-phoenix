import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'budgets',
  exposes: {
    './Routes': 'apps/budgets/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
