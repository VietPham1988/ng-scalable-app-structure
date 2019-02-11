import { EnvService } from 'app/modules/shared/environement-service/env.service';
import * as environments from 'assets/environments/environments.json';

export const EnvServiceFactory = () => {
  // Create env
  const env = new EnvService();
  // I have no idea why the json content is wrapped in 'default' property :D
  const envVariables = environments['default'];
  // Overide default environment variables
  Object.keys(envVariables)
    .forEach( field => {
      env[field] = envVariables[field];
    });

  return env;
};

export const EnvServiceProvider = {
  provide: EnvService,
  useFactory: EnvServiceFactory
};
