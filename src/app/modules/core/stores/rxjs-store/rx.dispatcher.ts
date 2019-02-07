import { Subject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Action } from '@app/modules/core/interfaces/action.interface';
import { CommandDispatcher } from '@app/modules/core/interfaces/command-dispatcher.interface';

@Injectable()
export class RxDispatcher implements CommandDispatcher {
  private readonly actionStream$ = new Subject<Action>();
  constructor() {}

  public readonly actions$ = this.actionStream$ as Observable<Action>;
  public fire = (action: Action) => this.actionStream$.next(action);
}
