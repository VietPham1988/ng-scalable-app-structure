import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { createSelector, createFeatureSelector, Store } from '@ngrx/store';
import { UserState } from '@app/modules/core/business-models/user/user.state-model';
import { ModuleNameEnum } from '@app/modules/shared/enums/module-name.enum';
import { UserQueries } from '@app/modules/core/business-models/user/user-queries.interface';

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
