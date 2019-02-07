import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { createSelector, createFeatureSelector, Store } from '@ngrx/store';
import { ModuleNameEnum } from '@app/shared/enums/module-name.enum';
import { UserQueries } from '@app/shared/business-models/user/user-queries.interface';
import { UserState } from '@app/modules/stores/shared/state-models/user.state-model';

const getUserState = createFeatureSelector<UserState>(
  ModuleNameEnum.User
);

const getUsers = createSelector(
  getUserState,
  (state: UserState) => state.users
);

@Injectable()
export class UserSelectors implements UserQueries {
  public users$: Observable<[]>;
  constructor(
    private store: Store<any>
  ) {
    this.users$ = this.store.select(getUsers);
  }
}
