import { Action, getType } from '@app/shared/interfaces/action.interface';
import { filter, tap } from 'rxjs/operators';
import { Dictionary } from 'extension';
import { CommandDispatcher } from '@app/shared/interfaces/command-dispatcher.interface';
import { BehaviorSubject } from 'rxjs';

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

