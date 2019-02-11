import { Injectable } from '@angular/core';
import { UserState, UserQueries, initUserState, UserActionNames } from 'app/modules/shared/business-models/user';
import { UserAkStore } from 'app/modules/shared/stores/akita-store/features/user';
import { BaseAkQueries } from 'app/modules/shared/stores/akita-store/base.ak-queries';
import { CommandDispatcher } from 'app/modules/shared/dispatchers';

@Injectable()
export class UserAkQueries extends BaseAkQueries<UserState> implements UserQueries {
  public readonly users$ = this.select(state => state.users);

  constructor(
    protected dispatcher: CommandDispatcher,
    protected store: UserAkStore
  ) {
    super( store, dispatcher );
  }
}
