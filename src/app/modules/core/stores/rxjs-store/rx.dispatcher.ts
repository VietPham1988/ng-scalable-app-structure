import { Subject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Action } from '@app/modules/core/interfaces/action.interface';
import { CommandDispatcher } from '@app/modules/core/interfaces/command-dispatcher.interface';
import { BaseDispatcher } from '@app/modules/core/business-models/shared/base.dispatcher';

@Injectable()
export class RxDispatcher extends BaseDispatcher implements CommandDispatcher {
  private readonly actionStream$ = new Subject<Action>();
  constructor() { super(); }

  public readonly actions$ = this.actionStream$ as Observable<Action>;
  public readonly fire = (action: Action) => this.actionStream$.next(action);
}
