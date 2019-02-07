import { ofType, Actions } from '@ngrx/effects';
import { map, filter } from 'rxjs/operators';
import { BaseSuccessAction, BaseFailedAction } from '@app/shared/interfaces/action.interface';

export class BaseSelector {
  constructor(
    protected actions: Actions,
    protected actionSuccessType: string,
    protected actionFailedType: string
  ) { }

  actionSuccessOfSubtype$ = (typeName: string) =>
    this.actions.pipe(
      ofType(this.actionSuccessType),
      map( action => action as BaseSuccessAction),
      filter(a => a.subType === typeName)
    )

  actionFailedOfSubtype$ = (typeName: string) =>
    this.actions.pipe(
      ofType( this.actionFailedType ),
      map( action => action as BaseFailedAction),
      filter(a => a.subType === typeName)
    )
}
