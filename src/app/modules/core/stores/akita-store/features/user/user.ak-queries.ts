import { Injectable } from '@angular/core';
import { UserState, UserQueries, initUserState, UserActionNames } from 'app/modules/core/business-models/user';
import { UserAkStore } from 'app/modules/core/stores/akita-store/features/user';
import { CommandDispatcher } from 'app/modules/core/interfaces';
import { BaseAkQueries } from 'app/modules/core/stores/akita-store/base.ak-queries';

@Injectable()
export class UserAkQueries extends BaseAkQueries<UserState> implements UserQueries {
  users$ = this.select(state => state.users);

  constructor(
    protected dispatcher: CommandDispatcher,
    protected store: UserAkStore
  ) {
    super(
      store,
      dispatcher,
      UserActionNames.ACTION_SUCCESS,
      UserActionNames.ACTION_FAILED
    );
  }
}
