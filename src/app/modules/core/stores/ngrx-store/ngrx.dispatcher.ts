import { Store } from '@ngrx/store';
import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { Action } from '@app/modules/core/interfaces/action.interface';
import { Injectable } from '@angular/core';
import { CommandDispatcher } from '@app/modules/core/interfaces/command-dispatcher.interface';
import { AppState } from '@app/modules/core/business-models/app/app.state-model';

@Injectable()
export class NgrxDispatcher implements CommandDispatcher {
  constructor(
    private store: Store<AppState>,
    private actions: Actions
  ) {}
  public readonly actions$ = this.actions as Observable<Action>;
  public fire = (action: Action) => this.store.dispatch(action);
}
