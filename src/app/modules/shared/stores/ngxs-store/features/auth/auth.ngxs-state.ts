import { State, Action, StateContext, Selector } from '@ngxs/store';
import { UserState, initUserState } from 'app/modules/shared/business-models/user/user.state-model';
import { ModuleNameEnum } from 'app/modules/shared/enums/module-name.enum';
import { GetUsersAction } from 'app/modules/shared/business-models/user/user.actions';
import { UserAsyncService } from 'app/modules/shared/business-models/user/user.async-service';
import { AuthState, AuthAsyncService, LoginAction, AuthFailedAction, AuthActionNames } from 'app/modules/shared/business-models/auth';
import { SaveJwtAction } from 'app/modules/shared/business-models/app';
import { CommandDispatcher } from 'app/modules/shared/dispatchers';

@State<AuthState>({
  name: ModuleNameEnum.Auth,
  defaults: initUserState()
})
export class AuthNgxsState {

  constructor(
    private dispatcher: CommandDispatcher,
    private authService: AuthAsyncService
  ) { }

  @Selector()
  static state$(state: AuthState) {
    return state;
  }

  @Action(LoginAction)
  get(action: LoginAction) {
    this.authService.login(action.payload)
      .subscribe( token => {
        const newAction = token.length
          ? new SaveJwtAction(token)
          : new AuthFailedAction(AuthActionNames.LOGIN, 'Login failed!');
        this.dispatcher.fire(newAction);
      });
  }
}
