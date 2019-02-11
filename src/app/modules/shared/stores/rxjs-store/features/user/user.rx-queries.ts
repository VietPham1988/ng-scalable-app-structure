import { Injectable, Inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { UserQueries } from 'app/modules/shared/business-models/user/user-queries.interface';
import { UserRxStore } from 'app/modules/shared/stores/rxjs-store/features/user/user.rx-store';
import { CommandDispatcher } from 'app/modules/shared/dispatchers';
import { AutoUnsubscriber } from 'app/modules/shared/safe-unsubscriber';

@AutoUnsubscriber()
@Injectable()
export class UserRxQueries implements UserQueries {
  public readonly users$ = this.store.state$.pipe(
    map( state => state.users )
  );

  constructor(
    protected dispatcher: CommandDispatcher,
    protected store: UserRxStore,
  ) {
  }
}
