import { Query, Store } from '@datorama/akita';
import { filter } from 'rxjs/operators';
import { Dictionary } from 'extension';
import { CommandDispatcher } from 'app/modules/shared/dispatchers';
import { Action, GetType, BaseSuccessAction, BaseFailedAction } from 'app/modules/core/stores/action.interface';

export abstract class BaseAkQueries<T> extends Query<T> {
  constructor(
    protected store: Store<T>,
    protected dispatcher: CommandDispatcher,
    protected actionSuccessType: string,
    protected actionFailedType: string
  ) {
    super(store);
  }

  protected registerHandlers(actionHandlers: Dictionary) {
    this.dispatcher.actions$.pipe(
      filter( (action: Action) => actionHandlers[GetType(action)])
    ).subscribe( action => actionHandlers[GetType(action)](action) );
  }

  public actionSuccessOfSubtype$ = (typeNames: string[] ) =>
    this.dispatcher.actions$.pipe(
      filter( action => GetType(action) === this.actionSuccessType ),
      filter( (action: BaseSuccessAction) => typeNames.includes(action.subType) )
    )

  public actionFailedOfSubtype$ = (typeNames: string[] ) =>
    this.dispatcher.actions$.pipe(
      filter( action => GetType(action) === this.actionFailedType ),
      filter( (action: BaseFailedAction) => typeNames.includes(action.subType) )
    )
}

