import { Subject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Action } from 'app/modules/shared/stores/action.interface';
import { BaseDispatcher, CommandDispatcher } from 'app/modules/shared/dispatchers';

@Injectable()
export class RxDispatcher extends BaseDispatcher implements CommandDispatcher {
  private readonly actionStream$ = new Subject<Action>();
  constructor() { super(); }

  public readonly actions$ = this.actionStream$ as Observable<Action>;
  public readonly fire = (action: Action) => this.actionStream$.next(action);
}
