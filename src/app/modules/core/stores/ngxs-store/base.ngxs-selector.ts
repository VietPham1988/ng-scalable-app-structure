import { Actions } from '@ngxs/store';
import { filter } from 'rxjs/operators';
import { BaseSuccessAction, BaseFailedAction, GetType } from '@app/modules/core/interfaces/action.interface';

export class BaseNgxsSelector {
  constructor(
    protected actions: Actions,
    protected actionSuccessType: string,
    protected actionFailedType: string
  ) { }

  public actionSuccessOfSubtype$ = (typeNames: string[]) =>
    this.actions.pipe(
      filter( action => GetType(action) === this.actionSuccessType ),
      filter( ( a: BaseSuccessAction) => typeNames.includes(a.subType) )
    )

  public actionFailedOfSubtype$ = (typeNames: string[]) =>
    this.actions.pipe(
      filter( action => GetType(action) === this.actionFailedType ),
      filter( (a: BaseFailedAction) => typeNames.includes(a.subType) )
    )
}
