import { Injectable, Inject } from '@angular/core';
import { CommandDispatcher } from 'app/modules/shared/dispatchers';
import { AutoUnsubscriber } from 'app/modules/shared/safe-unsubscriber';
import { AuthState, AuthQueries } from 'app/modules/shared/business-models/auth';
import { BaseAkQueries, AppAkQueries } from 'app/modules/shared/stores/akita-store';
import { AuthAkStore } from 'app/modules/shared/stores/akita-store/features/auth';

@AutoUnsubscriber()
@Injectable()
export class AuthAkQueries extends BaseAkQueries<AuthState> implements AuthQueries {
  public readonly token$ = this.appQueries.token$;

  constructor(
    protected dispatcher: CommandDispatcher,
    protected store: AuthAkStore,
    private appQueries: AppAkQueries,
  ) {
    super( store, dispatcher );
  }
}
