import { filter } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { GetType, Action, BaseSuccessAction, BaseFailedAction, GetSubType } from 'app/modules/core/interfaces/action.interface';
import { CommandDispatcher } from 'app/modules/core/interfaces';

export abstract class BaseDispatcher implements CommandDispatcher {
  constructor( ) { }

  abstract actions$: Observable<Action>;
  abstract fire: any;

  public readonly actionOfSubType$ = ( typeName: string, subTypeNames: string[] ) =>
    this.actions$.pipe(
      filter( action => GetType(action) === typeName ),
      filter( action => subTypeNames.includes(GetSubType(action)) )
    )
}

