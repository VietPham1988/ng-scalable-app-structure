import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Actions } from '@ngrx/effects';
import { AppQueries } from 'app/modules/shared/business-models/app/app-queries.interface';
import { AppActionNames } from 'app/modules/shared/business-models/app';

@Injectable()
export class AppNgrxSelectors implements AppQueries {
  public readonly token$ = this.store.select(x => x.app.token);

  constructor(
    protected store: Store<any>
  ) { }
}
