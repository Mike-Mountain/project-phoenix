import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'resume',
  exposes: {
    './Routes': 'apps/resume/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
