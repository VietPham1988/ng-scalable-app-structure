import { Store } from '@datorama/akita';
import { filter } from 'rxjs/operators';
import { Dictionary } from 'extension';
import { CommandDispatcher } from '@app/modules/core/interfaces/command-dispatcher.interface';
import { getType, Action } from '@app/modules/core/interfaces/action.interface';

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

