import { Query } from '@datorama/akita';
import { Injectable } from '@angular/core';
import { UserState, UserQueries } from '@app/modules/core/business-models/user';
import { UserAkStore } from '@app/modules/core/stores/akita-store/features/user';

@Injectable()
export class UserAkQueries extends Query<UserState> implements UserQueries {
  users$ = this.select(state => state.users);

  constructor(protected store: UserAkStore) {
    super(store);
  }
}
