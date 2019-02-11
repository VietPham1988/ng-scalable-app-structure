import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseHttpService } from 'app/modules/shared/http-services/base.http-service';
import { AuthAsyncService } from 'app/modules/shared/business-models/auth/auth.async-service';
import { EnvService } from 'app/modules/shared/environement-service/env.service';
import { LoginCredentials } from 'app/modules/shared/business-models/auth/login-credentials.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from 'app/modules/shared/business-models/user/user.model';
import { StringUtility } from 'app/modules/shared/utilities';

@Injectable()
export class AuthHttpService extends BaseHttpService implements AuthAsyncService {
  private authUrlSegments: string;
  constructor(
    httpClient: HttpClient,
    envService: EnvService,
    private stringUtils: StringUtility
  ) {
    super(httpClient, envService);
    this.authUrlSegments = 'users';
  }

  public login(loginCreds: LoginCredentials): Observable<string> {
    return this.get(this.authUrlSegments).pipe(
      map( (users: User[]) => {
        const user = users.find( u =>
          u.username.toUpperCase() === loginCreds.username.toUpperCase()
          &&
          u.password === loginCreds.password
        );
        return user ? this.stringUtils.generateRandom(11) : '';
      })
    );
  }
}
