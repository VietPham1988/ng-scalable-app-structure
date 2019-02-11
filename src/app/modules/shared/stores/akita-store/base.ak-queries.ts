import { Query, Store } from '@datorama/akita';
import { filter } from 'rxjs/operators';
import { Dictionary } from 'extension';
import { CommandDispatcher } from 'app/modules/shared/dispatchers';
import { Action, GetType } from 'app/modules/shared/stores/action.interface';

export abstract class BaseAkQueries<T> extends Query<T> {
  constructor(
    protected store: Store<T>,
    protected dispatcher: CommandDispatcher
  ) {
    super(store);
  }

  protected registerHandlers(actionHandlers: Dictionary) {
    this.dispatcher.actions$.pipe(
      filter( (action: Action) => actionHandlers[GetType(action)])
    ).subscribe( action => actionHandlers[GetType(action)](action) );
  }
}

