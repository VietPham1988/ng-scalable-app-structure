import { filter, tap } from 'rxjs/operators';
import { Dictionary } from 'extension';
import { BehaviorSubject } from 'rxjs';
import { Action, getType } from '@app/modules/core/interfaces/action.interface';
import { CommandDispatcher } from '@app/modules/core/interfaces/command-dispatcher.interface';

export abstract class BaseRxStore<T> {
  private state: T;
  public readonly state$: BehaviorSubject<T>;
  constructor(
    private dispatcher: CommandDispatcher,
    initialState: any
  ) {
    this.state = initialState;
    this.state$ = new BehaviorSubject<T>(this.state);
  }

  protected getState(): T {
    return this.state;
  }

  protected registerHandlers(actionHandlers: Dictionary) {
    this.dispatcher.actions$.pipe(
      filter( (action: Action) => actionHandlers[getType(action)])
    ).subscribe( action => actionHandlers[getType(action)](action) );
  }

  protected setState(newState: T) {
    this.state = newState;
    this.state$.next(this.state);
  }

  abstract getActionHandlers(): Dictionary;
}

