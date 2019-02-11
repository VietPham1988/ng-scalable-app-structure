import { Select, Actions } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { UserNgxsState } from './user.ngxs-state';
import { UserQueries } from 'app/modules/shared/business-models/user/user-queries.interface';

@Injectable()
export class UserNgxsSelectors implements UserQueries {
  @Select(UserNgxsState.users$) users$: Observable<any[]>;

  constructor() { }
}
