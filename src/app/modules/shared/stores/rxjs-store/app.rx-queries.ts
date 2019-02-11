import { map } from 'rxjs/operators';
import { AppQueries } from 'app/modules/shared/business-models/app/app-queries.interface';
import { AppRxStore } from 'app/modules/shared/stores/rxjs-store/app.rx-store';
import { CommandDispatcher } from 'app/modules/shared/dispatchers';
import { Injectable } from '@angular/core';

@Injectable()
export class AppRxQueries implements AppQueries {
  public readonly token$ = this.store.state$.pipe(
    map( state => state.token)
  );
  constructor(
    protected dispatcher: CommandDispatcher,
    protected store: AppRxStore
  ) { }
}
