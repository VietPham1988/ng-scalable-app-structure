import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { createSelector, createFeatureSelector, Store } from '@ngrx/store';
import { UserState } from 'app/modules/core/business-models/user/user.state-model';
import { ModuleNameEnum } from 'app/modules/shared/enums/module-name.enum';
import { UserQueries } from 'app/modules/core/business-models/user/user-queries.interface';
import { BaseNgrxSelector } from 'app/modules/core/stores/ngrx-store';
import { Actions } from '@ngrx/effects';
import { UserActionNames } from 'app/modules/core/business-models/user';

const getUserState = createFeatureSelector<UserState>(
  ModuleNameEnum.User
);

const getUsers = createSelector(
  getUserState,
  (state: UserState) => state.users
);

@Injectable()
export class UserNgrxSelectors extends BaseNgrxSelector implements UserQueries {
  public users$: Observable<[]>;
  constructor(
    private store: Store<any>,
    private userActions: Actions
  ) {
    super(userActions, UserActionNames.ACTION_SUCCESS, UserActionNames.ACTION_FAILED);
    this.users$ = this.store.select(getUsers);
  }
}
