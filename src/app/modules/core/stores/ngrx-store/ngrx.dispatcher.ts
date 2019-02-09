import { Store } from '@ngrx/store';
import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { CommandDispatcher, BaseDispatcher } from 'app/modules/shared/dispatchers';
import { AppState } from 'app/modules/core/business-models/app/app.state-model';
import { Action } from 'app/modules/core/stores/action.interface';

@Injectable()
export class NgrxDispatcher extends BaseDispatcher implements CommandDispatcher {
  constructor(
    private store: Store<AppState>,
    private actions: Actions
  ) { super(); }

  public readonly actions$ = this.actions as Observable<Action>;
  public fire = (action: Action) => this.store.dispatch(action);
}
