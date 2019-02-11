import { Injectable } from '@angular/core';
import { CommandDispatcher } from 'app/modules/shared/dispatchers';
import { LoginCredentials } from 'app/modules/shared/business-models/auth/login-credentials.model';
import { LoginAction, AuthActionNames, AuthFailedAction, AuthSuccessAction } from 'app/modules/shared/business-models/auth/auth.actions';
import { AuthQueries } from 'app/modules/shared/business-models/auth/auth-queries.interface';
import { BehaviorSubject } from 'rxjs';
import { AutoUnsubscriber, Unsubscriber } from 'app/modules/shared/safe-unsubscriber';

@Injectable()
@AutoUnsubscriber()
export class AuthBizModel {
  private unsubscriber = new Unsubscriber();
  constructor(
    private queries: AuthQueries,
    private dispatcher: CommandDispatcher
  ) {
    this.unsubscriber.safeSubscriptions([
      this.dispatcher
        .actionOfSubType$(
          AuthActionNames.ACTION_FAILED,
          [AuthActionNames.LOGIN]
        ).subscribe((act: AuthFailedAction) => this.loginErrorMsg$.next(act.payload as string)),
      this.dispatcher
        .actionOfSubType$(
          AuthActionNames.ACTION_SUCCESS,
          [AuthActionNames.LOGIN]
        ).subscribe( (act: AuthSuccessAction) => this.loginErrorMsg$.next(''))
    ]);
  }

  public readonly token$ = this.queries.token$;
  public readonly loginErrorMsg$ = new BehaviorSubject<string>('');

  login(loginCreds: LoginCredentials): void {
    this.dispatcher.fire(new LoginAction(loginCreds));
  }
}
