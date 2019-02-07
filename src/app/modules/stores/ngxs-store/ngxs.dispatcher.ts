import { Store, Actions } from '@ngxs/store';
import { Action } from '@app/shared/interfaces/action.interface';
import { CommandDispatcher } from '@app/shared/interfaces/command-dispatcher.interface';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class NgxsDispatcher implements CommandDispatcher {
  constructor(
    private store: Store,
    private actions: Actions
  ) {}
  public readonly actions$ = this.actions as Observable<Action>;
  public fire = (action: Action) => this.store.dispatch(action);
}
