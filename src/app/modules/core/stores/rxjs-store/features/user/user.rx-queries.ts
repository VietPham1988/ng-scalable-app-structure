import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { UserQueries } from '@app/modules/core/business-models/user/user-queries.interface';
import { UserRxStore } from '@app/modules/core/stores/rxjs-store/features/user/user.rx-store';

@Injectable()
export class UserRxQueries implements UserQueries {
  public readonly users$ = this.store.state$.pipe(
    map( state => state.users )
  );

  constructor(protected store: UserRxStore) { }
}
