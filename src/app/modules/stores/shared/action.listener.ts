import { Observable } from 'rxjs';
import { Action } from '@app/shared/interfaces/action.interface';
import { filter } from 'rxjs/operators';
import { CommandDispatcher } from '@app/shared/interfaces/command-dispatcher.interface';

export class ActionListener {
  constructor(
    protected actions$: Observable<Action>
  ) {}

  public registerHandlers(actionHandlers: Object) {
    this.actions$.pipe(
      filter( action => actionHandlers[action.type])
    ).subscribe( action => actionHandlers[action.type](action) );
  }

}
