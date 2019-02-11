import { State, Action, StateContext, Selector } from '@ngxs/store';
import { UserState, initUserState } from 'app/modules/shared/business-models/user/user.state-model';
import { ModuleNameEnum } from 'app/modules/shared/enums/module-name.enum';
import { GetUsersAction } from 'app/modules/shared/business-models/user/user.actions';
import { UserAsyncService } from 'app/modules/shared/business-models/user/user.async-service';

@State<UserState>({
  name: ModuleNameEnum.User,
  defaults: initUserState()
})
export class UserNgxsState {
  constructor(private userService: UserAsyncService) { }

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
