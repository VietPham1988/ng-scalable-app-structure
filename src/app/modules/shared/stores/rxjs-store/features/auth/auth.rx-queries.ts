import { Injectable } from '@angular/core';
import { CommandDispatcher } from 'app/modules/shared/dispatchers';
import { AutoUnsubscriber } from 'app/modules/shared/safe-unsubscriber';
import { AuthQueries } from 'app/modules/shared/business-models/auth/auth-queries.interface';
import { AuthRxStore } from 'app/modules/shared/stores/rxjs-store/features/auth/auth.rx-store';
import { AppQueries } from 'app/modules/shared/business-models/app';

@AutoUnsubscriber()
@Injectable()
export class AuthRxQueries implements AuthQueries {
  public readonly token$ = this.appStore.token$;

  constructor(
    protected dispatcher: CommandDispatcher,
    protected store: AuthRxStore,
    private appStore: AppQueries,
  ) {
  }
}
