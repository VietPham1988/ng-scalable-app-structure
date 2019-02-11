import { Dictionary } from 'extension';
import { Injectable } from '@angular/core';
import { BaseRxStore } from 'app/modules/shared/stores/rxjs-store/base.rx-store';
import { UserState, initUserState } from 'app/modules/shared/business-models/user/user.state-model';
import { CommandDispatcher } from 'app/modules/shared/dispatchers';
import { UserActionNames, GetUsersAction, UserSuccessAction, UserFailedAction } from 'app/modules/shared/business-models/user/user.actions';
import { AutoUnsubscriber } from 'app/modules/shared/safe-unsubscriber';
import { tap } from 'rxjs/operators';
import { UserAsyncService } from 'app/modules/shared/business-models/user/user.async-service';

@AutoUnsubscriber()
@Injectable()
export class UserRxStore extends BaseRxStore<UserState> {
  constructor(
    protected dispatcher: CommandDispatcher,
    private userService: UserAsyncService
  ) {
    super( dispatcher, initUserState() );
    this.registerHandlers(this.getActionHandlers());
  }

  getActionHandlers(): Dictionary {
    const handlers = {};
    handlers[UserActionNames.GET_USERS] = (action) => this.getUsers(action);
    handlers[UserActionNames.ACTION_SUCCESS] = (action) => this.successFunction(action);
    handlers[UserActionNames.ACTION_FAILED] = (action) => this.failedFunction(action);
    return handlers;
  }

  getUsers(action: GetUsersAction) {
    this.userService.getUsers().pipe(
      tap( users => this.dispatcher.fire( new UserSuccessAction(UserActionNames.GET_USERS, users)) )
    ).subscribe( users =>
      this.setState({
        ...this.getState(),
        users: users as []
      })
    );
  }

  successFunction(successAction: UserSuccessAction) {
    console.log(successAction);
  }

  failedFunction(successAction: UserFailedAction) {
    console.log(successAction);
  }
}
