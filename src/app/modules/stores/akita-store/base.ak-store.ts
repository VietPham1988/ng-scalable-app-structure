import { Store } from '@datorama/akita';
import { Action, getType } from '@app/shared/interfaces/action.interface';
import { filter, tap } from 'rxjs/operators';
import { Dictionary } from 'extension';
import { CommandDispatcher } from '@app/shared/interfaces/command-dispatcher.interface';

export abstract class BaseAkStore<T> extends Store<T> {
  constructor( private dispatcher: CommandDispatcher, initialState: any) {
    super(initialState);
  }

  protected registerHandlers(actionHandlers: Dictionary) {
    this.dispatcher.actions$.pipe(
      filter( (action: Action) => actionHandlers[getType(action)])
    ).subscribe( action => actionHandlers[getType(action)](action) );
  }

  abstract getActionHandlers(): Dictionary;
}

