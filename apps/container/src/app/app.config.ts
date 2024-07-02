import { APP_INITIALIZER, ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import {
  ConfigService,
  headerInterceptor,
  setupAppConfigServiceFactory
} from '@project-phoenix/shared/shared-data-access';
import { responseInterceptor } from '@project-phoenix/shared/shared-data-access';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes),
    provideAnimationsAsync(),
    provideHttpClient(withInterceptors([responseInterceptor, headerInterceptor])),
    {
      provide: APP_INITIALIZER,
      useFactory: setupAppConfigServiceFactory,
      deps: [ConfigService],
      multi: true
    }
  ]
};
