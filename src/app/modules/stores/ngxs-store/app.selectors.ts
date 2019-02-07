import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { NgxsAppState } from './app.entity-state';
import { AppQueries } from '@app/shared/business-models/app/app-queries.interface';

@Injectable()
export class AppSelectors implements AppQueries {
  // @Select(NgxsAppState.token$) token$: Observable<string>;
  token$: Observable<string>;
  constructor(private store: Store) {
    this.token$ = this.store.select(state => state.token);
  }
}
