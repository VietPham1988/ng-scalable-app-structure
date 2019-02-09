import { AppState, initAppState } from 'app/modules/core/business-models/app/app.state-model';
import { AppQueries } from 'app/modules/core/business-models/app/app-queries.interface';
import { AppAkStore } from 'app/modules/core/stores/akita-store/app.ak-store';
import { BaseAkQueries } from 'app/modules/core/stores/akita-store/base.ak-queries';
import { AppActionNames } from 'app/modules/core/business-models/app';
import { CommandDispatcher } from 'app/modules/shared/dispatchers';

export class AppAkQueries extends BaseAkQueries<AppState> implements AppQueries {
  token$ = this.select(state => state.token);

  constructor(
    protected dispatcher: CommandDispatcher,
    protected store: AppAkStore
  ) {
    super(
      store,
      dispatcher,
      AppActionNames.ACTION_SUCCESS,
      AppActionNames.ACTION_FAILED
    );
  }
}
