import { Observable } from 'rxjs';
import { Action } from 'app/modules/core/stores/action.interface';

export abstract class CommandDispatcher {
  abstract actions$: Observable<Action>;
  abstract fire(action: Action): void;
  abstract actionOfSubType$( typeName: string, subTypeNames: string[] ): Observable<Action>;
}
