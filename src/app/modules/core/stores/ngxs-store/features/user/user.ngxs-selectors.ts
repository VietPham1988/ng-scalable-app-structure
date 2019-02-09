import { Select, Actions } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { UserNgxsState } from './user.ngxs-state';
import { UserQueries } from 'app/modules/core/business-models/user/user-queries.interface';
import { BaseNgrxSelector as BaseNgxsSelector } from 'app/modules/core/stores/ngrx-store';
import { UserActionNames } from 'app/modules/core/business-models/user';

@Injectable()
export class UserNgxsSelectors extends BaseNgxsSelector implements UserQueries {
  @Select(UserNgxsState.users$) users$: Observable<any[]>;

  constructor(protected actions: Actions) {
    super(
      actions,
      UserActionNames.ACTION_SUCCESS,
      UserActionNames.ACTION_FAILED
    );
  }
}
