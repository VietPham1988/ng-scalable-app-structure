import { filter } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { CommandDispatcher } from 'app/modules/shared/dispatchers';
import { Action, GetType, GetSubType } from 'app/modules/shared/stores/action.interface';

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

