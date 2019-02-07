import { UserState, initUserState } from '@app/modules/stores/shared/state-models/user.state-model';
import { CommandDispatcher } from '@app/shared/interfaces/command-dispatcher.interface';
import { UserActionNames, GetUsersAction, UserSuccessAction, UserFailedAction } from '@app/modules/stores/shared/actions/user.actions';
import { UserService } from '@app/shared/services/user.service';
import { Dictionary } from 'extension';
import { BaseRxStore } from '../../base.rx-store';
import { Injectable } from '@angular/core';

@Injectable()
export class UserRxStore extends BaseRxStore<UserState> {
  constructor(
    dispatcher: CommandDispatcher,
    private userService: UserService
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
    this.userService.getUsers().subscribe( users =>
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
