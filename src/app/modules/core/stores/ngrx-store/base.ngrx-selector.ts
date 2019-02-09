import { ofType, Actions } from '@ngrx/effects';
import { filter } from 'rxjs/operators';
import { BaseSuccessAction, BaseFailedAction } from '@app/modules/core/interfaces/action.interface';

export class BaseNgrxSelector {
  constructor(
    protected actions: Actions,
    protected actionSuccessType: string,
    protected actionFailedType: string
  ) { }

  public actionSuccessOfSubtype$ = (typeNames: string[]) =>
    this.actions.pipe(
      ofType(this.actionSuccessType),
      filter( ( a: BaseSuccessAction) => typeNames.includes(a.subType) )
    )

  public actionFailedOfSubtype$ = (typeNames: string[]) =>
    this.actions.pipe(
      ofType( this.actionFailedType ),
      filter( (a: BaseFailedAction) => typeNames.includes(a.subType) )
    )
}
