import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { CommandDispatcher, BaseDispatcher } from 'app/modules/shared/dispatchers';

@Injectable()
export class AkDispatcher extends BaseDispatcher implements CommandDispatcher {
  private readonly actionStream$ = new Subject<Action>();
  constructor() { super(); }

  public readonly actions$ = this.actionStream$;
  public fire = (action: Action) => this.actionStream$.next(action);
}
