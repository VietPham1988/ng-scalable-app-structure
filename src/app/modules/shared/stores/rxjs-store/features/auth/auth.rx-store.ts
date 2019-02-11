import { Dictionary } from 'extension';
import { Injectable } from '@angular/core';
import { BaseRxStore } from 'app/modules/shared/stores/rxjs-store/base.rx-store';
import { UserState, initUserState } from 'app/modules/shared/business-models/user/user.state-model';
import { CommandDispatcher } from 'app/modules/shared/dispatchers';
import { UserActionNames, GetUsersAction, UserSuccessAction, UserFailedAction } from 'app/modules/shared/business-models/user/user.actions';
import { AutoUnsubscriber } from 'app/modules/shared/safe-unsubscriber';
import { AuthState, AuthAsyncService, AuthActionNames, LoginAction, AuthFailedAction, AuthSuccessAction } from 'app/modules/shared/business-models/auth';
import { SaveJwtAction } from 'app/modules/shared/business-models/app';
import { share, filter, tap } from 'rxjs/operators';

@AutoUnsubscriber()
@Injectable()
export class AuthRxStore extends BaseRxStore<AuthState> {
  constructor(
    protected dispatcher: CommandDispatcher,
    private authService: AuthAsyncService
  ) {
    super( dispatcher, initUserState() );
    this.registerHandlers(this.getActionHandlers());
  }

  getActionHandlers(): Dictionary {
    const handlers = {};
    handlers[AuthActionNames.LOGIN] = (action) => this.login(action);
    handlers[UserActionNames.ACTION_SUCCESS] = (action) => this.successFunction(action);
    handlers[UserActionNames.ACTION_FAILED] = (action) => this.failedFunction(action);
    return handlers;
  }

  login(action: LoginAction) {
    this.authService.login(action.payload).pipe(
      tap( token => !!token.length && this.dispatcher.fire(new SaveJwtAction(token)) )
    ).subscribe( token => {
      const act = !!token.length
        ? new AuthSuccessAction(AuthActionNames.LOGIN, token)
        : new AuthFailedAction(AuthActionNames.LOGIN, 'Login failed!');
      this.dispatcher.fire(act);
    });
  }

  successFunction(successAction: UserSuccessAction) {
    console.log(successAction);
  }

  failedFunction(failedAction: UserFailedAction) {
    console.log(failedAction);
  }
}
