import { Store } from '@datorama/akita';
import { filter } from 'rxjs/operators';
import { Dictionary } from 'extension';
import { CommandDispatcher } from 'app/modules/shared/dispatchers';
import { Action, GetType } from 'app/modules/core/stores/action.interface';

export abstract class BaseAkStore<T> extends Store<T> {
  constructor( private dispatcher: CommandDispatcher, initialState: any) {
    super(initialState);
  }

  protected registerHandlers(actionHandlers: Dictionary) {
    this.dispatcher.actions$.pipe(
      filter( (action: Action) => actionHandlers[GetType(action)])
    ).subscribe( action => actionHandlers[GetType(action)](action) );
  }

  abstract getActionHandlers(): Dictionary;
}

