import { State, Action, StateContext, Selector } from '@ngxs/store';
import { ModuleNameEnum } from '@app/shared/enums/module-name.enum';
import { UserService } from '@app/shared/services/user.service';
import { UserState, initUserState } from '@app/modules/stores/shared/state-models/user.state-model';
import { GetUsersAction } from '@app/modules/stores/shared/actions/user.actions';

@State<UserState>({
  name: ModuleNameEnum.User,
  defaults: initUserState()
})
export class NgxsUserState {

  constructor(private userService: UserService) { }

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
