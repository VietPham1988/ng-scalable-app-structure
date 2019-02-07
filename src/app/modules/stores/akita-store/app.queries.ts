import { Query } from '@datorama/akita';
import { AppState } from '../shared/state-models/app.state-model';
import { AppAkStore } from './app.ak-store';
import { AppQueries } from '@app/shared/business-models/app/app-queries.interface';

export class AppAkQueries extends Query<AppState> implements AppQueries {
  token$ = this.select(state => state.token);

  constructor(protected store: AppAkStore) {
    super(store);
  }
}
