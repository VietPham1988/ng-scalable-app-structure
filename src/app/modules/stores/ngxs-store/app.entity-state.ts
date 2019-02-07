import { State, Action, StateContext, Selector, Select } from '@ngxs/store';
import { AppState, initAppState } from '../shared/state-models/app.state-model';
import { GoToLoginPageAction } from '../shared/actions/app.actions';
import { Observable } from 'rxjs';

@State<AppState>({
  name: 'app',
  defaults: initAppState()
})
export class NgxsAppState {
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
