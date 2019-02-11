import { Store } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { AppQueries } from 'app/modules/shared/business-models/app/app-queries.interface';

@Injectable()
export class AppNgxsSelectors implements AppQueries {
  // @Select(NgxsAppState.token$) token$: Observable<string>;
  public readonly token$ = this.store.select(x => x.app.token);

  constructor(
    protected store: Store
  ) { }
}
