import { Store, Actions } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { CommandDispatcher } from '@app/modules/core/interfaces/command-dispatcher.interface';
import { Action } from '@app/modules/core/interfaces/action.interface';
import { BaseDispatcher } from '@app/modules/core/business-models/shared/base.dispatcher';

@Injectable()
export class NgxsDispatcher extends BaseDispatcher implements CommandDispatcher {
  public readonly actions$ = this.actions as Observable<Action>;
  public fire = (action: Action) => this.store.dispatch(action);

  constructor(
    private store: Store,
    private actions: Actions
  ) { super(); }
}
