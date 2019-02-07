import { UserRxStore } from './user.rx-store';
import { UserQueries } from '@app/shared/business-models/user/user-queries.interface';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable()
export class UserRxQueries implements UserQueries {
  public readonly users$ = this.store.state$.pipe(
    map( state => state.users )
  );

  constructor(protected store: UserRxStore) { }
}
