import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { CommandDispatcher } from '@app/modules/core/interfaces/command-dispatcher.interface';
import { Action } from '@ngrx/store';
import { BaseDispatcher } from '@app/modules/core/business-models/shared/base.dispatcher';

@Injectable()
export class AkDispatcher extends BaseDispatcher implements CommandDispatcher {
  private readonly actionStream$ = new Subject<Action>();
  constructor() { super(); }

  public readonly actions$ = this.actionStream$;
  public fire = (action: Action) => this.actionStream$.next(action);
}
