import { inject, Injectable } from '@angular/core';
import { ApplicationConfig } from '@project-phoenix/config';

export function setupAppConfigServiceFactory(service: ConfigService) {
  return () => service.loadConfig();
}


@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  public config: ApplicationConfig | undefined;

  public loadConfig(defaults?: Partial<ApplicationConfig>): Promise<ApplicationConfig> {
    return new Promise<ApplicationConfig>(resolve => {
      import('config/dev.config').then((response) => {
        this.config = Object.assign({}, response.config) as ApplicationConfig;
        resolve(this.config);
      });
    });
  }
}
