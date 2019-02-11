import { Observable } from 'rxjs';
import { Action } from 'app/modules/shared/stores/action.interface';

export abstract class CommandDispatcher {
  abstract actions$: Observable<Action>;
  abstract fire(action: Action): void;
  abstract actionOfSubType$( typeName: string, subTypeNames: string[] ): Observable<Action>;
}
