import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'nx run movies:serve:development',
        production: 'nx run movies:serve:production',
      },
      ciWebServerCommand: 'nx run movies:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
