import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { CommandDispatcher } from '@app/modules/core/interfaces/command-dispatcher.interface';
import { Action } from '@ngrx/store';

@Injectable()
export class AkDispatcher implements CommandDispatcher {
  private readonly actionStream$ = new Subject<Action>();
  constructor() {}

  public readonly actions$ = this.actionStream$;
  public fire = (action: Action) => this.actionStream$.next(action);
}
