import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { NgxsUserState } from './user.entity-state';
import { UserQueries } from '@app/modules/core/business-models/user/user-queries.interface';

@Injectable()
export class UserSelectors implements UserQueries {
  @Select(NgxsUserState.users$) users$: Observable<any[]>;
  constructor() {}
}
