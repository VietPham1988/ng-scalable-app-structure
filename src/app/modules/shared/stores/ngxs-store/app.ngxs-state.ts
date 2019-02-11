import { State, Action, StateContext, Selector } from '@ngxs/store';
import { AppState, initAppState } from 'app/modules/shared/business-models/app/app.state-model';
import { SaveJwtAction } from 'app/modules/shared/business-models/app/app.actions';
import { ModuleNameEnum } from 'app/modules/shared/enums/module-name.enum';

@State<AppState>({
  name: ModuleNameEnum.App,
  defaults: initAppState()
})
export class AppNgxsState {

  constructor() { }

  @Selector()
  static token$(state: AppState) {
    return state.token;
  }


  @Action(SaveJwtAction)
  get({ getState, setState }: StateContext<AppState>, action: SaveJwtAction) {
    setState({
      ...getState(),
      token: action.payload
    });
  }
}
