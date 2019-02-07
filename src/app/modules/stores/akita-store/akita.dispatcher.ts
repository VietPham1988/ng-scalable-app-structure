import { CommandDispatcher } from '@app/shared/interfaces/command-dispatcher.interface';
import { Action } from '@app/shared/interfaces/action.interface';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class AkDispatcher implements CommandDispatcher {
  private readonly actionStream$ = new Subject<Action>();
  constructor() {}

  public readonly actions$ = this.actionStream$;
  public fire = (action: Action) => this.actionStream$.next(action);
}
