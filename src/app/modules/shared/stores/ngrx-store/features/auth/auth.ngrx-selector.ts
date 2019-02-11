import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { createFeatureSelector, Store } from '@ngrx/store';
import { ModuleNameEnum } from 'app/modules/shared/enums/module-name.enum';
import { AuthState, AuthQueries } from 'app/modules/shared/business-models/auth';
import { AppNgrxSelectors } from 'app/modules/shared/stores/ngrx-store/app.ngrx-selectors';

const getAuthState = createFeatureSelector<AuthState>(
  ModuleNameEnum.Auth
);

@Injectable()
export class AuthNgrxSelectors implements AuthQueries {
  public readonly token$ = this.appSelectors.token$;

  constructor(
    private store: Store<AuthState>,
    private appSelectors: AppNgrxSelectors
  ) { }
}
