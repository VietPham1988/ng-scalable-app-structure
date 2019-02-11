import { Store, Select } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { AppQueries } from 'app/modules/shared/business-models/app/app-queries.interface';
import { Observable } from 'rxjs';
import { AppNgxsState } from 'app/modules/shared/stores/ngxs-store/app.ngxs-state';

@Injectable()
export class AppNgxsSelectors implements AppQueries {
  @Select(AppNgxsState.token$) token$: Observable<string>;
  // public readonly token$ = this.store.select(x => x.app.token);

  constructor(
    protected store: Store
  ) { }
}
