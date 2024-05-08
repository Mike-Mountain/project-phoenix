import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'gallery',
  exposes: {
    './Routes': 'apps/gallery/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
