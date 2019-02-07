import { Query } from '@datorama/akita';
import { AppState } from '@app/modules/core/business-models/app/app.state-model';
import { AppQueries } from '@app/modules/core/business-models/app/app-queries.interface';
import { AppAkStore } from '@app/modules/core/stores/akita-store/app.ak-store';

export class AppAkQueries extends Query<AppState> implements AppQueries {
  token$ = this.select(state => state.token);

  constructor(protected store: AppAkStore) {
    super(store);
  }
}
