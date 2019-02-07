import { State, Action, StateContext, Selector } from '@ngxs/store';
import { UserState, initUserState } from '@app/modules/core/business-models/user/user.state-model';
import { ModuleNameEnum } from '@app/modules/shared/enums/module-name.enum';
import { UserAsyncService } from '@app/modules/core/async-services/user.async-service';
import { GetUsersAction } from '@app/modules/core/business-models/user/user.actions';

@State<UserState>({
  name: ModuleNameEnum.User,
  defaults: initUserState()
})
export class NgxsUserState {

  constructor(private userService: UserAsyncService) { }

  @Selector()
  static state$(state: UserState) {
    return state;
  }

  @Selector()
  static users$(state: UserState) {
    return state.users;
  }

  @Action(GetUsersAction)
  get({ getState, setState }: StateContext<UserState>, action: GetUsersAction) {
    const state = getState();
    this.userService.getUsers().subscribe( users => {
      setState({
        ...state,
        users: users as []
      });
    });
  }
}
