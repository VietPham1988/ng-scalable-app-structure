import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Actions } from '@ngrx/effects';
import { AppQueries } from 'app/modules/core/business-models/app/app-queries.interface';
import { BaseNgrxSelector } from 'app/modules/core/stores/ngrx-store/base.ngrx-selector';
import { AppActionNames } from 'app/modules/core/business-models/app';

@Injectable()
export class AppNgrxSelectors extends BaseNgrxSelector implements AppQueries {
  public token$: Observable<string>;
  constructor(
    protected store: Store<any>,
    protected actions: Actions
  ) {
    super(actions, AppActionNames.ACTION_SUCCESS, AppActionNames.ACTION_FAILED);
    this.token$ = this.store.select(x => x.app.token);
  }
}
