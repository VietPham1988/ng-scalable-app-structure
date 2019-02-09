import { Store, Actions } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AppQueries } from 'app/modules/core/business-models/app/app-queries.interface';
import { BaseNgrxSelector as BaseNgxsSelector } from 'app/modules/core/stores/ngrx-store';
import { AppActionNames } from 'app/modules/core/business-models/app';

@Injectable()
export class AppNgxsSelectors extends BaseNgxsSelector implements AppQueries {
  // @Select(NgxsAppState.token$) token$: Observable<string>;
  token$: Observable<string>;
  constructor(
    protected store: Store,
    protected actions: Actions
  ) {
    super(actions, AppActionNames.ACTION_SUCCESS, AppActionNames.ACTION_FAILED);
    this.token$ = this.store.select(x => x.app.token);
  }
}
