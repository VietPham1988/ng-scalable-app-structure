import { AppState, initAppState } from 'app/modules/shared/business-models/app/app.state-model';
import { AppQueries } from 'app/modules/shared/business-models/app/app-queries.interface';
import { AppAkStore } from 'app/modules/shared/stores/akita-store/app.ak-store';
import { BaseAkQueries } from 'app/modules/shared/stores/akita-store/base.ak-queries';
import { CommandDispatcher } from 'app/modules/shared/dispatchers';

export class AppAkQueries extends BaseAkQueries<AppState> implements AppQueries {
  public readonly token$ = this.select(state => state.token);

  constructor(
    protected dispatcher: CommandDispatcher,
    protected store: AppAkStore
  ) {
    super( store, dispatcher );
  }
}
