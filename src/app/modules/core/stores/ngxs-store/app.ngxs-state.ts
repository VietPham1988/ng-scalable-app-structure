import { State, Action, StateContext } from '@ngxs/store';
import { AppState, initAppState } from '@app/modules/core/business-models/app/app.state-model';
import { GoToLoginPageAction } from '@app/modules/core/business-models/app/app.actions';
import { ModuleNameEnum } from '@app/modules/shared/enums/module-name.enum';

@State<AppState>({
  name: ModuleNameEnum.App,
  defaults: initAppState()
})
export class AppNgxsState {
  // @Selector()
  // static token$(state: AppState) {
  //   return state.token;
  // }
  constructor() { }

  @Action(GoToLoginPageAction)
  get(ctx: StateContext<AppState>, action: GoToLoginPageAction) {
    //
  }
}
