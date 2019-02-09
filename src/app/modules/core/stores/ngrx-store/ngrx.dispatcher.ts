import { Store } from '@ngrx/store';
import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { Action } from 'app/modules/core/interfaces/action.interface';
import { Injectable } from '@angular/core';
import { CommandDispatcher } from 'app/modules/core/interfaces/command-dispatcher.interface';
import { AppState } from 'app/modules/core/business-models/app/app.state-model';
import { BaseDispatcher } from 'app/modules/core/business-models/shared/base.dispatcher';

@Injectable()
export class NgrxDispatcher extends BaseDispatcher implements CommandDispatcher {
  constructor(
    private store: Store<AppState>,
    private actions: Actions
  ) { super(); }

  public readonly actions$ = this.actions as Observable<Action>;
  public fire = (action: Action) => this.store.dispatch(action);
}
