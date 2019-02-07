import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AppQueries } from '@app/modules/core/business-models/app/app-queries.interface';

@Injectable()
export class AppSelectors implements AppQueries {
  // @Select(NgxsAppState.token$) token$: Observable<string>;
  token$: Observable<string>;
  constructor(private store: Store) {
    this.token$ = this.store.select(state => state.token);
  }
}
