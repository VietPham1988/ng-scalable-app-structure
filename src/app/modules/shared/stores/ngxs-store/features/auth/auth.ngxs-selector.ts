import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { createFeatureSelector, Store } from '@ngrx/store';
import { ModuleNameEnum } from 'app/modules/shared/enums/module-name.enum';
import { AuthState, AuthQueries } from 'app/modules/shared/business-models/auth';
import { AppNgxsSelectors, AppNgxsState } from 'app/modules/shared/stores/ngxs-store';
import { Select } from '@ngxs/store';

const getAuthState = createFeatureSelector<AuthState>(
  ModuleNameEnum.Auth
);

@Injectable()
export class AuthNgxsSelectors implements AuthQueries {
  @Select(AppNgxsState.token$) token$: Observable<string>;

  constructor() { }
}
