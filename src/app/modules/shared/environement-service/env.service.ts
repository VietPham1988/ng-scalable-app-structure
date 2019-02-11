import { environment } from 'environments/environment';

export class EnvService {
  public readonly apiUrl = environment.apiUrl;
  public readonly production = environment.production;
  constructor() { }
}
