import { Query } from '@datorama/akita';
import { UserAkStore } from './user.ak-store';
import { UserQueries } from '@app/shared/business-models/user/user-queries.interface';
import { UserState } from '@app/modules/stores/shared/state-models/user.state-model';
import { Injectable } from '@angular/core';

@Injectable()
export class UserAkQueries extends Query<UserState> implements UserQueries {
  users$ = this.select(state => state.users);

  constructor(protected store: UserAkStore) {
    super(store);
  }
}
