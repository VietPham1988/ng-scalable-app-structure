import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { NgxsUserState } from './user.entity-state';
import { UserQueries } from '@app/shared/business-models/user/user-queries.interface';

@Injectable()
export class UserSelectors implements UserQueries {
  @Select(NgxsUserState.users$) users$: Observable<any[]>;
  constructor() {}
}
