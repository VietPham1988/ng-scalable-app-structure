import { Store } from '@ngrx/store';
import { CommandDispatcher } from '@app/shared/interfaces/command-dispatcher.interface';
import { Action } from '@app/shared/interfaces/action.interface';
import { Injectable } from '@angular/core';
import { AppState } from '../shared/state-models/app.state-model';
import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';

@Injectable()
export class NgrxDispatcher implements CommandDispatcher {
  constructor(
    private store: Store<AppState>,
    private actions: Actions
  ) {}
  public readonly actions$ = this.actions as Observable<Action>;
  public fire = (action: Action) => this.store.dispatch(action);
}
