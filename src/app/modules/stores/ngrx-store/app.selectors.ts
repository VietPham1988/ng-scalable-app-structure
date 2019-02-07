import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Actions } from '@ngrx/effects';
import { AppQueries } from '@app/shared/business-models/app/app-queries.interface';

@Injectable()
export class AppSelectors implements AppQueries {
  public token$: Observable<string>;
  constructor(
    private store: Store<any>,
    private appActions: Actions
  ) {
    this.token$ = this.store.select(x => x.app.token);
  }
}
