import { Store, Actions } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { CommandDispatcher } from '@app/modules/core/interfaces/command-dispatcher.interface';
import { Action } from '@app/modules/core/interfaces/action.interface';

@Injectable()
export class NgxsDispatcher implements CommandDispatcher {
  constructor(
    private store: Store,
    private actions: Actions
  ) {}
  public readonly actions$ = this.actions as Observable<Action>;
  public fire = (action: Action) => this.store.dispatch(action);
}
