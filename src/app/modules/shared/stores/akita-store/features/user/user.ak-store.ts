import { StoreConfig } from '@datorama/akita';
import { Dictionary } from 'extension';
import { ModuleNameEnum } from 'app/modules/shared/enums/module-name.enum';
import { BaseAkStore } from 'app/modules/shared/stores/akita-store/base.ak-store';
import { UserState, initUserState } from 'app/modules/shared/business-models/user/user.state-model';
import { UserActionNames, GetUsersAction, UserSuccessAction, UserFailedAction } from 'app/modules/shared/business-models/user/user.actions';
import { CommandDispatcher } from 'app/modules/shared/dispatchers';
import { UserAsyncService } from 'app/modules/shared/business-models/user/user.async-service';

@StoreConfig({ name: ModuleNameEnum.User })
export class UserAkStore extends BaseAkStore<UserState> {
  constructor(
    dispatcher: CommandDispatcher,
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
    this.userService.getUsers().subscribe( (users: []) => {
      this.update({ users: users });
    });
  }

  successFunction(successAction: UserSuccessAction) {
    console.log(successAction);
  }

  failedFunction(successAction: UserFailedAction) {
    console.log(successAction);
  }
}
