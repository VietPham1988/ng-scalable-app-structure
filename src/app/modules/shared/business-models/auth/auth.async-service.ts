import { LoginCredentials } from 'app/modules/shared/business-models/auth/login-credentials.model';
import { Observable } from 'rxjs';

export abstract class AuthAsyncService {
  abstract login(loginCreds: LoginCredentials): Observable<string>;
}
