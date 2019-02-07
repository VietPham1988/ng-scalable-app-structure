import { AppRxStore } from './app.rx-store';
import { AppQueries } from '@app/shared/business-models/app/app-queries.interface';
import { map } from 'rxjs/operators';

export class AppRxQueries implements AppQueries {
  public readonly token$ = this.store.state$.pipe(
    map( state => state.token)
  );
  constructor(protected store: AppRxStore) {}
}
